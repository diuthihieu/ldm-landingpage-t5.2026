import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

export default function Instructor() {
  const instructors = [
    {
      name: 'Phạm Tuấn Anh',
      title: 'CEO & Founder LDM Academy',
      bio: 'Người lãnh đạo kỹ năng với hơn 15 năm kinh nghiệm',
      image: '/images/instructor1.jpg',
      linkedin: '#',
      email: 'tuananh@ldmacademy.com',
    },
    {
      name: 'Trương Minh Quân',
      title: 'Cố vấn Chiến lược',
      bio: 'Chuyên gia quản lý dự án và lãnh đạo hiệu quả',
      image: '/images/instructor2.jpg',
      linkedin: '#',
      email: 'quan@ldmacademy.com',
    },
  ];

  return (
    <section id="instructor" className="py-20 px-4 bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Các giảng viên hàng đầu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Học từ những người có kinh nghiệm thực tế trong lãnh đạo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {instructors.map((instructor, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 bg-gradient-to-b from-blue-100 to-transparent">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {instructor.name}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {instructor.title}
                </p>
                <p className="text-muted-foreground mb-6">{instructor.bio}</p>

                <div className="flex gap-4">
                  <a
                    href={instructor.linkedin}
                    className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <Linkedin size={20} className="text-primary" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${instructor.email}`}
                    className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <Mail size={20} className="text-primary" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
