import { BookOpen, Users, Target, Zap } from 'lucide-react';

export default function Curriculum() {
  const modules = [
    {
      icon: BookOpen,
      title: 'Module 1: Nền tảng Lãnh đạo',
      duration: '3 giờ',
      lessons: [
        'Các loại lãnh đạo và lý thuyết',
        'Lãnh đạo hiệu quả là gì?',
        'Phân tích điểm mạnh và yếu',
        'Xây dựng tầm nhìn cá nhân',
      ],
    },
    {
      icon: Users,
      title: 'Module 2: Quản lý đội ngũ',
      duration: '3.5 giờ',
      lessons: [
        'Tuyển dụng và onboarding',
        'Động lực và phát triển nhân sự',
        'Feedback và performance review',
        'Xây dựng văn hóa đội mạnh',
      ],
    },
    {
      icon: Target,
      title: 'Module 3: Chiến lược & Quản lý dự án',
      duration: '3 giờ',
      lessons: [
        'Lập kế hoạch chiến lược',
        'Quản lý dự án agile',
        'Quản lý rủi ro',
        'Đo lường và phân tích kết quả',
      ],
    },
    {
      icon: Zap,
      title: 'Module 4: Kỹ năng mềm & Giao tiếp',
      duration: '3 giờ',
      lessons: [
        'Giao tiếp hiệu quả',
        'Đàm phán và xung đột',
        'Thuyết trình tự tin',
        'Xây dựng ảnh hưởng và uy tín',
      ],
    },
  ];

  return (
    <section id="curriculum" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Chương trình học toàn diện
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Được thiết kế bởi các chuyên gia lãnh đạo với kinh nghiệm thực tế
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module, i) => {
            const Icon = module.icon;
            return (
              <div
                key={i}
                className="p-8 bg-card-bg border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <span className="text-sm font-semibold text-accent">
                    {module.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4">
                  {module.title}
                </h3>

                <ul className="space-y-3">
                  {module.lessons.map((lesson, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-200">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Thêm về khóa học
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-primary">13+</p>
              <p className="text-muted-foreground mt-2">Tổng giờ học</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="text-muted-foreground mt-2">Video + Tài liệu</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">∞</p>
              <p className="text-muted-foreground mt-2">Truy cập vĩnh viễn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
