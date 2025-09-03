// frontend/widget.js
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const resultDiv = document.getElementById('result');

    loginForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const username = formData.get('username');
        const password = formData.get('password');

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const result = await response.json();
            resultDiv.textContent = result.message || 'Login successful!';
        } catch (err) {
            resultDiv.textContent = 'Login failed. Please try again.';
        }
    });
});
