export default function Component() {
  return ( 
    <div className="w-full">
      <svg
        viewBox="0 0 800 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-auto"
      >
        {/* Background triangle */}
        <path
          d="M0 0H250L0 200V0Z"
          fill="url(#gradient1)"
        />
        
        {/* Top stripe */}
        <path
          d="M200 40H800V80H150L200 40Z"
          fill="url(#gradient2)"
        />
        
        {/* Bottom stripe */}
        <path
          d="M150 80H800V120H100L150 80Z"
          fill="url(#gradient3)"
        />
        
        {/* Gradients definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="250" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
          
          <linearGradient id="gradient2" x1="150" y1="40" x2="800" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          
          <linearGradient id="gradient3" x1="100" y1="80" x2="800" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
        </defs>
      </svg>