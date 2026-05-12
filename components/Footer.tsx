import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LDM Academy</h3>
            <p className="text-primary-foreground/80">
              Khóa học phát triển lãnh đạo chiến lược và quản lý hiệu quả.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Khóa học</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="#curriculum" className="hover:text-primary-foreground transition-colors">
                  Chương trình
                </Link>
              </li>
              <li>
                <Link href="#instructor" className="hover:text-primary-foreground transition-colors">
                  Giảng viên
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-primary-foreground transition-colors">
                  Giá cả
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="#faq" className="hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="mailto:hello@ldmacademy.com" className="hover:text-primary-foreground transition-colors">
                  Email
                </a>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Điều khoản
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Theo dõi</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Linkedin"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} LDM Academy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Chính sách riêng tư
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
