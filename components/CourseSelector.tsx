import { Check } from 'lucide-react';

export default function CourseSelector() {
  const tiers = [
    {
      name: 'Basic',
      price: '1,990,000đ',
      originalPrice: '2,490,000đ',
      description: 'Dành cho người mới bắt đầu',
      features: [
        'Truy cập toàn bộ khóa học',
        'Ghi chú học tập',
        'Hỏi đáp với cộng đồng',
        'Chứng chỉ hoàn thành',
      ],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '3,990,000đ',
      originalPrice: '5,490,000đ',
      description: 'Dành cho những người muốn phát triển nhanh',
      features: [
        'Tất cả tính năng Basic',
        'Hỗ trợ trực tiếp từ giảng viên',
        'Tài liệu bổ sung và template',
        'Tham gia group Zalo riêng',
        'Cơ hội networking với bạn học',
        'Tư vấn lộ trình phát triển cá nhân',
      ],
      highlight: true,
    },
    {
      name: 'Premium',
      price: '7,990,000đ',
      originalPrice: '10,990,000đ',
      description: 'Toàn diện cho những leader',
      features: [
        'Tất cả tính năng Pro',
        'Tư vấn 1-1 với mentor',
        'Lộ trình tùy chỉnh cá nhân',
        'Truy cập vĩnh viễn',
        'Cập nhật nội dung suốt đời',
        'Ưu tiên hỗ trợ 24/7',
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-20 px-4 bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Chọn gói học phù hợp
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tất cả gói đều được cập nhật nội dung và hỗ trợ từ các mentor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 transition-all ${
                tier.highlight
                  ? 'bg-primary text-primary-foreground shadow-2xl scale-105 md:scale-100 md:relative md:z-10'
                  : 'bg-white border border-border shadow-md hover:shadow-lg'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${tier.highlight ? 'text-primary-foreground' : 'text-foreground'}`}>
                {tier.name}
              </h3>
              <p className={`text-sm mb-6 ${tier.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                {tier.description}
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className={`text-sm line-through ${tier.highlight ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                    {tier.originalPrice}
                  </span>
                </div>
                <p className={`text-sm font-semibold ${tier.highlight ? 'text-accent-foreground' : 'text-accent'}`}>
                  ⏰ Giá Early Bird (hết 15/5)
                </p>
              </div>

              <a
                href="#contact"
                className={`w-full py-3 rounded-lg font-semibold transition-colors block text-center mb-8 ${
                  tier.highlight
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-primary text-primary-foreground hover:bg-blue-700'
                }`}
              >
                Chọn gói này
              </a>

              <div className="space-y-4">
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className={`flex-shrink-0 mt-1 ${
                        tier.highlight ? 'text-accent-foreground' : 'text-primary'
                      }`}
                    />
                    <span className={`text-sm ${tier.highlight ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
