# Chess App

A comprehensive chess application built with React, featuring game analysis, PGN support, and a chess library.

## Features

- Interactive chessboard with move validation
- Game analysis using Stockfish engine
- PGN import/export functionality
- Chess library with openings, endgames, and middlegame positions
- User authentication system
- Responsive design

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Firebase account (for authentication)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd chessapp
```

2. Install dependencies:
```bash
npm install
```

3. Create a Firebase project and add your configuration:
   - Go to the Firebase Console
   - Create a new project
   - Enable Authentication (Email/Password)
   - Copy your Firebase configuration
   - Update the `firebaseConfig` object in `src/contexts/AuthContext.tsx`

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
chessapp/
├── src/
│   ├── components/
│   │   ├── Chessboard.tsx
│   │   ├── Analysis.tsx
│   │   ├── Library.tsx
│   │   ├── Login.tsx
│   │   └── Navbar.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── App.tsx
│   └── App.css
└── public/
    └── stockfish.js
```

## Dependencies

- React
- TypeScript
- chess.js
- chessboardjs
- Stockfish
- Firebase
- React Router

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 