import React, { useEffect, useRef, useState } from 'react';
import { Chess } from 'chess.js';
// @ts-ignore
import { Chessboard as ChessboardJS } from 'chessboardjs';
// import 'chessboardjs/www/css/chessboard-1.0.0.min.css';

interface ChessboardProps {
  onMove?: (fen: string) => void;
  initialPosition?: string;
}

const Chessboard: React.FC<ChessboardProps> = ({ onMove, initialPosition = 'start' }) => {
  const boardRef = useRef<HTMLDivElement>(null);
  const [game] = useState(new Chess());
  const [board, setBoard] = useState<any>(null);

  useEffect(() => {
    if (boardRef.current) {
      const config = {
        draggable: true,
        position: initialPosition,
        onDrop: (source: string, target: string) => {
          try {
            const move = game.move({
              from: source,
              to: target,
              promotion: 'q' // Always promote to queen for simplicity
            });

            if (move === null) return false;
            if (onMove) onMove(game.fen());
            return true;
          } catch (e) {
            return false;
          }
        }
      };

      const chessboard = ChessboardJS(boardRef.current, config);
      setBoard(chessboard);
    }
  }, []);

  useEffect(() => {
    if (board && initialPosition !== 'start') {
      board.position(initialPosition);
    }
  }, [initialPosition, board]);

  return (
    <div className="chessboard-container">
      <div ref={boardRef} style={{ width: '600px' }} />
    </div>
  );
};

export default Chessboard; 