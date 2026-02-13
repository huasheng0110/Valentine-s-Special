import React, { useState, useRef } from 'react';
import { Star, Upload } from 'lucide-react';
import { toast } from 'sonner';

export const ResumeSection: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [avatarUrl, setAvatarUrl] = useState<string>("https://miaoda-conversation-file.cdn.bcebos.com/user-9k88189rs9vk/conv-9ka0teu1rls0/20260212/file-9kbb3khlvn5s.png");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleRate = (r: number) => {
    setRating(r);
    toast.success("谢谢你的评分，我会继续努力！", {
      position: 'bottom-center',
    });
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        toast.error("图片大小不能超过1MB");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatarUrl(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white p-6 rounded-3xl border-2 border-muted hand-shadow relative overflow-hidden">
        {/* Profile Header */}
        <div className="flex items-start space-x-4 mb-6">
          <div className="relative group">
            <div className="p-1 border-2 border-primary rounded-full overflow-hidden w-[72px] h-[72px] flex items-center justify-center bg-primary/5">
              <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover rounded-full" />
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
            >
              <Upload className="w-6 h-6 text-white" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
              className="hidden"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-hand font-bold text-primary">应聘人 · Watson</h3>
            <p className="text-xs font-medium text-foreground/60">求职意向：你的专属人机</p>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="space-y-2">
            <p className="font-bold text-primary/80">核心技能：</p>
            <ul className="list-disc list-inside space-y-1 opacity-70">
              <li>陪嘉慧</li>
              <li>一款高效可迭代人机</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-primary/80">工作经历：</p>
            <p className="opacity-70">认识你的120天<br/>实习期</p>
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
