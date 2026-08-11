import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import YugiohCard from './components/YugiohCard';
import Card3DModal from './components/Card3DModal';
import { ICEJADE_CARDS, CARD_TYPES } from './data/icejadeCards';
import { Layers, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);

  // Compute count by category
  const cardCounts = useMemo(() => {
    const counts = {
      all: ICEJADE_CARDS.length,
      [CARD_TYPES.EFFECT]: 0,
      [CARD_TYPES.SYNCHRO]: 0,
      [CARD_TYPES.SPELL]: 0,
      [CARD_TYPES.TRAP]: 0,
    };

    ICEJADE_CARDS.forEach((card) => {
      if (counts[card.cardType] !== undefined) {
        counts[card.cardType]++;
      }
    });

    return counts;
  }, []);

  // Filtered card list based on selected category tab and search query
  const filteredCards = useMemo(() => {
    return ICEJADE_CARDS.filter((card) => {
      // Category Tab Filter
      if (activeTab !== 'all' && card.cardType !== activeTab) {
        return false;
      }

      // Search Filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = card.name.toLowerCase().includes(query);
        const matchesDesc = card.description.toLowerCase().includes(query);
        const matchesType = card.cardType.toLowerCase().includes(query);
        return matchesName || matchesDesc || matchesType;
      }

      return true;
    });
  }, [activeTab, searchQuery]);

  // Modal Navigation helpers
  const handleOpenCardModal = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const handleNextCard = () => {
    if (!selectedCard) return;
    const currentIndex = filteredCards.findIndex((c) => c.id === selectedCard.id);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % filteredCards.length;
      setSelectedCard(filteredCards[nextIndex]);
    }
  };

  const handlePrevCard = () => {
    if (!selectedCard) return;
    const currentIndex = filteredCards.findIndex((c) => c.id === selectedCard.id);
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + filteredCards.length) % filteredCards.length;
      setSelectedCard(filteredCards[prevIndex]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between p-4 md:p-8 max-w-7xl mx-auto">
      <div>
        {/* Header Banner */}
        <Header />

        {/* Filter and Search Bar */}
        <FilterBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          cardCounts={cardCounts}
        />

        {/* Card Gallery Grid */}
        {filteredCards.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-items-center">
            {filteredCards.map((card) => (
              <div key={card.id} className="w-full max-w-[280px]">
                <YugiohCard
                  card={card}
                  onClick={handleOpenCardModal}
                  isSelected={selectedCard?.id === card.id}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
            <Layers className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-slate-300">未找到符合條件的冰水卡牌</h3>
            <p className="text-xs text-slate-500 mt-1">請嘗試變更搜尋關鍵字或選擇其他卡片類別</p>
          </div>
        )}
      </div>

      {/* 3D Parallax Detail Modal */}
      {selectedCard && (
        <Card3DModal
          card={selectedCard}
          onClose={handleCloseModal}
          onNext={handleNextCard}
          onPrev={handlePrevCard}
        />
      )}

      {/* Footer */}
      <footer className="mt-16 text-center text-xs text-slate-500 py-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          Yu-Gi-Oh! Official Card Interface • Icejade (冰水) Archetype Series
        </div>
        <div className="flex items-center gap-1 text-cyan-400/80">
          <Sparkles className="w-3.5 h-3.5" /> 點擊卡片可體驗多圖層 3D 立體繪畫與鐳射光澤效果
        </div>
      </footer>
    </div>
  );
}
