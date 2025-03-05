function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate credentials (this is a placeholder, implement actual validation)
    if (username && password) {
        // Simulate successful login
        localStorage.setItem('username', username);
        window.location.href = 'chat.html'; // Redirect to chat interface
    } else {
        alert('Please enter both username and password.');
    }
}

document.getElementById('login-form').addEventListener('submit', handleLogin);