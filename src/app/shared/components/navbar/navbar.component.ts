import {Component, signal, computed, HostListener, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, NavigationEnd} from '@angular/router';
import {Button} from "primeng/button";
import {NgClass} from "@angular/common";
import {MenuModule} from "primeng/menu";
import {MenuItem} from "primeng/api";
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    Button,
    NgClass,
    MenuModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  innerWidth = signal(typeof window !== 'undefined' ? window.innerWidth : 1200);
  isMobile = computed(() => this.innerWidth() < 768);
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  currentRoute = signal('');

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window;
    this.innerWidth.set(target.innerWidth);
    
    // Close mobile menu on resize to desktop
    if (!this.isMobile()) {
      this.mobileMenuOpen.set(false);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled.set(scrollTop > 50);
  }

  navigationItems = [
    { 
      label: 'Home', 
      route: '/landing2', 
      icon: 'pi-home',
      description: 'Our main page'
    },
    { 
      label: 'Products', 
      route: '/products', 
      icon: 'pi-shopping-bag',
      description: 'Browse our product catalog'
    },
    { 
      label: 'Services', 
      route: '/services', 
      icon: 'pi-cog',
      description: 'Our B2B services'
    },
    { 
      label: 'About Us', 
      route: '/about', 
      icon: 'pi-info-circle',
      description: 'Learn about our company'
    },
    { 
      label: 'Contact', 
      route: '/contact', 
      icon: 'pi-phone',
      description: 'Get in touch with us'
    }
  ];

  mobileMenuItems: MenuItem[] = [];

  constructor(private router: Router) {
    // Convert navigation items to PrimeNG menu items
    this.mobileMenuItems = this.navigationItems.map(item => ({
      label: item.label,
      icon: item.icon,
      command: () => {
        this.router.navigate([item.route]);
        this.closeMobileMenu();
      }
    }));
  }

  ngOnInit() {
    // Track current route
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute.set(event.url);
      });
    
    // Set initial route
    this.currentRoute.set(this.router.url);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }

  navigateToQuote() {
    this.router.navigate(['/contact'], { queryParams: { action: 'quote' } });
    this.closeMobileMenu();
  }

  navigateToAuth() {
    this.router.navigate(['/auth']);
    this.closeMobileMenu();
  }

  isActiveRoute(route: string): boolean {
    return this.currentRoute() === route || 
           (route === '/landing2' && this.currentRoute() === '/');
  }
}