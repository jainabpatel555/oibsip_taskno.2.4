// Function to toggle between login and registration forms
function toggleForm() {
    var loginForm = document.getElementById('loginForm');
    var registrationForm = document.getElementById('registrationForm');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registrationForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registrationForm.style.display = 'block';
    }
}

// Function to handle login
function login() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    if (username === '' || password === '') {
        console.log('Please enter both username and password for login.');
        return false;
    }

    // Simulate login (replace with actual authentication logic)
    alert('Login Successful!');
    return true;
}

// Function to handle registration
function register() {
    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;

    if (username === '' || password === '') {
        console.log('Please enter both username and password for registration.');
        return false;
    }

    // Simulate registration (replace with actual registration logic)
    alert('Registration Successful!');
    return true;
}
