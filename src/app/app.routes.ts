import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: "LeeSa's Kitchen - Authentic South Asian Cuisine"
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.component').then(m => m.MenuComponent),
    title: "Our Menu - LeeSa's Kitchen"
  },
  {
    path: 'build-your-bowl',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'catering',
    loadComponent: () => import('./pages/catering/catering.component').then(m => m.CateringComponent),
    title: "Catering Services - LeeSa's Kitchen"
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: "About Us - LeeSa's Kitchen"
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: "Contact Us - LeeSa's Kitchen"
  },
  {
    path: 'order',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: '404 - Page Not Found'
  }
];
