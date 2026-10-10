import React from 'react';

interface IllustrationProps {
  name: string;
  className?: string;
  genre?: string;
}

export const StoryIllustration: React.FC<IllustrationProps> = ({ name, className = '', genre = 'Fantasy' }) => {
  // Rich vector artwork tailored to each scene
  switch (name) {
    case 'riverbank':
      return (
        <svg viewBox="0 0 600 360" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skyGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
            <linearGradient id="riverGrad1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#67e8f9" />
            </linearGradient>
          </defs>
          <rect width="600" height="360" fill="url(#skyGrad1)" />
          {/* Sun */}
          <circle cx="500" cy="80" r="45" fill="#fde047" opacity="0.8" />
          <circle cx="500" cy="80" r="60" fill="#fef08a" opacity="0.3" />
          {/* Distant Hills */}
          <path d="M0 240 Q150 160 320 220 T600 210 L600 360 L0 360 Z" fill="#86efac" />
          <path d="M0 260 Q200 210 400 270 T600 240 L600 360 L0 360 Z" fill="#4ade80" />
          {/* Winding River */}
          <path d="M220 360 Q340 280 440 260 T600 250 L600 360 Z" fill="url(#riverGrad1)" opacity="0.85" />
          {/* Big Oak Tree */}
          <path d="M40 360 C50 250 80 180 130 140 C170 110 240 130 260 170 C280 220 240 300 220 360 Z" fill="#78350f" opacity="0.9" />
          <circle cx="160" cy="110" r="85" fill="#15803d" />
          <circle cx="230" cy="130" r="65" fill="#16a34a" />
          <circle cx="110" cy="130" r="65" fill="#22c55e" />
          {/* Alice sitting under the tree */}
          <ellipse cx="140" cy="295" rx="16" ry="24" fill="#38bdf8" />
          <circle cx="140" cy="265" r="12" fill="#fed7aa" />
          <path d="M130 255 Q140 245 150 255" fill="#fde047" stroke="#eab308" strokeWidth="3" />
          {/* White rabbit running */}
          <g transform="translate(340, 275) scale(0.85)">
            <ellipse cx="40" cy="30" rx="18" ry="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
            <circle cx="56" cy="22" r="9" fill="#ffffff" />
            <ellipse cx="62" cy="10" rx="4" ry="12" fill="#fed7aa" stroke="#f43f5e" strokeWidth="1" />
            <circle cx="59" cy="20" r="2.5" fill="#f43f5e" />
            {/* Red waistcoat snippet */}
            <path d="M35 24 Q45 22 48 34 Q38 36 35 24 Z" fill="#ef4444" />
          </g>
          {/* Flower grass tufts */}
          <circle cx="280" cy="330" r="4" fill="#ec4899" />
          <circle cx="480" cy="320" r="5" fill="#f59e0b" />
          <circle cx="380" cy="340" r="4" fill="#a855f7" />
        </svg>
      );

    case 'rabbit-watch':
      return (
        <svg viewBox="0 0 600 360" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="360" fill="#fdf4ff" />
          <ellipse cx="300" cy="320" rx="260" ry="60" fill="#f5d0fe" opacity="0.6" />
          {/* Giant decorative pocket watch in center */}
          <g transform="translate(230, 70)">
            <circle cx="70" cy="110" r="85" fill="#fef08a" stroke="#ca8a04" strokeWidth="8" />
            <circle cx="70" cy="110" r="70" fill="#ffffff" stroke="#eab308" strokeWidth="3" />
            {/* Watch Top Stem and Ring */}
            <rect x="62" y="15" width="16" height="15" fill="#ca8a04" rx="2" />
            <ellipse cx="70" cy="12" rx="18" ry="10" fill="none" stroke="#ca8a04" strokeWidth="6" />
            {/* Watch Hands */}
            <line x1="70" y1="110" x2="70" y2="60" stroke="#713f12" strokeWidth="5" strokeLinecap="round" />
            <line x1="70" y1="110" x2="105" y2="120" stroke="#713f12" strokeWidth="4" strokeLinecap="round" />
            <circle cx="70" cy="110" r="6" fill="#ca8a04" />
            {/* Roman Numerals marks */}
            <circle cx="70" cy="48" r="3" fill="#713f12" />
            <circle cx="132" cy="110" r="3" fill="#713f12" />
            <circle cx="70" cy="172" r="3" fill="#713f12" />
            <circle cx="8" cy="110" r="3" fill="#713f12" />
          </g>
          {/* White Rabbit holding the chain */}
          <g transform="translate(80, 110)">
            <ellipse cx="70" cy="140" rx="35" ry="50" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="70" cy="70" r="28" fill="#ffffff" />
            <ellipse cx="60" cy="20" rx="8" ry="32" fill="#ffffff" stroke="#f43f5e" strokeWidth="2" />
            <ellipse cx="80" cy="20" rx="8" ry="32" fill="#ffffff" stroke="#f43f5e" strokeWidth="2" />
            {/* Eyeglasses */}
            <circle cx="62" cy="70" r="8" fill="none" stroke="#ca8a04" strokeWidth="3" />
            <circle cx="78" cy="70" r="8" fill="none" stroke="#ca8a04" strokeWidth="3" />
            <line x1="70" y1="70" x2="70" y2="70" stroke="#ca8a04" strokeWidth="3" />
            {/* Velvet Waistcoat */}
            <path d="M48 115 Q70 105 92 115 L88 175 Q70 185 52 175 Z" fill="#b91c1c" />
            <circle cx="70" cy="135" r="3" fill="#fef08a" />
            <circle cx="70" cy="155" r="3" fill="#fef08a" />
          </g>
          {/* Alice's curious eyes peek in from right */}
          <g transform="translate(480, 160)">
            <ellipse cx="40" cy="60" rx="28" ry="35" fill="#fed7aa" />
            <path d="M10 30 Q40 10 70 30" fill="#fde047" stroke="#eab308" strokeWidth="6" />
            <circle cx="28" cy="60" r="6" fill="#0284c7" />
            <circle cx="48" cy="60" r="6" fill="#0284c7" />
          </g>
        </svg>
      );

    case 'rabbit-hole':
      return (
        <svg viewBox="0 0 600 360" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="holeSpiral" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="60%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#4338ca" />
            </radialGradient>
          </defs>
          <rect width="600" height="360" fill="url(#holeSpiral)" />
          {/* Swirling tunnel rings */}
          <ellipse cx="300" cy="180" rx="260" ry="140" stroke="#818cf8" strokeWidth="2" strokeDasharray="8 8" opacity="0.6" />
          <ellipse cx="300" cy="180" rx="190" ry="100" stroke="#a5b4fc" strokeWidth="3" strokeDasharray="12 6" opacity="0.7" />
          <ellipse cx="300" cy="180" rx="120" ry="60" stroke="#c7d2fe" strokeWidth="4" opacity="0.8" />
          <ellipse cx="300" cy="180" rx="50" ry="25" fill="#020617" />
          {/* Alice gently tumbling down */}
          <g transform="translate(250, 100) rotate(15)">
            {/* Blue Dress */}
            <path d="M30 40 Q50 20 70 40 L85 90 Q50 105 15 90 Z" fill="#38bdf8" />
            {/* White Pinafore Apron */}
            <path d="M40 45 Q50 35 60 45 L70 85 Q50 95 30 85 Z" fill="#ffffff" />
            {/* Alice Head & Hair */}
            <circle cx="50" cy="22" r="16" fill="#fed7aa" />
            <path d="M30 18 Q50 -5 70 18 Q65 35 35 35 Z" fill="#facc15" />
            <circle cx="45" cy="22" r="2.5" fill="#0369a1" />
            <circle cx="55" cy="22" r="2.5" fill="#0369a1" />
            {/* Legs with stockings */}
            <line x1="40" y1="90" x2="30" y2="125" stroke="#f1f5f9" strokeWidth="6" strokeLinecap="round" />
            <line x1="60" y1="90" x2="70" y2="125" stroke="#f1f5f9" strokeWidth="6" strokeLinecap="round" />
            <ellipse cx="28" cy="128" rx="8" ry="4" fill="#0f172a" />
            <ellipse cx="72" cy="128" rx="8" ry="4" fill="#0f172a" />
          </g>
          {/* Floating playing cards & books */}
          <rect x="80" y="80" width="36" height="50" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" transform="rotate(-20 80 80)" />
          <path d="M85 95 L90 105 L80 105 Z" fill="#ef4444" />
          <rect x="460" y="160" width="45" height="30" rx="3" fill="#b45309" transform="rotate(35 460 160)" />
        </svg>
      );

    case 'shrinking-alice':
      return (
        <svg viewBox="0 0 600 360" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="360" fill="#fdfbf7" />
          {/* Giant room floorboards and giant glass table legs */}
          <line x1="0" y1="280" x2="600" y2="280" stroke="#d6d3d1" strokeWidth="4" />
          {/* Huge Table Leg on Right */}
          <rect x="440" y="40" width="40" height="240" fill="#e7e5e4" stroke="#a8a29e" strokeWidth="2" />
          <rect x="360" y="30" width="240" height="20" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="3" opacity="0.9" />
          {/* Giant key on table */}
          <circle cx="480" cy="20" r="12" fill="#eab308" stroke="#a16207" strokeWidth="2" />
          <rect x="480" y="16" width="35" height="8" fill="#eab308" />
          {/* Small Drink Me Bottle on floor */}
          <g transform="translate(180, 190)">
            <rect x="25" y="40" width="35" height="50" rx="6" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2" opacity="0.8" />
            <rect x="35" y="30" width="15" height="12" fill="#bfdbfe" />
            <rect x="33" y="24" width="19" height="7" fill="#b45309" rx="2" />
            {/* Tag Drink Me */}
            <rect x="18" y="55" width="48" height="18" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" rx="2" />
            <text x="22" y="68" fontSize="8" fill="#713f12" fontWeight="bold">DRINK ME</text>
          </g>
          {/* Tiny Alice beside the huge bottle */}
          <g transform="translate(280, 220)">
            <ellipse cx="20" cy="35" rx="10" ry="18" fill="#38bdf8" />
            <circle cx="20" cy="18" r="8" fill="#fed7aa" />
            <path d="M12 15 Q20 5 28 15" fill="#fde047" stroke="#eab308" strokeWidth="2" />
            <line x1="16" y1="52" x2="16" y2="60" stroke="#0f172a" strokeWidth="3" />
            <line x1="24" y1="52" x2="24" y2="60" stroke="#0f172a" strokeWidth="3" />
          </g>
          {/* Sparkling magic effect */}
          <circle cx="260" cy="180" r="6" fill="#fde047" opacity="0.7" />
          <circle cx="330" cy="210" r="4" fill="#a855f7" opacity="0.7" />
        </svg>
      );

    case 'cheshire-cat':
      return (
        <svg viewBox="0 0 600 360" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="360" fill="#312e81" />
          {/* Dark purple enchanted forest branches */}
          <path d="M0 120 Q200 180 600 100 L600 160 Q300 220 0 170 Z" fill="#1e1b4b" />
          <path d="M150 150 Q350 210 550 140" stroke="#4338ca" strokeWidth="38" strokeLinecap="round" />
          {/* Big Cheshire Cat sitting on branch */}
          <g transform="translate(240, 70)">
            {/* Striped Body */}
            <ellipse cx="80" cy="80" rx="65" ry="45" fill="#a855f7" />
            <path d="M40 70 Q80 90 120 70" stroke="#7e22ce" strokeWidth="12" />
            <path d="M50 90 Q80 105 110 90" stroke="#7e22ce" strokeWidth="10" />
            {/* Fluffy tail */}
            <path d="M140 70 Q180 50 165 100" stroke="#c084fc" strokeWidth="20" strokeLinecap="round" />
            {/* Big smiling face */}
            <circle cx="60" cy="45" r="38" fill="#a855f7" />
            {/* Cat Ears */}
            <polygon points="35,15 20,40 45,35" fill="#9333ea" />
            <polygon points="85,15 75,35 100,40" fill="#9333ea" />
            {/* Glowing yellow cat eyes */}
            <ellipse cx="45" cy="40" rx="9" ry="12" fill="#facc15" />
            <ellipse cx="75" cy="40" rx="9" ry="12" fill="#facc15" />
            <ellipse cx="45" cy="40" rx="3" ry="10" fill="#000000" />
            <ellipse cx="75" cy="40" rx="3" ry="10" fill="#000000" />
            {/* Famous giant white grin */}
            <path d="M30 55 Q60 85 90 55 Q60 62 30 55 Z" fill="#ffffff" stroke="#7e22ce" strokeWidth="2" />
            <line x1="42" y1="58" x2="42" y2="70" stroke="#7e22ce" strokeWidth="1.5" />
            <line x1="54" y1="60" x2="54" y2="74" stroke="#7e22ce" strokeWidth="1.5" />
            <line x1="66" y1="60" x2="66" y2="74" stroke="#7e22ce" strokeWidth="1.5" />
            <line x1="78" y1="58" x2="78" y2="70" stroke="#7e22ce" strokeWidth="1.5" />
          </g>
          {/* Alice looking up in amazement */}
          <g transform="translate(120, 240)">
            <circle cx="30" cy="30" r="14" fill="#fed7aa" />
            <path d="M16 28 Q30 15 44 28" fill="#fde047" stroke="#eab308" strokeWidth="3" />
            <ellipse cx="30" cy="65" rx="18" ry="25" fill="#38bdf8" />
          </g>
        </svg>
      );

    case 'mad-tea-party':
      return (
        <svg viewBox="0 0 600 360" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="360" fill="#ecfdf5" />
          {/* Long tea table */}
          <rect x="60" y="190" width="480" height="30" fill="#fde68a" stroke="#d97706" strokeWidth="3" rx="4" />
          <rect x="90" y="220" width="16" height="120" fill="#b45309" />
          <rect x="490" y="220" width="16" height="120" fill="#b45309" />
          {/* Tea Cups & Teapots galore */}
          <ellipse cx="200" cy="185" rx="14" ry="8" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
          <ellipse cx="320" cy="185" rx="14" ry="8" fill="#fbcfe8" stroke="#db2777" strokeWidth="2" />
          <ellipse cx="420" cy="185" rx="14" ry="8" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
          {/* Giant Teapot in Middle */}
          <ellipse cx="260" cy="170" rx="26" ry="20" fill="#67e8f9" stroke="#0891b2" strokeWidth="3" />
          <path d="M285 165 Q305 155 300 175" stroke="#0891b2" strokeWidth="4" />
          <circle cx="260" cy="148" r="7" fill="#0891b2" />
          {/* Mad Hatter with his famous 10/6 hat */}
          <g transform="translate(110, 70)">
            <rect x="35" y="30" width="50" height="60" fill="#15803d" />
            <ellipse cx="60" cy="90" rx="36" ry="10" fill="#166534" />
            {/* 10/6 card tag on hat */}
            <rect x="40" y="45" width="22" height="16" fill="#fef08a" rx="1" />
            <text x="43" y="57" fontSize="9" fill="#1e293b" fontWeight="bold">10/6</text>
            <circle cx="60" cy="115" r="16" fill="#fed7aa" />
            {/* Orange curly hair */}
            <circle cx="42" cy="115" r="8" fill="#ea580c" />
            <circle cx="78" cy="115" r="8" fill="#ea580c" />
          </g>
          {/* March Hare with ears */}
          <g transform="translate(390, 85)">
            <circle cx="50" cy="70" r="20" fill="#d97706" />
            <ellipse cx="40" cy="30" rx="7" ry="25" fill="#d97706" stroke="#b45309" strokeWidth="2" />
            <ellipse cx="60" cy="30" rx="7" ry="25" fill="#d97706" stroke="#b45309" strokeWidth="2" />
          </g>
        </svg>
      );

    case 'awakening':
      return (
        <svg viewBox="0 0 600 360" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="360" fill="#fef9c3" />
          {/* Warm peaceful riverbank grass */}
          <path d="M0 220 Q300 180 600 240 L600 360 L0 360 Z" fill="#86efac" />
          {/* Big gentle tree */}
          <circle cx="120" cy="120" r="100" fill="#22c55e" opacity="0.8" />
          <rect x="100" y="180" width="40" height="180" fill="#78350f" />
          {/* Falling dry leaves like cards */}
          <rect x="240" y="90" width="18" height="24" rx="2" fill="#ef4444" opacity="0.8" transform="rotate(25 240 90)" />
          <rect x="340" y="130" width="18" height="24" rx="2" fill="#3b82f6" opacity="0.8" transform="rotate(-35 340 130)" />
          <rect x="420" y="70" width="18" height="24" rx="2" fill="#eab308" opacity="0.8" transform="rotate(45 420 70)" />
          {/* Alice waking up smiling */}
          <g transform="translate(260, 240)">
            <ellipse cx="60" cy="40" rx="45" ry="22" fill="#38bdf8" />
            <circle cx="35" cy="22" r="15" fill="#fed7aa" />
            <path d="M22 18 Q35 5 48 18" fill="#fde047" stroke="#eab308" strokeWidth="3" />
            <path d="M30 25 Q35 30 40 25" stroke="#b45309" strokeWidth="2" fill="none" />
          </g>
          {/* Sister smiling beside her */}
          <g transform="translate(370, 200)">
            <ellipse cx="40" cy="65" rx="35" ry="45" fill="#f472b6" />
            <circle cx="40" cy="30" r="15" fill="#fed7aa" />
            <path d="M25 28 Q40 12 55 28" fill="#92400e" stroke="#78350f" strokeWidth="3" />
          </g>
        </svg>
      );

    // Default / Thematic visual fallback
    default:
      return (
        <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-sky-100 text-stone-700 relative overflow-hidden ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="text-center p-6 z-10">
            <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center text-amber-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <p className="font-storybook text-lg font-bold text-stone-800 capitalize">{name.replace(/-/g, ' ')}</p>
            <p className="text-xs text-stone-500 mt-1">World Literature Illustrated Reader</p>
          </div>
        </div>
      );
  }
};
