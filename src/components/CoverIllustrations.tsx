import React from 'react';

interface CoverIllustrationProps {
  storyId: string;
  className?: string;
}

export const CoverIllustration: React.FC<CoverIllustrationProps> = ({ storyId, className = '' }) => {
  switch (storyId) {
    case 'peter-pan':
      return (
        <svg
          viewBox="0 0 800 600"
          className={`w-full h-full object-cover select-none ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ppNightSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#090d16" />
              <stop offset="45%" stopColor="#1e1b4b" />
              <stop offset="85%" stopColor="#2e1065" />
              <stop offset="100%" stopColor="#3b0764" />
            </linearGradient>

            <radialGradient id="ppMoonGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
              <stop offset="50%" stopColor="#fef9c3" stopOpacity="0.8" />
              <stop offset="85%" stopColor="#fef08a" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="ppTinkGlow" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
              <stop offset="40%" stopColor="#fde047" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ca8a04" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="ppCloudGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#312e81" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#4338ca" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#312e81" stopOpacity="0.4" />
            </linearGradient>

            <filter id="ppGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Sky Background */}
          <rect width="800" height="600" fill="url(#ppNightSky)" />

          {/* Stars in Twilight Sky */}
          <g fill="#ffffff" opacity="0.8">
            <circle cx="80" cy="90" r="2" />
            <circle cx="140" cy="50" r="1.5" />
            <circle cx="210" cy="110" r="2.5" />
            <circle cx="280" cy="40" r="1.5" />
            <circle cx="340" cy="80" r="2" />
            <circle cx="490" cy="50" r="3" />
            <circle cx="560" cy="90" r="1.5" />
            <circle cx="630" cy="45" r="2.5" />
            <circle cx="710" cy="75" r="2" />
            <circle cx="760" cy="120" r="1.5" />
            <circle cx="110" cy="200" r="1.5" />
            <circle cx="170" cy="170" r="2" />
            <circle cx="680" cy="180" r="2" />
            <circle cx="740" cy="220" r="1.5" />
          </g>

          {/* Special Second Star to the Right */}
          <g transform="translate(620, 90)" filter="url(#ppGlow)">
            <polygon points="0,-12 3,-3 12,0 3,3 0,12 -3,3 -12,0 -3,-3" fill="#fef08a" />
            <circle cx="0" cy="0" r="4" fill="#ffffff" />
          </g>
          <g transform="translate(660, 115)" filter="url(#ppGlow)">
            <polygon points="0,-8 2,-2 8,0 2,2 0,8 -2,2 -8,0 -2,-2" fill="#e0e7ff" />
          </g>

          {/* Full Moon & Soft Halo */}
          <circle cx="240" cy="150" r="110" fill="url(#ppMoonGlow)" />
          <circle cx="240" cy="150" r="55" fill="#fef9c3" opacity="0.95" />
          <ellipse cx="230" cy="140" rx="14" ry="18" fill="#fef08a" opacity="0.4" />
          <ellipse cx="265" cy="165" rx="10" ry="12" fill="#fef08a" opacity="0.4" />

          {/* Whispy Midnight Clouds */}
          <path d="M0 240 Q160 210 320 250 T640 220 T800 245 L800 280 L0 280 Z" fill="url(#ppCloudGrad)" />
          <path d="M-50 310 Q200 280 440 320 T850 290 L850 340 L-50 340 Z" fill="url(#ppCloudGrad)" opacity="0.5" />

          {/* Big Ben Tower on Left */}
          <g transform="translate(90, 260)">
            <rect x="35" y="80" width="70" height="260" fill="#090d16" />
            <rect x="30" y="50" width="80" height="35" fill="#0c1222" />
            <polygon points="70,-40 30,50 110,50" fill="#090d16" />
            <line x1="70" y1="-55" x2="70" y2="-40" stroke="#ca8a04" strokeWidth="4" />
            <circle cx="70" cy="-55" r="4" fill="#eab308" />
            <circle cx="70" cy="68" r="24" fill="#fde047" stroke="#854d0e" strokeWidth="4" />
            <circle cx="70" cy="68" r="20" fill="#fef9c3" />
            <line x1="70" y1="68" x2="70" y2="54" stroke="#451a03" strokeWidth="3" strokeLinecap="round" />
            <line x1="70" y1="68" x2="80" y2="72" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="48" y="110" width="10" height="40" rx="4" fill="#1e293b" />
            <rect x="82" y="110" width="10" height="40" rx="4" fill="#1e293b" />
            <rect x="48" y="170" width="10" height="40" rx="4" fill="#1e293b" />
            <rect x="82" y="170" width="10" height="40" rx="4" fill="#1e293b" />
          </g>

          {/* London Rooftops */}
          <path d="M0 480 L70 430 L160 480 L230 420 L300 470 L380 430 L450 480 L520 410 L600 470 L680 420 L750 460 L800 440 L800 600 L0 600 Z" fill="#090d16" />
          <rect x="190" y="390" width="14" height="40" fill="#090d16" />
          <rect x="340" y="405" width="16" height="35" fill="#090d16" />
          <rect x="490" y="380" width="15" height="45" fill="#090d16" />
          <rect x="640" y="395" width="14" height="35" fill="#090d16" />

          {/* Nursery Window */}
          <rect x="670" y="465" width="35" height="45" rx="5" fill="#fde047" stroke="#b45309" strokeWidth="3" />
          <line x1="687" y1="465" x2="687" y2="510" stroke="#b45309" strokeWidth="2" />
          <line x1="670" y1="487" x2="705" y2="487" stroke="#b45309" strokeWidth="2" />

          {/* Fairy Dust Trail */}
          <g filter="url(#ppGlow)">
            <path d="M370 230 Q440 260 510 200 T630 180" fill="none" stroke="#fde047" strokeWidth="4" strokeDasharray="3 9" strokeLinecap="round" />
            <path d="M360 240 Q430 280 520 215 T640 190" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="2 12" />
            <circle cx="390" cy="240" r="3" fill="#fef08a" />
            <circle cx="430" cy="265" r="4.5" fill="#fde047" />
            <circle cx="460" cy="245" r="3" fill="#ffffff" />
            <circle cx="485" cy="225" r="4" fill="#fef08a" />
            <circle cx="515" cy="205" r="5" fill="#fde047" />
            <circle cx="550" cy="190" r="3.5" fill="#ffffff" />
            <circle cx="585" cy="180" r="4" fill="#fef08a" />
          </g>

          {/* Tinker Bell */}
          <g transform="translate(635, 175)" filter="url(#ppGlow)">
            <circle cx="0" cy="0" r="28" fill="url(#ppTinkGlow)" />
            <ellipse cx="-6" cy="-8" rx="10" ry="18" fill="#e0f2fe" opacity="0.8" transform="rotate(-30 -6 -8)" />
            <ellipse cx="6" cy="-8" rx="10" ry="18" fill="#e0f2fe" opacity="0.8" transform="rotate(30 6 -8)" />
            <ellipse cx="0" cy="4" rx="4" ry="9" fill="#15803d" />
            <circle cx="0" cy="-4" r="5" fill="#fed7aa" />
            <circle cx="0" cy="-6" r="4" fill="#facc15" />
            <polygon points="0,-12 2,-2 12,0 2,2 0,12 -2,2 -12,0 -2,-2" fill="#ffffff" />
          </g>

          {/* Peter Pan */}
          <g transform="translate(390, 160) rotate(-12)">
            <path d="M40 70 L20 85" stroke="#14532d" strokeWidth="8" strokeLinecap="round" />
            <path d="M25 80 L-10 100 L-45 105" stroke="#166534" strokeWidth="9" strokeLinecap="round" />
            <path d="M28 85 L-5 115 L-30 130" stroke="#15803d" strokeWidth="9" strokeLinecap="round" />
            <ellipse cx="-48" cy="106" rx="8" ry="5" fill="#78350f" transform="rotate(-10 -48 106)" />
            <ellipse cx="-33" cy="131" rx="8" ry="5" fill="#78350f" transform="rotate(15 -33 131)" />
            <path d="M20 50 Q45 45 60 55 L55 90 Q35 98 15 88 Z" fill="#22c55e" />
            <polygon points="15,88 23,80 30,92 38,82 48,93 55,90 20,88" fill="#16a34a" />
            <line x1="20" y1="72" x2="56" y2="74" stroke="#78350f" strokeWidth="4" />
            <rect x="36" y="70" width="6" height="6" fill="#ca8a04" />
            <path d="M44 74 L48 92" stroke="#92400e" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M55 58 L95 42 L130 35" stroke="#fed7aa" strokeWidth="8" strokeLinecap="round" />
            <circle cx="50" cy="38" r="7" fill="#fed7aa" />
            <circle cx="54" cy="28" r="14" fill="#fed7aa" />
            <circle cx="60" cy="28" r="2.5" fill="#0f172a" />
            <path d="M58 35 Q64 36 62 32" stroke="#9a3412" strokeWidth="2" fill="none" />
            <path d="M42 24 Q50 12 64 20 Q56 26 44 28 Z" fill="#b45309" />
            <path d="M44 20 Q54 6 72 16 Q60 24 46 22 Z" fill="#15803d" />
            <path d="M42 20 Q32 0 44 -12 Q48 5 44 20 Z" fill="#dc2626" />
            <line x1="43" y1="18" x2="43" y2="-10" stroke="#f87171" strokeWidth="1.5" />
          </g>

          {/* Wendy */}
          <g transform="translate(290, 240) rotate(-8) scale(0.85)">
            <circle cx="48" cy="22" r="5" fill="#38bdf8" />
            <circle cx="50" cy="28" r="13" fill="#fed7aa" />
            <path d="M40 24 Q48 14 62 22 Q58 36 40 34 Z" fill="#78350f" />
            <path d="M25 45 Q48 40 65 48 L70 100 Q40 115 10 95 Z" fill="#e0f2fe" opacity="0.95" />
            <path d="M20 90 Q40 108 65 96 L60 102 Q38 116 12 95 Z" fill="#bae6fd" />
            <circle cx="16" cy="100" r="4" fill="#fed7aa" />
            <circle cx="34" cy="105" r="4" fill="#fed7aa" />
            <path d="M55 52 L85 45" stroke="#fed7aa" strokeWidth="6" strokeLinecap="round" />
          </g>

          {/* Story Title Badge */}
          <g transform="translate(400, 555)">
            <rect x="-220" y="-22" width="440" height="38" rx="19" fill="#0f172a" opacity="0.9" stroke="#eab308" strokeWidth="1.5" />
            <text x="0" y="3" fill="#fef08a" fontSize="16" fontFamily="'Fraunces', Georgia, serif" fontWeight="bold" textAnchor="middle" letterSpacing="1">
              Peter Pan: The Boy of Neverland
            </text>
          </g>
        </svg>
      );

    case 'alice-in-wonderland':
      return (
        <svg
          viewBox="0 0 800 600"
          className={`w-full h-full object-cover select-none ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="aliceBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="35%" stopColor="#312e81" />
              <stop offset="70%" stopColor="#4338ca" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>

            <radialGradient id="holeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#c084fc" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#312e81" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="aliceDressGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>

          {/* Deep Magical Wonderland Background */}
          <rect width="800" height="600" fill="url(#aliceBg)" />

          {/* Swirling Rabbit Hole Rings */}
          <g opacity="0.35">
            <ellipse cx="400" cy="300" rx="350" ry="250" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="8 12" />
            <ellipse cx="400" cy="300" rx="270" ry="190" fill="none" stroke="#ec4899" strokeWidth="3" strokeDasharray="6 14" />
            <ellipse cx="400" cy="300" rx="190" ry="130" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 10" />
            <ellipse cx="400" cy="300" rx="110" ry="80" fill="none" stroke="#facc15" strokeWidth="2" />
          </g>

          {/* Core Golden Glow in the Hole */}
          <circle cx="400" cy="300" r="140" fill="url(#holeGlow)" />

          {/* Floating Antique Clocks */}
          {/* Large Clock 1 */}
          <g transform="translate(140, 150) rotate(-15)">
            <circle cx="0" cy="0" r="50" fill="#fef3c7" stroke="#b45309" strokeWidth="6" />
            <circle cx="0" cy="0" r="44" fill="#fffbeb" stroke="#d97706" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="4" fill="#78350f" />
            <line x1="0" y1="0" x2="0" y2="-28" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
            <line x1="0" y1="0" x2="20" y2="12" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
            {/* Clock Roman numeral ticks */}
            <circle cx="0" cy="-38" r="2.5" fill="#92400e" />
            <circle cx="38" cy="0" r="2.5" fill="#92400e" />
            <circle cx="0" cy="38" r="2.5" fill="#92400e" />
            <circle cx="-38" cy="0" r="2.5" fill="#92400e" />
            <circle cx="0" cy="-56" r="8" fill="none" stroke="#b45309" strokeWidth="4" />
          </g>

          {/* Medium Clock 2 */}
          <g transform="translate(670, 420) rotate(25)">
            <circle cx="0" cy="0" r="38" fill="#fef9c3" stroke="#b45309" strokeWidth="5" />
            <line x1="0" y1="0" x2="-18" y2="-12" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
            <line x1="0" y1="0" x2="14" y2="8" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="0" cy="-44" r="6" fill="none" stroke="#b45309" strokeWidth="3.5" />
          </g>

          {/* Floating Playing Cards */}
          {/* Ace of Hearts */}
          <g transform="translate(630, 160) rotate(18)">
            <rect x="-35" y="-50" width="70" height="100" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" filter="drop-shadow(0px 8px 16px rgba(0,0,0,0.4))" />
            <text x="-25" y="-28" fill="#ef4444" fontSize="18" fontWeight="bold">A</text>
            <path d="M0 -5 C-12 -25 -25 -5 0 20 C25 -5 12 -25 0 -5 Z" fill="#ef4444" />
          </g>

          {/* Ten of Spades */}
          <g transform="translate(180, 440) rotate(-22)">
            <rect x="-35" y="-50" width="70" height="100" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" filter="drop-shadow(0px 8px 16px rgba(0,0,0,0.4))" />
            <text x="-26" y="-28" fill="#1e293b" fontSize="16" fontWeight="bold">10</text>
            <path d="M0 10 C-15 0 -12 -18 0 -22 C12 -18 15 0 0 10 Z" fill="#1e293b" />
            <rect x="-2" y="8" width="4" height="10" fill="#1e293b" />
          </g>

          {/* Queen of Diamonds */}
          <g transform="translate(300, 90) rotate(8)">
            <rect x="-25" y="-38" width="50" height="76" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <polygon points="0,-18 12,0 0,18 -12,0" fill="#ef4444" />
          </g>

          {/* Cheshire Cat Grin in Shadows */}
          <g transform="translate(620, 290)">
            <path d="M-60 0 Q0 50 60 0 Q0 25 -60 0 Z" fill="#ffffff" />
            <path d="M-60 0 Q0 50 60 0" stroke="#f43f5e" strokeWidth="3" fill="none" />
            {/* Whiskers */}
            <line x1="-65" y1="5" x2="-95" y2="0" stroke="#f472b6" strokeWidth="2" />
            <line x1="-65" y1="15" x2="-90" y2="20" stroke="#f472b6" strokeWidth="2" />
            <line x1="65" y1="5" x2="95" y2="0" stroke="#f472b6" strokeWidth="2" />
            <line x1="65" y1="15" x2="90" y2="20" stroke="#f472b6" strokeWidth="2" />
          </g>

          {/* White Rabbit in Waistcoat */}
          <g transform="translate(240, 280)">
            {/* Rabbit body */}
            <ellipse cx="40" cy="50" rx="30" ry="24" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
            <circle cx="65" cy="35" r="18" fill="#ffffff" />
            {/* Long Ears */}
            <ellipse cx="62" cy="8" rx="7" ry="22" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" transform="rotate(-10 62 8)" />
            <ellipse cx="62" cy="8" rx="4" ry="16" fill="#fecdd3" transform="rotate(-10 62 8)" />
            <ellipse cx="76" cy="12" rx="7" ry="20" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" transform="rotate(15 76 12)" />
            <ellipse cx="76" cy="12" rx="4" ry="14" fill="#fecdd3" transform="rotate(15 76 12)" />
            {/* Pink eye */}
            <circle cx="72" cy="32" r="3.5" fill="#f43f5e" />
            <circle cx="73" cy="31" r="1" fill="#ffffff" />
            {/* Red Waistcoat */}
            <path d="M30 40 Q50 35 55 58 L35 62 Z" fill="#ef4444" />
            <circle cx="42" cy="46" r="2" fill="#fef08a" />
            <circle cx="40" cy="52" r="2" fill="#fef08a" />
            {/* Paws holding Pocket Watch */}
            <circle cx="78" cy="50" r="6" fill="#ffffff" />
            <circle cx="95" cy="54" r="14" fill="#fef08a" stroke="#ca8a04" strokeWidth="3" />
            <circle cx="95" cy="54" r="11" fill="#fef9c3" />
            <line x1="95" y1="54" x2="95" y2="47" stroke="#78350f" strokeWidth="2" />
            <line x1="95" y1="54" x2="100" y2="56" stroke="#78350f" strokeWidth="1.5" />
          </g>

          {/* Alice Falling Down Gently in Center */}
          <g transform="translate(420, 230) rotate(-6)">
            {/* Golden Hair Flying Upwards */}
            <path d="M30 20 Q10 -25 50 -40 Q80 -30 65 15 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
            <path d="M45 -35 Q70 -45 85 -20 Q70 0 50 10 Z" fill="#facc15" />
            {/* Black ribbon bow */}
            <polygon points="40,-2 48,-14 56,-2 48,-6" fill="#0f172a" />

            {/* Alice Head */}
            <circle cx="48" cy="20" r="18" fill="#fed7aa" />
            <ellipse cx="56" cy="20" rx="3" ry="4" fill="#1e3a8a" />
            <circle cx="57" cy="19" r="1" fill="#ffffff" />
            <path d="M52 28 Q58 32 64 28" stroke="#e11d48" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="44" cy="26" r="4" fill="#fda4af" opacity="0.6" />

            {/* Blue Dress & Apron billowing */}
            <path d="M30 40 Q48 35 68 40 L95 120 Q50 145 10 120 Z" fill="url(#aliceDressGrad)" />
            {/* White Frilly Apron */}
            <path d="M38 42 L60 42 L72 105 Q50 115 32 105 Z" fill="#ffffff" opacity="0.95" />
            <rect x="44" y="58" width="12" height="14" fill="#ffffff" />
            {/* Apron Straps */}
            <line x1="42" y1="38" x2="44" y2="58" stroke="#ffffff" strokeWidth="3" />
            <line x1="58" y1="38" x2="56" y2="58" stroke="#ffffff" strokeWidth="3" />

            {/* Arms Reaching with Curiosity */}
            <path d="M28 46 L-10 25 L-25 15" stroke="#fed7aa" strokeWidth="7" strokeLinecap="round" />
            <path d="M68 46 L105 30 L125 35" stroke="#fed7aa" strokeWidth="7" strokeLinecap="round" />

            {/* White Stockings & Black Shoes */}
            <path d="M35 120 L30 160" stroke="#f8fafc" strokeWidth="8" strokeLinecap="round" />
            <path d="M65 120 L75 160" stroke="#f8fafc" strokeWidth="8" strokeLinecap="round" />
            <ellipse cx="28" cy="164" rx="7" ry="4" fill="#0f172a" />
            <ellipse cx="78" cy="164" rx="7" ry="4" fill="#0f172a" />
          </g>

          {/* Floating 'DRINK ME' Potion Bottle */}
          <g transform="translate(490, 430) rotate(-18)">
            <rect x="-14" y="-22" width="28" height="44" rx="8" fill="#38bdf8" opacity="0.8" stroke="#ffffff" strokeWidth="2" />
            <rect x="-6" y="-30" width="12" height="8" rx="2" fill="#d97706" />
            <rect x="-10" y="-8" width="20" height="16" rx="2" fill="#fef08a" />
            <text x="0" y="3" fill="#78350f" fontSize="7" fontWeight="bold" textAnchor="middle">DRINK</text>
          </g>

          {/* Sparkles */}
          <g fill="#fef08a" opacity="0.8">
            <polygon points="530,110 533,116 540,118 533,120 530,126 527,120 520,118 527,116" />
            <polygon points="120,320 122,325 128,326 122,328 120,333 118,328 112,326 118,325" />
            <polygon points="410,480 412,485 418,486 412,488 410,493 408,488 402,486 408,485" />
          </g>

          {/* Story Title Ribbon */}
          <g transform="translate(400, 555)">
            <rect x="-240" y="-22" width="480" height="38" rx="19" fill="#0f172a" opacity="0.9" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="0" y="3" fill="#ffffff" fontSize="16" fontFamily="'Fraunces', Georgia, serif" fontWeight="bold" textAnchor="middle" letterSpacing="1">
              Alice's Adventures in Wonderland
            </text>
          </g>
        </svg>
      );

    case 'tom-sawyer':
      return (
        <svg
          viewBox="0 0 800 600"
          className={`w-full h-full object-cover select-none ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="tsSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="40%" stopColor="#93c5fd" />
              <stop offset="75%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#fed7aa" />
            </linearGradient>

            <linearGradient id="tsRiver" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>

            <linearGradient id="tsSunGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>

          {/* Warm Sunlit Summer Sky */}
          <rect width="800" height="360" fill="url(#tsSky)" />

          {/* Golden Summer Sun */}
          <circle cx="680" cy="100" r="55" fill="url(#tsSunGlow)" opacity="0.9" />
          <circle cx="680" cy="100" r="85" fill="#fef08a" opacity="0.25" />

          {/* Distant Rolling River Bluffs */}
          <path d="M0 240 Q200 170 420 220 T800 190 L800 360 L0 360 Z" fill="#4ade80" opacity="0.6" />
          <path d="M0 260 Q180 210 380 250 T800 230 L800 360 L0 360 Z" fill="#22c55e" opacity="0.8" />

          {/* Mississippi River Water */}
          <rect y="320" width="800" height="280" fill="url(#tsRiver)" />

          {/* Sparkling River Ripples */}
          <g stroke="#ffffff" strokeWidth="2" opacity="0.6" strokeLinecap="round">
            <line x1="80" y1="350" x2="160" y2="350" />
            <line x1="260" y1="365" x2="380" y2="365" />
            <line x1="500" y1="355" x2="620" y2="355" />
            <line x1="140" y1="400" x2="280" y2="400" />
            <line x1="420" y1="410" x2="580" y2="410" />
            <line x1="650" y1="390" x2="740" y2="390" />
            <line x1="80" y1="470" x2="220" y2="470" />
            <line x1="520" y1="480" x2="700" y2="480" />
          </g>

          {/* Distant Steamboat Silhouette with Puffs of Smoke */}
          <g transform="translate(620, 270) scale(0.65)" opacity="0.75">
            <rect x="0" y="20" width="100" height="15" rx="3" fill="#1e293b" />
            <rect x="20" y="5" width="60" height="15" fill="#334155" />
            <line x1="40" y1="-10" x2="40" y2="5" stroke="#0f172a" strokeWidth="4" />
            <line x1="60" y1="-10" x2="60" y2="5" stroke="#0f172a" strokeWidth="4" />
            {/* Paddle wheel */}
            <circle cx="95" cy="28" r="14" fill="#0f172a" />
            {/* White steam puffs */}
            <circle cx="36" cy="-18" r="6" fill="#ffffff" opacity="0.7" />
            <circle cx="30" cy="-28" r="10" fill="#ffffff" opacity="0.5" />
            <circle cx="56" cy="-18" r="7" fill="#ffffff" opacity="0.7" />
            <circle cx="52" cy="-30" r="11" fill="#ffffff" opacity="0.5" />
          </g>

          {/* Big Green Oak Trees on Left Bank */}
          <g transform="translate(0, 140)">
            <path d="M-40 220 Q40 180 80 220 L70 320 L-40 320 Z" fill="#78350f" />
            <circle cx="70" cy="110" r="75" fill="#15803d" />
            <circle cx="130" cy="130" r="60" fill="#16a34a" />
            <circle cx="30" cy="140" r="65" fill="#22c55e" />
          </g>

          {/* Wooden Raft Floating Downriver */}
          <g transform="translate(340, 380)">
            {/* Raft Logs */}
            <rect x="-140" y="40" width="280" height="16" rx="7" fill="#78350f" stroke="#451a03" strokeWidth="2" />
            <rect x="-130" y="52" width="260" height="16" rx="7" fill="#854d0e" stroke="#451a03" strokeWidth="2" />
            <rect x="-120" y="64" width="240" height="16" rx="7" fill="#92400e" stroke="#451a03" strokeWidth="2" />
            <rect x="-110" y="76" width="220" height="16" rx="7" fill="#78350f" stroke="#451a03" strokeWidth="2" />

            {/* Rope lashings on logs */}
            <line x1="-80" y1="38" x2="-80" y2="92" stroke="#d97706" strokeWidth="3" />
            <line x1="80" y1="38" x2="80" y2="92" stroke="#d97706" strokeWidth="3" />

            {/* Water splash around raft */}
            <path d="M-150 70 Q-130 90 -100 85" stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.8" />
            <path d="M110 85 Q135 90 150 75" stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.8" />

            {/* Tom Sawyer Standing Proudly */}
            <g transform="translate(-40, -40)">
              {/* Wooden Oar in hand */}
              <line x1="30" y1="-20" x2="-20" y2="110" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
              <polygon points="-25,100 -15,120 -30,125" fill="#854d0e" />

              {/* Bare feet on raft */}
              <ellipse cx="0" cy="80" rx="7" ry="4" fill="#fed7aa" />
              <ellipse cx="22" cy="80" rx="7" ry="4" fill="#fed7aa" />

              {/* Rolled up trousers */}
              <path d="M-5 45 L0 80 L8 80 L6 45 Z" fill="#2563eb" />
              <path d="M12 45 L18 80 L26 80 L24 45 Z" fill="#1d4ed8" />
              <rect x="-6" y="42" width="34" height="6" fill="#1e3a8a" />

              {/* Red Checked Shirt */}
              <path d="M-8 8 L30 8 L24 44 L-2 44 Z" fill="#ef4444" />
              {/* Suspender strap */}
              <line x1="2" y1="8" x2="4" y2="44" stroke="#78350f" strokeWidth="3" />
              <line x1="20" y1="8" x2="18" y2="44" stroke="#78350f" strokeWidth="3" />

              {/* Tom Head & Wide Straw Hat */}
              <circle cx="11" cy="-5" r="14" fill="#fed7aa" />
              <circle cx="16" cy="-6" r="2.5" fill="#0f172a" />
              <path d="M12 0 Q17 4 22 0" stroke="#9a3412" strokeWidth="2" fill="none" />
              {/* Straw Hat */}
              <ellipse cx="11" cy="-16" rx="30" ry="9" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
              <ellipse cx="11" cy="-20" rx="16" ry="12" fill="#eab308" />
              <rect x="0" y="-19" width="22" height="4" fill="#dc2626" />
            </g>

            {/* Huck Finn Sitting on Raft with Fishing Pole */}
            <g transform="translate(60, 0)">
              {/* Long Fishing Cane Pole */}
              <line x1="10" y1="10" x2="90" y2="-60" stroke="#ca8a04" strokeWidth="4" strokeLinecap="round" />
              <line x1="90" y1="-60" x2="110" y2="70" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
              {/* Red & white bobber on water */}
              <circle cx="110" cy="70" r="5" fill="#ef4444" />
              <circle cx="110" cy="72" r="3" fill="#ffffff" />

              {/* Huck Body Sitting */}
              <path d="M-10 15 L20 15 L25 45 L-15 45 Z" fill="#15803d" />
              <ellipse cx="5" cy="46" rx="18" ry="8" fill="#78350f" />
              <circle cx="5" cy="0" r="13" fill="#fed7aa" />
              {/* Huck's floppy brown hat */}
              <ellipse cx="5" cy="-8" rx="22" ry="7" fill="#78350f" />
              <circle cx="5" cy="-12" r="12" fill="#581c87" opacity="0.3" />
            </g>
          </g>

          {/* Story Title Ribbon */}
          <g transform="translate(400, 555)">
            <rect x="-240" y="-22" width="480" height="38" rx="19" fill="#0f172a" opacity="0.9" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="0" y="3" fill="#ffffff" fontSize="16" fontFamily="'Fraunces', Georgia, serif" fontWeight="bold" textAnchor="middle" letterSpacing="1">
              The Adventures of Tom Sawyer
            </text>
          </g>
        </svg>
      );

    case 'mystery-gold-bug':
      return (
        <svg
          viewBox="0 0 800 600"
          className={`w-full h-full object-cover select-none ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="poeRoom" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#090d16" />
              <stop offset="50%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <radialGradient id="poeLanternGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#f59e0b" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#d97706" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="goldScarab" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#a16207" />
            </linearGradient>
          </defs>

          {/* Deep Mysterious Study Background */}
          <rect width="800" height="600" fill="url(#poeRoom)" />

          {/* Gothic Arched Window with Moonlight on Right */}
          <g transform="translate(560, 50)">
            <path d="M0 260 L0 100 Q80 -30 160 100 L160 260 Z" fill="#1e293b" stroke="#334155" strokeWidth="4" />
            <path d="M8 255 L8 105 Q80 -20 152 105 L152 255 Z" fill="#0f172a" />
            {/* Blue Moonlight Beam */}
            <polygon points="20,100 140,100 240,400 -60,400" fill="#38bdf8" opacity="0.12" />
            {/* Window panes */}
            <line x1="80" y1="20" x2="80" y2="255" stroke="#334155" strokeWidth="3" />
            <line x1="8" y1="140" x2="152" y2="140" stroke="#334155" strokeWidth="3" />
            {/* Crescent Moon through window */}
            <circle cx="110" cy="80" r="26" fill="#fef9c3" opacity="0.8" />
            <circle cx="120" cy="74" r="24" fill="#0f172a" />
          </g>

          {/* Classic Bookshelves in Background */}
          <g transform="translate(60, 60)" opacity="0.45">
            <rect x="0" y="0" width="200" height="240" fill="#1c1917" stroke="#44403c" strokeWidth="3" />
            <line x1="0" y1="80" x2="200" y2="80" stroke="#78350f" strokeWidth="5" />
            <line x1="0" y1="160" x2="200" y2="160" stroke="#78350f" strokeWidth="5" />
            {/* Books rows */}
            <rect x="15" y="15" width="16" height="65" fill="#b91c1c" />
            <rect x="34" y="20" width="20" height="60" fill="#1d4ed8" />
            <rect x="57" y="12" width="18" height="68" fill="#ca8a04" />
            <rect x="78" y="25" width="22" height="55" fill="#15803d" />
            <rect x="103" y="15" width="16" height="65" fill="#7e22ce" />
            <rect x="122" y="18" width="24" height="62" fill="#c2410c" />
            <rect x="20" y="95" width="25" height="65" fill="#0369a1" />
            <rect x="48" y="100" width="18" height="60" fill="#a16207" />
            <rect x="69" y="92" width="22" height="68" fill="#991b1b" />
          </g>

          {/* Wooden Detective Study Desk */}
          <path d="M40 380 L760 380 L800 600 L0 600 Z" fill="#292524" stroke="#44403c" strokeWidth="2" />

          {/* Ancient Parchment Map Spread Out */}
          <g transform="translate(180, 400) rotate(-4)">
            <rect x="0" y="0" width="360" height="150" rx="6" fill="#fef3c7" stroke="#b45309" strokeWidth="3" filter="drop-shadow(0px 8px 16px rgba(0,0,0,0.5))" />
            {/* Map Coastlines and Island */}
            <path d="M40 30 Q120 10 180 50 T300 40" stroke="#92400e" strokeWidth="2.5" fill="none" strokeDasharray="4 2" />
            <path d="M60 90 Q150 120 250 80" stroke="#92400e" strokeWidth="2.5" fill="none" />
            {/* Big Red 'X' Marks the Spot */}
            <g transform="translate(230, 70)">
              <line x1="-15" y1="-15" x2="15" y2="15" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" />
              <line x1="15" y1="-15" x2="-15" y2="15" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" />
              <circle cx="0" cy="0" r="22" stroke="#dc2626" strokeWidth="2" fill="none" strokeDasharray="3 3" />
            </g>
            {/* Compass Rose */}
            <g transform="translate(70, 65)">
              <circle cx="0" cy="0" r="18" stroke="#78350f" strokeWidth="1.5" fill="none" />
              <polygon points="0,-16 4,0 0,16 -4,0" fill="#b45309" />
              <polygon points="-16,0 0,4 16,0 0,-4" fill="#d97706" />
              <text x="0" y="-18" fontSize="8" fill="#78350f" fontWeight="bold" textAnchor="middle">N</text>
            </g>
          </g>

          {/* Warm Amber Lantern Glow Area */}
          <circle cx="490" cy="340" r="160" fill="url(#poeLanternGlow)" />

          {/* Glowing Brass Hurricane Lantern */}
          <g transform="translate(490, 310)">
            {/* Lantern Top & Handle */}
            <path d="M-15 -60 Q0 -85 15 -60" stroke="#ca8a04" strokeWidth="4" fill="none" />
            <rect x="-20" y="-60" width="40" height="15" rx="3" fill="#a16207" stroke="#78350f" strokeWidth="2" />
            {/* Glass Chimney with Flame */}
            <rect x="-22" y="-45" width="44" height="60" rx="8" fill="#fef08a" opacity="0.8" stroke="#ca8a04" strokeWidth="2" />
            {/* Bright flame */}
            <ellipse cx="0" cy="-15" rx="8" ry="16" fill="#f59e0b" />
            <ellipse cx="0" cy="-12" rx="4" ry="10" fill="#ffffff" />
            {/* Lantern Base */}
            <rect x="-26" y="15" width="52" height="18" rx="4" fill="#a16207" stroke="#78350f" strokeWidth="2" />
          </g>

          {/* Magnificent Shimmering Gold Bug (The Scarab) */}
          <g transform="translate(360, 420) rotate(15)">
            <ellipse cx="0" cy="0" rx="32" ry="42" fill="url(#goldScarab)" stroke="#78350f" strokeWidth="3" filter="drop-shadow(0px 6px 12px rgba(0,0,0,0.6))" />
            {/* Wing division */}
            <line x1="0" y1="-28" x2="0" y2="38" stroke="#78350f" strokeWidth="3" />
            {/* Golden antenna and legs */}
            <path d="M-10 -35 Q-20 -55 -35 -50" stroke="#ca8a04" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M10 -35 Q20 -55 35 -50" stroke="#ca8a04" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            {/* Legs */}
            <path d="M-28 -10 L-48 -22" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" />
            <path d="M-30 10 L-50 15" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" />
            <path d="M-26 25 L-44 38" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" />
            <path d="M28 -10 L48 -22" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" />
            <path d="M30 10 L50 15" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" />
            <path d="M26 25 L44 38" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" />
            {/* Head and eyes */}
            <circle cx="0" cy="-30" r="10" fill="#ca8a04" />
            <circle cx="-5" cy="-32" r="2.5" fill="#0f172a" />
            <circle cx="5" cy="-32" r="2.5" fill="#0f172a" />
            {/* Shimmer sparkle */}
            <polygon points="12,-10 14,-6 18,-4 14,-2 12,2 10,-2 6,-4 10,-6" fill="#ffffff" />
          </g>

          {/* Brass Magnifying Glass on Desk */}
          <g transform="translate(180, 480) rotate(-35)">
            <circle cx="0" cy="0" r="32" fill="#38bdf8" opacity="0.3" stroke="#ca8a04" strokeWidth="5" />
            <circle cx="0" cy="0" r="30" fill="none" stroke="#fef08a" strokeWidth="1.5" />
            <line x1="24" y1="24" x2="65" y2="65" stroke="#78350f" strokeWidth="8" strokeLinecap="round" />
            <line x1="24" y1="24" x2="32" y2="32" stroke="#ca8a04" strokeWidth="9" />
          </g>

          {/* Story Title Ribbon */}
          <g transform="translate(400, 555)">
            <rect x="-240" y="-22" width="480" height="38" rx="19" fill="#0f172a" opacity="0.9" stroke="#eab308" strokeWidth="1.5" />
            <text x="0" y="3" fill="#ffffff" fontSize="16" fontFamily="'Fraunces', Georgia, serif" fontWeight="bold" textAnchor="middle" letterSpacing="1">
              The Gold-Bug: A Mystery of Sullivan's Island
            </text>
          </g>
        </svg>
      );

    default:
      return null;
  }
};
