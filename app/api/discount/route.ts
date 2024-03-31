import { getFirestore } from 'firebase-admin/firestore';
import { NextRequest, NextResponse } from 'next/server';
import initializeFirebase from 'services/firebase';
import shopify, { session } from 'services/shopify-server';
import { UserIp } from 'types/userIp';
import { DiscountSymbols } from 'utils/constants';

initializeFirebase();

const probabilityPerTry = [0.1, 0.15, 0.2, 0.25, 0.3];
const discountSymbols = {
  [DiscountSymbols.Chat]: {
    symbol: DiscountSymbols.Chat,
    description: '10% off your next order!',
  },
  [DiscountSymbols.Dragon]: {
    symbol: DiscountSymbols.Dragon,
    description: '10% off your next order!',
  },
  [DiscountSymbols.Gameboy]: {
    symbol: DiscountSymbols.Gameboy,
    description: '10% off your next order!',
  },
  [DiscountSymbols.Pho]: { symbol: DiscountSymbols.Pho, discount: 'PHO10' },
  [DiscountSymbols.Sinnoh1]: {
    symbol: DiscountSymbols.Sinnoh1,
    description: '10% off your next order!',
  },
  [DiscountSymbols.Sinnoh2]: {
    symbol: DiscountSymbols.Sinnoh2,
    description: '10% off your next order!',
  },
  [DiscountSymbols.Vase]: {
    symbol: DiscountSymbols.Vase,
    description: '10% off your next order!',
  },
};

function generateRandomCoupon() {
  const generatePart = () =>
    Math.random().toString(36).slice(2).substr(0, 4).toUpperCase();

  return `${generatePart()}-${generatePart()}-${generatePart()}`;
}

async function generateDiscount() {
  const price_rule = new shopify.rest.PriceRule({ session });
  price_rule.title = generateRandomCoupon();
  price_rule.target_type = 'line_item';
  price_rule.target_selection = 'all';
  price_rule.allocation_method = 'across';
  price_rule.value_type = 'percentage';
  price_rule.value = '-10.0';
  price_rule.customer_selection = 'all';
  price_rule.usage_limit = 1;
  price_rule.starts_at = new Date().toISOString();

  await price_rule.save({
    update: true,
  });

  return price_rule.title;
}

async function tryDiscount(numberOfTry: number) {
  const prob =
    probabilityPerTry[Math.min(numberOfTry, probabilityPerTry.length - 1)];
  const rand = Math.random();
  if (rand < prob) {
    const discount = Object.entries(discountSymbols);
    const index = Math.floor(Math.random() * discount.length);
    const discountCode = await generateDiscount();
    return { ...discount[index][1], discount: discountCode };
  }
  return null;
}

async function setDocument(id: string, data: Partial<UserIp> = {}) {
  const db = getFirestore();
  const userIpRef = db.collection('userIp').doc(data.ip);

  await userIpRef.set(
    {
      ...data,
      lastTry: new Date().toISOString(),
    },
    { merge: true },
  );

  const docRef = db.collection('userIp').doc(id);
  const doc = await docRef.get();

  return {
    id: doc.id,
    ...doc.data(),
  };
}

export async function POST(request: NextRequest) {
  let ip = request.ip || request.headers.get('X-Forwarded-For');
  if (!ip) return NextResponse.json({ error: 'No IP found' }, { status: 400 });
  ip = ip.split(',')[0];

  const db = getFirestore();
  const docRef = db.collection('userIp').doc(ip);
  const doc = await docRef.get();
  let userIp: Partial<UserIp>;
  if (!doc.exists) {
    userIp = { id: ip, ip, numberOfTry: 0 };
  } else {
    userIp = {
      id: doc.id,
      ...doc.data(),
    };
    if (userIp.lastTry) {
      const lastTry = new Date(userIp.lastTry);
      const now = new Date();
      const diff = now.getTime() - lastTry.getTime();
      if (diff < 1000 * 60 * 60 * 24)
        // 24 hours
        return NextResponse.json(
          { error: 'Too many requests' },
          { status: 429 },
        );
    }
    userIp = {
      ip: userIp.id,
      numberOfTry: (userIp.numberOfTry || 0) + 1,
    };
  }
  const discount = await tryDiscount(userIp.numberOfTry || 0);
  if (discount) userIp.numberOfTry = 0;
  await setDocument(ip, userIp);

  return NextResponse.json({
    discount,
  });
}
