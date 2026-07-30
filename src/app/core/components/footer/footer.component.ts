import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <footer class="bg-forest text-cream pt-20 pb-8 relative overflow-hidden">
      <!-- Subtle Background Pattern -->
      <div class="absolute inset-0 opacity-5 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px;"></div>
      
      <div class="container mx-auto px-6 lg:px-12 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <!-- Column 1: Brand -->
          <div>
            <a routerLink="/" class="flex items-center gap-2 mb-6">
              <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <div class="w-6 h-6 rounded-full bg-sage relative overflow-hidden flex items-center justify-center">
                  <span class="text-primary text-xs font-serif font-bold relative z-10">A</span>
                </div>
              </div>
              <span class="font-serif text-2xl font-bold text-white tracking-wide">
                Ayur<span class="text-sage">Veda</span>
              </span>
            </a>
            <p class="text-cream/70 text-sm leading-relaxed mb-6 pr-4">
              Providing authentic, holistic Ayurvedic care to restore balance, alleviate stress, and rejuvenate your body and mind.
            </p>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage hover:text-primary transition-all duration-300">
                <lucide-icon name="facebook" [size]="18"></lucide-icon>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage hover:text-primary transition-all duration-300">
                <lucide-icon name="instagram" [size]="18"></lucide-icon>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage hover:text-primary transition-all duration-300">
                <lucide-icon name="twitter" [size]="18"></lucide-icon>
              </a>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div>
            <h4 class="text-lg font-serif font-bold text-white mb-6">Explore</h4>
            <ul class="space-y-3">
              <li><a routerLink="/about-us" class="text-cream/70 hover:text-white transition-colors flex items-center gap-2 group text-sm"><lucide-icon name="arrow-right" [size]="14" class="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"></lucide-icon> About Us</a></li>
              <li><a routerLink="/treatments" class="text-cream/70 hover:text-white transition-colors flex items-center gap-2 group text-sm"><lucide-icon name="arrow-right" [size]="14" class="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"></lucide-icon> Treatments & Services</a></li>
              <li><a routerLink="/doctors" class="text-cream/70 hover:text-white transition-colors flex items-center gap-2 group text-sm"><lucide-icon name="arrow-right" [size]="14" class="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"></lucide-icon> Our Doctors</a></li>
              <li><a routerLink="/packages" class="text-cream/70 hover:text-white transition-colors flex items-center gap-2 group text-sm"><lucide-icon name="arrow-right" [size]="14" class="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"></lucide-icon> Wellness Packages</a></li>
              <li><a routerLink="/gallery" class="text-cream/70 hover:text-white transition-colors flex items-center gap-2 group text-sm"><lucide-icon name="arrow-right" [size]="14" class="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"></lucide-icon> Gallery</a></li>
              <li><a routerLink="/blog" class="text-cream/70 hover:text-white transition-colors flex items-center gap-2 group text-sm"><lucide-icon name="arrow-right" [size]="14" class="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"></lucide-icon> Wellness Blog</a></li>
            </ul>
          </div>

          <!-- Column 3: Contact Info -->
          <div>
            <h4 class="text-lg font-serif font-bold text-white mb-6">Contact Us</h4>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <lucide-icon name="map-pin" [size]="18" class="text-sage mt-1 flex-shrink-0"></lucide-icon>
                <span class="text-cream/70 text-sm">123 Healing Way, Nature Valley, NV 89012</span>
              </li>
              <li class="flex items-center gap-3">
                <lucide-icon name="phone" [size]="18" class="text-sage flex-shrink-0"></lucide-icon>
                <span class="text-cream/70 text-sm">+1 (555) 123-4567</span>
              </li>
              <li class="flex items-center gap-3">
                <lucide-icon name="mail" [size]="18" class="text-sage flex-shrink-0"></lucide-icon>
                <span class="text-cream/70 text-sm">care&#64;ayurvedawellness.com</span>
              </li>
            </ul>
          </div>

          <!-- Column 4: Hours -->
          <div>
            <h4 class="text-lg font-serif font-bold text-white mb-6">Opening Hours</h4>
            <ul class="space-y-3">
              <li class="flex justify-between text-sm">
                <span class="text-cream/70">Monday - Friday:</span>
                <span class="text-white font-medium">8:00 AM - 8:00 PM</span>
              </li>
              <li class="flex justify-between text-sm">
                <span class="text-cream/70">Saturday:</span>
                <span class="text-white font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li class="flex justify-between text-sm">
                <span class="text-cream/70">Sunday:</span>
                <span class="text-white font-medium">Closed</span>
              </li>
            </ul>
            
            <div class="mt-6">
              <a routerLink="/contact" class="block text-center w-full bg-sage text-primary px-6 py-2.5 rounded-full font-medium hover:bg-white transition-colors text-sm">
                Book Consultation
              </a>
            </div>
          </div>
          
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-cream/50 text-sm">
            &copy; {{ currentYear }} AyurVeda Wellness Center. All rights reserved.
          </p>
          <div class="flex gap-6 text-sm text-cream/50">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  readonly Facebook = Facebook;
  readonly Instagram = Instagram;
  readonly Twitter = Twitter;
  readonly MapPin = MapPin;
  readonly Phone = Phone;
  readonly Mail = Mail;
  readonly ArrowRight = ArrowRight;
}
