import { Component, AfterViewInit, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ArrowRight, Leaf, Star, Sparkles, HeartPulse, Droplets, Clock, CalendarCheck, ShieldCheck, MapPin } from 'lucide-angular';
import { CommonModule } from '@angular/common';

// Import Swiper web component
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LucideAngularModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <main class="w-full overflow-hidden">
      <!-- 1. HERO SECTION -->
      <section class="relative min-h-screen flex items-center pt-24 pb-16 bg-cream">
        <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-sage/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70 animate-fade-in pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-olive/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 opacity-70 animate-fade-in pointer-events-none"></div>

        <div class="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div class="max-w-2xl pt-10 lg:pt-0">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage text-primary font-medium text-sm mb-6 opacity-0 animate-fade-in-up">
              <span class="w-2 h-2 rounded-full bg-primary"></span>
              Holistic Ayurvedic Care
            </div>
            
            <h1 class="text-5xl lg:text-[4.5rem] font-serif font-bold text-dark leading-[1.1] mb-6 opacity-0 animate-fade-in-up-delay-1">
              Ancient Wisdom.<br />
              <span class="text-primary italic font-normal">Modern Healing.</span>
            </h1>
            
            <p class="text-lg text-secondary leading-relaxed mb-10 opacity-0 animate-fade-in-up-delay-2 max-w-xl">
              Experience authentic Ayurvedic treatments tailored to your unique dosha. Restore balance, alleviate stress, and rejuvenate your body and mind in our serene, medically professional environment.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up-delay-2">
              <a routerLink="/contact" class="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-forest hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 text-[15px] group">
                Book Consultation
                <lucide-icon name="arrow-right" [size]="20" class="transition-transform duration-300 group-hover:translate-x-1"></lucide-icon>
              </a>
              <a routerLink="/treatments" class="inline-flex justify-center items-center gap-2 bg-white text-dark border border-gray-200 px-8 py-4 rounded-full font-medium hover:border-primary hover:text-primary hover:shadow-md transition-all duration-300 text-[15px]">
                Explore Treatments
              </a>
            </div>

            <div class="mt-14 pt-8 border-t border-gray-200/60 flex items-center gap-8 lg:gap-12 opacity-0 animate-fade-in-up-delay-2">
              <div>
                <p class="text-3xl font-serif font-bold text-dark mb-1">15+</p>
                <p class="text-sm text-secondary font-medium">Years Experience</p>
              </div>
              <div class="w-px h-10 bg-gray-200"></div>
              <div>
                <p class="text-3xl font-serif font-bold text-dark mb-1">10k+</p>
                <p class="text-sm text-secondary font-medium">Happy Patients</p>
              </div>
              <div class="w-px h-10 bg-gray-200"></div>
              <div>
                <p class="text-3xl font-serif font-bold text-dark mb-1">100%</p>
                <p class="text-sm text-secondary font-medium">Natural Care</p>
              </div>
            </div>
          </div>

          <div class="relative lg:h-[700px] flex items-center justify-center opacity-0 animate-fade-in mt-10 lg:mt-0">
            <div class="relative w-full max-w-[480px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-forest/10 z-10 group">
              <div class="absolute inset-0 bg-forest/10 mix-blend-overlay z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
              <img src="/images/wonderfulbali-ai-generated-8492244.jpg" alt="Serene Treatment Room" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            
            <div class="absolute top-1/4 -left-6 lg:-left-16 bg-white p-4 lg:p-5 rounded-2xl shadow-xl shadow-dark/5 z-20 hidden sm:flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-primary">
                <lucide-icon name="leaf" [size]="24"></lucide-icon>
              </div>
              <div>
                <p class="font-bold text-dark text-sm lg:text-base">Herbal Medicine</p>
                <p class="text-xs text-secondary">100% Organic</p>
              </div>
            </div>
            
            <div class="absolute bottom-1/4 -right-4 lg:-right-12 bg-white p-4 lg:p-5 rounded-2xl shadow-xl shadow-dark/5 z-20 hidden sm:flex items-center gap-4">
              <div class="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100" class="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" class="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                <div class="w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-bold shadow-sm">+2k</div>
              </div>
              <div>
                <p class="font-bold text-dark text-sm lg:text-base">Patient Reviews</p>
                <div class="flex text-yellow-400 mt-0.5">
                  <lucide-icon name="star" [size]="14" class="fill-current"></lucide-icon>
                  <lucide-icon name="star" [size]="14" class="fill-current"></lucide-icon>
                  <lucide-icon name="star" [size]="14" class="fill-current"></lucide-icon>
                  <lucide-icon name="star" [size]="14" class="fill-current"></lucide-icon>
                  <lucide-icon name="star" [size]="14" class="fill-current"></lucide-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. ABOUT PREVIEW SECTION -->
      <section class="py-24 bg-white">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="relative group">
              <div class="aspect-square rounded-[2rem] overflow-hidden">
                <img src="/images/wonderfulbali-ayurveda-8492246_1920.jpg" alt="Ayurvedic Oils" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div class="absolute -bottom-8 -right-8 bg-sage p-10 rounded-[2rem] hidden md:block shadow-lg hover:-translate-y-2 transition-transform duration-300">
                <p class="text-4xl font-serif font-bold text-primary mb-2">Prakriti</p>
                <p class="text-dark font-medium max-w-[200px]">Discover your unique mind-body constitution.</p>
              </div>
            </div>
            <div>
              <p class="text-primary font-medium tracking-wider uppercase text-sm mb-4">About Our Center</p>
              <h2 class="text-4xl lg:text-5xl font-serif font-bold text-dark mb-6 leading-tight">Healing Rooted in <br><span class="italic font-normal">5000 Years</span> of Tradition</h2>
              <p class="text-secondary text-lg leading-relaxed mb-6">
                At AyurVeda Wellness Center, we believe that true health is the perfect balance of mind, body, and spirit. Our certified practitioners use authentic herbs, classical formulations, and customized therapies to address the root cause of your ailments, rather than just treating symptoms.
              </p>
              <p class="text-secondary text-lg leading-relaxed mb-10">
                Whether you seek relief from chronic pain, stress reduction, or a comprehensive detox, our medically supervised protocols ensure safe and effective holistic healing.
              </p>
              <a routerLink="/about-us" class="inline-flex items-center gap-2 text-primary font-bold hover:text-forest transition-colors group">
                Read Our Story
                <lucide-icon name="arrow-right" [size]="20" class="transition-transform duration-300 group-hover:translate-x-1"></lucide-icon>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. FEATURED SERVICES GRID -->
      <section class="py-24 bg-cream">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <p class="text-primary font-medium tracking-wider uppercase text-sm mb-4">Our Therapies</p>
            <h2 class="text-4xl lg:text-5xl font-serif font-bold text-dark mb-6">Transformative Treatments</h2>
            <p class="text-secondary text-lg">We offer a wide range of specialized therapies tailored to restore your natural balance and promote longevity.</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (service of featuredServices; track service.title) {
              <div class="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div class="h-56 overflow-hidden relative">
                  <img [src]="service.image" [alt]="service.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div class="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div class="absolute top-4 right-4 w-12 h-12 bg-white/95 backdrop-blur rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                    <lucide-icon [name]="service.icon" [size]="24"></lucide-icon>
                  </div>
                </div>
                <div class="p-8">
                  <h3 class="text-2xl font-serif font-bold text-dark mb-3">{{service.title}}</h3>
                  <p class="text-secondary leading-relaxed mb-6">{{service.desc}}</p>
                  <a routerLink="/treatments" class="inline-flex items-center gap-1 text-sm font-bold text-dark group-hover:text-primary transition-colors">
                    Learn more <lucide-icon name="arrow-right" [size]="16"></lucide-icon>
                  </a>
                </div>
              </div>
            }
          </div>
          
          <div class="text-center mt-12">
            <a routerLink="/treatments" class="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-forest transition-all duration-300">
              View All Services
            </a>
          </div>
        </div>
      </section>

      <!-- 4. WHY CHOOSE US -->
      <section class="py-24 bg-white relative overflow-hidden">
        <div class="container mx-auto px-6 lg:px-12 relative z-10">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p class="text-primary font-medium tracking-wider uppercase text-sm mb-4">The AyurVeda Difference</p>
              <h2 class="text-4xl lg:text-5xl font-serif font-bold text-dark mb-6">Why Patients Trust Us With Their Health</h2>
              
              <div class="mt-12 space-y-8">
                @for (reason of whyChooseUs; track reason.title) {
                  <div class="flex gap-6">
                    <div class="flex-shrink-0 w-12 h-12 bg-cream rounded-full flex items-center justify-center text-primary">
                      <lucide-icon [name]="reason.icon" [size]="24"></lucide-icon>
                    </div>
                    <div>
                      <h4 class="text-xl font-bold text-dark mb-2">{{reason.title}}</h4>
                      <p class="text-secondary">{{reason.desc}}</p>
                    </div>
                  </div>
                }
              </div>
            </div>
            
            <div class="relative group overflow-hidden rounded-[2rem]">
              <img src="/images/sarahsever-ai-generated-8221928_1920.png" alt="Ayurvedic Doctor Consultation" class="shadow-2xl object-cover aspect-[4/5] w-full max-w-lg ml-auto transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent max-w-lg ml-auto"></div>
              <div class="absolute bottom-8 left-8 lg:left-12 right-8 text-white">
                <p class="text-2xl font-serif italic mb-2">"Health is a state of complete harmony of the body, mind and spirit."</p>
                <p class="text-sm font-medium text-white/80">- B.K.S. Iyengar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4.5 MEET OUR DOCTORS -->
      <section class="py-24 bg-cream relative">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <p class="text-primary font-medium tracking-wider uppercase text-sm mb-4">Our Experts</p>
            <h2 class="text-4xl lg:text-5xl font-serif font-bold text-dark mb-6">Meet Our Doctors</h2>
            <p class="text-secondary text-lg">Compassionate healers dedicated to restoring your natural balance.</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (doctor of doctors; track doctor.name) {
              <div class="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div class="aspect-square overflow-hidden relative">
                  <img [src]="doctor.image" [alt]="doctor.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div class="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <a routerLink="/doctors" class="text-white font-medium flex items-center gap-2 hover:text-primary transition-colors">
                      View Profile <lucide-icon name="arrow-right" [size]="16"></lucide-icon>
                    </a>
                  </div>
                </div>
                <div class="p-8 text-center">
                  <h3 class="text-2xl font-serif font-bold text-dark mb-1">{{doctor.name}}</h3>
                  <p class="text-primary font-medium mb-3">{{doctor.role}}</p>
                  <p class="text-secondary text-sm">{{doctor.desc}}</p>
                </div>
              </div>
            }
          </div>
          
          <div class="text-center mt-12">
            <a routerLink="/doctors" class="inline-flex justify-center items-center gap-2 bg-white text-dark border border-gray-200 px-8 py-4 rounded-full font-medium hover:border-primary hover:text-primary hover:shadow-md transition-all duration-300">
              See All Practitioners
            </a>
          </div>
        </div>
      </section>

      <!-- 5. TESTIMONIALS (SWIPER) -->
      <section class="py-24 bg-sage relative overflow-hidden">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-4xl lg:text-5xl font-serif font-bold text-dark mb-6">Patient Stories</h2>
          </div>
          
          <div class="max-w-4xl mx-auto">
            <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" loop="true" autoplay-delay="5000">
              @for (testimonial of testimonials; track testimonial.author) {
                <swiper-slide class="pb-16">
                  <div class="text-center px-4 md:px-12">
                    <div class="flex justify-center text-yellow-500 mb-6 gap-1">
                      <lucide-icon name="star" [size]="24" class="fill-current"></lucide-icon>
                      <lucide-icon name="star" [size]="24" class="fill-current"></lucide-icon>
                      <lucide-icon name="star" [size]="24" class="fill-current"></lucide-icon>
                      <lucide-icon name="star" [size]="24" class="fill-current"></lucide-icon>
                      <lucide-icon name="star" [size]="24" class="fill-current"></lucide-icon>
                    </div>
                    <p class="text-2xl md:text-3xl font-serif text-dark leading-relaxed mb-8 italic">"{{testimonial.text}}"</p>
                    <p class="font-bold text-dark text-lg">{{testimonial.author}}</p>
                    <p class="text-secondary">{{testimonial.role}}</p>
                  </div>
                </swiper-slide>
              }
            </swiper-container>
          </div>
        </div>
      </section>

      <!-- 6. LATEST ARTICLES -->
      <section class="py-24 bg-cream">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div class="max-w-2xl">
              <p class="text-primary font-medium tracking-wider uppercase text-sm mb-4">Wellness Blog</p>
              <h2 class="text-4xl lg:text-5xl font-serif font-bold text-dark">Ayurvedic Wisdom</h2>
            </div>
            <a routerLink="/blog" class="inline-flex items-center gap-2 text-primary font-bold hover:text-forest transition-colors">
              View All Articles
              <lucide-icon name="arrow-right" [size]="20"></lucide-icon>
            </a>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (article of articles; track article.title) {
              <div class="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100">
                <div class="h-60 overflow-hidden relative">
                  <img [src]="article.image" [alt]="article.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-dark">
                    {{article.date}}
                  </div>
                </div>
                <div class="p-8">
                  <h3 class="text-2xl font-serif font-bold text-dark mb-3 group-hover:text-primary transition-colors">{{article.title}}</h3>
                  <p class="text-secondary mb-6">{{article.excerpt}}</p>
                  <span class="text-primary font-medium flex items-center gap-2">
                    Read Article <lucide-icon name="arrow-right" [size]="16"></lucide-icon>
                  </span>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- 7. APPOINTMENT CTA -->
      <section class="py-24 bg-forest relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div class="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 class="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">Begin Your Healing Journey Today</h2>
          <p class="text-cream/80 text-lg max-w-2xl mx-auto mb-10">Schedule a consultation with our experienced Ayurvedic practitioners to create a personalized wellness plan designed exclusively for you.</p>
          <a routerLink="/contact" class="inline-flex justify-center items-center bg-white text-forest px-10 py-4 rounded-full font-bold hover:bg-cream transition-all duration-300 text-lg shadow-xl shadow-black/10">
            Book an Appointment
          </a>
        </div>
      </section>
    </main>
  `
})
export class HomeComponent {
  readonly ArrowRight = ArrowRight;
  readonly Leaf = Leaf;
  readonly Star = Star;
  readonly Sparkles = Sparkles;
  readonly HeartPulse = HeartPulse;
  readonly Droplets = Droplets;
  readonly Clock = Clock;
  readonly CalendarCheck = CalendarCheck;
  readonly ShieldCheck = ShieldCheck;
  readonly MapPin = MapPin;

  featuredServices = [
    {
      title: 'Panchakarma Detox',
      desc: 'A comprehensive 5-step detoxification program to eliminate deep-rooted toxins and restore immune vitality.',
      icon: 'sparkles',
      image: '/images/sarahsever-ai-generated-8221928_1920.png'
    },
    {
      title: 'Abhyanga Massage',
      desc: 'Warm herbal oil massage customized to your dosha, designed to calm the nervous system and nourish the skin.',
      icon: 'droplets',
      image: '/images/jobinscaria-man-9086419_1920.jpg'
    },
    {
      title: 'Ayurvedic Consultation',
      desc: 'In-depth health assessment by our expert doctors to determine your unique body constitution (Prakriti).',
      icon: 'heart-pulse',
      image: '/images/guvo59-woman-3701713_1920.jpg'
    }
  ];

  whyChooseUs = [
    {
      title: 'Medically Certified Practitioners',
      desc: 'Our team consists of highly qualified Ayurvedic doctors with decades of clinical experience in holistic healing.',
      icon: 'shield-check'
    },
    {
      title: 'Authentic Formulations',
      desc: 'We use only 100% organic, traditional herbs and oils sourced directly from pristine natural environments.',
      icon: 'leaf'
    },
    {
      title: 'Personalized Care Plans',
      desc: 'No two bodies are the same. Every treatment, diet, and lifestyle plan is tailored specifically to your dosha.',
      icon: 'calendar-check'
    }
  ];

  doctors = [
    {
      name: 'Dr. Ananya Sharma',
      role: 'Chief Ayurvedic Physician',
      desc: 'Specializes in Panchakarma and chronic disease management with 20+ years of clinical experience.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Dr. Vikram Patel',
      role: 'Holistic Wellness Expert',
      desc: 'Expert in stress management, mental health, and customized herbal formulations for modern lifestyles.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Dr. Priya Desai',
      role: 'Women\'s Health Specialist',
      desc: 'Focuses on hormonal balance, pre and post-natal care, and natural skincare therapies.',
      image: 'https://images.unsplash.com/photo-1594824432258-29007eeeb5e4?auto=format&fit=crop&q=80&w=800'
    }
  ];

  testimonials = [
    {
      text: 'After suffering from chronic back pain for years, the Panchakarma treatment completely changed my life. The doctors here are incredibly knowledgeable and genuinely care about your healing.',
      author: 'Sarah Jenkins',
      role: 'Yoga Instructor'
    },
    {
      text: 'The Abhyanga massage and Shirodhara therapy brought me a level of peace I haven’t felt in decades. The facility is absolutely pristine and profoundly calming.',
      author: 'David Chen',
      role: 'Software Engineer'
    },
    {
      text: 'Their personalized approach to my digestive issues was a game-changer. The herbal formulations worked wonders without any side effects. Highly recommended!',
      author: 'Elena Rodriguez',
      role: 'Business Owner'
    }
  ];

  articles = [
    {
      title: 'Understanding Your Dosha: Vata, Pitta, & Kapha',
      excerpt: 'Discover how knowing your unique Ayurvedic constitution can help you make better lifestyle and dietary choices.',
      date: 'Aug 15, 2026',
      image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: '5 Herbs for Natural Stress Relief',
      excerpt: 'Explore the powerful adaptogenic properties of Ashwagandha, Brahmi, and other traditional Ayurvedic herbs.',
      date: 'Jul 28, 2026',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'The Science Behind Shirodhara',
      excerpt: 'How the continuous flow of warm oil over the forehead calms the nervous system and improves sleep quality.',
      date: 'Jul 10, 2026',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800'
    }
  ];
}
