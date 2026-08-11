import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Zap } from 'lucide-react';
import { CARD_TYPES } from '../data/icejadeCards';
import { playCrystalChimeSound, playLaserSheenSound } from '../utils/audio';

export default function Card3DModal({ card, onClose, onNext, onPrev }) {
  const cardRef = useRef(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Trigger sound effect on open
  useEffect(() => {
    playCrystalChimeSound();
  }, [card?.id]);

  if (!card) return null;

  const isSynchro = card.cardType === CARD_TYPES.SYNCHRO;
  const isSpell = card.cardType === CARD_TYPES.SPELL;
  const isTrap = card.cardType === CARD_TYPES.TRAP;
  const isMonster = !isSpell && !isTrap;

  // Mouse & Touch 3D Tilt calculations
  const updateTilt = (clientX, clientY) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = clientX - centerX;
    const mouseY = clientY - centerY;

    const calcRotY = (mouseX / (rect.width / 2)) * 25;
    const calcRotX = -(mouseY / (rect.height / 2)) * 25;

    setRotX(calcRotX);
    setRotY(calcRotY);

    const posX = ((clientX - rect.left) / rect.width) * 100;
    const posY = ((clientY - rect.top) / rect.height) * 100;
    setSheenPos({ x: posX, y: posY });
  };

  const handleMouseMove = (e) => {
    updateTilt(e.clientX, e.clientY);
    if (Math.abs(e.clientX) % 40 < 5) {
      playLaserSheenSound();
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      updateTilt(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleMouseLeave = () => {
    setRotX(0);
    setRotY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Frame Styling
  let frameClass = 'ygo-frame-effect';
  if (isSynchro) frameClass = 'ygo-frame-synchro';
  else if (isSpell) frameClass = 'ygo-frame-spell';
  else if (isTrap) frameClass = 'ygo-frame-trap';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md flex items-center justify-center animate-fadeIn">
      {/* Modal Shell Container */}
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-slate-900/95 border border-cyan-500/40 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-center my-auto">
        
        {/* Background Ambient Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-400 hover:text-white p-2 rounded-full bg-slate-900/80 border border-slate-700 hover:bg-slate-800 transition z-30"
          aria-label="關閉"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* 3D Card Interactive Stage */}
        <div className="flex-1 flex flex-col items-center justify-center w-full modal-3d-perspective py-2 sm:py-4">
          <div className="text-cyan-300/90 text-[11px] sm:text-xs tracking-wider uppercase mb-2 flex items-center gap-1 font-mono text-center">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin flex-shrink-0" />
            滑鼠／滑動觸控可多角度探索 3D 立體繪畫與鐳射卡面
          </div>

          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleTouchMove}
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}
            style={{
              transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
              transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
            }}
            className={`relative w-64 sm:w-72 md:w-80 card-3d-wrapper ygo-card-container ${frameClass} cursor-grab active:cursor-grabbing shadow-2xl border-4 border-yellow-500/80 select-none`}
          >
            {/* Multi-Layer 3D Depth Visuals inside Picture Frame */}
            <div className="ygo-inner-frame h-full flex flex-col justify-between">
              {/* Card Title Bar */}
              <div className="ygo-title-bar">
                <span className="ygo-card-name text-sm sm:text-base">{card.name}</span>
                <div className={`ygo-attribute-badge ${isSpell ? 'spell' : isTrap ? 'trap' : ''}`}>
                  {card.attributeIcon}
                </div>
              </div>

              {/* Stars Row */}
              {isMonster && card.stars > 0 && (
                <div className="ygo-stars-row">
                  {Array.from({ length: card.stars }).map((_, i) => (
                    <div
                      key={i}
                      className={`ygo-star ${isSynchro ? 'synchro-star' : ''}`}
                    />
                  ))}
                </div>
              )}

              {/* Picture Frame with 3D Parallax Layers */}
              <div className="relative w-full aspect-square border-2 border-yellow-600 rounded overflow-hidden bg-slate-950 modal-3d-perspective my-1">
                
                {/* Layer 1: Background Atmosphere */}
                <img
                  src={card.bgImage || card.image}
                  alt="3D Background"
                  className="absolute inset-0 w-full h-full object-cover card-3d-layer-bg opacity-70 filter blur-[1px]"
                />

                {/* Layer 2: Main Character Silhouette (Floating Out) */}
                <img
                  src={card.image}
                  alt={card.name}
                  className="absolute inset-0 w-full h-full object-cover card-3d-layer-character transition-transform duration-100"
                />

                {/* Layer 3: Foreground Sparkles & Ice Particles */}
                {card.fgParticles && (
                  <img
                    src={card.fgParticles}
                    alt="Foreground Particles"
                    className="absolute inset-0 w-full h-full object-cover card-3d-layer-fg mix-blend-screen opacity-90"
                  />
                )}

                {/* Layer 4: Dynamic Holographic Light Beam Sheen */}
                <div
                  className="absolute inset-0 card-3d-layer-sheen"
                  style={{
                    background: `radial-gradient(circle at ${sheenPos.x}% ${sheenPos.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(56, 189, 248, 0.3) 30%, transparent 60%)`,
                    mixBlendMode: 'color-dodge',
                  }}
                />
              </div>

              {/* Card Description */}
              <div className="ygo-desc-box text-[11px] sm:text-xs">
                <div className="ygo-type-line">
                  {isMonster ? (
                    <span>【{card.race}／{card.subTypes.join('／')}】</span>
                  ) : (
                    <span>{card.spellTrapType}</span>
                  )}
                </div>
                <div className="ygo-effect-text line-clamp-4">{card.description}</div>
                {isMonster && (
                  <div className="ygo-stats-bar text-[11px]">
                    <span>攻擊力 / {card.atk}</span>
                    <span>守備力 / {card.def}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Previous / Next Card Nav Buttons */}
          <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
            <button
              onClick={onPrev}
              className="flex items-center gap-1 px-3 sm:px-4 py-2 bg-slate-800/80 hover:bg-cyan-900/60 border border-slate-700 hover:border-cyan-500/50 rounded-lg text-xs sm:text-sm text-cyan-200 transition"
            >
              <ChevronLeft className="w-4 h-4" /> 上一張
            </button>
            <button
              onClick={onNext}
              className="flex items-center gap-1 px-3 sm:px-4 py-2 bg-slate-800/80 hover:bg-cyan-900/60 border border-slate-700 hover:border-cyan-500/50 rounded-lg text-xs sm:text-sm text-cyan-200 transition"
            >
              下一張 <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card Details Info Panel (Right Side) */}
        <div className="w-full md:w-96 flex flex-col gap-3 sm:gap-4 bg-slate-950/60 p-4 sm:p-6 rounded-xl border border-cyan-500/30">
          <div>
            <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded bg-cyan-950 text-cyan-300 border border-cyan-700/50 mb-1.5">
              {card.rarity}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide">{card.name}</h2>
            <p className="text-xs text-cyan-400/80 font-mono mt-0.5">{card.japaneseName} • {card.englishName}</p>
          </div>

          {/* Quote */}
          {card.quote && (
            <div className="italic text-xs text-cyan-200/90 bg-cyan-950/40 p-2.5 sm:p-3 rounded-lg border-l-2 border-cyan-400">
              {card.quote}
            </div>
          )}

          {/* Attributes Grid */}
          <div className="grid grid-cols-2 gap-2.5 text-xs">
            <div className="bg-slate-900/80 p-2 sm:p-2.5 rounded border border-slate-800">
              <span className="text-slate-400 block text-[11px]">卡片種類</span>
              <span className="text-white font-medium">
                {isSynchro ? '白色卡面 (同步怪獸)' : isMonster ? '效果怪獸' : isSpell ? '魔法卡' : '陷阱卡'}
              </span>
            </div>
            <div className="bg-slate-900/80 p-2 sm:p-2.5 rounded border border-slate-800">
              <span className="text-slate-400 block text-[11px]">屬性 / 種族</span>
              <span className="text-white font-medium">
                {card.attribute} / {card.race || '魔法·陷阱'}
              </span>
            </div>
            {isMonster && (
              <>
                <div className="bg-slate-900/80 p-2 sm:p-2.5 rounded border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">攻擊力 (ATK)</span>
                  <span className="text-yellow-400 font-bold text-sm">{card.atk}</span>
                </div>
                <div className="bg-slate-900/80 p-2 sm:p-2.5 rounded border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">守備力 (DEF)</span>
                  <span className="text-cyan-400 font-bold text-sm">{card.def}</span>
                </div>
              </>
            )}
          </div>

          {/* Full Effect Text */}
          <div className="mt-1">
            <h4 className="text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-yellow-400" /> 卡牌效果說明
            </h4>
            <div className="text-xs text-slate-300 leading-relaxed bg-slate-900 p-3 rounded-lg border border-slate-800 max-h-36 sm:max-h-48 overflow-y-auto whitespace-pre-line">
              {card.description}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
