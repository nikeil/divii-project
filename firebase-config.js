import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {
getFirestore
}
from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyDenpX4F4AehrSPsGpM8lENMQukeMP1_SA",

authDomain: "askingherout.firebaseapp.com",

projectId: "askingherout",

storageBucket: "askingherout.firebasestorage.app",

messagingSenderId: "841147871141",

appId: "1:841147871141:web:dda0bd845589078ae8424c"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
