const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const username = localStorage.getItem('username'); // Assuming username is stored in local storage

const socket = new WebSocket('wss://your-websocket-url'); // Replace with your WebSocket URL

socket.onmessage = function(event) {
    const messageData = JSON.parse(event.data);
    displayMessage(messageData.username, messageData.message);
};

sendButton.addEventListener('click', function() {
    const message = messageInput.value;
    if (message) {
        const messageData = {
            username: username,
            message: message
        };
        socket.send(JSON.stringify(messageData));
        displayMessage(username, message);
        messageInput.value = '';
    }
});

function displayMessage(user, message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = `${user}: ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
}