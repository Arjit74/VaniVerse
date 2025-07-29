const MandalaPattern = ({ className = "", size = 200 }: { className?: string; size?: number }) => {
  return (
    <div 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="animate-mandala-spin opacity-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer petals */}
        <g className="text-primary">
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={i}
              d={`M100,100 L${100 + 80 * Math.cos((i * 45 * Math.PI) / 180)},${100 + 80 * Math.sin((i * 45 * Math.PI) / 180)} 
                  A15,15 0 0,1 ${100 + 80 * Math.cos(((i + 1) * 45 * Math.PI) / 180)},${100 + 80 * Math.sin(((i + 1) * 45 * Math.PI) / 180)} Z`}
              fill="currentColor"
              opacity="0.6"
            />
          ))}
        </g>
        
        {/* Middle ring */}
        <circle
          cx="100"
          cy="100"
          r="50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-secondary opacity-80"
        />
        
        {/* Inner petals */}
        <g className="text-secondary">
          {Array.from({ length: 6 }).map((_, i) => (
            <path
              key={i}
              d={`M100,100 L${100 + 40 * Math.cos((i * 60 * Math.PI) / 180)},${100 + 40 * Math.sin((i * 60 * Math.PI) / 180)} 
                  A8,8 0 0,1 ${100 + 40 * Math.cos(((i + 1) * 60 * Math.PI) / 180)},${100 + 40 * Math.sin(((i + 1) * 60 * Math.PI) / 180)} Z`}
              fill="currentColor"
              opacity="0.7"
            />
          ))}
        </g>
        
        {/* Center circle */}
        <circle
          cx="100"
          cy="100"
          r="20"
          fill="currentColor"
          className="text-mandala-orange"
          opacity="0.9"
        />
        
        {/* Decorative dots */}
        {Array.from({ length: 12 }).map((_, i) => (
          <circle
            key={i}
            cx={100 + 65 * Math.cos((i * 30 * Math.PI) / 180)}
            cy={100 + 65 * Math.sin((i * 30 * Math.PI) / 180)}
            r="3"
            fill="currentColor"
            className="text-mandala-gold"
            opacity="0.8"
          />
        ))}
      </svg>
    </div>
  );
};

export default MandalaPattern;