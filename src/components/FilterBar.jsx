import React from 'react';
import { Search, Sparkles, Layers, ShieldAlert, BookOpen } from 'lucide-react';
import { CARD_TYPES } from '../data/icejadeCards';

export default function FilterBar({ activeTab, setActiveTab, searchQuery, setSearchQuery, cardCounts }) {
  const tabs = [
    { id: 'all', label: '全部卡牌', count: cardCounts.all, icon: Layers },
    { id: CARD_TYPES.SYNCHRO, label: '同步怪獸 (白卡)', count: cardCounts[CARD_TYPES.SYNCHRO], icon: Sparkles, badgeClass: 'bg-slate-100 text-slate-900 font-bold' },
    { id: CARD_TYPES.EFFECT, label: '效果怪獸', count: cardCounts[CARD_TYPES.EFFECT], icon: ShieldAlert, badgeClass: 'bg-amber-900/60 text-amber-300' },
    { id: CARD_TYPES.SPELL, label: '魔法卡', count: cardCounts[CARD_TYPES.SPELL], icon: BookOpen, badgeClass: 'bg-emerald-900/60 text-emerald-300' },
    { id: CARD_TYPES.TRAP, label: '陷阱卡', count: cardCounts[CARD_TYPES.TRAP], icon: ShieldAlert, badgeClass: 'bg-pink-900/60 text-pink-300' },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900/80 p-4 rounded-xl border border-cyan-500/30 backdrop-blur-md mb-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition cursor-pointer ${
                isActive
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-cyan-400'}`} />
              <span>{tab.label}</span>
              <span
                className={`px-1.5 py-0.5 text-[10px] rounded-full ${
                  tab.badgeClass || 'bg-slate-950/60 text-cyan-300'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search Bar */}
      <div className="relative w-full md:w-64">
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-cyan-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="搜尋冰水卡牌名稱或效果..."
          className="w-full bg-slate-950/80 border border-slate-700 focus:border-cyan-400 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
        />
      </div>
    </div>
  );
}
