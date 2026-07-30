import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ChevronRight, Star, Award, Clock, BookOpen, GraduationCap, Phone, Calendar, ArrowRight } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [RouterLink, LucideAngularModule, CommonModule],
  template: `
    <main class="w-full overflow-hidden bg-cream pt-24">

      <!-- PAGE HEADER -->
      <section class="relative h-[420px] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-forest/80 mix-blend-multiply z-10 pointer-events-none"></div>
        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000" alt="Our Doctors" class="absolute inset-0 w-full h-full object-cover" />
        <div class="relative z-20 text-center animate-fade-in-up">
          <p class="text-sage font-medium tracking-wider uppercase text-sm mb-4">Expert Care</p>
          <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Meet Our Doctors</h1>
          <div class="flex items-center justify-center gap-2 text-white/80 text-sm font-medium">
            <a routerLink="/" class="hover:text-white transition-colors">Home</a>
            <lucide-icon name="chevron-right" [size]="16"></lucide-icon>
            <span class="text-white">Our Doctors</span>
          </div>
        </div>
      </section>

      <!-- INTRO -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6 lg:px-12 max-w-4xl text-center animate-fade-in-up-delay-1">
          <h2 class="text-3xl lg:text-4xl font-serif font-bold text-dark mb-4 leading-tight">
            Healers <span class="text-primary italic font-normal">Guided by Knowledge,</span> Driven by Compassion
          </h2>
          <p class="text-secondary text-lg leading-relaxed">
            Our certified Ayurvedic practitioners bring decades of combined clinical experience, deep traditional knowledge, and a genuine commitment to your individual wellness journey.
          </p>
        </div>
      </section>

      <!-- DOCTORS GRID -->
      <section class="py-20 bg-cream">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="space-y-10">
            @for (doctor of doctors; track doctor.name; let i = $index) {
              <div class="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
                <div class="grid md:grid-cols-3 lg:grid-cols-5">

                  <!-- Doctor Photo -->
                  <div class="md:col-span-1 lg:col-span-2 relative overflow-hidden" style="min-height: 400px;">
                    <div class="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                    <img [src]="doctor.image" [alt]="doctor.name"
                         class="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105 absolute inset-0" />
                    <!-- Rating Badge -->
                    <div class="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
                      <lucide-icon name="star" [size]="16" class="text-yellow-500 fill-current"></lucide-icon>
                      <span class="font-bold text-dark text-sm">{{doctor.rating}}</span>
                      <span class="text-secondary text-xs">({{doctor.reviews}} reviews)</span>
                    </div>
                  </div>

                  <!-- Doctor Info -->
                  <div class="md:col-span-2 lg:col-span-3 p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <p class="text-primary font-medium tracking-widest uppercase text-xs mb-2">{{doctor.specialty}}</p>
                      <h3 class="text-3xl lg:text-4xl font-serif font-bold text-dark mb-2">{{doctor.name}}</h3>
                      <p class="text-secondary font-medium mb-6">{{doctor.qualifications}}</p>

                      <p class="text-secondary text-base leading-relaxed mb-8">{{doctor.bio}}</p>

                      <!-- Stats Row -->
                      <div class="flex flex-wrap gap-6 mb-8 pb-8 border-b border-gray-100">
                        <div class="flex items-center gap-3">
                          <div class="w-10 h-10 bg-sage rounded-xl flex items-center justify-center text-primary">
                            <lucide-icon name="clock" [size]="20"></lucide-icon>
                          </div>
                          <div>
                            <p class="font-bold text-dark text-lg leading-none">{{doctor.experience}}</p>
                            <p class="text-xs text-secondary mt-1">Experience</p>
                          </div>
                        </div>
                        <div class="flex items-center gap-3">
                          <div class="w-10 h-10 bg-sage rounded-xl flex items-center justify-center text-primary">
                            <lucide-icon name="graduation-cap" [size]="20"></lucide-icon>
                          </div>
                          <div>
                            <p class="font-bold text-dark text-lg leading-none">{{doctor.patientsCount}}</p>
                            <p class="text-xs text-secondary mt-1">Patients Treated</p>
                          </div>
                        </div>
                        <div class="flex items-center gap-3">
                          <div class="w-10 h-10 bg-sage rounded-xl flex items-center justify-center text-primary">
                            <lucide-icon name="book-open" [size]="20"></lucide-icon>
                          </div>
                          <div>
                            <p class="font-bold text-dark text-lg leading-none">{{doctor.language}}</p>
                            <p class="text-xs text-secondary mt-1">Languages</p>
                          </div>
                        </div>
                      </div>

                      <!-- Specializations -->
                      <div class="mb-8">
                        <p class="text-xs font-bold text-dark uppercase tracking-widest mb-3">Specializes In</p>
                        <div class="flex flex-wrap gap-2">
                          @for (tag of doctor.tags; track tag) {
                            <span class="px-4 py-1.5 bg-sage text-primary text-sm font-medium rounded-full">{{tag}}</span>
                          }
                        </div>
                      </div>
                    </div>

                    <!-- Actions -->
                    <div class="flex flex-col sm:flex-row gap-4">
                      <a routerLink="/contact" class="inline-flex justify-center items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-medium hover:bg-forest transition-colors group/btn">
                        <lucide-icon name="calendar" [size]="18"></lucide-icon>
                        Book Consultation
                        <lucide-icon name="arrow-right" [size]="16" class="transition-transform duration-300 group-hover/btn:translate-x-1"></lucide-icon>
                      </a>
                      <button class="inline-flex justify-center items-center gap-2 bg-white text-dark border border-gray-200 px-7 py-3.5 rounded-full font-medium hover:border-primary hover:text-primary transition-colors">
                        <lucide-icon name="phone" [size]="18"></lucide-icon>
                        Contact Clinic
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- WHY OUR DOCTORS -->
      <section class="py-24 bg-white relative overflow-hidden">
        <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sage/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
        <div class="container mx-auto px-6 lg:px-12 relative z-10">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <p class="text-primary font-medium tracking-wider uppercase text-sm mb-4">Our Standards</p>
            <h2 class="text-4xl font-serif font-bold text-dark">Why Our Doctors Stand Apart</h2>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (standard of standards; track standard.title) {
              <div class="flex gap-5 p-6 rounded-3xl hover:bg-cream transition-colors duration-300">
                <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-sage flex items-center justify-center text-primary">
                  <lucide-icon [name]="standard.icon" [size]="24"></lucide-icon>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-dark mb-2">{{standard.title}}</h4>
                  <p class="text-secondary text-sm leading-relaxed">{{standard.desc}}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-24 bg-forest">
        <div class="container mx-auto px-6 lg:px-12 text-center">
          <h2 class="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">Find the Right Doctor for You</h2>
          <p class="text-cream/80 text-lg max-w-2xl mx-auto mb-10">Not sure which specialist to consult? Our team will help guide you to the perfect practitioner based on your health needs.</p>
          <a routerLink="/contact" class="inline-flex justify-center items-center bg-white text-forest px-10 py-4 rounded-full font-bold hover:bg-cream transition-all duration-300 text-lg shadow-xl">
            Get Matched with a Doctor
          </a>
        </div>
      </section>

    </main>
  `
})
export class DoctorsComponent {
  readonly ChevronRight = ChevronRight;
  readonly Star = Star;
  readonly Award = Award;
  readonly Clock = Clock;
  readonly BookOpen = BookOpen;
  readonly GraduationCap = GraduationCap;
  readonly Phone = Phone;
  readonly Calendar = Calendar;
  readonly ArrowRight = ArrowRight;

  doctors = [
    {
      name: 'Dr. Ananya Sharma',
      specialty: 'Chief Ayurvedic Physician',
      qualifications: 'BAMS, MD (Ayurveda) · Kerala Ayurveda Academy',
      bio: 'Dr. Ananya Sharma is a pioneer in integrative Ayurvedic medicine with over 20 years of clinical practice. Her expertise in Panchakarma detoxification and chronic disease management has helped thousands of patients achieve lasting relief where conventional medicine fell short. She personally supervises all detox programs at the center.',
      experience: '20+ Years',
      patientsCount: '5,000+',
      language: 'English, Hindi',
      rating: '4.9',
      reviews: '312',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000',
      tags: ['Panchakarma', 'Chronic Disease', 'Detox Programs', 'Rasayana']
    },
    {
      name: 'Dr. Vikram Patel',
      specialty: 'Holistic Wellness Expert',
      qualifications: 'BAMS, PG Diploma in Yoga & Naturopathy · Pune University',
      bio: 'Dr. Vikram Patel specializes in bridging the gap between modern stress management and ancient Ayurvedic practice. With a deep knowledge of herbal pharmacology and clinical nutrition, he crafts highly effective protocols for anxiety, burnout, sleep disorders, and metabolic issues.',
      experience: '15+ Years',
      patientsCount: '3,800+',
      language: 'English, Gujarati',
      rating: '4.8',
      reviews: '248',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000',
      tags: ['Stress & Anxiety', 'Herbal Medicine', 'Diabetes Support', 'Insomnia']
    },
    {
      name: 'Dr. Priya Desai',
      specialty: 'Women\'s Wellness Specialist',
      qualifications: 'BAMS, Fellowship in Women\'s Health · Ayurveda Institute of India',
      bio: 'Dr. Priya Desai is the center\'s leading specialist in women\'s holistic health. Her compassionate approach and deep expertise in hormonal balance, fertility support, and skin conditions through natural therapies have made her one of the most sought-after practitioners in the region.',
      experience: '12+ Years',
      patientsCount: '4,200+',
      language: 'English, Marathi, Tamil',
      rating: '4.9',
      reviews: '405',
      image: 'https://images.unsplash.com/photo-1594824432258-29007eeeb5e4?auto=format&fit=crop&q=80&w=1000',
      tags: ['Women\'s Health', 'Skin & Hair', 'Hormonal Balance', 'PCOD/PCOS']
    }
  ];

  standards = [
    { title: 'Rigorous Academic Credentials', desc: 'All our doctors hold government-recognized degrees (BAMS/MD) from accredited Ayurvedic universities.', icon: 'graduation-cap' },
    { title: 'Continuous Learning', desc: 'Our team regularly attends international Ayurvedic conferences and advanced workshops to stay at the forefront of holistic medicine.', icon: 'book-open' },
    { title: 'Patient-First Approach', desc: 'Every consultation is unhurried and thorough, ensuring patients feel heard, respected, and deeply cared for.', icon: 'heart-pulse' },
    { title: 'Evidence-Informed Practice', desc: 'We integrate peer-reviewed research with classical Ayurvedic texts for a safe and effective treatment approach.', icon: 'award' },
    { title: 'Ethical Standards', desc: 'We follow a strict code of medical ethics, ensuring complete transparency in diagnosis and treatment planning.', icon: 'shield-check' },
    { title: 'Multilingual Team', desc: 'Our doctors communicate fluently in multiple languages to ensure no patient ever feels like a stranger.', icon: 'users' }
  ];
}
