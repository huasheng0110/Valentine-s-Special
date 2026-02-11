import React from 'react';

export const CalendarSection: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Calendar Card */}
      <div className="bg-white p-4 rounded-2xl hand-shadow border-2 border-primary/20 rotate-[-1deg]">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-hand text-primary">2025.12</span>
          <span className="text-xs opacity-60">认识的第4个月</span>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
          {['日', '一', '二', '三', '四', '五', '六'].map(d => <div key={d} className="font-bold opacity-40">{d}</div>)}
          {Array.from({ length: 31 }).map((_, i) => {
            const day = i + 1;
            const isTarget = day === 24;
            return (
              <div key={i} className={`h-8 flex items-center justify-center rounded-lg ${isTarget ? 'bg-primary/20 relative' : ''}`}>
                <span className={isTarget ? 'font-bold text-primary' : ''}>{day}</span>
                {isTarget && (
                  <div className="absolute -top-1 -right-1 text-xs">💔</div>
                )}
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-xs font-hand text-center text-primary/80">
          “我说出了一个所有人都知道的秘密”
        </p>
      </div>

      {/* Chat Illustration */}
      <div className="space-y-4">
        <div className="flex justify-start">
          <div className="bg-primary/10 p-3 rounded-2xl rounded-tl-none max-w-[80%] hand-shadow">
            <p className="text-sm">哈哈哈哈哈哈哈哈哈 笑死我了</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-secondary p-3 rounded-2xl rounded-tr-none max-w-[80%] hand-shadow">
            <p className="text-sm">我笑死了</p>
          </div>
        </div>
        <p className="text-center text-xs opacity-60 italic">和你在一起总是很快乐✨</p>
      </div>

      <div className="border-t border-dashed border-primary/20 pt-4 px-2">
        <p className="text-sm font-hand leading-relaxed text-foreground/80">
          我总是说顺其自然，其实是希望你不要轻易推开我。我一直在。
        </p>
      </div>
    </div>
  );
};
