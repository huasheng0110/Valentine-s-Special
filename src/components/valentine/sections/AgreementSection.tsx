import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RotateCcw, Check } from 'lucide-react';

export const AgreementSection: React.FC = () => {
  const canvasRefJia = useRef<HTMLCanvasElement>(null);
  const canvasRefYi = useRef<HTMLCanvasElement>(null);
  const [isSignedJia, setIsSignedJia] = useState(false);
  const [isSignedYi, setIsSignedYi] = useState(false);
  const [isDrawingJia, setIsDrawingJia] = useState(false);
  const [isDrawingYi, setIsDrawingYi] = useState(false);

  useEffect(() => {
    [canvasRefJia, canvasRefYi].forEach(ref => {
      const canvas = ref.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#374151';
    });
  }, []);

  const getPos = (e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement | null) => {
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent, canvasRef: React.RefObject<HTMLCanvasElement | null>, setDrawing: (val: boolean) => void) => {
    setDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { x, y } = getPos(e, canvas);
    const ctx = canvas.getContext('2d');
    ctx?.beginPath();
    ctx?.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent, canvasRef: React.RefObject<HTMLCanvasElement | null>, isDrawing: boolean) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { x, y } = getPos(e, canvas);
    const ctx = canvas.getContext('2d');
    ctx?.lineTo(x, y);
    ctx?.stroke();
  };

  const endDrawing = (setDrawing: (val: boolean) => void) => {
    setDrawing(false);
  };

  const clear = (canvasRef: React.RefObject<HTMLCanvasElement | null>, setSigned: (val: boolean) => void) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setSigned(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-[#fffcf0] p-6 rounded-lg border-2 border-stone-200 hand-shadow space-y-4">
        <h3 className="text-center text-lg font-hand font-bold underline underline-offset-4">坚持一个甲方协议</h3>
        
        <div className="text-sm font-hand space-y-3 leading-relaxed text-stone-700">
          <div className="bg-primary/5 p-3 rounded-lg border-l-4 border-primary">
            <p className="font-bold text-primary mb-1">第一条：早睡协议</p>
            <p className="text-xs leading-relaxed">无特殊情况（如生病、DDL等非常情况）不得晚于凌晨两点睡觉，否则需要向对方支付精神损失费现金红包，根据超时时间累计，一元三分钟。</p>
          </div>
          <p>本人（乙方）承认甲方拥有所有事情的最终解释权。</p>
          <p>甲方永远正确，乙方无条件服从。</p>
          <p>本协议自签字起即刻生效，永久有效。</p>
        </div>

        {/* 甲方签字 */}
        <div className="mt-8">
          <p className="text-xs mb-2 text-stone-400">甲方签字处：</p>
          <div className="relative border-2 border-dashed border-stone-300 rounded bg-white">
            <canvas
              ref={canvasRefJia}
              width={280}
              height={100}
              className="w-full touch-none cursor-crosshair"
              onMouseDown={(e) => startDrawing(e, canvasRefJia, setIsDrawingJia)}
              onMouseMove={(e) => draw(e, canvasRefJia, isDrawingJia)}
              onMouseUp={() => endDrawing(setIsDrawingJia)}
              onMouseLeave={() => endDrawing(setIsDrawingJia)}
              onTouchStart={(e) => startDrawing(e, canvasRefJia, setIsDrawingJia)}
              onTouchMove={(e) => draw(e, canvasRefJia, isDrawingJia)}
              onTouchEnd={() => endDrawing(setIsDrawingJia)}
            />
          </div>
          
          <div className="flex justify-between mt-3">
            <Button variant="outline" size="sm" onClick={() => clear(canvasRefJia, setIsSignedJia)} className="text-xs h-8">
              <RotateCcw className="w-3 h-3 mr-1" /> 清除重签
            </Button>
            <Button size="sm" onClick={() => setIsSignedJia(true)} className="text-xs h-8 bg-primary text-white">
              <Check className="w-3 h-3 mr-1" /> 确认生效
            </Button>
          </div>
          {isSignedJia && (
            <div className="text-center animate-in zoom-in duration-300 mt-2">
              <p className="font-hand text-primary text-sm">甲方已签字 ❤️</p>
            </div>
          )}
        </div>

        {/* 乙方签字 */}
        <div className="mt-6">
          <p className="text-xs mb-2 text-stone-400">乙方签字处：Watson</p>
          <div className="relative border-2 border-dashed border-stone-300 rounded bg-white">
            <canvas
              ref={canvasRefYi}
              width={280}
              height={100}
              className="w-full touch-none cursor-crosshair"
              onMouseDown={(e) => startDrawing(e, canvasRefYi, setIsDrawingYi)}
              onMouseMove={(e) => draw(e, canvasRefYi, isDrawingYi)}
              onMouseUp={() => endDrawing(setIsDrawingYi)}
              onMouseLeave={() => endDrawing(setIsDrawingYi)}
              onTouchStart={(e) => startDrawing(e, canvasRefYi, setIsDrawingYi)}
              onTouchMove={(e) => draw(e, canvasRefYi, isDrawingYi)}
              onTouchEnd={() => endDrawing(setIsDrawingYi)}
            />
          </div>
          
          <div className="flex justify-between mt-3">
            <Button variant="outline" size="sm" onClick={() => clear(canvasRefYi, setIsSignedYi)} className="text-xs h-8">
              <RotateCcw className="w-3 h-3 mr-1" /> 清除重签
            </Button>
            <Button size="sm" onClick={() => setIsSignedYi(true)} className="text-xs h-8 bg-primary text-white">
              <Check className="w-3 h-3 mr-1" /> 确认生效
            </Button>
          </div>
          {isSignedYi && (
            <div className="text-center animate-in zoom-in duration-300 mt-2">
              <p className="font-hand text-primary text-sm">乙方已签字 ✓</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
