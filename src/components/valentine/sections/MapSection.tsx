import React from 'react';

export const MapSection: React.FC = () => {
  const cities = [
    { name: '广州', top: '75%', left: '60%' },
    { name: '佛山', top: '78%', left: '55%' },
    { name: '厦门', top: '70%', left: '75%' },
    { name: '泉州', top: '65%', left: '78%' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative aspect-square bg-secondary/30 rounded-3xl p-6 overflow-hidden border-2 border-primary/10">
        {/* Abstract Map Shape using CSS */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[280px] h-[280px]">
            {/* 中国地图抽象轮廓 - 使用emoji和CSS */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/20 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] border-2 border-dashed border-primary/20" />
            
            {/* 城市标记点 */}
            {cities.map((city) => (
              <div 
                key={city.name} 
                className="absolute flex flex-col items-center animate-pulse" 
                style={{ top: city.top, left: city.left, animationDuration: '2s' }}
              >
                {/* 红色圆点 */}
                <div className="relative">
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg" />
                  <div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-75" />
                </div>
                {/* 城市名称 */}
                <span className="text-xs font-bold bg-white/90 px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap mt-1 text-foreground">
                  {city.name}
                </span>
              </div>
            ))}

            {/* 装饰性emoji */}
            <div className="absolute top-2 left-2 text-2xl opacity-60">🧭</div>
            <div className="absolute bottom-2 right-2 text-2xl opacity-60">✈️</div>
            <div className="absolute top-1/4 right-4 text-xl opacity-40">🌊</div>
          </div>
        </div>

        <div className="absolute top-4 left-4 font-hand text-base opacity-50 z-10">
          🗺️ 我们的脚印
        </div>
      </div>

      <div className="bg-white/50 p-4 rounded-2xl text-sm leading-relaxed text-foreground/70 font-hand space-y-2">
        <p className="text-justify">
          希望接下来我们还能一起去不同的地方看海，看雪，看四季慢慢变化。希望总有下一次，热气氤氲的时候，你坐在我的对面。
        </p>
      </div>
    </div>
  );
};
