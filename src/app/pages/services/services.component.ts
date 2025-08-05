import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";
import {Router} from "@angular/router";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: string[];
  pricing: string;
  turnaround: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    Button,
    NavbarComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {

  services: Service[] = [
    {
      id: 'custom-branding',
      title: 'Custom Branding & Design',
      description: 'Professional logo placement and brand identity integration on all textile products.',
      icon: 'pi-palette',
      features: [
        'Logo design consultation',
        'Brand color matching',
        'Multiple placement options',
        'Vector file optimization',
        'Brand guideline compliance'
      ],
      benefits: [
        'Professional brand representation',
        'Consistent brand identity',
        'Enhanced corporate image',
        'Increased brand recognition'
      ],
      process: [
        'Brand consultation call',
        'Design mockup creation',
        'Client review and approval',
        'Production implementation'
      ],
      pricing: 'Free consultation included',
      turnaround: '2-3 business days'
    },
    {
      id: 'bulk-manufacturing',
      title: 'Bulk Manufacturing',
      description: 'Large-scale production of corporate apparel with volume discounts and quality guarantees.',
      icon: 'pi-building',
      features: [
        'Minimum order 25 pieces',
        'Volume pricing tiers',
        'Quality control testing',
        'Batch tracking system',
        'Consistent sizing standards'
      ],
      benefits: [
        'Cost-effective pricing',
        'Consistent quality',
        'Scalable production',
        'Inventory management support'
      ],
      process: [
        'Volume quote request',
        'Sample approval',
        'Production scheduling',
        'Quality control & delivery'
      ],
      pricing: 'Volume discounts up to 40%',
      turnaround: '7-14 business days'
    },
    {
      id: 'embroidery-services',
      title: 'Professional Embroidery',
      description: 'High-quality embroidery services for logos, names, and custom designs on various textiles.',
      icon: 'pi-pencil',
      features: [
        'Multi-color embroidery',
        '15+ thread color options',
        'Name personalization',
        'Department identification',
        'Logo digitization included'
      ],
      benefits: [
        'Durable and professional finish',
        'Premium brand presentation',
        'Long-lasting quality',
        'Scratch-resistant application'
      ],
      process: [
        'Design digitization',
        'Thread color selection',
        'Sample creation',
        'Bulk production'
      ],
      pricing: 'Starting at $3.99 per item',
      turnaround: '5-7 business days'
    },
    {
      id: 'screen-printing',
      title: 'Screen Printing',
      description: 'Cost-effective screen printing for large quantities with vibrant, long-lasting colors.',
      icon: 'pi-print',
      features: [
        'Multi-color capability',
        'Plastisol and water-based inks',
        'Large format printing',
        'Specialty ink options',
        'Pantone color matching'
      ],
      benefits: [
        'Cost-effective for large orders',
        'Vibrant color reproduction',
        'Excellent durability',
        'Professional finish quality'
      ],
      process: [
        'Artwork preparation',
        'Screen creation',
        'Color mixing',
        'Production printing'
      ],
      pricing: 'Starting at $2.49 per item',
      turnaround: '3-5 business days'
    },
    {
      id: 'inventory-management',
      title: 'Inventory Management',
      description: 'Complete inventory solutions including storage, fulfillment, and distribution services.',
      icon: 'pi-warehouse',
      features: [
        'Secure warehouse storage',
        'Real-time inventory tracking',
        'Automated reorder alerts',
        'Multi-location distribution',
        'Employee portal access'
      ],
      benefits: [
        'Reduced internal logistics',
        'Streamlined distribution',
        'Cost-effective warehousing',
        'Improved inventory control'
      ],
      process: [
        'Inventory setup',
        'System integration',
        'Distribution setup',
        'Ongoing management'
      ],
      pricing: 'Custom pricing based on volume',
      turnaround: 'Same-day fulfillment'
    },
    {
      id: 'rush-orders',
      title: 'Rush Order Services',
      description: 'Expedited production and delivery for urgent corporate apparel needs.',
      icon: 'pi-clock',
      features: [
        'Priority production queue',
        'Express shipping options',
        '24/7 order tracking',
        'Dedicated project manager',
        'Weekend production available'
      ],
      benefits: [
        'Meet tight deadlines',
        'Priority customer support',
        'Guaranteed delivery dates',
        'Stress-free urgent orders'
      ],
      process: [
        'Urgent quote request',
        'Expedited approval',
        'Priority production',
        'Express delivery'
      ],
      pricing: '25-50% rush fee applies',
      turnaround: '1-3 business days'
    }
  ];

  workflowSteps: ProcessStep[] = [
    {
      step: 1,
      title: 'Consultation',
      description: 'We discuss your requirements, timeline, and budget to create the perfect solution.',
      icon: 'pi-comments'
    },
    {
      step: 2,
      title: 'Quote & Design',
      description: 'Receive detailed pricing and design mockups within 24 hours of consultation.',
      icon: 'pi-file-edit'
    },
    {
      step: 3,
      title: 'Approval',
      description: 'Review and approve designs, specifications, and production timeline.',
      icon: 'pi-check-circle'
    },
    {
      step: 4,
      title: 'Production',
      description: 'Your order enters our quality-controlled production process with regular updates.',
      icon: 'pi-cog'
    },
    {
      step: 5,
      title: 'Quality Control',
      description: 'Every item undergoes rigorous quality inspection before packaging.',
      icon: 'pi-shield'
    },
    {
      step: 6,
      title: 'Delivery',
      description: 'Fast, secure delivery with tracking information and delivery confirmation.',
      icon: 'pi-truck'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }

  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }

  requestQuote(): void {
    this.router.navigate(['/contact'], { queryParams: { action: 'quote' } });
  }
}
