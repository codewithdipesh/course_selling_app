const form = document.getElementById('loginForm');
const formError = document.getElementById('formError');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    formError.textContent = 'Please enter both email and password.';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formError.textContent = 'Please enter a valid email address.';
    return;
  }

  if (password.length < 6) {
    formError.textContent = 'Password must be at least 6 characters.';
    return;
  }

  formError.textContent = '';
  window.location.href = '/dashboard.html';
});
