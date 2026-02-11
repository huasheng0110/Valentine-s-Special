import React from 'react';
import { MailOpen } from 'lucide-react';
import { FileCard } from './FileCard';
import { CalendarSection } from './sections/CalendarSection';
import { ResumeSection } from './sections/ResumeSection';
import { AgreementSection } from './sections/AgreementSection';
import { MapSection } from './sections/MapSection';
import { SurpriseSection } from './sections/SurpriseSection';

export const MailContent: React.FC = () => {
  return (
    <div className="min-h-screen p-6 pb-20 animate-in fade-in slide-in-from-bottom-10 duration-700 bg-background overflow-y-auto">
      {/* Header / Envelope Icon */}
      <div className="flex flex-col items-center mb-10 mt-4">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <MailOpen className="w-12 h-12 text-primary animate-bounce-subtle" />
        </div>
        <p className="text-xs font-hand text-primary/60">点击文件，展开我们的故事</p>
      </div>

      {/* Files List */}
      <div className="space-y-4">
        <FileCard index={1} title="我们的120天 · 2025.10.17">
          <CalendarSection />
        </FileCard>

        <FileCard index={2} title="应聘人 · 未来男朋友">
          <ResumeSection />
        </FileCard>

        <FileCard index={3} title="终身甲方协议（最终版）">
          <AgreementSection />
        </FileCard>

        <FileCard index={4} title="我们的脚印 · 未完待续">
          <MapSection />
        </FileCard>

        <FileCard index={5} title="最后一份秘密文件">
          <SurpriseSection />
        </FileCard>
      </div>

      <div className="mt-12 text-center opacity-20 text-[10px]">
        Scroll to explore more
      </div>
    </div>
  );
};
