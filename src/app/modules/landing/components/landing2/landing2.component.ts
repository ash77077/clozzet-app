import {Component, signal, computed, HostListener, DestroyRef} from '@angular/core';
import {Router} from '@angular/router';
import {Button} from "primeng/button";
import {Carousel} from "primeng/carousel";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Dialog} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {TextareaModule} from "primeng/textarea";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {ContactForm, ContactService} from "@core/services/contact.service";
import {NavbarComponent} from "../../../../shared/components/navbar/navbar.component";

@Component({
  selector: 'app-landing2',
  standalone: true,
  imports: [
    Button,
    Carousel,
    ReactiveFormsModule,
    Dialog,
    InputTextModule,
    TextareaModule,
    NavbarComponent,
  ],
  templateUrl: './landing2.component.html',
  styleUrl: './landing2.component.scss'
})
export class Landing2Component {
  innerWidth = signal(typeof window !== 'undefined' ? window.innerWidth : 1200);
  isMobile = computed(() => this.innerWidth() < 768);
  isTablet = computed(() => this.innerWidth() >= 768 && this.innerWidth() < 1024);
  
  showQuoteDialog = false;
  quoteForm: FormGroup;
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window;
    this.innerWidth.set(target.innerWidth);
  }

  heroSlides = [
    {
      image: './assets/images/banner-image.jpg',
      title: 'Professional Branded Apparel',
      subtitle: 'Elevate Your Corporate Identity',
      description: 'Custom embroidered and printed clothing solutions for businesses of all sizes',
      cta: 'Get Custom Quote'
    },
    {
      image: './assets/images/banner-image1.jpg',
      title: 'Bulk Corporate Orders',
      subtitle: 'Quality at Scale',
      description: 'From 50 to 5000+ pieces, we deliver consistent quality for your team',
      cta: 'View Portfolio'
    }
  ];

  brandedProducts = [
    {
      name: 'Corporate Polo Shirts',
      image: 'assets/images/pic01.png',
      description: 'Professional polo shirts with custom embroidery',
      features: ['Custom embroidery', 'Premium cotton blend', '15+ color options'],
      minOrder: '25 pieces',
      price: 'From $18.99'
    },
    {
      name: 'Business T-Shirts',
      image: 'assets/images/pic02.png',
      description: 'High-quality tees perfect for company events',
      features: ['Screen printing available', '100% cotton', 'Bulk discounts'],
      minOrder: '50 pieces',
      price: 'From $12.99'
    },
    {
      name: 'Executive Hoodies',
      image: 'assets/images/pic03.png',
      description: 'Premium hoodies for corporate casual wear',
      features: ['Embroidered logo', 'Fleece-lined', 'Multiple sizes'],
      minOrder: '20 pieces',
      price: 'From $34.99'
    },
    {
      name: 'Branded Caps',
      image: 'assets/images/pic04.png',
      description: 'Professional caps with company branding',
      features: ['Adjustable fit', 'Structured design', 'Logo embroidery'],
      minOrder: '36 pieces',
      price: 'From $15.99'
    },
    {
      name: 'Work Uniforms',
      image: 'assets/images/pic05.png',
      description: 'Durable uniforms for various industries',
      features: ['Industrial-grade fabric', 'Custom patches', 'Safety compliant'],
      minOrder: '25 pieces',
      price: 'From $28.99'
    },
    {
      name: 'Corporate Bags',
      image: 'assets/images/pic06.png',
      description: 'Eco-friendly bags with company branding',
      features: ['Sustainable materials', 'Custom printing', 'Various sizes'],
      minOrder: '100 pieces',
      price: 'From $8.99'
    }
  ];

  companyBenefits = [
    {
      icon: 'pi-building',
      title: 'Corporate Branding',
      description: 'Professional logo placement and brand consistency across all items',
      highlight: 'Free design consultation'
    },
    {
      icon: 'pi-users',
      title: 'Bulk Pricing',
      description: 'Competitive rates for large orders with volume discounts',
      highlight: 'Up to 40% off for 500+ pieces'
    },
    {
      icon: 'pi-clock',
      title: 'Fast Turnaround',
      description: 'Quick production and delivery to meet your deadlines',
      highlight: '7-14 business days'
    },
    {
      icon: 'pi-shield',
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee with premium materials',
      highlight: '2-year warranty'
    }
  ];

  clientTestimonials = [
    {
      company: 'TechCorp Solutions',
      logo: 'assets/images/client-logo1.png',
      testimonial: 'Outstanding quality and service! Our branded polo shirts look professional and the team loves wearing them.',
      author: 'Sarah Johnson',
      position: 'HR Director',
      rating: 5,
      orderSize: '200+ pieces',
      avatar: 'SJ'
    },
    {
      company: 'Global Manufacturing Inc.',
      logo: 'assets/images/client-logo2.png',
      testimonial: 'Clozzet delivered exactly what we needed for our industrial uniforms. Great quality and on-time delivery.',
      author: 'Michael Chen',
      position: 'Operations Manager',
      rating: 5,
      orderSize: '500+ pieces',
      avatar: 'MC'
    },
    {
      company: 'StartUp Innovations',
      logo: 'assets/images/client-logo3.png',
      testimonial: 'Perfect for our company merchandise. The custom t-shirts were a hit at our product launch event.',
      author: 'Emily Rodriguez',
      position: 'Marketing Lead',
      rating: 5,
      orderSize: '150+ pieces',
      avatar: 'ER'
    }
  ];

  stats = [
    { number: '1000+', label: 'Companies Served' },
    { number: '50K+', label: 'Items Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Customer Support' }
  ];

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private destroyRef: DestroyRef,
    private router: Router
  ) {
    this.quoteForm = this.fb.group({
      companyName: ['', [Validators.required, Validators.minLength(2)]],
      contactName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[\d\s-]{10,}$/)]],
      productType: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      message: ['']
    });
  }

  openQuoteDialog() {
    this.showQuoteDialog = true;
  }

  closeQuoteDialog() {
    this.showQuoteDialog = false;
    this.quoteForm.reset();
  }

  onSubmitQuote() {
    if (this.quoteForm.invalid) {
      this.quoteForm.markAllAsTouched();
      return;
    }

    const formData: ContactForm = {
      name: this.quoteForm.value.contactName,
      email: this.quoteForm.value.email,
      phone: this.quoteForm.value.phone,
      company: this.quoteForm.value.companyName,
      message: `Product Type: ${this.quoteForm.value.productType}\nQuantity: ${this.quoteForm.value.quantity}\n\n${this.quoteForm.value.message || ''}`
    };

    this.contactService.submitContactForm(formData)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.closeQuoteDialog();
        },
        error: (error) => {
          console.error('Quote submission error:', error);
        }
      });
  }

  scrollToSection(sectionId: string) {
    if (typeof document !== 'undefined') {
      const element = document.querySelector(`#${sectionId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  onProductClick(product: any) {
    this.quoteForm.patchValue({
      productType: product.name
    });
    this.openQuoteDialog();
  }

  // Navigation methods
  navigateToProducts() {
    this.router.navigate(['/products']);
  }

  navigateToServices() {
    this.router.navigate(['/services']);
  }

  navigateToAbout() {
    this.router.navigate(['/about']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  navigateToQuote() {
    this.router.navigate(['/contact'], { queryParams: { action: 'quote' } });
  }

  downloadCatalog() {
    // For now, navigate to products page
    // In a real app, this would trigger a PDF download
    this.navigateToProducts();
  }
}
