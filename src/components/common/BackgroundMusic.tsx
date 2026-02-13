import { useState, useEffect, useRef } from "react";
import { Music, Disc } from "lucide-react";
import { cn } from "@/lib/utils";

export const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // 尝试自动播放
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // 默认音量
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("自动播放被浏览器拦截，需要用户手动交互:", error);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="absolute top-4 right-4 z-[100]">
      <audio
        ref={audioRef}
        src="./music/You And Me.mp3"
        loop
        preload="auto"
      />
      <button
        type="button"
        onClick={togglePlay}
        className={cn(
          "flex items-center justify-center w-9 h-9 rounded-full shadow-md border border-white/20 backdrop-blur-sm transition-all duration-300",
          isPlaying 
            ? "bg-rose-500/80 text-white animate-[spin_4s_linear_infinite]" 
            : "bg-white/80 text-gray-500 hover:bg-white"
        )}
        title={isPlaying ? "关闭音乐" : "开启音乐"}
      >
        {isPlaying ? (
           <Disc className="w-5 h-5" />
        ) : (
           <Music className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};
