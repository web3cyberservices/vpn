
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function VpnPortal() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 nebula-pulse opacity-20 pointer-events-none" />
      
      <div className="glass-panel w-full max-w-md rounded-[3rem] border-white/5 shadow-2xl overflow-hidden p-10 space-y-8">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-primary/10 rounded-3xl mx-auto flex items-center justify-center neon-glow-primary">
            <Shield className="text-primary w-10 h-10" />
          </div>
          <div>
            <h2 className="brand-title text-xl text-white">ALEXNET.PRO</h2>
            <p className="text-[10px] font-black tracking-[0.5em] text-white/30 uppercase mt-2">Private Terminal</p>
          </div>
        </div>
        
        <div className="p-6 bg-black/40 rounded-3xl border border-white/5 space-y-4">
          <div className="flex items-center gap-4 text-xs font-bold text-white/60">
            <Lock size={16} className="text-primary" />
            <span>VLESS Reality + TCP</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-white/60">
            <Terminal size={16} className="text-primary" />
            <span>Military Grade Encryption</span>
          </div>
        </div>
        
        <Button asChild className="w-full h-14 btn-cyber-primary rounded-2xl text-[11px]">
           <Link href="/">ВЕРНУТЬСЯ В ГЛАВНОЕ МЕНЮ</Link>
        </Button>
        
        <p className="text-center text-[9px] font-black text-white/20 uppercase tracking-widest">
          Registration only via Telegram Bot
        </p>
      </div>
    </div>
  );
}
