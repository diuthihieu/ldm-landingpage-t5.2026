'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function EarlyBirdBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-primary to-accent text-primary-foreground py-3 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-sm md:text-base font-semibold flex items-center gap-2">
          <span>🎉</span>
          <span>Ưu đãi Early Bird: Giảm 40% nếu đăng ký trước 15/5</span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Close banner"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
