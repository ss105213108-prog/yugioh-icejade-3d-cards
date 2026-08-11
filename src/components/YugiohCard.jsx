import React from 'react';
import { CARD_TYPES, ATTRIBUTES } from '../data/icejadeCards';
import { playCardHoverSound } from '../utils/audio';

export default function YugiohCard({ card, onClick, isSelected }) {
  const isSynchro = card.cardType === CARD_TYPES.SYNCHRO;
  const isSpell = card.cardType === CARD_TYPES.SPELL;
  const isTrap = card.cardType === CARD_TYPES.TRAP;
  const isMonster = !isSpell && !isTrap;

  // Frame CSS Class
  let frameClass = 'ygo-frame-effect';
  if (isSynchro) frameClass = 'ygo-frame-synchro';
  else if (isSpell) frameClass = 'ygo-frame-spell';
  else if (isTrap) frameClass = 'ygo-frame-trap';

  // Attribute Badge Class
  let attributeBadgeClass = 'ygo-attribute-badge';
  if (isSpell) attributeBadgeClass += ' spell';
  if (isTrap) attributeBadgeClass += ' trap';

  return (
    <div
      className={`ygo-card-container ${frameClass} ${
        isSelected ? 'ring-4 ring-cyan-400 scale-105 shadow-2xl' : ''
      }`}
      onClick={() => onClick(card)}
      onMouseEnter={() => playCardHoverSound()}
    >
      <div className="ygo-inner-frame">
        {/* Card Title & Attribute */}
        <div className="ygo-title-bar">
          <span className="ygo-card-name" title={card.name}>
            {card.name}
          </span>
          <div className={attributeBadgeClass} title={`屬性: ${card.attribute}`}>
            {card.attributeIcon}
          </div>
        </div>

        {/* Level / Rank Stars for Monsters */}
        {isMonster && card.stars > 0 && (
          <div className="ygo-stars-row">
            {Array.from({ length: card.stars }).map((_, i) => (
              <div
                key={i}
                className={`ygo-star ${isSynchro ? 'synchro-star' : ''}`}
                title={`Level ${card.stars}`}
              />
            ))}
          </div>
        )}

        {/* Card Artwork Box */}
        <div className="ygo-picture-frame">
          <img src={card.image} alt={card.name} loading="lazy" />
          <div className="ygo-holographic-foil" />
        </div>

        {/* Card Type & Description Box */}
        <div className="ygo-desc-box">
          <div className="ygo-type-line">
            {isMonster ? (
              <span>
                【{card.race}／{card.subTypes.join('／')}】
              </span>
            ) : (
              <span>{card.spellTrapType}</span>
            )}
          </div>
          <div className="ygo-effect-text">{card.description}</div>

          {/* ATK / DEF Bar for Monsters */}
          {isMonster && (
            <div className="ygo-stats-bar">
              <span>攻擊力 / {card.atk}</span>
              <span>守備力 / {card.def}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
