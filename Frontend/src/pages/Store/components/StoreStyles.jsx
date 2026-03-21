const StoreStyles = () => (
  <style>{`
    /* ── Google Fonts ─────────────────────────────────────────── */
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

    /* ── Design Tokens ────────────────────────────────────────── */
    :root {
      --void:    #030304;
      --surface: #0F1115;
      --orange:  #F7931A;
      --burnt:   #EA580C;
      --gold:    #FFD600;
      --muted:   #94A3B8;
      --border:  rgba(255,255,255,0.08);
      --border-active: rgba(247,147,26,0.5);
      --glow-sm:  0 0 20px -5px rgba(234,88,12,0.5);
      --glow-md:  0 0 30px -5px rgba(247,147,26,0.6);
      --glow-lg:  0 0 50px -10px rgba(247,147,26,0.15);
      --glow-gold: 0 0 20px rgba(255,214,0,0.3);
    }

    /* ── Font Utility Classes ─────────────────────────────────── */
    .font-heading { font-family: 'Space Grotesk', sans-serif; }
    .font-body    { font-family: 'Inter', sans-serif; }
    .font-mono    { font-family: 'JetBrains Mono', monospace; }

    /* ── Background ───────────────────────────────────────────── */
    .store-bg {
      background-color: var(--void);
      font-family: 'Inter', sans-serif;
      color: #fff;
      min-height: 100vh;
    }

    /* ── Grid Pattern Overlay ─────────────────────────────────── */
    .store-grid-bg {
      background-size: 50px 50px;
      background-image:
        linear-gradient(to right, rgba(30,41,59,0.5) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(30,41,59,0.5) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
    }

    /* ── Card ─────────────────────────────────────────────────── */
    .store-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      transition: all 0.3s ease;
    }
    .store-card:hover {
      transform: translateY(-4px);
      border-color: var(--border-active);
      box-shadow: var(--glow-lg);
    }

    /* ── Glass Card ───────────────────────────────────────────── */
    .store-glass {
      background: rgba(0,0,0,0.4);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 16px;
    }

    /* ── Primary Button ───────────────────────────────────────── */
    .store-btn {
      background: linear-gradient(to right, var(--burnt), var(--orange));
      color: #fff;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      border-radius: 9999px;
      padding: 12px 28px;
      border: none;
      cursor: pointer;
      box-shadow: var(--glow-sm);
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .store-btn:hover {
      transform: scale(1.05);
      box-shadow: var(--glow-md);
    }

    /* ── Outline Button ───────────────────────────────────────── */
    .store-btn-outline {
      background: transparent;
      color: #fff;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      border-radius: 9999px;
      padding: 11px 28px;
      border: 2px solid rgba(255,255,255,0.2);
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .store-btn-outline:hover {
      border-color: #fff;
      background: rgba(255,255,255,0.08);
    }

    /* ── Badge ────────────────────────────────────────────────── */
    .store-badge {
      background: rgba(247,147,26,0.12);
      border: 1px solid rgba(247,147,26,0.3);
      color: var(--orange);
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      border-radius: 9999px;
      padding: 4px 12px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    /* ── Section Title ─────────────────────────────────────────── */
    .store-section-title {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .store-section-title::before {
      content: '';
      display: block;
      width: 4px;
      height: 28px;
      border-radius: 4px;
      background: linear-gradient(to bottom, var(--burnt), var(--orange));
      box-shadow: var(--glow-sm);
      flex-shrink: 0;
    }

    /* ── Gradient Text ─────────────────────────────────────────── */
    .store-gradient-text {
      background: linear-gradient(to right, var(--orange), var(--gold));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ── Input ─────────────────────────────────────────────────── */
    .store-input {
      background: rgba(0,0,0,0.5);
      border: none;
      border-bottom: 2px solid rgba(255,255,255,0.2);
      color: #fff;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      height: 48px;
      padding: 0 16px;
      outline: none;
      transition: all 0.2s;
      border-radius: 0;
    }
    .store-input::placeholder { color: rgba(255,255,255,0.3); }
    .store-input:focus       { border-bottom-color: var(--orange); box-shadow: 0 10px 20px -10px rgba(247,147,26,0.3); }

    /* ── Select ─────────────────────────────────────────────────── */
    .store-select {
      background: rgba(15,17,21,0.9);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px;
      color: #fff;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 10px 40px 10px 16px;
      cursor: pointer;
      outline: none;
      appearance: none;
      -webkit-appearance: none;
      transition: border-color 0.2s;
    }
    .store-select:focus { border-color: var(--orange); }
    .store-select option { background: var(--surface); }

    /* ── Sidebar Styles ─────────────────────────────────────────── */
    .store-sidebar {
      background: var(--surface);
      border-right: 1px solid rgba(255,255,255,0.06);
    }
    .store-nav-link {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-radius: 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--muted);
      transition: all 0.25s ease;
      position: relative;
    }
    .store-nav-link:hover {
      background: rgba(247,147,26,0.08);
      color: #fff;
      transform: translateX(4px);
    }
    .store-nav-link-active {
      background: rgba(247,147,26,0.1);
      color: var(--orange) !important;
      transform: translateX(6px);
      box-shadow: inset 3px 0 0 var(--orange);
    }
    .store-nav-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      border-radius: 8px;
      background: rgba(234,88,12,0.15);
      border: 1px solid rgba(234,88,12,0.3);
      flex-shrink: 0;
      transition: all 0.25s;
    }
    .store-nav-link:hover .store-nav-icon,
    .store-nav-link-active .store-nav-icon {
      background: rgba(247,147,26,0.2);
      border-color: rgba(247,147,26,0.6);
      box-shadow: 0 0 12px rgba(247,147,26,0.25);
    }

    /* ── Radial Glow Blob ──────────────────────────────────────── */
    .store-glow-blob {
      position: absolute;
      border-radius: 50%;
      background: var(--orange);
      opacity: 0.07;
      filter: blur(100px);
      pointer-events: none;
    }

    /* ── Animations ─────────────────────────────────────────────── */
    @keyframes store-float {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-18px); }
    }
    @keyframes store-glow-pulse {
      0%, 100% { box-shadow: 0 0 8px rgba(247,147,26,0.4); }
      50%       { box-shadow: 0 0 20px rgba(247,147,26,0.8); }
    }
    @keyframes store-marquee {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes store-ping {
      75%, 100% { transform: scale(2); opacity: 0; }
    }
    @keyframes store-spin-slow {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    @keyframes store-spin-reverse {
      from { transform: rotate(360deg); }
      to   { transform: rotate(0deg); }
    }
    @keyframes store-entrance {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .store-animate-float    { animation: store-float 8s ease-in-out infinite; }
    .store-animate-spin-slow{ animation: store-spin-slow 12s linear infinite; }
    .store-animate-spin-rev { animation: store-spin-reverse 18s linear infinite; }
    .store-animate-marquee  { display:flex; width:max-content; animation: store-marquee 28s linear infinite; }
    .store-animate-marquee:hover { animation-play-state: paused; }
    .store-animate-entrance { animation: store-entrance 0.6s ease-out both; }
    .store-ping {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: var(--orange);
      animation: store-ping 1.5s cubic-bezier(0,0,0.2,1) infinite;
    }
    .store-led {
      position: relative;
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--orange);
      box-shadow: 0 0 8px var(--orange);
      flex-shrink: 0;
    }

    /* ── Scrollbar ───────────────────────────────────────────────── */
    .store-sidebar::-webkit-scrollbar        { width: 4px; }
    .store-sidebar::-webkit-scrollbar-track  { background: transparent; }
    .store-sidebar::-webkit-scrollbar-thumb  { background: rgba(247,147,26,0.3); border-radius: 4px; }

    /* ── Corner Accents ─────────────────────────────────────────── */
    .store-corner-tl { position:absolute; top:16px; left:16px;  width:20px; height:20px; border-top:2px solid rgba(247,147,26,0.5); border-left:2px solid rgba(247,147,26,0.5); }
    .store-corner-tr { position:absolute; top:16px; right:16px; width:20px; height:20px; border-top:2px solid rgba(247,147,26,0.5); border-right:2px solid rgba(247,147,26,0.5); }
    .store-corner-bl { position:absolute; bottom:16px; left:16px;  width:20px; height:20px; border-bottom:2px solid rgba(247,147,26,0.5); border-left:2px solid rgba(247,147,26,0.5); }
    .store-corner-br { position:absolute; bottom:16px; right:16px; width:20px; height:20px; border-bottom:2px solid rgba(247,147,26,0.5); border-right:2px solid rgba(247,147,26,0.5); }
  `}</style>
);

export default StoreStyles;
