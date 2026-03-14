
const ElectronicsStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap');

    :root {
      /* ─── Core Palette ─────────────────────────────── */
      --chassis: #e0e5ec;
      --panel: #f0f2f5;
      --recessed: #d1d9e6;
      --text-primary: #2d3436;
      --text-muted: #4a5568;

      /* ─── Accent Colors (per category) ──────────────── */
      --accent-red: #ff4757;
      --accent-cyan: #00d2ff;
      --accent-amber: #f59e0b;
      --accent-green: #22c55e;
      --accent-magenta: #e84393;
      --accent-blue: #3b82f6;

      /* ─── Neumorphic Shadows ────────────────────────── */
      --shadow-card: 8px 8px 16px #babecc, -8px -8px 16px #ffffff;
      --shadow-floating: 12px 12px 24px #babecc, -12px -12px 24px #ffffff;
      --shadow-pressed: inset 6px 6px 12px #babecc, inset -6px -6px 12px #ffffff;
      --shadow-recessed: inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff;
    }

    /* ─── Background ────────────────────────────────── */
    .industrial-bg {
      background-color: var(--chassis);
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
    }

    /* ─── Panels ────────────────────────────────────── */
    .industrial-panel {
      background: var(--chassis);
      box-shadow: var(--shadow-card);
      border-radius: 16px;
      position: relative;
      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .industrial-panel:hover {
      box-shadow: var(--shadow-floating);
      transform: translateY(-4px);
    }

    .industrial-panel::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      pointer-events: none;
      border-radius: 16px;
      background-image:
        radial-gradient(circle at 12px 12px, rgba(0,0,0,0.1) 2px, transparent 3px),
        radial-gradient(circle at calc(100% - 12px) 12px, rgba(0,0,0,0.1) 2px, transparent 3px),
        radial-gradient(circle at 12px calc(100% - 12px), rgba(0,0,0,0.1) 2px, transparent 3px),
        radial-gradient(circle at calc(100% - 12px) calc(100% - 12px), rgba(0,0,0,0.1) 2px, transparent 3px);
    }

    /* ─── Buttons ────────────────────────────────────── */
    .mechanical-key {
      background: var(--accent-red);
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 700;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 12px;
      cursor: pointer;
      box-shadow: 4px 4px 8px rgba(166,50,60,0.3), -2px -2px 4px rgba(255,255,255,0.2);
      transition: all 150ms ease;
    }

    .mechanical-key:hover {
      filter: brightness(1.08);
      transform: translateY(-1px);
    }

    .mechanical-key:active {
      transform: translateY(2px);
      box-shadow: inset 4px 4px 8px rgba(0,0,0,0.2), inset -2px -2px 4px rgba(255,255,255,0.1);
    }

    /* ─── Typography ─────────────────────────────────── */
    .font-mono { font-family: 'JetBrains Mono', monospace; }

    /* ─── Inputs ─────────────────────────────────────── */
    .industrial-input {
      background: var(--chassis);
      box-shadow: var(--shadow-recessed);
      border: none;
      outline: none;
      border-radius: 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 600;
      color: var(--text-primary);
      transition: all 0.3s ease;
    }
    .industrial-input:focus {
      box-shadow: var(--shadow-recessed), 0 0 0 2px var(--accent-cyan);
    }
    .industrial-input::placeholder {
      opacity: 0.4;
    }

    .industrial-select {
      background: var(--chassis);
      box-shadow: var(--shadow-recessed);
      border: none;
      outline: none;
      border-radius: 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 600;
      color: var(--text-primary);
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .industrial-select:focus {
      box-shadow: var(--shadow-recessed), 0 0 0 2px var(--accent-cyan);
    }

    /* ─── LED Indicators ─────────────────────────────── */
    .led {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: inline-block;
      box-shadow: 0 0 8px currentColor;
    }

    .animate-led-pulse {
      animation: led-pulse 2s infinite;
    }

    @keyframes led-pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(0.9); }
    }

    /* ─── Scanline Overlay ────────────────────────────── */
    .scanline-screen {
      background: linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.08) 50%);
      background-size: 100% 4px;
    }

    /* ─── Animations ──────────────────────────────────── */
    @keyframes slideUpFade {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .animate-entrance {
      animation: slideUpFade 0.6s ease-out forwards;
    }

    @keyframes cardEntrance {
      from { opacity: 0; transform: translateY(20px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    @keyframes heroPulse {
      0%, 100% { opacity: 0.06; }
      50%      { opacity: 0.12; }
    }
  `}</style>
);

export default ElectronicsStyles;
