import React from 'react';
import Chessboard from '../components/Chessboard';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to Chess App</h1>
        <p>Play chess, analyze games, and learn openings, endgames, and more!</p>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <h2>Play Chess</h2>
          <div className="feature-preview">
            <Chessboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 