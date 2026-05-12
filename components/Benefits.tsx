import { Award, Users, TrendingUp, Lightbulb, Target, Zap } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Award,
      title: 'Chứng chỉ công nhân',
      description: 'Nhận chứng chỉ hoàn thành từ LDM Academy',
    },
    {
      icon: Users,
      title: 'Mạng lưới mentor',
      description: 'Kết nối với cộng đồng 500+ leaders',
    },
    {
      icon: TrendingUp,
      title: 'Tăng kỹ năng lãnh đạo',
      description: 'Áp dụng ngay những gì bạn học vào công việc',
    },
    {
      icon: Lightbulb,
      title: 'Kiến thức thực tế',
      description: 'Case studies từ các công ty hàng đầu',
    },
    {
      icon: Target,
      title: 'Tư vấn lộ trình',
      description: 'Lên kế hoạch phát triển cá nhân',
    },
    {
      icon: Zap,
      title: 'Hỗ trợ suốt đời',
      description: 'Truy cập cập nhật nội dung vĩnh viễn',
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lợi ích bạn nhận được
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Không chỉ là khóa học, mà là cơ hội phát triển sự nghiệp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={i}
                className="p-8 bg-card-bg border border-border rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
