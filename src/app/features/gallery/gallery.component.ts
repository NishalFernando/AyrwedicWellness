import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ChevronRight, X, ZoomIn, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-angular';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  span?: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  styles: [`
    .masonry-grid {
      columns: 1;
      column-gap: 1.5rem;
    }
    @media (min-width: 640px) { .masonry-grid { columns: 2; } }
    @media (min-width: 1024px) { .masonry-grid { columns: 3; } }

    .masonry-item {
      break-inside: avoid;
      margin-bottom: 1.5rem;
    }

    .lightbox-enter {
      animation: fadeIn 0.3s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.97); }
      to   { opacity: 1; transform: scale(1); }
    }
  `],
  template: `
    <main class="w-full overflow-hidden bg-cream pt-24">

      <!-- PAGE HEADER -->
      <section class="relative h-[360px] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-forest/80 mix-blend-multiply z-10 pointer-events-none"></div>
        <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=2000"
             alt="Gallery" class="absolute inset-0 w-full h-full object-cover" />
        <div class="relative z-20 text-center animate-fade-in-up">
          <p class="text-sage font-medium tracking-wider uppercase text-sm mb-4">Our Space & Therapies</p>
          <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Gallery</h1>
          <div class="flex items-center justify-center gap-2 text-white/80 text-sm font-medium">
            <a routerLink="/" class="hover:text-white transition-colors">Home</a>
            <lucide-icon name="chevron-right" [size]="16"></lucide-icon>
            <span class="text-white">Gallery</span>
          </div>
        </div>
      </section>

      <!-- FILTER TABS -->
      <section class="py-12 bg-white sticky top-[72px] z-30 shadow-sm">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="flex flex-wrap justify-center gap-3">
            @for (cat of categories; track cat) {
              <button
                (click)="setFilter(cat)"
                class="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                [class.bg-primary]="activeFilter() === cat"
                [class.text-white]="activeFilter() === cat"
                [class.shadow-md]="activeFilter() === cat"
                [class.bg-cream]="activeFilter() !== cat"
                [class.text-secondary]="activeFilter() !== cat"
                [class.hover:bg-sage]="activeFilter() !== cat">
                {{cat}}
              </button>
            }
          </div>
        </div>
      </section>

      <!-- MASONRY GALLERY -->
      <section class="py-16 bg-cream">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="masonry-grid">
            @for (item of filteredItems(); track item.id) {
              <div class="masonry-item group relative rounded-[1.5rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                   (click)="openLightbox(item)">
                <img [src]="item.src" [alt]="item.alt"
                     class="w-full object-cover transition-transform duration-700 group-hover:scale-110 block" />
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                  <p class="text-white font-serif text-lg font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-400">{{item.alt}}</p>
                  <span class="text-white/70 text-xs uppercase tracking-widest font-medium mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{{item.category}}</span>
                  <div class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <lucide-icon name="zoom-in" [size]="18" class="text-white"></lucide-icon>
                  </div>
                </div>
              </div>
            }
          </div>

          @if (filteredItems().length === 0) {
            <div class="text-center py-20">
              <p class="text-secondary text-lg">No images found in this category.</p>
            </div>
          }
        </div>
      </section>

      <!-- LIGHTBOX -->
      @if (lightboxItem()) {
        <div class="fixed inset-0 z-50 bg-dark/95 backdrop-blur-sm flex items-center justify-center p-4 lightbox-enter"
             (click)="closeLightbox()">

          <!-- Close Button -->
          <button class="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
                  (click)="closeLightbox()">
            <lucide-icon name="x" [size]="24"></lucide-icon>
          </button>

          <!-- Prev -->
          <button class="absolute left-4 lg:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
                  (click)="prevImage($event)">
            <lucide-icon name="chevron-left" [size]="28"></lucide-icon>
          </button>

          <!-- Image -->
          <div class="max-w-4xl w-full max-h-[85vh] flex flex-col items-center gap-4" (click)="$event.stopPropagation()">
            <img [src]="lightboxItem()!.src" [alt]="lightboxItem()!.alt"
                 class="max-h-[75vh] w-full object-contain rounded-3xl shadow-2xl" />
            <div class="text-center">
              <p class="text-white font-serif text-xl">{{lightboxItem()!.alt}}</p>
              <p class="text-white/50 text-xs uppercase tracking-widest mt-1">{{lightboxItem()!.category}}</p>
            </div>
          </div>

          <!-- Next -->
          <button class="absolute right-4 lg:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
                  (click)="nextImage($event)">
            <lucide-icon name="chevron-right" [size]="28"></lucide-icon>
          </button>

          <!-- Image counter -->
          <div class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full text-white/80 text-sm">
            {{lightboxIndex() + 1}} / {{filteredItems().length}}
          </div>
        </div>
      }

      <!-- CTA -->
      <section class="py-24 bg-forest">
        <div class="container mx-auto px-6 lg:px-12 text-center">
          <h2 class="text-4xl font-serif font-bold text-white mb-4">Experience It in Person</h2>
          <p class="text-cream/80 text-lg max-w-xl mx-auto mb-10">These photos capture a fraction of the serenity awaiting you. Book your visit and experience the difference yourself.</p>
          <a routerLink="/contact" class="inline-flex justify-center items-center bg-white text-forest px-10 py-4 rounded-full font-bold hover:bg-cream transition-all duration-300 text-lg shadow-xl">
            Book a Visit
          </a>
        </div>
      </section>

    </main>
  `
})
export class GalleryComponent {
  readonly X = X;
  readonly ChevronRight = ChevronRight;
  readonly ChevronLeft = ChevronLeft;

  categories = ['All', 'Treatment Rooms', 'Therapies', 'Herbs & Oils', 'Wellness'];

  activeFilter = signal<string>('All');
  lightboxItem = signal<GalleryItem | null>(null);
  lightboxIndex = signal<number>(0);

  items: GalleryItem[] = [
    { id: 1,  src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=900', alt: 'Serene Treatment Room', category: 'Treatment Rooms' },
    { id: 2,  src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=900', alt: 'Yoga & Meditation Space', category: 'Wellness' },
    { id: 3,  src: '/images/wonderfulbali-ayurveda-8492246_1920.jpg', alt: 'Ayurvedic Herbal Oils', category: 'Herbs & Oils' },
    { id: 4,  src: '/images/sarahsever-ai-generated-8221928_1920.png', alt: 'Ayurvedic Doctor Consultation', category: 'Therapies' },
    { id: 5,  src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=900', alt: 'Relaxing Spa Bath', category: 'Treatment Rooms' },
    { id: 6,  src: '/images/wonderfulbali-ai-generated-8492244.jpg', alt: 'Wellness Retreat Space', category: 'Wellness' },
    { id: 7,  src: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=900', alt: 'Fresh Ayurvedic Herbs', category: 'Herbs & Oils' },
    { id: 8,  src: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=900', alt: 'Herbal Preparation', category: 'Herbs & Oils' },
    { id: 9,  src: 'https://images.unsplash.com/photo-1542841791-1925b02a2bf8?auto=format&fit=crop&q=80&w=900', alt: 'Traditional Oil Therapy', category: 'Therapies' },
    { id: 10, src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=900', alt: 'Consultation Lounge', category: 'Treatment Rooms' },
    { id: 11, src: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=900', alt: 'Shirodhara Therapy', category: 'Therapies' },
    { id: 12, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=900', alt: 'Nature Healing Garden', category: 'Wellness' },
  ];

  filteredItems = computed(() =>
    this.activeFilter() === 'All'
      ? this.items
      : this.items.filter(i => i.category === this.activeFilter())
  );

  setFilter(cat: string) {
    this.activeFilter.set(cat);
    this.lightboxItem.set(null);
  }

  openLightbox(item: GalleryItem) {
    const idx = this.filteredItems().findIndex(i => i.id === item.id);
    this.lightboxIndex.set(idx);
    this.lightboxItem.set(item);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxItem.set(null);
    document.body.style.overflow = '';
  }

  prevImage(event: Event) {
    event.stopPropagation();
    const items = this.filteredItems();
    const newIdx = (this.lightboxIndex() - 1 + items.length) % items.length;
    this.lightboxIndex.set(newIdx);
    this.lightboxItem.set(items[newIdx]);
  }

  nextImage(event: Event) {
    event.stopPropagation();
    const items = this.filteredItems();
    const newIdx = (this.lightboxIndex() + 1) % items.length;
    this.lightboxIndex.set(newIdx);
    this.lightboxItem.set(items[newIdx]);
  }
}
