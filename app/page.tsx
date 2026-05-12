'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import CourseSelector from '@/components/CourseSelector';
import Curriculum from '@/components/Curriculum';
import Instructor from '@/components/Instructor';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import FloatingZaloButton from '@/components/FloatingZaloButton';
import EarlyBirdBanner from '@/components/EarlyBirdBanner';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <EarlyBirdBanner />
      <Header isScrolled={isScrolled} />
      <Hero />
      <PainPoints />
      <CourseSelector />
      <Curriculum />
      <Instructor />
      <Benefits />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingZaloButton />
    </main>
  );
}
