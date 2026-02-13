import React from 'react';
import { Mailbox, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HomeProps {
  onOpen: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpen }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 text-center animate-in fade-in duration-700">
      <div className="mt-12">
        <p className="text-sm font-hand opacity-70 mb-2">你有一份新的邮件，请查收！</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-8">
        <div className="relative cursor-pointer group" onClick={onOpen}>
          {/* Illustration Container */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Mailbox background circle */}
            <div className="absolute inset-0 bg-secondary rounded-full opacity-50 animate-breathe" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-end space-x-2 translate-y-4">
                <User className="w-12 h-12 text-primary/80" />
                <Mailbox className="w-24 h-24 text-blue-500 transition-transform group-active:scale-95" />
              </div>
            </div>
          </div>
          
          {/* Floating Heart/Letter hint */}
          <div className="absolute top-1/4 right-1/4 animate-bounce-subtle">
            <span className="text-4xl">💌</span>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xl font-hand text-foreground/80">
            叮咚，你有一封新的邮件，<br />请及时查收。
          </p>
          <Button 
            onClick={onOpen}
            className="rounded-full px-8 py-6 text-lg font-hand hover:scale-105 transition-transform bg-primary text-primary-foreground hand-shadow"
          >
            打开信箱 ✉️
          </Button>
        </div>
      </div>

      <div className="mb-8 opacity-40 text-xs">
        2026 Valentine's Special
      </div>
    </div>
  );
};
