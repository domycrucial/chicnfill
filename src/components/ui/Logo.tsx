import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  theme = 'dark',
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#141414';
  const clocheColor = isDark ? '#FFF8EE' : '#1A1A1A';
  const chickenColor = isDark ? '#F5F5F5' : '#141414';
  const eyeColor = isDark ? '#141414' : '#FFFFFF';

  if (variant === 'icon') {
    return (
      <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
        <svg viewBox="0 0 260 220" className="w-full h-full" fill="none">
          {/* Top Cloche */}
          <circle cx="130" cy="22" r="5" fill={clocheColor} />
          <path d="M 108 48 C 108 26, 152 26, 152 48 Z" fill={clocheColor} />
          <line x1="100" y1="52" x2="160" y2="52" stroke={clocheColor} strokeWidth="4" strokeLinecap="round" />

          {/* 'C' Chicken */}
          <g transform="translate(10, 45)">
            <polygon points="12,65 -8,56 8,46" fill={chickenColor} />
            <circle cx="58" cy="70" r="7.5" fill={eyeColor} />
            <circle cx="60" cy="70" r="4.5" fill={chickenColor} />
            <path
              d="M 94 22 C 54 22, 22 52, 22 92 C 22 132, 54 162, 94 162 L 94 134 C 68 134, 48 116, 48 92 C 48 68, 68 50, 94 50 Z"
              fill={chickenColor}
            />
          </g>

          {/* 'F' Gold */}
          <g transform="translate(118, 48)">
            <polygon points="12,6 94,6 80,36 40,36 14,158 -10,158" fill="#E59A0B" />
            <polygon points="15,6 96,6 82,33 44,33 18,158 8,158" fill="#F4B41A" />
            <polygon points="40,78 84,78 72,104 34,104" fill="#E59A0B" />
            <polygon points="42,78 85,78 74,101 36,101" fill="#F4B41A" />
            <polygon points="12,6 96,6 88,18 24,18" fill="#FCD560" />
          </g>
        </svg>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`p-4 rounded-3xl bg-[#FFFFFF] shadow-2xl flex flex-col items-center justify-center border border-neutral-200 ${className}`}>
        <img
          src="/logo.svg"
          alt="CHIC-N-FILL Brand Logo"
          className="w-full h-auto max-w-[280px] object-contain drop-shadow"
        />
      </div>
    );
  }

  // Full Header/Footer Brand Format
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Icon portion */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white p-1 shadow-md flex items-center justify-center border border-white/20 shrink-0">
        <svg viewBox="0 0 260 220" className="w-full h-full" fill="none">
          <circle cx="130" cy="22" r="5" fill="#141414" />
          <path d="M 108 48 C 108 26, 152 26, 152 48 Z" fill="#141414" />
          <line x1="100" y1="52" x2="160" y2="52" stroke="#141414" strokeWidth="4" strokeLinecap="round" />

          {/* 'C' Chicken in black */}
          <g transform="translate(10, 45)">
            <polygon points="12,65 -8,56 8,46" fill="#141414" />
            <circle cx="58" cy="70" r="7.5" fill="#FFFFFF" />
            <circle cx="60" cy="70" r="4.5" fill="#141414" />
            <path
              d="M 94 22 C 54 22, 22 52, 22 92 C 22 132, 54 162, 94 162 L 94 134 C 68 134, 48 116, 48 92 C 48 68, 68 50, 94 50 Z"
              fill="#141414"
            />
          </g>

          {/* 'F' Gold */}
          <g transform="translate(118, 48)">
            <polygon points="12,6 94,6 80,36 40,36 14,158 -10,158" fill="#E59A0B" />
            <polygon points="15,6 96,6 82,33 44,33 18,158 8,158" fill="#F4B41A" />
            <polygon points="40,78 84,78 72,104 34,104" fill="#E59A0B" />
            <polygon points="42,78 85,78 74,101 36,101" fill="#F4B41A" />
            <polygon points="12,6 96,6 88,18 24,18" fill="#FCD560" />
          </g>
        </svg>
      </div>

      {/* Text label with brand font and hyphenated name */}
      <span className="font-heading font-black text-xl sm:text-2xl tracking-tight text-white leading-none whitespace-nowrap">
        CHIC<span className="text-[#F4B41A]">-N-</span>FILL
      </span>
    </div>
  );
};
