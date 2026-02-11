import React, { useState } from 'react';
import { UserCircle, Star } from 'lucide-react';
import { toast } from 'sonner';

export const ResumeSection: React.FC = () => {
  const [rating, setRating] = useState(0);

  const handleRate = (r: number) => {
    setRating(r);
    toast.success("谢谢你的评分，我会继续努力！", {
      position: 'bottom-center',
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white p-6 rounded-3xl border-2 border-muted hand-shadow relative overflow-hidden">
        {/* Profile Header */}
        <div className="flex items-start space-x-4 mb-6">
          <div className="p-1 border-2 border-primary rounded-full">
            <UserCircle className="w-16 h-16 text-primary/40" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-hand font-bold text-primary">应聘人 · 你的❤️</h3>
            <p className="text-xs font-medium text-foreground/60">求职意向：你的专属HR</p>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="space-y-2">
            <p className="font-bold text-primary/80">核心技能：</p>
            <ul className="list-disc list-inside space-y-1 opacity-70">
              <li>逗你笑 (专家)</li>
              <li>陪你吃 (高级)</li>
              <li>拍照 (入门中)</li>
              <li>倾听 (资深)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-primary/80">工作经历：</p>
            <p className="opacity-70">认识你的120天<br/>实习期满，申请转正</p>
          </div>
        </div>

        <div className="mt-8 border-t border-dashed pt-4">
          <p className="text-center text-sm font-hand mb-3 text-primary/80">⭐ 给这份简历打分</p>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRate(star)}
                className="transition-transform active:scale-125"
              >
                <Star 
                  className={`w-8 h-8 ${star <= rating ? 'fill-accent text-accent' : 'text-muted'}`}
                  strokeWidth={1.5}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
