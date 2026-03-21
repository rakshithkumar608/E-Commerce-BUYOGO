const SportsStyles = () => (
  <style>{`
    /* ── Google Fonts ─────────────────────────────────────────── */
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;900&display=swap');

    /* ── Bauhaus Design Tokens ────────────────────────────────── */
    :root {
      --bh-bg:       #F0F0F0;
      --bh-fg:       #121212;
      --bh-red:      #D02020;
      --bh-blue:     #1040C0;
      --bh-yellow:   #F0C020;
      --bh-muted:    #E0E0E0;
      --bh-white:    #FFFFFF;
      --bh-shadow-sm: 3px 3px 0px 0px #121212;
      --bh-shadow-md: 6px 6px 0px 0px #121212;
      --bh-shadow-lg: 8px 8px 0px 0px #121212;
    }

    /* ── Base ──────────────────────────────────────────────────── */
    .bh-bg {
      background-color: var(--bh-bg);
      font-family: 'Outfit', sans-serif;
      color: var(--bh-fg);
      min-height: 100vh;
    }

    /* ── Cards ─────────────────────────────────────────────────── */
    .bh-card {
      background: var(--bh-white);
      border: 4px solid var(--bh-fg);
      box-shadow: var(--bh-shadow-lg);
      transition: transform 0.2s ease-out;
      position: relative;
    }
    .bh-card:hover {
      transform: translateY(-4px);
    }

    .bh-card-sm {
      background: var(--bh-white);
      border: 2px solid var(--bh-fg);
      box-shadow: var(--bh-shadow-sm);
      transition: transform 0.2s ease-out;
    }
    .bh-card-sm:hover {
      transform: translateY(-2px);
    }

    /* ── Buttons ───────────────────────────────────────────────── */
    .bh-btn {
      font-family: 'Outfit', sans-serif;
      font-weight: 700;
      font-size: 12px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 12px 24px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s ease-out;
      border: none;
    }

    .bh-btn-red {
      background: var(--bh-red);
      color: white;
      border: 2px solid var(--bh-fg);
      box-shadow: var(--bh-shadow-sm);
    }
    .bh-btn-red:active { transform: translate(3px, 3px); box-shadow: none; }
    .bh-btn-red:hover { opacity: 0.9; }

    .bh-btn-blue {
      background: var(--bh-blue);
      color: white;
      border: 2px solid var(--bh-fg);
      box-shadow: var(--bh-shadow-sm);
    }
    .bh-btn-blue:active { transform: translate(3px, 3px); box-shadow: none; }
    .bh-btn-blue:hover { opacity: 0.9; }

    .bh-btn-yellow {
      background: var(--bh-yellow);
      color: var(--bh-fg);
      border: 2px solid var(--bh-fg);
      box-shadow: var(--bh-shadow-sm);
    }
    .bh-btn-yellow:active { transform: translate(3px, 3px); box-shadow: none; }
    .bh-btn-yellow:hover { opacity: 0.9; }

    .bh-btn-outline {
      background: var(--bh-white);
      color: var(--bh-fg);
      border: 2px solid var(--bh-fg);
      box-shadow: var(--bh-shadow-sm);
    }
    .bh-btn-outline:active { transform: translate(3px, 3px); box-shadow: none; }
    .bh-btn-outline:hover { background: var(--bh-muted); }

    /* ── Section Title ─────────────────────────────────────────── */
    .bh-section-title {
      font-family: 'Outfit', sans-serif;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -0.03em;
      line-height: 0.9;
      color: var(--bh-fg);
    }

    /* ── Input ─────────────────────────────────────────────────── */
    .bh-input {
      font-family: 'Outfit', sans-serif;
      font-weight: 500;
      font-size: 13px;
      background: white;
      border: 2px solid var(--bh-fg);
      padding: 10px 14px;
      outline: none;
      transition: box-shadow 0.2s;
    }
    .bh-input:focus { box-shadow: var(--bh-shadow-sm); }
    .bh-input::placeholder { color: #999; }

    .bh-select {
      font-family: 'Outfit', sans-serif;
      font-weight: 700;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background: white;
      border: 2px solid var(--bh-fg);
      padding: 10px 36px 10px 14px;
      cursor: pointer;
      outline: none;
      appearance: none;
      -webkit-appearance: none;
    }
    .bh-select:focus { box-shadow: var(--bh-shadow-sm); }

    /* ── Sidebar ───────────────────────────────────────────────── */
    .bh-sidebar {
      background: var(--bh-bg);
      border-right: 4px solid var(--bh-fg);
      font-family: 'Outfit', sans-serif;
    }

    .bh-nav-link {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      font-weight: 700;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--bh-fg);
      transition: all 0.2s ease-out;
      border: 2px solid transparent;
      position: relative;
    }
    .bh-nav-link:hover {
      background: var(--bh-yellow);
      border-color: var(--bh-fg);
      transform: translateX(4px);
    }
    .bh-nav-link-active {
      background: var(--bh-red);
      color: white !important;
      border-color: var(--bh-fg);
      box-shadow: var(--bh-shadow-sm);
      transform: translateX(4px);
    }
    .bh-nav-link-active .bh-nav-shape {
      background: white !important;
    }

    /* ── Dot Grid Pattern ──────────────────────────────────────── */
    .bh-dot-grid {
      background-image: radial-gradient(#121212 1.5px, transparent 1.5px);
      background-size: 20px 20px;
      opacity: 0.08;
    }

    /* ── Geometric Shapes ──────────────────────────────────────── */
    .bh-nav-shape {
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      border: 2px solid var(--bh-fg);
    }

    .bh-triangle {
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 18px solid var(--bh-fg);
    }

    /* ── Decorative Corner Shapes ──────────────────────────────── */
    .bh-deco-circle { width:12px; height:12px; border-radius:50%; }
    .bh-deco-square { width:12px; height:12px; }
    .bh-deco-tri    { width:0; height:0; border-left:6px solid transparent; border-right:6px solid transparent; border-bottom:10px solid currentColor; }

    /* ── Animations ────────────────────────────────────────────── */
    @keyframes bh-entrance {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .bh-animate-entrance {
      animation: bh-entrance 0.4s ease-out both;
    }

    /* ── Scrollbar ─────────────────────────────────────────────── */
    .bh-sidebar::-webkit-scrollbar { width: 4px; }
    .bh-sidebar::-webkit-scrollbar-track { background: var(--bh-bg); }
    .bh-sidebar::-webkit-scrollbar-thumb { background: var(--bh-fg); }

    /* ── Color-blocked sections ─────────────────────────────────── */
    .bh-section-divider { border-bottom: 4px solid var(--bh-fg); }
  `}</style>
);

export default SportsStyles;
