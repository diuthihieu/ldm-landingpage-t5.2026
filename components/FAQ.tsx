'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqs = [
    {
      question: 'Khóa học dành cho ai?',
      answer:
        'Khóa học dành cho những người muốn phát triển kỹ năng lãnh đạo, quản lý dự án, và xây dựng đội ngũ cao hiệu quả. Từ quản lý mới đến leader cao cấp đều có thể học.',
    },
    {
      question: 'Tôi có thể học bao lâu?',
      answer:
        'Bạn có thể truy cập khóa học mãi mãi. Học theo tốc độ của mình, không có thời hạn. Nội dung sẽ được cập nhật định kỳ.',
    },
    {
      question: 'Có hỗ trợ sau khi mua không?',
      answer:
        'Có. Tùy vào gói bạn chọn, bạn sẽ nhận được hỗ trợ từ giảng viên qua Zalo group hoặc 1-1 coaching.',
    },
    {
      question: 'Nếu không hài lòng sao?',
      answer:
        'Chúng tôi cung cấp 30 ngày hoàn tiền toàn bộ nếu bạn không hài lòng. Không có câu hỏi nào.',
    },
    {
      question: 'Làm sao để bắt đầu?',
      answer:
        'Chỉ cần điền form đăng ký, chọn gói phù hợp, và thanh toán. Bạn sẽ nhận được link truy cập ngay lập tức.',
    },
    {
      question: 'Tôi có thể chia sẻ tài khoản không?',
      answer:
        'Không. Mỗi tài khoản là riêng lẻ và không được phép chia sẻ. Nó là vi phạm điều khoản sử dụng.',
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-lg text-muted-foreground">
            Không tìm thấy câu trả lời? Liên hệ với chúng tôi qua Zalo
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(i)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-primary transition-transform ${
                    openItems.includes(i) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItems.includes(i) && (
                <div className="px-6 py-4 bg-blue-50 border-t border-border">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
