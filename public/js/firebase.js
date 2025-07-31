  
  
  const firebaseConfig = {
    apiKey: "AIzaSyC6mYmzw47U4Vg0XbtrlC5sGxwaR0zm-kU",
    authDomain: "historytimelineproj.firebaseapp.com",
    projectId: "historytimelineproj",
    storageBucket: "historytimelineproj.firebasestorage.app",
    messagingSenderId: "289335437840",
    appId: "1:289335437840:web:73bd5a3a363dea34f2f895"
  };


  firebaseConfig.initializeApp(firebaseConfig);


  const auth = firebase.auth();
  const db = firebase.firestore();