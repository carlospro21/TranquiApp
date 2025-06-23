function toggleForm() {
  const login = document.getElementById('loginForm');
  const register = document.getElementById('registerForm');
  login.style.display = login.style.display === 'none' ? 'block' : 'none';
  register.style.display = register.style.display === 'none' ? 'block' : 'none';
}
