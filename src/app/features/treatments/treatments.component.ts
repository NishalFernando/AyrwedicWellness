import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ChevronRight, Clock, DollarSign, Sparkles, Droplets, HeartPulse, Activity, Flower2, Scale, ArrowRight, CheckCircle2 } from 'lucide-angular';

@Component({
  selector: 'app-treatments',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <main class="w-full overflow-hidden bg-cream pt-24">
      
      <!-- PAGE HEADER -->
      <section class="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-forest/80 mix-blend-multiply z-10 pointer-events-none"></div>
        <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000" alt="Ayurvedic Treatments" class="absolute inset-0 w-full h-full object-cover" />
        
        <div class="relative z-20 text-center animate-fade-in-up">
          <p class="text-sage font-medium tracking-wider uppercase text-sm mb-4">Healing Therapies</p>
          <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Our Treatments</h1>
          <div class="flex items-center justify-center gap-2 text-white/80 text-sm font-medium">
            <a routerLink="/" class="hover:text-white transition-colors">Home</a>
            <lucide-icon name="chevron-right" [size]="16"></lucide-icon>
            <span class="text-white">Treatments & Services</span>
          </div>
        </div>
      </section>

      <!-- INTRO SECTION -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6 lg:px-12 max-w-4xl text-center animate-fade-in-up-delay-1">
          <h2 class="text-3xl lg:text-4xl font-serif font-bold text-dark mb-6 leading-tight">
            Restoring Balance Through <span class="text-primary italic font-normal">Ancient Wisdom</span>
          </h2>
          <p class="text-secondary text-lg leading-relaxed">
            Every treatment at AyurVeda Wellness Center is customized to your unique doshic constitution. We utilize pure, traditionally prepared herbal oils and authentic therapeutic techniques to detoxify your body, calm your mind, and awaken your natural healing capabilities.
          </p>
        </div>
      </section>

      <!-- SIGNATURE TREATMENTS (Alternating Layout) -->
      <section class="py-24 bg-cream">
        <div class="container mx-auto px-6 lg:px-12 space-y-24">
          
          @for (treatment of signatureTreatments; track treatment.title; let i = $index) {
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              <!-- Image (Alternates left/right based on index) -->
              <div class="relative group" [class.lg:order-2]="i % 2 !== 0">
                <div class="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                  <div class="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  <img [src]="treatment.image" [alt]="treatment.title" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <!-- Floating Badge -->
                <div class="absolute -bottom-6 -right-6 lg:-right-10 bg-white p-5 rounded-3xl shadow-xl z-20 flex items-center gap-4 transition-transform duration-500 group-hover:-translate-y-2 border border-gray-100"
                     [class.lg:-left-10]="i % 2 !== 0" [class.lg:-right-10]="i % 2 === 0" [class.right-auto]="i % 2 !== 0">
                  <div class="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-primary">
                    <lucide-icon [name]="treatment.icon" [size]="24"></lucide-icon>
                  </div>
                  <div>
                    <p class="font-bold text-dark text-sm">Authentic Therapy</p>
                    <p class="text-xs text-secondary">100% Natural</p>
                  </div>
                </div>
              </div>

              <!-- Text Content -->
              <div [class.lg:order-1]="i % 2 !== 0">
                <h3 class="text-4xl font-serif font-bold text-dark mb-6">{{treatment.title}}</h3>
                <p class="text-secondary text-lg leading-relaxed mb-8">{{treatment.desc}}</p>
                
                <div class="flex flex-col sm:flex-row gap-6 mb-10">
                  <div class="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100">
                    <lucide-icon name="clock" [size]="20" class="text-primary"></lucide-icon>
                    <div>
                      <p class="text-xs text-secondary font-medium uppercase tracking-wider">Duration</p>
                      <p class="font-bold text-dark">{{treatment.duration}}</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100">
                    <lucide-icon name="dollar-sign" [size]="20" class="text-primary"></lucide-icon>
                    <div>
                      <p class="text-xs text-secondary font-medium uppercase tracking-wider">Starting At</p>
                      <p class="font-bold text-dark">{{treatment.price}}</p>
                    </div>
                  </div>
                </div>

                <a routerLink="/contact" class="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-forest transition-colors shadow-sm group">
                  Book This Treatment
                  <lucide-icon name="arrow-right" [size]="18" class="transition-transform duration-300 group-hover:translate-x-1"></lucide-icon>
                </a>
              </div>

            </div>
          }

        </div>
      </section>

      <!-- SPECIALIZED CARE GRID -->
      <section class="py-24 bg-white relative overflow-hidden">
        <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-sage/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-70 pointer-events-none"></div>
        <div class="container mx-auto px-6 lg:px-12 relative z-10">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <h2 class="text-4xl font-serif font-bold text-dark mb-4">Specialized Wellness Programs</h2>
            <p class="text-secondary text-lg">Beyond our signature therapies, we offer targeted holistic solutions for specific health concerns.</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (specialty of otherSpecialties; track specialty.title) {
              <div class="bg-cream p-8 rounded-[2rem] hover:bg-sage/40 transition-colors duration-300 group border border-gray-50">
                <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <lucide-icon [name]="specialty.icon" [size]="28"></lucide-icon>
                </div>
                <h4 class="text-xl font-bold text-dark mb-3">{{specialty.title}}</h4>
                <p class="text-secondary text-sm leading-relaxed mb-6">{{specialty.desc}}</p>
                <a routerLink="/contact" class="text-primary font-bold text-sm flex items-center gap-1 group-hover:text-forest transition-colors">
                  Consult Doctor <lucide-icon name="arrow-right" [size]="14"></lucide-icon>
                </a>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- HOW IT WORKS / PROCESS -->
      <section class="py-24 bg-sage/30">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <p class="text-primary font-medium tracking-wider uppercase text-sm mb-4">Your Healing Journey</p>
            <h2 class="text-4xl font-serif font-bold text-dark">Our Consultation Process</h2>
          </div>
          
          <div class="grid md:grid-cols-3 gap-12 relative">
            <!-- Connecting Line for Desktop -->
            <div class="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-primary/20 z-0"></div>
            
            <div class="relative z-10 flex flex-col items-center text-center">
              <div class="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center text-primary text-3xl font-serif font-bold mb-6 border-4 border-sage">1</div>
              <h4 class="text-2xl font-bold text-dark mb-3">Prakriti Analysis</h4>
              <p class="text-secondary">An in-depth consultation with our Ayurvedic doctor to determine your mind-body constitution and current imbalances.</p>
            </div>
            
            <div class="relative z-10 flex flex-col items-center text-center">
              <div class="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center text-primary text-3xl font-serif font-bold mb-6 border-4 border-sage">2</div>
              <h4 class="text-2xl font-bold text-dark mb-3">Custom Treatment Plan</h4>
              <p class="text-secondary">We design a personalized protocol involving therapies, herbal medicines, diet, and lifestyle modifications.</p>
            </div>
            
            <div class="relative z-10 flex flex-col items-center text-center">
              <div class="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center text-primary text-3xl font-serif font-bold mb-6 border-4 border-sage">3</div>
              <h4 class="text-2xl font-bold text-dark mb-3">Healing & Follow-up</h4>
              <p class="text-secondary">Undergo your therapies in our serene facility, with continuous monitoring and post-treatment guidance.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- BOTTOM CTA -->
      <section class="py-24 bg-forest relative overflow-hidden">
        <div class="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 class="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">Ready to restore your balance?</h2>
          <p class="text-cream/80 text-lg max-w-2xl mx-auto mb-10">Don't let stress and ailments hold you back. Start your holistic healing journey today with a comprehensive Ayurvedic consultation.</p>
          <a routerLink="/contact" class="inline-flex justify-center items-center bg-white text-forest px-10 py-4 rounded-full font-bold hover:bg-cream transition-all duration-300 text-lg shadow-xl shadow-black/10">
            Schedule Your Visit
          </a>
        </div>
      </section>

    </main>
  `
})
export class TreatmentsComponent {
  readonly ChevronRight = ChevronRight;
  readonly Clock = Clock;
  readonly DollarSign = DollarSign;
  readonly Sparkles = Sparkles;
  readonly Droplets = Droplets;
  readonly HeartPulse = HeartPulse;
  readonly Activity = Activity;
  readonly Flower2 = Flower2;
  readonly Scale = Scale;
  readonly ArrowRight = ArrowRight;
  readonly CheckCircle2 = CheckCircle2;

  signatureTreatments = [
    {
      title: 'Panchakarma Detoxification',
      desc: 'Our signature 5-step detoxification program is designed to clear deep-rooted impurities from the body, mind, and emotional pathways. It purifies tissues, balances doshas, and revitalizes your immune system.',
      duration: '14 - 21 Days',
      price: 'Consultation Req.',
      image: '/images/sarahsever-ai-generated-8221928_1920.png',
      icon: 'sparkles'
    },
    {
      title: 'Shirodhara Therapy',
      desc: 'Experience profound relaxation with a continuous, soothing stream of warm herbal oil poured gently over the third eye. This therapy calms the central nervous system, effectively relieving stress, anxiety, and insomnia.',
      duration: '60 Minutes',
      price: 'From $120',
      image: '/images/wonderfulbali-ayurveda-8492246_1920.jpg',
      icon: 'droplets'
    },
    {
      title: 'Abhyanga Full-Body Massage',
      desc: 'A deeply nourishing full-body massage using warm, dosha-specific medicated oils. It improves circulation, promotes lymphatic drainage, and imparts a deep sense of grounding to the body.',
      duration: '90 Minutes',
      price: 'From $150',
      image: '/images/wonderfulbali-ai-generated-8492244.jpg',
      icon: 'heart-pulse'
    }
  ];

  otherSpecialties = [
    { title: 'Pain Management', desc: 'Targeted herbal compresses and localized oil therapies to reduce inflammation and chronic pain like arthritis and sciatica.', icon: 'activity' },
    { title: 'Women\'s Wellness', desc: 'Holistic care for hormonal balance, menstrual health, and comprehensive pre/post-natal support.', icon: 'flower-2' },
    { title: 'Weight Management', desc: 'Metabolic resets through Udvartana (herbal powder massage) and customized diet plans.', icon: 'scale' },
    { title: 'Skin & Hair Care', desc: 'Internal detoxification and external herbal pastes for radiant skin and naturally healthy hair.', icon: 'sparkles' }
  ];
}
