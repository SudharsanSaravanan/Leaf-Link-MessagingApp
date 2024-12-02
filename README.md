# 🍃 Leaf-Link Messenger 🍃

## Overview
Leaf-Link is a real-time messaging application built using React and Firebase, allowing users to send and receive messages instantly.

## Live Demo
🌐 [Leaf-Link Messenger](https://susmessenger.web.app)

## Features
- Real-time messaging
- User name identification
- Responsive design
- Animated message transitions
- Firebase Firestore backend

## Prerequisites
- Node.js (v14 or later)
- npm or Yarn
- Firebase account

## Installation

### 1. Clone the Repository
```bash
git clone https://your-repository-url.git
cd leaf-link-messenger
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Firebase Setup
1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Go to Project Settings and copy your Firebase configuration
4. Replace the configuration in `firebase.js` with your project's config

### 4. Run the Application
```bash
npm start
# or
yarn start
```

## How to Create This Project from Scratch

### Step-by-Step Guide

1. **Create React Project**
```bash
npx create-react-app leaf-link-messenger
cd leaf-link-messenger
```

2. **Install Dependencies**
```bash
npm install firebase @mui/material @mui/icons-material react-flip-move
```

3. **Set Up Firebase**
- Go to Firebase Console
- Create a new project
- Add a web app
- Copy the Firebase configuration
- Enable Firestore Database

4. **Create Firebase Configuration**
In `src/firebase.js`:
```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase config here
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
```

5. **Create Message Component**
Create `src/Message.js` with Material-UI Card component

6. **Implement Main App**
Modify `src/App.js` to:
- Use Firebase Firestore for real-time messaging
- Add username prompt
- Create send message functionality
- Use Material-UI components

7. **Style Your App**
Create `src/App.css` and `src/Message.css` for custom styling

8. **Deploy to Firebase**
```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

## Technologies Used
- React
- Firebase Firestore
- Material-UI
- React Flip Move

## Project Structure
- `src/App.js`: Main application component
- `src/Message.js`: Individual message component
- `src/firebase.js`: Firebase configuration
- `src/App.css`: Application styling
- `src/Message.css`: Message styling

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License.

## Contact
Project Link: [https://susmessenger.web.app](https://susmessenger.web.app)

**Happy Messaging! 🍃✨**
