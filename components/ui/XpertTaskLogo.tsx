import React from 'react';

interface XpertTaskLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export function XpertTaskLogo({ size = 'md', showText = true, className = '' }: XpertTaskLogoProps) {
  const sizeClasses = {
    sm: {
      icon: 'w-20 h-20',
      text: 'text-lg',
      gap: 'gap-2'
    },
    md: {
      icon: 'w-32 h-32',
      text: 'text-2xl',
      gap: 'gap-3'
    },
    lg: {
      icon: 'w-40 h-40',
      text: 'text-3xl',
      gap: 'gap-4'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center ${className}`}>
      {/* Premium logo with enhanced effects */}
      <div className={`${currentSize.icon} relative group`}>
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF66C4]/20 to-[#8F00FF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Main logo container with premium styling */}
        <div className="relative w-full h-full transform group-hover:scale-105 transition-all duration-300 ease-out">
          <img 
            src="/xperttask-logo.png.png" 
            alt="XpertTask Logo" 
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>
        
        {/* Premium shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
      </div>
    </div>
  );
} 