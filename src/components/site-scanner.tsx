
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, ShieldCheck, Zap, Globe } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export function SiteScanner() {
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    setScanning(true);
    setTimeout(() => {
      setResults({ security: 94, seo: 88, performance: 97 });
      setScanning(false);
    }, 3000);
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleScan} className="flex gap-3 max-w-lg mx-auto p-2 glass-panel rounded-full">
        <Input placeholder="URL ВАШЕГО САЙТА..." className="border-none bg-transparent focus-visible:ring-0 text-[10px] font-bold tracking-widest pl-6" />
        <Button disabled={scanning} className="btn-cyber-primary rounded-full px-8 h-12 text-[10px]">
          {scanning ? <Loader2 className="animate-spin" /> : 'АНАЛИЗ'}
        </Button>
      </form>

      {results && !scanning && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {[
            { label: 'Security', val: results.security, icon: ShieldCheck },
            { label: 'SEO', val: results.seo, icon: Globe },
            { label: 'Speed', val: results.performance, icon: Zap }
          ].map((r, i) => (
            <div key={i} className="glass-panel p-6 rounded-3xl text-left space-y-4">
              <div className="flex justify-between items-center text-[10px] font-black tracking-widest uppercase opacity-40">
                <span className="flex items-center gap-2"><r.icon size={14} /> {r.label}</span>
                <span>{r.val}%</span>
              </div>
              <Progress value={r.val} className="h-1 bg-white/5" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
