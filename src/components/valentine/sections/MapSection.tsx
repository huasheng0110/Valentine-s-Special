import React from 'react';
import { MapPin } from 'lucide-react';

export const MapSection: React.FC = () => {
  const cities = [
    { name: '广州', top: '75%', left: '60%' },
    { name: '佛山', top: '78%', left: '55%' },
    { name: '厦门', top: '70%', left: '75%' },
    { name: '泉州', top: '65%', left: '78%' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative aspect-square bg-secondary/30 rounded-3xl p-4 overflow-hidden hand-border">
        {/* Abstract Map Shape using SVG */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-10 fill-primary/20">
          <path d="M20,30 Q30,10 50,20 T80,30 T70,70 T40,80 T10,60 Z" />
        </svg>

        <div className="relative w-full h-full">
          {cities.map((city) => (
            <div 
              key={city.name} 
              className="absolute flex flex-col items-center" 
              style={{ top: city.top, left: city.left }}
            >
              <MapPin className="w-5 h-5 text-primary fill-primary/20 animate-bounce" />
              <span className="text-[10px] font-bold bg-white/80 px-1 rounded shadow-sm whitespace-nowrap">{city.name}</span>
            </div>
          ))}

          {/* Connect dots lightly */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <polyline 
              points="60,75 55,78 75,70 78,65" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5" 
              strokeDasharray="2,2" 
              className="text-primary/30"
            />
          </svg>
        </div>

        <div className="absolute top-4 left-4 font-hand text-lg opacity-40">
          🗺️ 我们的脚印
        </div>
      </div>

      <div className="bg-white/50 p-4 rounded-2xl italic text-sm leading-relaxed text-foreground/70 font-hand">
        <p>希望接下来我们还能一起去不同的地方看海，看雪，看四季慢慢变化。</p>
        <p className="mt-2 text-right">希望总有下一次，热气氤氲的时候，你坐在我的对面。</p>
      </div>
    </div>
  );
};
