import React, { useState, useEffect } from 'react';
import Chessboard from '../components/Chessboard';
import { Chess } from 'chess.js';

const Analysis: React.FC = () => {
  const [game, setGame] = useState(new Chess());
  const [pgn, setPgn] = useState('');
  const [analysis, setAnalysis] = useState<string>('');
  const [stockfish, setStockfish] = useState<any>(null);

  useEffect(() => {
    // Initialize Stockfish
    const stockfishWorker = new Worker('stockfish.js');
    setStockfish(stockfishWorker);

    stockfishWorker.onmessage = (e) => {
      const message = e.data;
      if (message.includes('bestmove')) {
        setAnalysis(prev => prev + '\n' + message);
      }
    };

    return () => {
      stockfishWorker.terminate();
    };
  }, []);

  const analyzePosition = () => {
    if (stockfish) {
      stockfish.postMessage('position fen ' + game.fen());
      stockfish.postMessage('go depth 20');
    }
  };

  const handlePgnImport = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newPgn = event.target.value;
    setPgn(newPgn);
    try {
      const newGame = new Chess();
      newGame.loadPgn(newPgn);
      setGame(newGame);
    } catch (e) {
      console.error('Invalid PGN:', e);
    }
  };

  const exportPgn = () => {
    const pgn = game.pgn();
    const blob = new Blob([pgn], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'game.pgn';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="analysis-container">
      <div className="board-section">
        <Chessboard initialPosition={game.fen()} />
      </div>
      <div className="controls-section">
        <textarea
          value={pgn}
          onChange={handlePgnImport}
          placeholder="Paste PGN here..."
          rows={10}
        />
        <button onClick={analyzePosition}>Analyze Position</button>
        <button onClick={exportPgn}>Export PGN</button>
        <div className="analysis-output">
          <pre>{analysis}</pre>
        </div>
      </div>
    </div>
  );
};

export default Analysis; 