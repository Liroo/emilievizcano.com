import { cert, getApps, initializeApp } from 'firebase-admin/app';

export default function initializeFirebase() {
  if (getApps().length <= 0)
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
      }),
    });
}
