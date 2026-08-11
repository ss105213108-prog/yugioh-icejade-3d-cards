# 遊戲王「冰水 (Icejade)」主題 3D 立體卡牌展演庫 🎴❄️

一個使用 **React + Vite + Tailwind CSS** 打造的遊戲王 (Yu-Gi-Oh!)「冰水 (Icejade)」主題純前端卡牌展示系統。具備高質感遊戲王經典卡面、白色同步怪獸卡面、點擊 3D 多圖層視差懸浮與動態鐳射閃卡 (Secret Rare Holographic Sheen) 光澤與原生 Web Audio 冰晶音效！

![Icejade Card Showcase](public/images/icejade_gymir_aegirine.png)

## ✨ 核心特色 (Key Features)

- 🎴 **遊戲王經典卡面重現**：
  - **白色卡面 (同步怪獸 Synchro)**：`冰水帝極 耀變翡翠 (Icejade Gymir Aegirine)`
  - **棕橘色卡面 (效果怪獸 Effect)**：`冰水之翡翠`、`冰水之帝王`、`冰水之翠玉` 等
  - **翡翠綠卡面 (場地/永續魔法卡 Spell)**：`冰水底 搖籃`、`冰水咒印`
  - **玫紅粉卡面 (永續陷阱卡 Trap)**：`冰水浸蝕`
- 🌌 **3D 多圖層視差與鐳射閃卡 (3D Parallax & Holographic Sheen)**：
  - 點擊卡片彈出全螢幕 3D 特寫視窗。
  - 懸浮與移動時動態計算 `rotateX` 與 `rotateY` 視角。
  - 卡面拆分為背景冰脈、主角怪獸與前景冰晶懸浮圖層，打造深度浮雕質感與 Color-Dodge 炫彩鐳射折射。
- 🎵 **Web Audio 冰晶音效**：
  - 內建原生 Web Audio API，懸浮與開啟 3D 特寫時發出清亮冰晶迴響。
- 🔍 **分類頁籤與即時搜尋**：
  - 按全部、同步怪獸 (白卡)、效果怪獸、魔法卡、陷阱卡過濾，並支援關鍵字搜尋。

---

## 🚀 快速開始 (Quick Start)

### 1. 安裝套件
```bash
npm install
```

### 2. 啟動開發伺服器
```bash
npm run dev
```
瀏覽器開啟 `http://localhost:5173/` 即可體驗！

### 3. 打包正式版本
```bash
npm run build
```

---

## 🛠️ 技術棧 (Tech Stack)

- **前端框架**：React 19 / Vite 6
- **樣式與 3D 效果**：Tailwind CSS / CSS 3D Perspective Transforms
- **圖示庫**：Lucide React
- **音效合成**：Web Audio API
