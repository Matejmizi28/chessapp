import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Chessboard from '../components/Chessboard';

const Home: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to Chess App</h1>
        {currentUser ? (
          <p>Hello, {currentUser.email}! Ready to play some chess?</p>
        ) : (
          <p>Please log in to access all features</p>
        )}
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <h2>Play Chess</h2>
          <div className="feature-preview">
            <Chessboard />
          </div>
          <Link to="/analysis" className="feature-link">
            Start Playing
          </Link>
        </div>

        <div className="feature-card">
          <h2>Game Analysis</h2>
          <p>Analyze your games with Stockfish engine</p>
          <Link to="/analysis" className="feature-link">
            Analyze Games
          </Link>
        </div>

        <div className="feature-card">
          <h2>Chess Library</h2>
          <p>Learn openings, endgames, and middlegame strategies</p>
          <Link to="/library" className="feature-link">
            Browse Library
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 