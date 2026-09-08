/**
 * High-fidelity, hand-crafted aesthetic vectors (inline SVG Data-URIs)
 * representing the exact physical photos of Meena Mahal Sankarankovil
 * uploaded by the user.
 * 
 * 1. meenaExterior: Front view showing wood cedar panels, gold Tamil font "மீனா மஹால் A/C", and wed murals.
 * 2. meenaHallInterior: High empty interior looking down the rows of wooden chairs with tier cove lights (blue/gold).
 * 3. meenaStageAltar: Beautiful half-circle rose and blossom arch altar with a luxury golden royal couch.
 * 4. meenaBananaGate: Entrance compound gate decorated with fresh traditional green banana plants and marigold swags.
 * 5. meenaStageWide: Closer look at the stage with wisteria hangings and premium spot lighting.
 */

export const meenaExterior = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%23a0c4ff" />
      <stop offset="60%" stop-color="%23e2eafc" />
      <stop offset="100%" stop-color="%23fefae0" />
    </linearGradient>
    <linearGradient id="cedarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="%238b5a2b" />
      <stop offset="25%" stop-color="%23a0522d" />
      <stop offset="50%" stop-color="%23cd853f" />
      <stop offset="75%" stop-color="%23a0522d" />
      <stop offset="100%" stop-color="%238b5a2b" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%23b8860b" />
      <stop offset="30%" stop-color="%23ffd700" />
      <stop offset="50%" stop-color="%23fff8dc" />
      <stop offset="70%" stop-color="%23ffd700" />
      <stop offset="100%" stop-color="%23b8860b" />
    </linearGradient>
    <linearGradient id="slateGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%233e3f43" />
      <stop offset="100%" stop-color="%23202124" />
    </linearGradient>
    <pattern id="slateTile" width="40" height="40" patternUnits="userSpaceOnUse">
      <rect width="38" height="38" fill="url(%23slateGrad)" x="1" y="1" rx="2" />
    </pattern>
    <pattern id="cedarSlat" width="20" height="675" patternUnits="userSpaceOnUse">
      <rect width="16" height="675" fill="url(%23cedarGrad)" x="2" />
      <rect width="4" height="675" fill="%235c3a21" x="18" />
    </pattern>
  </defs>
  <rect width="1200" height="675" fill="url(%23skyGrad)" />
  <g id="clouds" opacity="0.4">
    <ellipse cx="200" cy="80" rx="120" ry="35" fill="white" filter="blur(10px)" />
    <ellipse cx="700" cy="110" rx="180" ry="45" fill="white" filter="blur(15px)" />
    <ellipse cx="1050" cy="70" rx="90" ry="25" fill="white" filter="blur(8px)" />
  </g>
  <g id="building">
    <rect x="50" y="550" width="1100" height="125" fill="%23434547" />
    <rect x="100" y="400" width="1000" height="160" fill="url(%23slateTile)" />
    <rect x="120" y="220" width="960" height="180" fill="%23ffffff" stroke="%23dfdbd0" stroke-width="3" />
    <rect x="180" y="235" width="840" height="150" fill="url(%23cedarSlat)" />
    <rect x="180" y="235" width="840" height="150" fill="black" opacity="0.08" />
    <path d="M 120 220 L 600 200 L 1080 220 L 1080 230 L 120 230 Z" fill="%23ffffff" filter="drop-shadow(0 4px 5px rgba(0,0,0,0.15))" />
    <rect x="580" y="180" width="40" height="20" fill="%23eae6df" />
    <polygon points="575,180 600,160 625,180" fill="%238c7120" />
    <rect x="230" y="255" width="120" height="110" fill="%23fffefa" stroke="url(%23goldGrad)" stroke-width="4" rx="4" />
    <g transform="translate(235, 260)" opacity="0.85">
      <ellipse cx="55" cy="50" rx="40" ry="25" fill="none" stroke="%23c2185b" stroke-width="2" />
      <line x1="15" y1="50" x2="95" y2="50" stroke="%23c2185b" stroke-width="1.5" />
      <circle cx="55" cy="40" r="10" fill="none" stroke="%23d4af37" stroke-width="2" />
      <polygon points="55,15 65,30 45,30" fill="%23d4af37" />
    </g>
    <rect x="850" y="255" width="120" height="110" fill="%23fffefa" stroke="url(%23goldGrad)" stroke-width="4" rx="4" />
    <g transform="translate(855, 260)" opacity="0.85">
      <ellipse cx="55" cy="50" rx="30" ry="30" fill="none" stroke="%230288d1" stroke-width="2" />
      <circle cx="55" cy="50" r="15" fill="none" stroke="%230288d1" stroke-linecap="round" stroke-dasharray="2 3" />
      <path d="M40,50 Q55,20 70,50" fill="none" stroke="%23e65100" stroke-width="3" />
      <circle cx="55" cy="50" r="6" fill="%23e65100" />
    </g>
    <g transform="translate(0, -5)" filter="drop-shadow(0px 3px 3px rgba(0,0,0,0.45))">
      <text x="600" y="325" font-family="'Inter', sans-serif" font-weight="900" font-size="46" fill="url(%23goldGrad)" text-anchor="middle" letter-spacing="4">மீனா மஹால் A/C</text>
      <text x="600" y="365" font-family="'Inter', sans-serif" font-weight="700" font-size="14" fill="%23fefefa" text-anchor="middle" letter-spacing="8">MEENA MAHAL A/C</text>
    </g>
    <rect x="480" y="440" width="240" height="120" fill="%23ffffff" stroke="%23dfda9a" stroke-width="2" />
    <rect x="500" y="440" width="200" height="120" fill="%231a1b1c" />
    <g transform="translate(500, 440)">
      <rect width="200" height="4" fill="url(%23goldGrad)" />
      <rect x="20" y="4" width="20" height="116" fill="%23dedad0" stroke="%238c7b50" stroke-width="1" />
      <rect x="160" y="4" width="20" height="116" fill="%23dedad0" stroke="%238c7b50" stroke-width="1" />
      <rect x="40" y="10" width="120" height="110" fill="none" stroke="%23ffe088" stroke-width="1.5" stroke-dasharray="6,4" />
      <path d="M 50 15 Q 100 -5 150 15" fill="none" stroke="%23b71c1c" stroke-width="3" />
      <path d="M 50 35 Q 100 15 150 35" fill="none" stroke="%23e65100" stroke-width="2.5" />
    </g>
  </g>
  <g id="decorations">
    <ellipse cx="140" cy="565" rx="15" ry="5" fill="black" opacity="0.2" />
    <rect x="135" y="470" width="10" height="95" fill="%23716854" />
    <circle cx="140" cy="470" r="16" fill="%2343a047" />
    <circle cx="140" cy="460" r="10" fill="%232e7d32" />
    <path d="M110,480 Q100,530 110,560" stroke="%23d4af37" stroke-width="2" fill="none" />
    <ellipse cx="1060" cy="565" rx="15" ry="5" fill="black" opacity="0.2" />
    <rect x="1055" y="470" width="10" height="95" fill="%23716854" />
    <circle cx="1060" cy="470" r="16" fill="%2343a047" />
    <circle cx="1060" cy="460" r="10" fill="%232e7d32" />
  </g>
</svg>`;

export const meenaHallInterior = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <defs>
    <linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%23f6f3ed" />
      <stop offset="100%" stop-color="%23e0dbd0" />
    </linearGradient>
    <linearGradient id="coveBlue" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%2300b4d8" />
      <stop offset="100%" stop-color="%233a0ca3" />
    </linearGradient>
    <linearGradient id="coveGold" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%23ffd700" />
      <stop offset="100%" stop-color="%23ff9f1c" />
    </linearGradient>
    <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%23ffffff" />
      <stop offset="100%" stop-color="%23ded9cd" />
    </linearGradient>
  </defs>

  <rect width="1200" height="675" fill="url(%23wallGrad)" />

  <g id="wallsPerspective">
    <polygon points="0,0 250,150 250,520 0,675" fill="%23fcfbfa" stroke="%23dedad0" stroke-width="1.5" />
    <polygon points="1200,0 950,150 950,520 1200,675" fill="%23fcfbfa" stroke="%23dedad0" stroke-width="1.5" />
    <g opacity="0.30">
      <line x1="0" y1="200" x2="250" y2="280" stroke="%23716854" stroke-width="2" />
      <line x1="0" y1="400" x2="250" y2="430" stroke="%23716854" stroke-width="2" />
      <line x1="1200" y1="200" x2="950" y2="280" stroke="%23716854" stroke-width="2" />
      <line x1="1200" y1="400" x2="950" y2="430" stroke="%23716854" stroke-width="2" />
    </g>
    <g id="sidePillars">
      <rect x="50" y="30" width="35" height="580" fill="%23ffffff" opacity="0.9" />
      <rect x="85" y="30" width="5" height="580" fill="%23735c00" opacity="0.3" />
      <rect x="1115" y="30" width="35" height="580" fill="%23ffffff" opacity="0.9" />
      <rect x="1110" y="30" width="5" height="580" fill="%23735c00" opacity="0.3" />
    </g>
  </g>

  <polygon points="250,150 950,150 950,520 250,520" fill="%23edeae2" stroke="%23dfdbd0" stroke-width="2" />

  <g id="ceilingTiers">
    <polygon points="0,0 1200,0 950,150 250,150" fill="%23f5f3e9" />
    <polygon points="120,40 1080,40 920,140 280,140" fill="url(%23coveBlue)" opacity="0.65" filter="blur(8px)" />
    <polygon points="180,60 1020,60 890,135 310,135" fill="none" stroke="url(%23coveGold)" stroke-width="12" filter="blur(6px)" />
    <polygon points="240,80 960,80 860,130 340,130" fill="%23ffffff" filter="drop-shadow(0px 3px 6px rgba(0,0,0,0.1))" />
    <circle cx="600" cy="115" r="5" fill="%23ffd700" />
    <path d="M 520,115 L 680,115" stroke="%23df9f02" stroke-width="1" />
  </g>

  <g id="floor">
    <polygon points="250,520 950,520 1200,675 0,675" fill="url(%23floorGrad)" />
    <path d="M0,675 L250,520 M400,675 L450,520 M600,675 L600,520 M800,675 L750,520 M1200,675 L950,520" stroke="%23eee9dd" stroke-width="1.5" />
    <polygon points="500,520 700,520 740,675 460,675" fill="%238c3010" opacity="0.12" />
  </g>

  <g id="stageFar">
    <rect x="360" y="320" width="480" height="200" fill="%23ffffff" />
    <rect x="340" y="500" width="520" height="20" fill="%23ca2745" />
    <path d="M 380,320 Q 600,220 820,320" fill="none" stroke="%23ff69b4" stroke-width="18" opacity="0.8" />
    <ellipse cx="600" cy="410" rx="60" ry="25" fill="%23f8bbd0" stroke="%23e91e63" stroke-width="3" />
    <rect x="390" y="340" width="35" height="150" fill="%23d4af37" opacity="0.6" />
    <rect x="775" y="340" width="35" height="150" fill="%23d4af37" opacity="0.6" />
  </g>

  <g id="chairsSeating" opacity="0.9">
    <g id="leftRow">
      <path d="M 80,620 L 160,560 L 210,560 L 130,620 Z" fill="%235a3d28" stroke="%23362113" stroke-width="2" />
      <rect x="80" y="580" width="12" height="40" fill="%23d4af37" />
      <g transform="translate(40,-45) scale(0.85)">
        <path d="M 120,620 L 190,565 L 230,565 L 160,620 Z" fill="%235a3d28" stroke="%23362113" stroke-width="2" />
      </g>
      <g transform="translate(80,-85) scale(0.7)">
        <path d="M 160,620 L 220,570 L 255,570 L 195,620 Z" fill="%235a3d28" stroke="%23362113" stroke-width="2" />
      </g>
    </g>
    <g id="rightRow">
      <path d="M 1120,620 L 1040,560 L 990,560 L 1070,620 Z" fill="%235a3d28" stroke="%23362113" stroke-width="2" />
      <rect x="1108" y="580" width="12" height="40" fill="%23d4af37" />
      <g transform="translate(-160,-45) scale(0.85)">
        <path d="M 1200,620 L 1130,565 L 1090,565 L 1160,620 Z" fill="%235a3d28" stroke="%23362113" stroke-width="2" />
      </g>
      <g transform="translate(-270,-85) scale(0.7)">
        <path d="M 1240,620 L 1180,570 L 1145,570 L 1205,620 Z" fill="%235a3d28" stroke="%23362113" stroke-width="2" />
      </g>
    </g>
  </g>
</svg>`;

export const meenaStageAltar = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <defs>
    <radialGradient id="stageGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="%23ffeedd" />
      <stop offset="50%" stop-color="%23ffdbcf" />
      <stop offset="100%" stop-color="%23c2a088" />
    </radialGradient>
    <linearGradient id="blossomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%23ff2a6d" />
      <stop offset="50%" stop-color="%23ff758f" />
      <stop offset="100%" stop-color="%23ffffff" />
    </linearGradient>
  </defs>

  <rect width="1200" height="675" fill="url(%23stageGlow)" />

  <g id="goldenBackdrop">
    <rect x="150" y="80" width="900" height="450" fill="%23ffffff" opacity="0.4" rx="15" />
    <path d="M 200,80 L 200,530 M 350,80 L 350,530 M 500,80 L 500,530 M 700,80 L 700,530 M 850,80 L 850,530 M 1000,80 L 1000,530" stroke="%23d4af37" stroke-width="4" opacity="0.6" />
    <circle cx="500" cy="200" r="10" fill="%23d4af37" />
    <circle cx="700" cy="200" r="10" fill="%23d4af37" />
  </g>

  <g id="floralArch" filter="drop-shadow(0px 8px 10px rgba(0,0,0,0.2))">
    <path d="M 220,530 Q 600,0 980,530" fill="none" stroke="%23eae7d9" stroke-width="45" stroke-linecap="round" />
    <path d="M 220,530 Q 600,0 980,530" fill="none" stroke="url(%23blossomGrad)" stroke-width="35" stroke-linecap="round" stroke-dasharray="35 15" />
    <g id="blossomPetals">
      <circle cx="340" cy="280" r="22" fill="%23e91e63" />
      <circle cx="355" cy="265" r="18" fill="%23ff85a1" />
      <circle cx="325" cy="295" r="20" fill="%23ffffff" />
      <circle cx="860" cy="280" r="22" fill="%23e91e63" />
      <circle cx="845" cy="265" r="18" fill="%23ff85a1" />
      <circle cx="875" cy="295" r="20" fill="%23ffffff" />
      <circle cx="600" cy="90" r="25" fill="%23b71c1c" />
      <circle cx="580" cy="95" r="20" fill="%23ff5c8a" />
      <circle cx="620" cy="95" r="22" fill="%23ffffff" />
    </g>
  </g>

  <g id="marriageSofa" filter="drop-shadow(0px 10px 12px rgba(60,30,10,0.35))">
    <path d="M 420,520 L 780,520 L 740,320 L 460,320 Z" fill="%23fff8dc" stroke="%23b8860b" stroke-width="5" />
    <ellipse cx="600" cy="320" rx="140" ry="40" fill="%23ffd700" stroke="%23b8860b" stroke-width="4" />
    <path d="M 430,350 C 370,400 370,500 440,510" fill="none" stroke="%23b8860b" stroke-width="8" stroke-linecap="round" />
    <path d="M 770,350 C 830,400 830,500 760,510" fill="none" stroke="%23b8860b" stroke-width="8" stroke-linecap="round" />
    <rect x="440" y="440" width="320" height="70" fill="%23fff5db" rx="10" />
    <line x1="440" y1="480" x2="760" y2="480" stroke="%23d4af37" stroke-width="2" />
    <ellipse cx="500" cy="460" rx="25" ry="15" fill="%23ca2745" />
    <ellipse cx="700" cy="460" rx="25" ry="15" fill="%23ca2745" />
    <rect x="460" y="510" width="20" height="25" fill="%238b7322" rx="4" />
    <rect x="720" y="510" width="20" height="25" fill="%238b7322" rx="4" />
  </g>

  <g id="carpet">
    <ellipse cx="600" cy="560" rx="380" ry="40" fill="%23b71c1c" />
    <ellipse cx="600" cy="560" rx="350" ry="25" fill="none" stroke="url(%23goldGrad)" stroke-width="3" />
  </g>
</svg>`;

export const meenaBananaGate = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <defs>
    <linearGradient id="gateSky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%238ec5fc" />
      <stop offset="100%" stop-color="%23e0c3fc" />
    </linearGradient>
    <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%23a3e635" />
      <stop offset="50%" stop-color="%2322c55e" />
      <stop offset="100%" stop-color="%2315803d" />
    </linearGradient>
    <linearGradient id="marigoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="%23ff9f1c" />
      <stop offset="50%" stop-color="%23ffbf69" />
      <stop offset="100%" stop-color="%23ff9f1c" />
    </linearGradient>
  </defs>

  <rect width="1200" height="675" fill="url(%23gateSky)" />

  <g id="backgroundHall" opacity="0.35">
    <rect x="350" y="150" width="500" height="350" fill="%23ffffff" rx="8" />
    <rect x="420" y="220" width="360" height="280" fill="%23cd853f" />
  </g>

  <g id="concretePillars" filter="drop-shadow(0px 5px 8px rgba(0,0,0,0.15))">
    <rect x="180" y="180" width="110" height="420" fill="%23edeae6" stroke="%23dfdbd3" stroke-width="3" />
    <rect x="170" y="150" width="130" height="30" fill="%23dbd7cf" />
    <rect x="195" y="240" width="80" height="320" fill="%23ffffff" opacity="0.6" />
    
    <rect x="910" y="180" width="110" height="420" fill="%23edeae6" stroke="%23dfdbd3" stroke-width="3" />
    <rect x="900" y="150" width="130" height="30" fill="%23dbd7cf" />
    <rect x="925" y="240" width="80" height="320" fill="%23ffffff" opacity="0.6" />
  </g>

  <g id="decorBananaTrees" filter="drop-shadow(0px 8px 6px rgba(0,0,0,0.2))">
    <g id="leftBanana">
      <path d="M 160,560 Q 140,420 160,250" fill="none" stroke="%2348c030" stroke-width="16" stroke-linecap="round" />
      <path d="M 160,250 Q 80,180 30,220" fill="url(%23leafGrad)" stroke="%2315803d" stroke-width="2.5" />
      <path d="M 160,250 Q 110,130 180,100" fill="url(%23leafGrad)" stroke="%2315803d" stroke-width="2.5" />
      <path d="M 160,250 Q 230,150 250,230" fill="url(%23leafGrad)" stroke="%2315803d" stroke-width="2.5" />
      <path d="M 160,250 Q 90,320 80,380" fill="url(%23leafGrad)" stroke="%2315803d" stroke-width="2.5" />
      <path d="M 160,250 Q 240,320 230,390" fill="url(%23leafGrad)" stroke="%2315803d" stroke-width="2.5" />
      <g transform="translate(130,310)">
        <path d="M10,10 Q25,35 15,65 Q0,40 10,10" fill="%23eab308" />
        <path d="M22,15 Q37,40 27,70 Q12,45 22,15" fill="%23eab308" />
        <ellipse cx="20" cy="20" rx="10" ry="12" fill="%237c2d12" />
      </g>
    </g>

    <g id="rightBanana">
      <path d="M 1040,560 Q 1060,420 1040,250" fill="none" stroke="%2348c030" stroke-width="16" stroke-linecap="round" />
      <path d="M 1040,250 Q 1120,180 1170,220" fill="url(%23leafGrad)" stroke="%2315803d" stroke-width="2.5" />
      <path d="M 1040,250 Q 1090,130 1020,100" fill="url(%23leafGrad)" stroke="%2315803d" stroke-width="2.5" />
      <path d="M 1040,250 Q 970,150 950,230" fill="url(%23leafGrad)" stroke="%2315803d" stroke-width="2.5" />
      <path d="M 1040,250 Q 1110,320 1120,380" fill="url(%23leafGrad)" stroke="%2315803d" stroke-width="2.5" />
      <path d="M 1040,250 Q 960,320 970,390" fill="url(%23leafGrad)" stroke="%2315803d" stroke-width="2.5" />
      <g transform="translate(1015,310)">
        <path d="M-10,10 Q-25,35 -15,65 Q0,40 -10,10" fill="%23eab308" />
        <path d="M-22,15 Q-37,40 -27,70 Q-12,45 -22,15" fill="%23eab308" />
        <ellipse cx="-20" cy="20" rx="10" ry="12" fill="%237c2d12" />
      </g>
    </g>
  </g>

  <g id="marigoldGarlands" opacity="0.95">
    <path d="M 235,170 Q 600,240 965,170" fill="none" stroke="none" id="garlandPath" />
    <path d="M 235,170 Q 600,240 965,170" fill="none" stroke="%23ff8c00" stroke-width="14" stroke-dasharray="14 10" />
    <path d="M 235,170 Q 600,240 965,170" fill="none" stroke="%23ffd700" stroke-width="8" stroke-dasharray="8 10" />
    <path d="M 235,210 Q 600,310 965,210" fill="none" stroke="%23ff1493" stroke-width="10" stroke-dasharray="12 14" opacity="0.8" />
    <g id="hangingGarlands">
      <line x1="400" y1="200" x2="400" y2="280" stroke="%23ff8c00" stroke-width="5" stroke-dasharray="8,6" />
      <line x1="500" y1="215" x2="500" y2="310" stroke="%23ff8c00" stroke-width="5" stroke-dasharray="8,6" />
      <line x1="600" y1="220" x2="600" y2="330" stroke="%23ff8c00" stroke-width="5" stroke-dasharray="8,6" />
      <line x1="700" y1="215" x2="700" y2="310" stroke="%23ff8c00" stroke-width="5" stroke-dasharray="8,6" />
      <line x1="800" y1="200" x2="800" y2="280" stroke="%23ff8c00" stroke-width="5" stroke-dasharray="8,6" />
    </g>
  </g>

  <rect x="0" y="580" width="1200" height="95" fill="%235a5854" />
</svg>`;

export const meenaStageWide = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <defs>
    <radialGradient id="aurora" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="%23ffe4e6" />
      <stop offset="40%" stop-color="%23fae8ff" />
      <stop offset="100%" stop-color="%23d6d3d1" />
    </radialGradient>
    <linearGradient id="wisteria" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%23d946ef" stop-opacity="0.9" />
      <stop offset="100%" stop-color="%23ffffff" stop-opacity="0.2" />
    </linearGradient>
  </defs>

  <rect width="1200" height="675" fill="url(%23aurora)" />

  <g id="wisteriaStrands" opacity="0.85">
    <line x1="200" y1="40" x2="200" y2="220" stroke="url(%23wisteria)" stroke-width="12" stroke-linecap="round" />
    <line x1="250" y1="40" x2="250" y2="180" stroke="url(%23wisteria)" stroke-width="15" stroke-linecap="round" />
    <line x1="300" y1="40" x2="300" y2="240" stroke="url(%23wisteria)" stroke-width="10" stroke-linecap="round" />
    <line x1="350" y1="40" x2="350" y2="190" stroke="url(%23wisteria)" stroke-width="14" stroke-linecap="round" />
    <line x1="850" y1="40" x2="850" y2="220" stroke="url(%23wisteria)" stroke-width="12" stroke-linecap="round" />
    <line x1="900" y1="40" x2="900" y2="180" stroke="url(%23wisteria)" stroke-width="15" stroke-linecap="round" />
    <line x1="950" y1="40" x2="950" y2="240" stroke="url(%23wisteria)" stroke-width="10" stroke-linecap="round" />
    <line x1="1000" y1="40" x2="1000" y2="190" stroke="url(%23wisteria)" stroke-width="14" stroke-linecap="round" />
  </g>

  <g id="weddingStageAdornment" filter="drop-shadow(0px 8px 12px rgba(0,0,0,0.15))">
    <ellipse cx="600" cy="510" rx="420" ry="40" fill="%23a8a29e" />
    <ellipse cx="600" cy="500" rx="410" ry="30" fill="%23df2743" />
    <path d="M 330,500 F 870,500 L 820,310 L 380,310 Z" fill="%23ffffff" stroke="%23ca8a04" stroke-width="3" opacity="0.9" />
    <path d="M 380,310 Q 600,160 820,310" fill="none" stroke="%23db2777" stroke-width="35" stroke-linecap="round" stroke-dasharray="35,15" />
    <rect x="420" y="400" width="360" height="90" fill="%23fffefa" rx="10" stroke="%23ca8a04" stroke-width="4" />
    <ellipse cx="600" cy="390" rx="90" ry="25" fill="%23eab308" />
  </g>

  <g id="luxuryCandelabras" opacity="0.8">
    <line x1="150" y1="520" x2="150" y2="340" stroke="%23ca8a04" stroke-width="6" />
    <circle cx="150" cy="340" r="12" fill="%23fef08a" />
    <circle cx="120" cy="360" r="8" fill="%23fef08a" />
    <circle cx="180" cy="360" r="8" fill="%23fef08a" />
    
    <line x1="1050" y1="520" x2="1050" y2="340" stroke="%23ca8a04" stroke-width="6" />
    <circle cx="1050" cy="340" r="12" fill="%23fef08a" />
    <circle cx="1020" cy="360" r="8" fill="%23fef08a" />
    <circle cx="1080" cy="360" r="8" fill="%23fef08a" />
  </g>
</svg>`;
