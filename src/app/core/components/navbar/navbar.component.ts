import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    LucideAngularModule
  ],
  template: `
    <nav [class]="'fixed top-0 left-0 w-full z-50 transition-all duration-300 ' + (isScrolled() ? 'bg-cream/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6')">
      <div class="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <!-- Brand -->
        <a routerLink="/" class="flex items-center gap-2 relative z-50">
          <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <div class="w-6 h-6 rounded-full bg-primary relative overflow-hidden flex items-center justify-center">
              <div class="absolute inset-0 bg-gradient-to-tr from-forest to-olive opacity-80"></div>
              <span class="text-white text-xs font-serif font-bold relative z-10">A</span>
            </div>
          </div>
          <span class="font-serif text-2xl font-bold text-dark tracking-wide">
            Ayur<span class="text-primary">Veda</span>
          </span>
        </a>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8 font-sans text-[15px] font-medium">
          <a routerLink="/" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: true}" class="hover:text-primary transition-colors text-dark/80 relative group">
            Home
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a routerLink="/about-us" routerLinkActive="text-primary" class="hover:text-primary transition-colors text-dark/80 relative group">
            About Us
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a routerLink="/treatments" routerLinkActive="text-primary" class="hover:text-primary transition-colors text-dark/80 relative group">
            Treatments
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a routerLink="/doctors" routerLinkActive="text-primary" class="hover:text-primary transition-colors text-dark/80 relative group">
            Doctors
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a routerLink="/packages" routerLinkActive="text-primary" class="hover:text-primary transition-colors text-dark/80 relative group">
            Packages
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a routerLink="/contact" routerLinkActive="text-primary" class="hover:text-primary transition-colors text-dark/80 relative group">
            Contact
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <!-- CTA -->
        <div class="hidden md:flex">
          <a routerLink="/contact" class="group bg-primary text-white px-7 py-2.5 rounded-full font-medium hover:bg-forest hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-[15px]">
            Book Appointment
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-primary p-2 fixed right-6 top-6 z-[60] focus:outline-none" (click)="toggleMenu()">
           <lucide-icon
            [img]="isMenuOpen() ? X : Menu"
            [size]="28">
          </lucide-icon>
          
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        class="md:hidden fixed inset-0 bg-cream z-[55] flex flex-col pt-24 px-6 gap-6 transition-transform duration-300 ease-in-out"
        [class.translate-x-0]="isMenuOpen()"
        [class.translate-x-full]="!isMenuOpen()">
        
        <a routerLink="/" routerLinkActive="text-primary font-bold" [routerLinkActiveOptions]="{exact: true}" class="text-2xl text-dark/80 font-serif" (click)="closeMenu()">Home</a>
        <a routerLink="/about-us" routerLinkActive="text-primary font-bold" class="text-2xl text-dark/80 font-serif" (click)="closeMenu()">About Us</a>
        <a routerLink="/treatments" routerLinkActive="text-primary font-bold" class="text-2xl text-dark/80 font-serif" (click)="closeMenu()">Treatments</a>
        <a routerLink="/doctors" routerLinkActive="text-primary font-bold" class="text-2xl text-dark/80 font-serif" (click)="closeMenu()">Doctors</a>
        <a routerLink="/packages" routerLinkActive="text-primary font-bold" class="text-2xl text-dark/80 font-serif" (click)="closeMenu()">Packages</a>
        <a routerLink="/gallery" routerLinkActive="text-primary font-bold" class="text-2xl text-dark/80 font-serif" (click)="closeMenu()">Gallery</a>
        <a routerLink="/blog" routerLinkActive="text-primary font-bold" class="text-2xl text-dark/80 font-serif" (click)="closeMenu()">Blog</a>
        <a routerLink="/contact" routerLinkActive="text-primary font-bold" class="text-2xl text-dark/80 font-serif" (click)="closeMenu()">Contact</a>
        
        <div class="mt-8 border-t border-dark/10 pt-8">
          <a routerLink="/contact" class="block w-full bg-primary text-white px-6 py-4 rounded-full text-center text-lg font-medium" (click)="closeMenu()">
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  readonly Menu = Menu;
  readonly X = X;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu() {
    this.isMenuOpen.update(val => !val);
    if (this.isMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    document.body.style.overflow = '';
  }
}
