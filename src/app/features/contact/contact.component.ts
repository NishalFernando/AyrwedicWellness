import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ChevronRight, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Send, CheckCircle2 } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <main class="w-full overflow-hidden bg-cream pt-24">

      <!-- PAGE HEADER -->
      <section class="relative h-[360px] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-forest/80 mix-blend-multiply z-10 pointer-events-none"></div>
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2000"
             alt="Contact AyurVeda" class="absolute inset-0 w-full h-full object-cover" />
        <div class="relative z-20 text-center animate-fade-in-up">
          <p class="text-sage font-medium tracking-wider uppercase text-sm mb-4">We're Here For You</p>
          <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Get in Touch</h1>
          <div class="flex items-center justify-center gap-2 text-white/80 text-sm font-medium">
            <a routerLink="/" class="hover:text-white transition-colors">Home</a>
            <lucide-icon name="chevron-right" [size]="16"></lucide-icon>
            <span class="text-white">Contact</span>
          </div>
        </div>
      </section>

      <!-- CONTACT INFO CARDS -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div class="group bg-cream hover:bg-primary p-8 rounded-3xl transition-all duration-300 text-center cursor-default">
              <div class="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
                <lucide-icon name="map-pin" [size]="26"></lucide-icon>
              </div>
              <h4 class="font-bold text-dark group-hover:text-white mb-2 transition-colors">Our Location</h4>
              <p class="text-secondary group-hover:text-white/80 text-sm transition-colors">123 Healing Way, Nature Valley, NV 89012</p>
            </div>

            <div class="group bg-cream hover:bg-primary p-8 rounded-3xl transition-all duration-300 text-center cursor-default">
              <div class="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
                <lucide-icon name="phone" [size]="26"></lucide-icon>
              </div>
              <h4 class="font-bold text-dark group-hover:text-white mb-2 transition-colors">Call Us</h4>
              <p class="text-secondary group-hover:text-white/80 text-sm transition-colors">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
            </div>

            <div class="group bg-cream hover:bg-primary p-8 rounded-3xl transition-all duration-300 text-center cursor-default">
              <div class="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
                <lucide-icon name="mail" [size]="26"></lucide-icon>
              </div>
              <h4 class="font-bold text-dark group-hover:text-white mb-2 transition-colors">Email Us</h4>
              <p class="text-secondary group-hover:text-white/80 text-sm transition-colors">care&#64;ayurvedawellness.com<br />info&#64;ayurvedawellness.com</p>
            </div>

            <div class="group bg-cream hover:bg-primary p-8 rounded-3xl transition-all duration-300 text-center cursor-default">
              <div class="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
                <lucide-icon name="clock" [size]="26"></lucide-icon>
              </div>
              <h4 class="font-bold text-dark group-hover:text-white mb-2 transition-colors">Working Hours</h4>
              <p class="text-secondary group-hover:text-white/80 text-sm transition-colors">Mon–Fri: 8am – 8pm<br />Saturday: 9am – 6pm</p>
            </div>

          </div>
        </div>
      </section>

      <!-- FORM + INFO SPLIT -->
      <section class="py-24 bg-cream">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            <!-- CONTACT FORM (wider side) -->
            <div class="lg:col-span-3 bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-gray-100">
              <h2 class="text-3xl font-serif font-bold text-dark mb-2">Book a Consultation</h2>
              <p class="text-secondary mb-10">Fill in the details below and one of our wellness coordinators will reach out to you within 24 hours.</p>

              @if (!submitted()) {
                <form class="space-y-6" (submit)="onSubmit($event)">
                  <div class="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label class="block text-sm font-semibold text-dark mb-2">Full Name *</label>
                      <input type="text" placeholder="e.g. Sarah Johnson" required
                             class="w-full bg-cream border border-gray-200 rounded-2xl px-5 py-3.5 text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" />
                    </div>
                    <div>
                      <label class="block text-sm font-semibold text-dark mb-2">Email Address *</label>
                      <input type="email" placeholder="you@example.com" required
                             class="w-full bg-cream border border-gray-200 rounded-2xl px-5 py-3.5 text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" />
                    </div>
                  </div>

                  <div class="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label class="block text-sm font-semibold text-dark mb-2">Phone Number</label>
                      <input type="tel" placeholder="+1 (555) 000-0000"
                             class="w-full bg-cream border border-gray-200 rounded-2xl px-5 py-3.5 text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" />
                    </div>
                    <div>
                      <label class="block text-sm font-semibold text-dark mb-2">Service of Interest</label>
                      <select class="w-full bg-cream border border-gray-200 rounded-2xl px-5 py-3.5 text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all appearance-none">
                        <option value="" disabled selected>Select a service...</option>
                        <option>Ayurvedic Consultation</option>
                        <option>Panchakarma Detox</option>
                        <option>Abhyanga Massage</option>
                        <option>Shirodhara Therapy</option>
                        <option>Wellness Package</option>
                        <option>Women's Wellness</option>
                        <option>Pain Management</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-semibold text-dark mb-2">Preferred Appointment Date</label>
                    <input type="date"
                           class="w-full bg-cream border border-gray-200 rounded-2xl px-5 py-3.5 text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" />
                  </div>

                  <div>
                    <label class="block text-sm font-semibold text-dark mb-2">Tell Us About Your Health Concern</label>
                    <textarea rows="4" placeholder="Briefly describe your symptoms, health goals, or any questions you have..."
                              class="w-full bg-cream border border-gray-200 rounded-2xl px-5 py-3.5 text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"></textarea>
                  </div>

                  <div class="flex items-start gap-3">
                    <input type="checkbox" id="consent" class="mt-1 accent-primary w-4 h-4 flex-shrink-0" />
                    <label for="consent" class="text-sm text-secondary">I consent to AyurVeda Wellness Center processing my personal data to respond to my enquiry. I understand my data will be handled with complete confidentiality.</label>
                  </div>

                  <button type="submit"
                          class="w-full bg-primary text-white py-4 rounded-full font-bold text-lg hover:bg-forest transition-colors duration-300 flex items-center justify-center gap-3 group shadow-sm">
                    <lucide-icon name="send" [size]="20" class="transition-transform duration-300 group-hover:translate-x-1"></lucide-icon>
                    Send My Enquiry
                  </button>
                </form>
              } @else {
                <div class="flex flex-col items-center justify-center text-center py-16 animate-fade-in-up">
                  <div class="w-20 h-20 rounded-full bg-sage flex items-center justify-center text-primary mb-6">
                    <lucide-icon name="check-circle-2" [size]="44"></lucide-icon>
                  </div>
                  <h3 class="text-2xl font-serif font-bold text-dark mb-3">Enquiry Sent!</h3>
                  <p class="text-secondary max-w-md">Thank you for reaching out. Our wellness coordinator will contact you within 24 hours to confirm your appointment.</p>
                  <button (click)="submitted.set(false)" class="mt-8 text-primary font-medium underline hover:text-forest">Submit another enquiry</button>
                </div>
              }
            </div>

            <!-- SIDEBAR INFO -->
            <div class="lg:col-span-2 space-y-8">

              <!-- Hours Card -->
              <div class="bg-forest text-white p-8 rounded-[2rem]">
                <h3 class="text-2xl font-serif font-bold mb-6">Opening Hours</h3>
                <ul class="space-y-4">
                  @for (hour of hours; track hour.day) {
                    <li class="flex justify-between items-center pb-4 border-b border-white/10 last:border-0 last:pb-0">
                      <span class="text-white/80 font-medium">{{hour.day}}</span>
                      <span class="font-bold text-white text-sm">{{hour.time}}</span>
                    </li>
                  }
                </ul>
                <div class="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div class="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <span class="text-white/80 text-sm font-medium">Currently Open</span>
                </div>
              </div>

              <!-- Social Links Card -->
              <div class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 class="text-xl font-serif font-bold text-dark mb-4">Follow Our Journey</h3>
                <p class="text-secondary text-sm mb-6">Stay connected for wellness tips, patient stories, and Ayurvedic insights.</p>
                <div class="flex gap-4">
                  <a href="#" class="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border border-gray-200 text-dark hover:border-primary hover:text-primary transition-colors text-sm font-medium">
                    <lucide-icon name="facebook" [size]="18"></lucide-icon>
                    Facebook
                  </a>
                  <a href="#" class="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border border-gray-200 text-dark hover:border-primary hover:text-primary transition-colors text-sm font-medium">
                    <lucide-icon name="instagram" [size]="18"></lucide-icon>
                    Instagram
                  </a>
                </div>
              </div>

              <!-- Quick FAQ -->
              <div class="bg-sage/30 p-8 rounded-[2rem]">
                <h3 class="text-xl font-serif font-bold text-dark mb-6">Quick Questions</h3>
                <div class="space-y-5">
                  @for (faq of faqs; track faq.q) {
                    <div>
                      <p class="font-semibold text-dark text-sm mb-1">{{faq.q}}</p>
                      <p class="text-secondary text-sm leading-relaxed">{{faq.a}}</p>
                    </div>
                  }
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- MAP SECTION -->
      <section class="h-[450px] relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019547743327!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          class="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="AyurVeda Wellness Center Location">
        </iframe>
        <div class="absolute top-6 left-6 bg-white/95 backdrop-blur px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4">
          <div class="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-primary">
            <lucide-icon name="map-pin" [size]="20"></lucide-icon>
          </div>
          <div>
            <p class="font-bold text-dark text-sm">AyurVeda Wellness Center</p>
            <p class="text-secondary text-xs">123 Healing Way, Nature Valley</p>
          </div>
        </div>
      </section>

    </main>
  `
})
export class ContactComponent {
  readonly ChevronRight = ChevronRight;
  readonly MapPin = MapPin;
  readonly Phone = Phone;
  readonly Mail = Mail;
  readonly Clock = Clock;
  readonly Facebook = Facebook;
  readonly Instagram = Instagram;
  readonly Twitter = Twitter;
  readonly Send = Send;
  readonly CheckCircle2 = CheckCircle2;

  submitted = signal(false);

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitted.set(true);
  }

  hours = [
    { day: 'Monday – Friday', time: '8:00 AM – 8:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 6:00 PM' },
    { day: 'Sunday', time: 'Closed' },
    { day: 'Public Holidays', time: 'By Appointment Only' }
  ];

  faqs = [
    { q: 'Do I need to bring anything for my first visit?', a: 'Just yourself! We recommend wearing comfortable, loose clothing. Arrive 10 minutes early to complete intake forms.' },
    { q: 'Is the treatment covered by insurance?', a: 'We are not currently affiliated with insurance providers, but we provide detailed receipts for reimbursement claims.' },
    { q: 'How early should I book?', a: 'We recommend booking at least 3–5 days in advance. For packages, 1–2 weeks is ideal.' }
  ];
}
