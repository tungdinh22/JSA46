document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // 
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('verifyPasswordError').textContent = '';

    // 
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const verifyPassword = document.getElementById('verifyPassword').value;

    let isValid = true;

    // xac thuc ten
    if (username.length < 6 || username.length > 18) {
        document.getElementById('usernameError').textContent = 'Username phải từ 6 đến 18 ký tự.';
        isValid = false;
    }

    // xac thuc email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Email không hợp lệ.';
        isValid = false;
    }

    // xac thuc mk
    if (password.length < 8 || password.length > 20) {document.getElementById('passwordError').textContent = 'Password phải từ 8 đến 20 ký tự.';
        isValid = false;
    }

    // xac thuc verify mk
    if (verifyPassword !== password) {
        document.getElementById('verifyPasswordError').textContent = 'Verify Password không khớp với Password.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});