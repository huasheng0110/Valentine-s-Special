import React, { useState } from 'react';
import { Home } from './components/valentine/Home';
import { MailContent } from './components/valentine/MailContent';
import { Toaster } from '@/components/ui/sonner';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center bg-muted/30 min-h-screen">
      <div className="w-full max-w-[375px] bg-background shadow-2xl relative overflow-x-hidden min-h-screen flex flex-col">
        {!isOpen ? (
          <Home onOpen={() => setIsOpen(true)} />
        ) : (
          <MailContent />
        )}
        <Toaster />
      </div>
    </div>
  );
};

export default App;
