
const ElectronicsStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap');

    :root {
     
      --elec-bg:         #0a0a0f;
      --elec-surface:    #12121a;
      --elec-card:       #16161f;
      --elec-border:     rgba(255, 255, 255, 0.06);
      --elec-border-hover: rgba(255, 255, 255, 0.12);
      --elec-text:       #e8e8ed;
      --elec-text-muted: #6b6b80;

      
      --accent-red:      #ff4757;
      --accent-cyan:     #00d2ff;
      --accent-amber:    #f59e0b;
      --accent-green:    #22c55e;
      --accent-magenta:  #e84393;
      --accent-blue:     #3b82f6;

     
      --shadow-card:     0 2px 16px rgba(0,0,0,0.4), 0 0 0 1px var(--elec-border);
      --shadow-floating: 0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px var(--elec-border-hover);
      --shadow-recessed: inset 0 2px 8px rgba(0,0,0,0.5);
      --shadow-glow-cyan: 0 0 20px rgba(0,210,255,0.15), 0 0 0 1px rgba(0,210,255,0.2);
    }

  
    .industrial-bg {
      background-color: var(--elec-bg);
      background-image:
        radial-gradient(ellipse at 20% 0%, rgba(0,210,255,0.04) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 100%, rgba(232,67,147,0.03) 0%, transparent 50%);
    }

    
    .elec-grid-bg {
      background-image:
        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
      background-size: 48px 48px;
    }

   
    .industrial-panel {
      background: var(--elec-card);
      border: 1px solid var(--elec-border);
      border-radius: 16px;
      position: relative;
      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
      backdrop-filter: blur(12px);
    }

    .industrial-panel:hover {
      border-color: var(--elec-border-hover);
      box-shadow: var(--shadow-floating);
      transform: translateY(-4px);
    }

    .industrial-panel::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 1px;
      pointer-events: none;
      border-radius: 16px 16px 0 0;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
    }

    
    .mechanical-key {
      background: var(--accent-red);
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 700;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(255,71,87,0.3);
      transition: all 200ms ease;
    }

    .mechanical-key:hover {
      filter: brightness(1.15);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(255,71,87,0.4);
    }

    .mechanical-key:active {
      transform: translateY(1px);
      box-shadow: 0 2px 8px rgba(255,71,87,0.2);
    }

    
    .font-mono { font-family: 'JetBrains Mono', monospace; }

   
    .industrial-input {
      background: var(--elec-surface);
      border: 1px solid var(--elec-border);
      outline: none;
      border-radius: 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 600;
      color: var(--elec-text);
      transition: all 0.3s ease;
    }
    .industrial-input:focus {
      border-color: var(--accent-cyan);
      box-shadow: 0 0 0 3px rgba(0,210,255,0.15);
    }
    .industrial-input::placeholder {
      color: var(--elec-text-muted);
      opacity: 0.6;
    }

    .industrial-select {
      background: var(--elec-surface);
      border: 1px solid var(--elec-border);
      outline: none;
      border-radius: 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 600;
      color: var(--elec-text);
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .industrial-select:focus {
      border-color: var(--accent-cyan);
      box-shadow: 0 0 0 3px rgba(0,210,255,0.15);
    }

   
    .led {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: inline-block;
      box-shadow: 0 0 10px currentColor, 0 0 4px currentColor;
    }

    .animate-led-pulse {
      animation: led-pulse 2s infinite;
    }

    @keyframes led-pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.85); }
    }

   
    .scanline-screen {
      background: linear-gradient(rgba(255,255,255,0) 50%, rgba(0,0,0,0.15) 50%);
      background-size: 100% 4px;
    }

   
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

    
    .elec-gradient-text {
      background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    
    .elec-section-title {
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      color: var(--elec-text);
      letter-spacing: -0.02em;
    }

    
    .elec-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      padding: 6px 12px;
      border-radius: 100px;
      background: rgba(0,210,255,0.1);
      border: 1px solid rgba(0,210,255,0.2);
      color: var(--accent-cyan);
    }

    
    .elec-corner-tl {
      position: absolute;
      top: 12px; left: 12px;
      width: 16px; height: 16px;
      border-top: 1px solid rgba(255,255,255,0.1);
      border-left: 1px solid rgba(255,255,255,0.1);
      pointer-events: none;
    }
    .elec-corner-br {
      position: absolute;
      bottom: 12px; right: 12px;
      width: 16px; height: 16px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      border-right: 1px solid rgba(255,255,255,0.1);
      pointer-events: none;
    }

  
    @media (max-width: 768px) {
      .industrial-panel {
        border-radius: 12px;
      }
      .industrial-panel::before {
        border-radius: 12px 12px 0 0;
      }
      .industrial-panel:hover {
        transform: translateY(-2px);
      }
      .mechanical-key {
        font-size: 11px;
        border-radius: 10px;
      }
    }

    /* Mobile (≤ 480px) */
    @media (max-width: 480px) {
      .industrial-panel {
        border-radius: 10px;
      }
      .industrial-panel::before {
        border-radius: 10px 10px 0 0;
      }
      .industrial-panel:hover {
        transform: none;
        box-shadow: var(--shadow-card);
      }
      .mechanical-key {
        font-size: 10px;
        border-radius: 8px;
      }
    }
  `}</style>
);

export default ElectronicsStyles;
