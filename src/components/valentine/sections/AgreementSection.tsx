import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RotateCcw, Check } from 'lucide-react';

export const AgreementSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSigned, setIsSigned] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#374151';
  }, []);

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true);
    const { x, y } = getPos(e);
    const ctx = canvasRef.current?.getContext('2d');
    ctx?.beginPath();
    ctx?.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();
    const { x, y } = getPos(e);
    const ctx = canvasRef.current?.getContext('2d');
    ctx?.lineTo(x, y);
    ctx?.stroke();
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setIsSigned(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-[#fffcf0] p-6 rounded-lg border-2 border-stone-200 hand-shadow space-y-4">
        <h3 className="text-center text-lg font-hand font-bold underline underline-offset-4">终身甲方协议</h3>
        
        <div className="text-sm font-hand space-y-3 leading-relaxed text-stone-700">
          <p>本人（乙方）承认甲方拥有所有事情的最终解释权。</p>
          <p>甲方永远正确，乙方无条件服从。</p>
          <p>本协议自签字起即刻生效，永久有效。</p>
        </div>

        <div className="mt-8">
          <p className="text-xs mb-2 text-stone-400">甲方签字处：</p>
          <div className="relative border-2 border-dashed border-stone-300 rounded bg-white">
            <canvas
              ref={canvasRef}
              width={280}
              height={120}
              className="w-full touch-none cursor-crosshair"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={endDrawing}
              onMouseLeave={endDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={endDrawing}
            />
          </div>
          
          <div className="flex justify-between mt-4">
            <Button variant="outline" size="sm" onClick={clear} className="text-xs h-8">
              <RotateCcw className="w-3 h-3 mr-1" /> 清除重签
            </Button>
            <Button size="sm" onClick={() => setIsSigned(true)} className="text-xs h-8 bg-primary text-white">
              <Check className="w-3 h-3 mr-1" /> 确认生效
            </Button>
          </div>
        </div>

        {isSigned && (
          <div className="text-center animate-in zoom-in duration-300">
            <p className="font-hand text-primary text-lg mt-2">甲方已签字 ❤️</p>
          </div>
        )}
      </div>
    </div>
  );
};
