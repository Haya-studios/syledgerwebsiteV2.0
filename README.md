# Syledger

Syledger is a real-time chat application that allows users to log in, participate in public chats, and manage their login information for other websites. The application is hosted on Render and utilizes WebSocket for real-time communication.

## Features

- User authentication with login and signup options.
- Public chat area where users can send and receive messages in real-time.
- Info Manager for securely storing and retrieving login information for other websites.
- Responsive design that fits the browser window.

## Project Structure

```
syledger
├── public
│   ├── index.html       # HTML structure of the website
│   └── styles.css       # Styles for the website
├── src
│   ├── app.js           # Main entry point of the application
│   ├── chat.js          # Public chat functionality
│   ├── login.js         # User login management
│   ├── signup.js        # User signup management
│   └── infoManager.js    # Info manager functionality
├── package.json         # npm configuration file
└── README.md            # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/syledger.git
   ```

2. Navigate to the project directory:
   ```
   cd syledger
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to access the application.

## Usage Guidelines

- To log in, enter your username and password in the login form. If you do not have an account, use the signup option to create one.
- Once logged in, you can participate in the public chat by typing your messages. Your username will be displayed next to each message.
- Click on the "Info Manager" button to manage your login information for other websites.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.