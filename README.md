# nebula board

The Real-Time Collaborative Whiteboard is a multi-user web application that allows users to collaborate and draw on a shared canvas in real time. It leverages technologies like Node.js (NestJS) for the backend, WebRTC for peer-to-peer connections, and Firebase for authentication and real-time database syncing. The application is containerized using Docker and monitored via AWS CloudWatch to ensure scalability and performance.

## Technologies

- Backend: Node.js (NestJS)
- Real-time Communication: WebRTC, Socket.io
- Authentication & Database: Firebase
- Containerization: Docker
- Monitoring & Logging: AWS CloudWatch

## Features

- Real-time Collaboration: Multiple users can draw on the whiteboard, and changes are reflected in real-time across all connected clients.
- Peer-to-Peer Connections: WebRTC ensures low-latency connections between users.
- User Authentication: Firebase handles authentication, allowing secure user login and session management.
- Whiteboard Persistence: Firebase Realtime Database stores and syncs whiteboard data so users can leave and rejoin a session without losing progress.
- Scalable Deployment: Docker is used for containerizing the application, allowing easy deployment across cloud environments.
- Monitoring and Logging: AWS CloudWatch is integrated to monitor application performance and send alerts on potential issues.

## Installation

Prerequisites

- Node(LTS version)
- NPM v9.0.0 or higher
- Docker (optional for containerized deployment)
- Firebase Project (for authentication and real-time database)
- AWS Account (for monitoring with CloudWatch)
- Web Browser with WebRTC support (e.g., Chrome, Firefox)

Step-by-Step Guide

1. Clone the Repository

```bash
   git clone git@github.com:vicodevv/nebula-board
```

```bash
   cd nebula-board
```

2.  Install Dependencies

Navigate to both the backend and frontend directories and install the required dependencies.

# Backend dependencies

```bash
   cd backend
```

```bash
   npm install
```
