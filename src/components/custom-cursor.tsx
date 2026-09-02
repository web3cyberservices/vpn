
'use client';

import React, { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animate);
    };

    const raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      <div
        ref={cursorRef}
        className="absolute w-4 h-4 bg-primary rounded-full blur-[1px] shadow-[0_0_15px_rgba(14,165,233,0.8)] opacity-60 transition-transform duration-75 ease-out"
      />
    </div>
  );
}
