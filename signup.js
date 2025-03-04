const signupForm = document.getElementById('signupForm');
const usernameInput = document.getElementById('signupUsername');
const passwordInput = document.getElementById('signupPassword');

signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username && password) {
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.success) {
                alert('Signup successful! You can now log in.');
                window.location.href = '/login'; // Redirect to login page
            } else {
                alert('Signup failed: ' + data.message);
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert('An error occurred. Please try again later.');
        }
    } else {
        alert('Please enter both username and password.');
    }
});