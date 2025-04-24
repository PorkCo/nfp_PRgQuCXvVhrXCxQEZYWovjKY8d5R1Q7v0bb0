<!DOCTYPE html>
   <html>
   <head>
     <title>Login PorkCo</title>
     <meta charset="UTF-8">
     <!-- Firebase y scripts -->
     <script src="https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js"></script>
     <script src="https://www.gstatic.com/firebasejs/9.6.0/firebase-auth-compat.js"></script>
     <script src="auth.js" defer></script>
     <style>
       body { font-family: Arial; padding: 20px; }
       input, button { padding: 10px; margin: 5px; width: 90%; }
       button { background: #007bff; color: white; border: none; }
     </style>
   </head>
   <body>
     <h2>Iniciar sesión</h2>
     <form id="loginForm">
       <input type="email" id="email" placeholder="Correo" required>
       <input type="password" id="password" placeholder="Contraseña" required>
       <button type="submit">Ingresar</button>
     </form>
     <p id="errorMessage" style="color: red;"></p>
   </body>
   </html>
