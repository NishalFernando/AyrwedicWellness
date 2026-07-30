import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ChevronRight, Heart, Target, Leaf, Sparkles, Shield, Clock, Users } from 'lucide-angular';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <main class="w-full overflow-hidden bg-cream pt-24">
      
      <!-- PAGE HEADER -->
      <section class="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-forest/80 mix-blend-multiply z-10 pointer-events-none"></div>
        <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000" alt="Ayurveda Wellness Center" class="absolute inset-0 w-full h-full object-cover" />
        
        <div class="relative z-20 text-center animate-fade-in-up">
          <h1 class="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Our Story</h1>
          <div class="flex items-center justify-center gap-2 text-white/80 text-sm font-medium">
            <a routerLink="/" class="hover:text-white transition-colors">Home</a>
            <lucide-icon name="chevron-right" [size]="16"></lucide-icon>
            <span class="text-white">About Us</span>
          </div>
        </div>
      </section>

      <!-- OUR PHILOSOPHY -->
      <section class="py-24">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="animate-fade-in-up-delay-1 relative group">
              <div class="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] max-w-[500px] mx-auto">
                <img src="/images/wonderfulbali-ayurveda-8492246_1920.jpg" alt="Ayurvedic preparation" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div class="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div class="absolute -bottom-10 -left-10 lg:-left-20 bg-white p-8 rounded-3xl shadow-xl w-64 hidden sm:block animate-fade-in-up-delay-2 group-hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
                <h4 class="font-serif font-bold text-2xl text-dark mb-2">5,000+</h4>
                <p class="text-secondary text-sm">Years of ancient wisdom applied to modern healing.</p>
              </div>
            </div>
            
            <div class="animate-fade-in-up-delay-2">
              <p class="text-primary font-medium tracking-wider uppercase text-sm mb-4">Our Philosophy</p>
              <h2 class="text-4xl lg:text-5xl font-serif font-bold text-dark mb-6 leading-tight">Rooted in Tradition,<br /><span class="italic font-normal">Dedicated to Healing</span></h2>
              <p class="text-secondary text-lg leading-relaxed mb-6">
                AyurVeda Wellness Center was founded on a simple yet profound belief: that true health is not merely the absence of disease, but a dynamic state of balance between the body, mind, and environment.
              </p>
              <p class="text-secondary text-lg leading-relaxed mb-8">
                Our approach combines the ancient, time-tested principles of Ayurveda with modern holistic practices. We focus on identifying the root cause of imbalances (Vikriti) and designing personalized pathways to help our patients return to their natural, harmonious state (Prakriti).
              </p>
              <div class="flex gap-4">
                <a routerLink="/treatments" class="inline-flex justify-center items-center bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-forest transition-colors shadow-sm">
                  View Treatments
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- MISSION & VISION -->
      <section class="py-24 bg-white relative overflow-hidden">
        <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-sage/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none"></div>
        <div class="container mx-auto px-6 lg:px-12 relative z-10">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-cream p-10 lg:p-14 rounded-[2rem] hover:shadow-lg transition-shadow duration-300 group">
              <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <lucide-icon name="target" [size]="32"></lucide-icon>
              </div>
              <h3 class="text-3xl font-serif font-bold text-dark mb-4">Our Mission</h3>
              <p class="text-secondary text-lg leading-relaxed">
                To provide authentic, compassionate, and personalized Ayurvedic healthcare that empowers individuals to take charge of their well-being and live vibrant, balanced lives.
              </p>
            </div>
            
            <div class="bg-sage/40 p-10 lg:p-14 rounded-[2rem] hover:shadow-lg transition-shadow duration-300 group">
              <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <lucide-icon name="sparkles" [size]="32"></lucide-icon>
              </div>
              <h3 class="text-3xl font-serif font-bold text-dark mb-4">Our Vision</h3>
              <p class="text-secondary text-lg leading-relaxed">
                To be a globally recognized sanctuary of holistic healing, inspiring a shift from reactive sick-care to proactive, natural wellness rooted in ancient wisdom.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CORE VALUES -->
      <section class="py-24 bg-forest relative overflow-hidden text-center">
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        <div class="container mx-auto px-6 lg:px-12 relative z-10">
          <p class="text-sage font-medium tracking-wider uppercase text-sm mb-4">What Guides Us</p>
          <h2 class="text-4xl lg:text-5xl font-serif font-bold text-white mb-16">Our Core Values</h2>
          
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-sage mb-6">
                <lucide-icon name="leaf" [size]="32"></lucide-icon>
              </div>
              <h4 class="text-xl font-bold text-white mb-3">Authenticity</h4>
              <p class="text-cream/70">Uncompromised adherence to classical Ayurvedic texts and pure ingredients.</p>
            </div>
            
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-sage mb-6">
                <lucide-icon name="heart" [size]="32"></lucide-icon>
              </div>
              <h4 class="text-xl font-bold text-white mb-3">Compassion</h4>
              <p class="text-cream/70">Treating every patient with deep empathy, respect, and unconditional care.</p>
            </div>
            
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-sage mb-6">
                <lucide-icon name="shield" [size]="32"></lucide-icon>
              </div>
              <h4 class="text-xl font-bold text-white mb-3">Integrity</h4>
              <p class="text-cream/70">Maintaining the highest ethical standards in our medical practice.</p>
            </div>
            
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-sage mb-6">
                <lucide-icon name="users" [size]="32"></lucide-icon>
              </div>
              <h4 class="text-xl font-bold text-white mb-3">Empowerment</h4>
              <p class="text-cream/70">Educating patients to understand their bodies and take control of their health.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  `
})
export class AboutUsComponent {
  readonly ChevronRight = ChevronRight;
  readonly Heart = Heart;
  readonly Target = Target;
  readonly Leaf = Leaf;
  readonly Sparkles = Sparkles;
  readonly Shield = Shield;
  readonly Clock = Clock;
  readonly Users = Users;
}
