interface Item {
  name: string;
  quantity: number;
}

interface FirebaseConfig {
  apiKey: string | undefined;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string | undefined;
  appId: string | undefined;
}