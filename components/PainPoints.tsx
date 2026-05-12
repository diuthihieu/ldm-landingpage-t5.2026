import { AlertCircle, Users, TrendingDown, Clock } from 'lucide-react';

export default function PainPoints() {
  const painPoints = [
    {
      icon: AlertCircle,
      title: 'Quản lý yếu kém',
      description: 'Thiếu kỹ năng lãnh đạo chiến lược để phát triển dài hạn',
    },
    {
      icon: Users,
      title: 'Xung đột trong đội',
      description: 'Khó khăn trong quản lý nhân sự và giải quyết xung đột',
    },
    {
      icon: TrendingDown,
      title: 'Năng suất thấp',
      description: 'Đội ngũ thiếu động lực và mục tiêu rõ ràng',
    },
    {
      icon: Clock,
      title: 'Thời gian bị lãng phí',
      description: 'Quản lý thời gian và ưu tiên công việc kém hiệu quả',
    },
  ];

  return (
    <section id="pain-points" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Bạn đang phải đối mặt với những{' '}
            <span className="text-primary">thách thức nào?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hầu hết các nhà quản lý mới gặp phải những vấn đề giống nhau. Khóa học này giúp bạn vượt qua chúng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={i}
                className="p-6 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-red-600" size={24} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-sm">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
