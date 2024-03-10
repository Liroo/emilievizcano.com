import { cert, getApps, initializeApp } from 'firebase-admin/app';

export default function initializeFirebase() {
  if (getApps().length <= 0)
    initializeApp({
      credential: cert(
        JSON.parse(process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT as string),
      ),
    });
}
