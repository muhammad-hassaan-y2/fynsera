import React, { useRef, useState } from 'react';
import Link from '@docusaurus/Link';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import FynseraLogo from '@/components/FynseraLogo';

export default function GuideCover() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!sceneRef.current || event.pointerType === 'touch') return;
    const rect = sceneRef.current.getBoundingClientRect();
    setTilt({
      x: ((rect.height / 2 - (event.clientY - rect.top)) / rect.height) * 8,
      y: (((event.clientX - rect.left) - rect.width / 2) / rect.width) * 10,
    });
  };

  return (
    <div
      ref={sceneRef}
      className="fynsera-book-scene"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        '--book-tilt-x': `${tilt.x}deg`,
        '--book-tilt-y': `${tilt.y}deg`,
      } as React.CSSProperties}
    >
      <div className="fynsera-book-orbit fynsera-book-orbit--top">
        <span>Practical guide</span>
        <span>Open source</span>
      </div>
      <div className="fynsera-book-orbit fynsera-book-orbit--bottom">
        <span>Agents</span>
        <span>Governance</span>
        <span>Execution</span>
      </div>

      <Link
        to="/docs/startup-guide"
        className="fynsera-3d-book group text-foreground hover:text-foreground hover:no-underline"
        aria-label="Open the Fynsera guide"
      >
        <div className="fynsera-3d-book__back" />
        <div className="fynsera-3d-book__pages fynsera-3d-book__pages--right" />
        <div className="fynsera-3d-book__pages fynsera-3d-book__pages--top" />
        <div className="fynsera-3d-book__pages fynsera-3d-book__pages--bottom" />
        <div className="fynsera-3d-book__spine">
          <FynseraLogo className="h-7 w-7" />
          <span>FYNSERA</span>
        </div>
        <div className="fynsera-3d-book__cover">
          <div className="fynsera-3d-book__grain" />
          <div className="fynsera-3d-book__shine" />
          <div className="fynsera-3d-book__cover-content">
            <div className="flex items-start justify-between">
              <FynseraLogo className="fynsera-book-logo h-20 w-20" />
              <span className="font-mono text-[9px] uppercase tracking-[.2em] text-[#d8ccb4]">
                Field guide 01
              </span>
            </div>
            <div className="mt-auto">
              <p className="font-mono text-[9px] uppercase tracking-[.22em] text-[#c8b894] mb-5">
                Open-source practical guide
              </p>
              <h2 className="font-reading text-[3.25rem] leading-[.9] tracking-[-.055em] font-semibold text-[#f7f0df]">
                Build an
                <span className="block text-[#d7c7a2]">AI-native</span>
                <span className="block">company.</span>
              </h2>
              <div className="mt-8 pt-5 border-t border-[#f7f0df]/20 flex items-center justify-between text-[#e6d8b9]">
                <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.14em]">
                  <BookOpen className="w-4 h-4" />
                  Fynsera
                </span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="fynsera-book-shadow" />
    </div>
  );
}
