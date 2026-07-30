import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ChevronRight, Sparkles, Leaf, HeartPulse, ArrowRight, Zap } from 'lucide-angular';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <main class="w-full overflow-hidden bg-cream pt-24">

      <!-- PAGE HEADER -->
      <section class="relative h-[420px] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-forest/80 mix-blend-multiply z-10 pointer-events-none"></div>
        <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000" alt="Wellness Packages" class="absolute inset-0 w-full h-full object-cover" />
        <div class="relative z-20 text-center animate-fade-in-up">
          <p class="text-sage font-medium tracking-wider uppercase text-sm mb-4">Curated Healing Plans</p>
          <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Wellness Packages</h1>
          <div class="flex items-center justify-center gap-2 text-white/80 text-sm font-medium">
            <a routerLink="/" class="hover:text-white transition-colors">Home</a>
            <lucide-icon name="chevron-right" [size]="16"></lucide-icon>
            <span class="text-white">Wellness Packages</span>
          </div>
        </div>
      </section>

      <!-- INTRO -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <h2 class="text-3xl lg:text-4xl font-serif font-bold text-dark mb-4 leading-tight">
            Curated Packages for Every <span class="text-primary italic font-normal">Healing Journey</span>
          </h2>
          <p class="text-secondary text-lg leading-relaxed">
            Our structured wellness packages are thoughtfully designed to deliver measurable results — at a better value than booking individual sessions. Whether you're seeking a quick reset or a full transformation, we have a plan for you.
          </p>
        </div>
      </section>

      <!-- PRICING CARDS -->
      <section class="py-24 bg-cream">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="grid md:grid-cols-3 gap-8 items-start">

            <!-- STARTER PACKAGE -->
            <div class="bg-white rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100">
              <div class="p-8 lg:p-10 flex flex-col h-full">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-14 h-14 rounded-2xl bg-sage text-primary flex items-center justify-center">
                    <lucide-icon name="leaf" [size]="28"></lucide-icon>
                  </div>
                  <div>
                    <p class="text-xs font-bold tracking-widest uppercase text-primary">Gentle Reset</p>
                    <h3 class="text-2xl font-serif font-bold text-dark">Starter Wellness</h3>
                  </div>
                </div>
                <div class="mb-6 pb-6 border-b border-gray-100">
                  <div class="flex items-end gap-2">
                    <span class="text-5xl font-serif font-bold text-dark">$299</span>
                    <span class="text-sm font-medium mb-2 text-secondary">/ per person</span>
                  </div>
                  <p class="text-sm mt-2 text-secondary">3 Days Program</p>
                </div>
                <p class="text-sm text-secondary leading-relaxed mb-8">A gentle introduction to Ayurvedic healing, ideal for first-timers seeking relief from mild stress and fatigue.</p>
                <ul class="space-y-3 mb-10 flex-grow">
                  @for (f of starterFeatures; track f) {
                    <li class="flex items-start gap-3">
                      <span class="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span class="text-sm text-secondary">{{f}}</span>
                    </li>
                  }
                </ul>
                <a routerLink="/contact" class="w-full text-center py-4 rounded-full font-bold bg-primary text-white hover:bg-forest transition-colors flex items-center justify-center gap-2 group">
                  Book This Package
                  <lucide-icon name="arrow-right" [size]="16" class="transition-transform duration-300 group-hover:translate-x-1"></lucide-icon>
                </a>
              </div>
            </div>

            <!-- FEATURED PACKAGE -->
            <div class="bg-forest rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 ring-2 ring-primary relative -mt-4 mb-4">
              <div class="bg-primary text-white text-xs font-bold tracking-widest uppercase text-center py-2.5">✦ Most Popular</div>
              <div class="p-8 lg:p-10 flex flex-col h-full">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-14 h-14 rounded-2xl bg-white/10 text-sage flex items-center justify-center">
                    <lucide-icon name="sparkles" [size]="28"></lucide-icon>
                  </div>
                  <div>
                    <p class="text-xs font-bold tracking-widest uppercase text-sage">Recommended</p>
                    <h3 class="text-2xl font-serif font-bold text-white">Deep Rejuvenation</h3>
                  </div>
                </div>
                <div class="mb-6 pb-6 border-b border-white/10">
                  <div class="flex items-end gap-2">
                    <span class="text-5xl font-serif font-bold text-white">$799</span>
                    <span class="text-sm font-medium mb-2 text-white/60">/ per person</span>
                  </div>
                  <p class="text-sm mt-2 text-white/60">7 Days Program</p>
                </div>
                <p class="text-sm text-white/70 leading-relaxed mb-8">Our most popular package. A comprehensive week-long retreat targeting deep-rooted imbalances, chronic fatigue, and stress.</p>
                <ul class="space-y-3 mb-10 flex-grow">
                  @for (f of rejuvenationFeatures; track f) {
                    <li class="flex items-start gap-3">
                      <span class="text-sage font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span class="text-sm text-white/80">{{f}}</span>
                    </li>
                  }
                </ul>
                <a routerLink="/contact" class="w-full text-center py-4 rounded-full font-bold bg-white text-forest hover:bg-cream transition-colors flex items-center justify-center gap-2 group">
                  Book This Package
                  <lucide-icon name="arrow-right" [size]="16" class="transition-transform duration-300 group-hover:translate-x-1"></lucide-icon>
                </a>
              </div>
            </div>

            <!-- TOTAL TRANSFORMATION PACKAGE -->
            <div class="bg-white rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100">
              <div class="p-8 lg:p-10 flex flex-col h-full">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-14 h-14 rounded-2xl bg-sage text-primary flex items-center justify-center">
                    <lucide-icon name="heart-pulse" [size]="28"></lucide-icon>
                  </div>
                  <div>
                    <p class="text-xs font-bold tracking-widest uppercase text-primary">Complete Healing</p>
                    <h3 class="text-2xl font-serif font-bold text-dark">Total Transformation</h3>
                  </div>
                </div>
                <div class="mb-6 pb-6 border-b border-gray-100">
                  <div class="flex items-end gap-2">
                    <span class="text-5xl font-serif font-bold text-dark">$1,899</span>
                    <span class="text-sm font-medium mb-2 text-secondary">/ per person</span>
                  </div>
                  <p class="text-sm mt-2 text-secondary">21 Days Panchakarma</p>
                </div>
                <p class="text-sm text-secondary leading-relaxed mb-8">The ultimate healing experience — a full Panchakarma detoxification program for profound and lasting rejuvenation.</p>
                <ul class="space-y-3 mb-10 flex-grow">
                  @for (f of transformationFeatures; track f) {
                    <li class="flex items-start gap-3">
                      <span class="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span class="text-sm text-secondary">{{f}}</span>
                    </li>
                  }
                </ul>
                <a routerLink="/contact" class="w-full text-center py-4 rounded-full font-bold bg-primary text-white hover:bg-forest transition-colors flex items-center justify-center gap-2 group">
                  Book This Package
                  <lucide-icon name="arrow-right" [size]="16" class="transition-transform duration-300 group-hover:translate-x-1"></lucide-icon>
                </a>
              </div>
            </div>

          </div>

          <p class="text-center text-secondary text-sm mt-10">
            All packages include a complimentary pre-assessment consultation and a post-package follow-up.
            <a routerLink="/contact" class="text-primary font-medium underline hover:text-forest">Request a custom quote</a> for groups or extended programs.
          </p>
        </div>
      </section>

      <!-- COMPARISON TABLE -->
      <section class="py-24 bg-white relative overflow-hidden">
        <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-sage/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
        <div class="container mx-auto px-6 lg:px-12 relative z-10">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <p class="text-primary font-medium tracking-wider uppercase text-sm mb-4">Comparison</p>
            <h2 class="text-4xl font-serif font-bold text-dark">What's Included</h2>
          </div>

          <div class="overflow-x-auto rounded-[2rem] shadow-md border border-gray-100">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-cream border-b border-gray-100">
                  <th class="text-left p-6 font-bold text-dark font-sans text-base w-2/5">Feature</th>
                  <th class="p-6 font-bold font-sans text-base text-center text-dark">Starter</th>
                  <th class="p-6 font-bold font-sans text-base text-center text-primary">Deep Rejuvenation</th>
                  <th class="p-6 font-bold font-sans text-base text-center text-dark">Total Transformation</th>
                </tr>
              </thead>
              <tbody>
                @for (row of comparisonRows; track row.feature; let i = $index) {
                  <tr class="border-b border-gray-50 last:border-0" [class]="i % 2 === 0 ? 'bg-white' : 'bg-cream/30'">
                    <td class="p-6 font-medium text-dark">{{row.feature}}</td>
                    <td class="p-6 text-center" [innerHTML]="getCellValue(row.starter)"></td>
                    <td class="p-6 text-center bg-sage/10" [innerHTML]="getCellValue(row.rejuvenation)"></td>
                    <td class="p-6 text-center" [innerHTML]="getCellValue(row.transformation)"></td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- IDEAL FOR -->
      <section class="py-24 bg-cream">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <h2 class="text-4xl font-serif font-bold text-dark">Not Sure Which Package?</h2>
            <p class="text-secondary text-lg mt-4">Let us help you find the perfect fit.</p>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            @for (profile of idealFor; track profile.title) {
              <div class="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center">
                <div class="w-16 h-16 rounded-full bg-sage flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <lucide-icon [name]="profile.icon" [size]="30"></lucide-icon>
                </div>
                <h4 class="text-2xl font-serif font-bold text-dark mb-3">{{profile.title}}</h4>
                <p class="text-secondary leading-relaxed mb-6">{{profile.desc}}</p>
                <span class="inline-block px-5 py-2 bg-sage text-primary rounded-full text-sm font-bold">{{profile.recommended}}</span>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-24 bg-forest">
        <div class="container mx-auto px-6 lg:px-12 text-center">
          <h2 class="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">Your Journey Begins Here</h2>
          <p class="text-cream/80 text-lg max-w-2xl mx-auto mb-10">Contact us today to discuss which package aligns with your health goals. Our doctors will help you make the best choice.</p>
          <a routerLink="/contact" class="inline-flex justify-center items-center bg-white text-forest px-10 py-4 rounded-full font-bold hover:bg-cream transition-all duration-300 text-lg shadow-xl">
            Enquire Now
          </a>
        </div>
      </section>

    </main>
  `
})
export class PackagesComponent {

  getCellValue(val: boolean | string): string {
    if (val === true) return `<span class="text-primary font-bold text-xl">✓</span>`;
    if (val === false) return `<span class="text-gray-300 font-bold text-xl">—</span>`;
    return `<span class="text-secondary text-sm font-medium">${val}</span>`;
  }

  starterFeatures = [
    'Initial Prakriti (body type) assessment',
    '2 × Abhyanga (full-body oil massage)',
    '1 × Shirodhara (warm oil head therapy)',
    'Personalized herbal tea & diet plan',
    'Yoga & breathing session (1 class)',
    'Follow-up consultation'
  ];

  rejuvenationFeatures = [
    'Full Prakriti & Vikriti analysis by senior doctor',
    '5 × Abhyanga + Swedhana (herbal steam)',
    '3 × Shirodhara sessions',
    '1 × Nasya (nasal cleansing therapy)',
    'Personalised herbal medicines (7-day supply)',
    'Daily yoga, pranayama & meditation',
    'Customised Ayurvedic diet plan',
    '2 follow-up consultations',
    'Wellness progress report'
  ];

  transformationFeatures = [
    'Comprehensive dosha & health analysis',
    'Full Panchakarma protocol (all 5 steps)',
    'Daily medicated oil treatments',
    'Virechana & Basti (internal cleansing)',
    'Unlimited herbal medicines',
    'Daily supervised yoga therapy',
    'Customised Rasayana (rejuvenation plan)',
    '4 follow-up consultations (3 months)',
    'Lifetime wellness guidance portal access'
  ];

  comparisonRows: { feature: string; starter: boolean | string; rejuvenation: boolean | string; transformation: boolean | string }[] = [
    { feature: 'Initial Prakriti Consultation', starter: true, rejuvenation: true, transformation: true },
    { feature: 'Abhyanga (Oil Massage) Sessions', starter: '2 sessions', rejuvenation: '5 sessions', transformation: 'Daily' },
    { feature: 'Shirodhara Therapy', starter: '1 session', rejuvenation: '3 sessions', transformation: '5+ sessions' },
    { feature: 'Herbal Medicines', starter: false, rejuvenation: true, transformation: true },
    { feature: 'Yoga & Meditation Classes', starter: '1 class', rejuvenation: 'Daily', transformation: 'Daily (Supervised)' },
    { feature: 'Customised Diet Plan', starter: true, rejuvenation: true, transformation: true },
    { feature: 'Full Panchakarma Detox', starter: false, rejuvenation: false, transformation: true },
    { feature: 'Follow-up Consultations', starter: '1', rejuvenation: '2', transformation: '4 (3 months)' },
    { feature: 'Wellness Progress Report', starter: false, rejuvenation: true, transformation: true }
  ];

  idealFor = [
    {
      title: 'First-Timers',
      desc: 'New to Ayurveda and looking for a gentle, risk-free introduction to holistic healing without a major commitment.',
      icon: 'zap',
      recommended: 'Starter Wellness'
    },
    {
      title: 'Chronic Conditions',
      desc: 'Dealing with persistent stress, fatigue, hormonal issues, or lifestyle disorders that have not responded to conventional treatments.',
      icon: 'heart-pulse',
      recommended: 'Deep Rejuvenation'
    },
    {
      title: 'Full Detox Seekers',
      desc: 'Ready for a profound, medically supervised detoxification and deep-level healing that creates lasting change.',
      icon: 'sparkles',
      recommended: 'Total Transformation'
    }
  ];
}
