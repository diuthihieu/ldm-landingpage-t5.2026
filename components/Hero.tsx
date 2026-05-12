'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      // May 15, 2026 at midnight UTC+7
      const targetDate = new Date('2026-05-15T00:00:00+07:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-transparent">
      <div className="container mx-auto text-center">
        <div className="mb-8 inline-block px-4 py-2 bg-accent-foreground border border-accent rounded-full">
          <p className="text-sm font-semibold text-accent">
            🎓 Mở cửa khóa học lãnh đạo chiến lược
          </p>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Biến Sự Quản Lý Thành
          <span className="text-primary"> Lãnh Đạo Hiệu Quả</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Khóa học toàn diện giúp bạn phát triển kỹ năng lãnh đạo, quản lý dự án và xây dựng đội ngũ cao performence
        </p>

        <a href="#contact" className="button-primary inline-flex items-center gap-2 mb-12">
          Đăng ký ngay <ArrowRight size={20} />
        </a>

        {/* Countdown Timer */}
        {timeLeft && (
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-muted-foreground mb-4">
              ⏰ Kết thúc ưu đãi Early Bird trong:
            </p>
            <div className="flex justify-center gap-4 md:gap-8">
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <p className="text-sm text-muted-foreground mt-2">Ngày</p>
              </div>
              <div className="text-3xl md:text-4xl text-muted-foreground">:</div>
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <p className="text-sm text-muted-foreground mt-2">Giờ</p>
              </div>
              <div className="text-3xl md:text-4xl text-muted-foreground">:</div>
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <p className="text-sm text-muted-foreground mt-2">Phút</p>
              </div>
              <div className="text-3xl md:text-4xl text-muted-foreground">:</div>
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <p className="text-sm text-muted-foreground mt-2">Giây</p>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { number: '500+', label: 'Học viên' },
            { number: '15+', label: 'Giờ học' },
            { number: '100%', label: 'Hài lòng' },
            { number: '10+', label: 'Mentor' },
          ].map((stat, i) => (
            <div key={i} className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
