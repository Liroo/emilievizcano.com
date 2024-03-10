import { getFirestore } from 'firebase-admin/firestore';
import { NextRequest, NextResponse } from 'next/server';
import initializeFirebase from 'services/firebase';
import { UserIp } from 'types/userIp';

initializeFirebase();

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
}

export async function POST(request: NextRequest) {
  let ip = request.ip || request.headers.get('X-Forwarded-For');
  if (!ip) return NextResponse.json({ error: 'No IP found' }, { status: 400 });
  ip = ip.split(',')[0];

  const db = getFirestore();
  const docRef = db.collection('userIp').doc(ip);
  const doc = await docRef.get();
  if (!doc.exists) {
    await setDocument(ip, { ip, numberOfTry: 1 });
  } else {
    const userIp: UserIp = {
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
    await setDocument(ip, {
      ip: userIp.id,
      numberOfTry: (userIp.numberOfTry || 0) + 1,
    });
  }

  return NextResponse.json({
    ip,
  });
}
