// Configuración de Firebase (REEMPLAZA con tus datos reales)
const firebaseConfig = {
  apiKey: "AIzaSyDfEjemplo1234_5xyZ0Xy-abcde",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcd1234ejemplo5678"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Función para login
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = "dashboard.html")
    .catch((error) => {
      document.getElementById('errorMessage').textContent = error.message;
    });
});
