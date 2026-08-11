import React from 'react';
import { Sparkles, Snowflake, Waves, Box } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative text-center py-10 px-4 overflow-hidden mb-4">
      {/* Decorative Ice Crystals Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Archetype Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3 shadow-lg shadow-cyan-950/50">
          <Snowflake className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
          遊 戲 王 Yu-Gi-Oh! 主 題 牌 組 專 頁
          <Waves className="w-3.5 h-3.5 text-cyan-400" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-teal-200 drop-shadow-[0_4px_12px_rgba(56,189,248,0.4)]">
          「 冰 水 」( Icejade ) 卡 牌 圖 鑑
        </h1>

        {/* Subtitle / Description */}
        <p className="mt-3 text-sm md:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
          收錄純水族「冰水」系列之效果怪獸、<strong className="text-white bg-slate-800 px-1.5 py-0.5 rounded border border-slate-600">白色卡面同步怪獸</strong>、魔法卡與陷阱卡。
          點擊卡片即可開啟高質感 <span className="text-cyan-300 font-semibold underline decoration-cyan-400/50">3D 多圖層立體繪畫</span> 與鐳射閃卡光澤！
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs text-cyan-200/90 font-medium">
          <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-cyan-900/50">
            <Box className="w-4 h-4 text-cyan-400" />
            <span>3D 視差立體懸浮</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-cyan-900/50">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>鐳射 (Secret Rare) 閃卡</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-cyan-900/50">
            <Snowflake className="w-4 h-4 text-sky-400" />
            <span>白色卡面 - 冰水帝極 耀變翡翠</span>
          </div>
        </div>
      </div>
    </header>
  );
}
