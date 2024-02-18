import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential?.cert(serviceAccount),
  databaseURL: process.env.databaseURL,
});

const db = admin.firestore();
export { admin, db };
