import React, { useState } from 'react';
import Chessboard from './Chessboard';

interface LibraryItem {
  id: string;
  title: string;
  type: 'opening' | 'endgame' | 'middlegame';
  fen: string;
  description: string;
}

const Library: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<LibraryItem | null>(null);
  const [activeTab, setActiveTab] = useState<'opening' | 'endgame' | 'middlegame'>('opening');

  const libraryItems: LibraryItem[] = [
    {
      id: '1',
      title: 'Sicilian Defense',
      type: 'opening',
      fen: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
      description: 'A popular and aggressive response to 1.e4'
    },
    {
      id: '2',
      title: 'Lucena Position',
      type: 'endgame',
      fen: '4k3/4P3/4K3/8/8/8/8/8 w - - 0 1',
      description: 'A fundamental rook endgame position'
    },
    {
      id: '3',
      title: 'Isolated Queen\'s Pawn',
      type: 'middlegame',
      fen: 'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 3',
      description: 'A common middlegame structure with strategic implications'
    }
  ];

  const filteredItems = libraryItems.filter(item => item.type === activeTab);

  return (
    <div className="library-container">
      <div className="library-tabs">
        <button 
          className={activeTab === 'opening' ? 'active' : ''} 
          onClick={() => setActiveTab('opening')}
        >
          Openings
        </button>
        <button 
          className={activeTab === 'middlegame' ? 'active' : ''} 
          onClick={() => setActiveTab('middlegame')}
        >
          Middlegame
        </button>
        <button 
          className={activeTab === 'endgame' ? 'active' : ''} 
          onClick={() => setActiveTab('endgame')}
        >
          Endgames
        </button>
      </div>

      <div className="library-content">
        <div className="library-list">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className={`library-item ${selectedItem?.id === item.id ? 'selected' : ''}`}
              onClick={() => setSelectedItem(item)}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="library-preview">
          {selectedItem && (
            <>
              <Chessboard initialPosition={selectedItem.fen} />
              <div className="item-details">
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Library; 