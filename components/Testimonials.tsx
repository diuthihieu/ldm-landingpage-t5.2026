import Image from 'next/image';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Nguyễn Văn A',
      role: 'Quản lý dự án',
      company: 'Tech Corp',
      text: 'Khóa học này thay đổi cách tôi quản lý đội. Tôi áp dụng được ngay các kỹ năng vào công việc.',
      image: '/images/testimonial1.jpg',
      rating: 5,
    },
    {
      name: 'Trần Thị B',
      role: 'Team Lead',
      company: 'Digital Agency',
      text: 'Rất hài lòng với chất lượng nội dung và hỗ trợ từ giảng viên. Đây là khoản đầu tư tốt nhất.',
      image: '/images/testimonial2.jpg',
      rating: 5,
    },
    {
      name: 'Phạm Minh C',
      role: 'Startup Founder',
      company: 'Innovation Hub',
      text: 'Nội dung rất thực tế và dễ áp dụng. Đặc biệt là phần quản lý đội và lãnh đạo.',
      image: '/images/testimonial3.jpg',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Học viên nói gì
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hơn 500 người đã học và có những thay đổi tích cực
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-foreground mb-6 text-lg italic">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
