# Real-Time Chat Application

This project is a real-time chat application built using React for the frontend and Express.js for the backend. It allows users to set a username and engage in conversations through a clean and intuitive user interface. The backend is responsible for user authentication and integrating with Chat Engine API to manage chats and messages.

## Video Demo

https://github.com/Raiyan03/Realtime_Chat/assets/87060977/f4ad32a0-8789-4768-b777-458079cca7ba

Place Holder

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- An IDE or code editor of your choice

### Installation

Clone the repository to you local machine using Git:

```Bash
git clone https://github.com/Raiyan03/Realtime_Chat.git
```

Backend Setup

1. Navigate to the backend directory of the project.
2. Install the necessary dependencies by running:
```bash
npm install
```
3. Create a .env file in the root of the backend directory and add your Chat Engine project's private key:
```Makefile 
PRIVATE_KEY=your_private_key_here
```
4. Start the server with:
```Bash
npm start
```
The server will run on `http://localhost:3000`.

Frontend Setup

1. Navigate to the frontend directory of the project.
2. Install the required dependencies with:
```Bash
npm install
```
3. Start React application by running:
```Bash
npm run dev
```
The application will be available at `http://localhost:5173/`

## Usage

1. **Starting the Application:** Ensure both the frontend and backend servers are running simultaneously.
2. **Authentication:** Open the application in your web browser, set a username to get started.
3. **Chatting:** Once authenticated, you can start chatting in real-time.

## Technologies Used

- **Frontend:** React
- **Backend:** Express.js, Node.js
- **APIs:** Chat Engine
- **Styling:** CSS

## Directory Structure

- **Backend:** Contains all the server-side code including API integrations and user authentication.
- **Frontend:** Houses the React application including components for authentication and chat interface.

## Contributing

We welcome contributions to this project! Please consider the following steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/AmazingFeature).
3. Commit your changes (git commit -m 'Add some AmazingFeature').
4. Push to the branch (git push origin feature/AmazingFeature).
5. Open a Pull Request.

## Hosting

This application is currently not hosted online. To use the application, it needs to be run locally as described in the installation section.

## Acknowledgement

- Chat Engine for providing the core API for real-time messaging.
- The React community for continuous support and resources.
