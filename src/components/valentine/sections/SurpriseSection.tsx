import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Dices } from 'lucide-react';

export const SurpriseSection: React.FC = () => {
  const [showOffer, setShowOffer] = useState(false);

  const triggerOffer = () => {
    setShowOffer(false);
    setTimeout(() => setShowOffer(true), 10);
  };

  return (
    <div className="space-y-8 py-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="text-6xl animate-bounce-subtle">
          🎁
        </div>
        
        <p className="text-sm font-hand text-center text-foreground/60">
          最后一份秘密文件，点击揭晓惊喜
        </p>

        <Button 
          onClick={triggerOffer}
          className="rounded-full px-8 py-6 text-lg font-hand bg-primary text-white hand-shadow hover:scale-105 active:scale-95 transition-all"
        >
          <Dices className="w-5 h-5 mr-2" /> 点击抽签，offer降临
        </Button>
      </div>

      {showOffer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm animate-in fade-in duration-500" />
          
          <div className="relative animate-in zoom-in spin-in-12 duration-700 flex flex-col items-center">
            {/* Hearts floating around */}
            <div className="absolute -top-16 -left-16 text-3xl animate-bounce">❤️</div>
            <div className="absolute -bottom-16 -right-16 text-3xl animate-bounce delay-150">💖</div>
            <div className="absolute top-1/2 -right-24 text-4xl animate-bounce delay-300">✨</div>
            <div className="absolute -top-20 right-0 text-2xl animate-bounce delay-75">💕</div>
            <div className="absolute bottom-0 -left-20 text-2xl animate-bounce delay-200">💌</div>

            <div className="bg-white p-8 rounded-[40px] border-4 border-primary hand-shadow text-center space-y-4">
              <h2 className="text-4xl font-hand text-primary font-extrabold tracking-widest">✨ OFFER 降临 ✨</h2>
              <div className="h-[2px] bg-primary/20 w-full" />
              <p className="text-2xl font-hand text-foreground">陪我过一辈子协议</p>
              <p className="text-sm opacity-60">正式录用通知</p>
            </div>
            
            <div className="mt-12 text-5xl font-hand text-primary animate-pulse drop-shadow-lg">
              情人节快乐！
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
