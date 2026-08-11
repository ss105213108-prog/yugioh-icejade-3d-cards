import imgGymir from '../assets/images/icejade_gymir_aegirine.png';
import imgAegirine from '../assets/images/icejade_aegirine.png';
import imgKosmochlor from '../assets/images/icejade_kosmochlor.png';
import imgCradle from '../assets/images/icejade_enion_cradle.png';
import imgErosion from '../assets/images/icejade_erosion.png';
import imgFgParticles from '../assets/images/icejade_foreground_particles.png';

export const CARD_TYPES = {
  EFFECT: 'effect',
  SYNCHRO: 'synchro',
  SPELL: 'spell',
  TRAP: 'trap',
};

export const ATTRIBUTES = {
  WATER: 'WATER',
  SPELL: 'SPELL',
  TRAP: 'TRAP',
};

export const ICEJADE_CARDS = [
  {
    id: 'gymir-aegirine',
    name: '冰水帝極 耀變翡翠',
    japaneseName: '氷水啼エジル・ギュミル',
    englishName: 'Icejade Gymir Aegirine',
    cardType: CARD_TYPES.SYNCHRO,
    attribute: ATTRIBUTES.WATER,
    attributeIcon: '水',
    level: 10,
    race: '水族',
    subTypes: ['同步', '效果'],
    atk: 3000,
    def: 1500,
    rarity: 'Secret Rare (秘鑽 / 鐳射)',
    frameType: 'synchro', // White frame
    image: imgGymir,
    bgImage: imgCradle,
    fgParticles: imgFgParticles,
    description: `水族協調＋協調以外的怪獸1隻以上
此卡名的①②效果1回合各能使用1次。
①：以自己·對手回合可以發動。這個回合，自己場上的表側表示怪獸不會被對手的效果破壞，也不會被對手的效果除外。連鎖對手的效果的發動發動此效果，且該同名卡在對手的場上·墓地存在的場合，可以進一步將那些同名卡全部除外。
②：這張卡在墓地存在，對手的效果將卡除外的場合可以發動。這張卡特殊召喚。`,
    quote: '「將冰冷凝結晶華，鎮壓一切動亂的帝王之姿！」',
    stars: 10,
  },
  {
    id: 'aegirine',
    name: '冰水之翡翠',
    japaneseName: '氷水のエジル',
    englishName: 'Icejade Aegirine',
    cardType: CARD_TYPES.EFFECT,
    attribute: ATTRIBUTES.WATER,
    attributeIcon: '水',
    level: 4,
    race: '水族',
    subTypes: ['效果'],
    atk: 1500,
    def: 1500,
    rarity: 'Super Rare (亮面)',
    frameType: 'effect', // Orange/Brown frame
    image: imgAegirine,
    bgImage: imgCradle,
    fgParticles: imgFgParticles,
    description: `此卡名的①②效果1回合各能使用1次。
①：這張卡召喚·特殊召喚成功的場合可以發動。從牌組將1張「冰水」魔法·陷阱卡加入手牌。
②：這張卡成為對手的效果標的時，或成為對手怪獸的攻擊標的時可以發動。從自己的手牌·墓地選這張卡以外的1隻水屬性怪獸特殊召喚。此效果特殊召喚的怪獸在結束階段回到持有者手牌。這回合，這張卡不會被戰鬥·效果破壞。`,
    quote: '「引導水流與冰霜的冰水族少女。」',
    stars: 4,
  },
  {
    id: 'kosmochlor',
    name: '冰水之帝王 柯絲莫克洛爾',
    japaneseName: '氷水帝コスモクロア',
    englishName: 'Icejade Kosmochlor',
    cardType: CARD_TYPES.EFFECT,
    attribute: ATTRIBUTES.WATER,
    attributeIcon: '水',
    level: 10,
    race: '水族',
    subTypes: ['效果'],
    atk: 1500,
    def: 3000,
    rarity: 'Ultra Rare (金字亮面)',
    frameType: 'effect',
    image: imgKosmochlor,
    bgImage: imgCradle,
    fgParticles: imgFgParticles,
    description: `此卡名的①方法的特殊召喚1回合只能有1次。
①：場上有區域魔法卡存在的場合，這張卡可以從手牌特殊召喚。
②：只要場上有「冰水底 搖籃」存在，對手場上的怪獸只能在召喚·特殊召喚的回合發動效果。
③：這張卡和對手怪獸進行戰鬥的傷害步驟內，該對手怪獸的攻擊力下降1000。`,
    quote: '「深海沉睡的冰水主宰，鎮壓一切強敵。」',
    stars: 10,
  },
  {
    id: 'enion-cradle',
    name: '冰水底 搖籃',
    japaneseName: '氷水底エーギロカシス',
    englishName: 'Icejade Cenote Enion Cradle',
    cardType: CARD_TYPES.SPELL,
    attribute: ATTRIBUTES.SPELL,
    attributeIcon: '魔',
    spellTrapType: '【場地魔法】',
    rarity: 'Super Rare (亮面)',
    frameType: 'spell', // Teal frame
    image: imgCradle,
    bgImage: imgCradle,
    fgParticles: imgFgParticles,
    description: `此卡名的卡1回合只能發動1張，此卡名的③效果1回合只能使用1次。
①：作為這張卡發動時的效果處理，可以從自己墓地的怪獸以及除外的自己怪獸中選1隻「冰水」怪獸加入手牌。
②：場上的怪獸的攻擊力下降除外中的怪獸數量×100。
③：1回合1次，自己場上有「冰水」怪獸召喚·特殊召喚的場合，以對手場上1隻表側表示怪獸為標的可以發動。該怪獸的攻擊力直到回合結束時下降自己場上的「冰水」怪獸數量×500。`,
    quote: '「孕育冰水一族力量的純淨深海神殿。」',
  },
  {
    id: 'erosion',
    name: '冰水浸蝕',
    japaneseName: '氷水浸蝕',
    englishName: 'Icejade Erosion',
    cardType: CARD_TYPES.TRAP,
    attribute: ATTRIBUTES.TRAP,
    attributeIcon: '陷',
    spellTrapType: '【永續陷阱】',
    rarity: 'Rare (銀字)',
    frameType: 'trap', // Magenta frame
    image: imgErosion,
    bgImage: imgCradle,
    fgParticles: imgFgParticles,
    description: `此卡名的①②效果1回合各能使用1次。
①：以對手場上1張表側表示的卡為標的可以發動。自己場上選1隻「冰水」怪獸破壞，標的的卡的效果直到回合結束時無效。
②：自己場上的表側表示水屬性怪獸因破壞以外的方法離場的場合可以發動。從牌組選1隻「冰水」怪獸加入手牌或特殊召喚。`,
    quote: '「將一切敵意冰封凍結的嚴寒屏障。」',
  },
  {
    id: 'curse',
    name: '冰水咒印',
    japaneseName: '氷水呪縛',
    englishName: 'Icejade Curse',
    cardType: CARD_TYPES.SPELL,
    attribute: ATTRIBUTES.SPELL,
    attributeIcon: '魔',
    spellTrapType: '【永續魔法】',
    rarity: 'Rare (銀字)',
    frameType: 'spell',
    image: imgCradle,
    bgImage: imgCradle,
    fgParticles: imgFgParticles,
    description: `此卡名的②效果1回合只能使用1次。
①：只要場上有「冰水」怪獸以及「冰水底 搖籃」存在，對手發動該回合召喚·特殊召喚的怪獸的效果時，該怪獸破壞。
②：自己場上的「冰水」怪獸因戰鬥破壞對手怪獸時，以該1隻被破壞的對手怪獸為標的可以發動。給予對手該怪獸原本攻擊力數值的傷害。`,
    quote: '「古老的凍結咒術，凡犯境者皆化為冰雕。」',
  },
];
