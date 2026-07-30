import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./features/about-us/about-us.component').then(m => m.AboutUsComponent)
  },
  {
    path: 'treatments',
    loadComponent: () => import('./features/treatments/treatments.component').then(m => m.TreatmentsComponent)
  },
  {
    path: 'doctors',
    loadComponent: () => import('./features/doctors/doctors.component').then(m => m.DoctorsComponent)
  },
  {
    path: 'packages',
    loadComponent: () => import('./features/packages/packages.component').then(m => m.PackagesComponent)
  },
  {
    path: 'gallery',
    loadComponent: () => import('./features/gallery/gallery.component').then(m => m.GalleryComponent)
  },
  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog.component').then(m => m.BlogComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
