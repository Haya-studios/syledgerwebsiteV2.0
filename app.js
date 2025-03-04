document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupLink = document.getElementById('signup-link');
    const chatContainer = document.getElementById('chat-container');
    const loginContainer = document.getElementById('login-container');
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const infoManagerButton = document.getElementById('info-manager-button');
    const infoManager = document.getElementById('info-manager');
    const infoForm = document.getElementById('info-form');

    let username = '';

    const ws = new WebSocket(`ws://${window.location.host}`);

    ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = `${message.username}: ${message.text}`;
        chatBox.appendChild(messageElement);
    };

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        username = document.getElementById('username').value;
        loginContainer.style.display = 'none';
        chatContainer.style.display = 'flex';
    });

    signupLink.addEventListener('click', (event) => {
        event.preventDefault();
        // Handle signup logic here
    });

    sendButton.addEventListener('click', () => {
        const message = messageInput.value;
        if (message) {
            ws.send(JSON.stringify({ username, text: message }));
            messageInput.value = '';
        }
    });

    infoManagerButton.addEventListener('click', () => {
        infoManager.style.display = 'block';
    });

    infoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const siteName = document.getElementById('site-name').value;
        const siteUsername = document.getElementById('site-username').value;
        const sitePassword = document.getElementById('site-password').value;
        // Save info to Render's data storage (this is just a placeholder)
        console.log('Info saved:', { siteName, siteUsername, sitePassword });
        infoManager.style.display = 'none';
    });
});