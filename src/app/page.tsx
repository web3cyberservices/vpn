import React from 'react';
import Link from 'next/link';
import { LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AlexNetLanding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#020617]">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full nebula-pulse opacity-40 pointer-events-none" />
      </div>

      <main className="z-10 flex flex-col items-center space-y-12 px-6 text-center">
        {/* Logo Section */}
        <div className="space-y-6">
          <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto neon-glow-primary">
            <Image 
              src="/fonts/logo512x512.png" 
              alt="alexnet.pro Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <div className="space-y-2">
            <h1 className="brand-title text-4xl md:text-6xl tracking-[0.6em] text-white">
              ALEX<span className="text-primary font-black">NET.PRO</span>
            </h1>
            <p className="text-[10px] md:text-xs font-black tracking-[0.8em] text-white/20 uppercase">
              PREMIUM VLESS INFRASTRUCTURE
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
          <Button asChild size="lg" className="h-16 px-8 rounded-2xl btn-cyber-primary flex-1 text-xs font-black tracking-widest group">
            <Link href="/vpn">
              <LogIn className="mr-2 w-4 h-4" />
              ВОЙТИ
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="h-16 px-8 rounded-2xl border-white/10 text-white flex-1 text-xs font-black tracking-widest hover:bg-white/5 transition-all">
            <Link href="/vpn">
              <UserPlus className="mr-2 w-4 h-4" />
              РЕГИСТРАЦИЯ
            </Link>
          </Button>
        </div>

        {/* Footer Hint */}
        <p className="text-[9px] font-black text-white/10 uppercase tracking-[0.4em]">
          Secure. Private. Absolute. 2026
        </p>
      </main>
    </div>
  );
}
