import { getFirestore } from 'firebase-admin/firestore';
import { NextRequest, NextResponse } from 'next/server';
import initializeFirebase from 'services/firebase';
import { UserIp } from 'types/userIp';
import { DiscountSymbols } from 'utils/constants';

initializeFirebase();

const probabilityPerTry = [0.1, 0.2, 0.3, 0.4, 0.5];
const discountSymbols = {
  [DiscountSymbols.Chat]: {
    symbol: DiscountSymbols.Chat,
    discount: 'CHAT10',
    description: '10% off on all dragon type products',
  },
  [DiscountSymbols.Dragon]: {
    symbol: DiscountSymbols.Dragon,
    discount: 'DRAGON10',
    description: '10% off on all dragon type products',
  },
  [DiscountSymbols.Gameboy]: {
    symbol: DiscountSymbols.Gameboy,
    discount: 'GAMEBOY10',
    description: '10% off on all dragon type products',
  },
  [DiscountSymbols.Pho]: { symbol: DiscountSymbols.Pho, discount: 'PHO10' },
  [DiscountSymbols.Sinnoh1]: {
    symbol: DiscountSymbols.Sinnoh1,
    discount: 'SINNOH10',
    description: '10% off on all dragon type products',
  },
  [DiscountSymbols.Sinnoh2]: {
    symbol: DiscountSymbols.Sinnoh2,
    discount: 'NOHSIN10',
    description: '10% off on all dragon type products',
  },
  [DiscountSymbols.Vase]: {
    symbol: DiscountSymbols.Vase,
    discount: 'VASE10',
    description: '10% off on all dragon type products',
  },
};

function tryDiscount(numberOfTry: number) {
  const prob =
    probabilityPerTry[Math.min(numberOfTry, probabilityPerTry.length - 1)];
  const rand = Math.random();
  if (rand < prob) {
    const discount = Object.entries(discountSymbols);
    const index = Math.floor(Math.random() * discount.length);
    return discount[index][1];
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
  let userIp: UserIp;
  if (!doc.exists) {
    userIp = await setDocument(ip, { ip, numberOfTry: 1 });
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
    userIp = await setDocument(ip, {
      ip: userIp.id,
      numberOfTry: (userIp.numberOfTry || 0) + 1,
    });
  }

  const discount = tryDiscount(userIp.numberOfTry || 0);

  return NextResponse.json({
    discount,
  });
}
