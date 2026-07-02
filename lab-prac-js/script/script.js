const authForm = document.getElementById('authForm');
const error = document.getElementById('error');

if (authForm && error) {
  authForm.addEventListener('submit', function(event) {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
      event.preventDefault();
      error.style.display = 'block';
    } else {
      error.style.display = 'none';
    }
  });
}



