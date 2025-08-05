import {Component, OnInit, signal, DestroyRef} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Button} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {TextareaModule} from "primeng/textarea";
import {DropdownModule} from "primeng/dropdown";
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";
import {ContactForm, ContactService} from "@core/services/contact.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {ActivatedRoute} from "@angular/router";

interface ContactInfo {
  icon: string;
  title: string;
  details: string[];
  link?: string;
}

interface FAQ {
  question: string;
  answer: string;
  expanded?: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    Button,
    InputTextModule,
    TextareaModule,
    DropdownModule,
    ReactiveFormsModule,
    NavbarComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = signal(false);
  isQuoteRequest = signal(false);
  
  inquiryTypes = [
    { label: 'General Inquiry', value: 'general' },
    { label: 'Product Quote Request', value: 'quote' },
    { label: 'Bulk Order Inquiry', value: 'bulk' },
    { label: 'Custom Design Request', value: 'custom' },
    { label: 'Partnership Opportunity', value: 'partnership' },
    { label: 'Technical Support', value: 'support' },
    { label: 'Billing Question', value: 'billing' }
  ];

  contactInfo: ContactInfo[] = [
    {
      icon: 'pi-phone',
      title: 'Phone',
      details: ['+1 (555) 123-4567', 'Mon-Fri 8:00 AM - 6:00 PM EST'],
      link: 'tel:+15551234567'
    },
    {
      icon: 'pi-envelope',
      title: 'Email',
      details: ['sales@clozzet.com', 'support@clozzet.com'],
      link: 'mailto:sales@clozzet.com'
    },
    {
      icon: 'pi-map-marker',
      title: 'Address',
      details: ['123 Business Ave', 'Corporate District', 'New York, NY 10001']
    },
    {
      icon: 'pi-clock',
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed']
    }
  ];

  faqs: FAQ[] = [
    {
      question: 'What is your minimum order quantity?',
      answer: 'Our minimum order quantities vary by product type. Most items start at 25 pieces, while some accessories like bags may require 100 pieces minimum. Contact us for specific requirements.',
      expanded: false
    },
    {
      question: 'How long does it take to complete an order?',
      answer: 'Standard orders typically take 7-14 business days from artwork approval. Rush orders can be accommodated with additional fees, potentially reducing turnaround to 3-5 business days.',
      expanded: false
    },
    {
      question: 'Do you offer design services?',
      answer: 'Yes! Our design team provides free consultation and can help create custom designs that align with your brand identity. We also offer artwork refinement services.',
      expanded: false
    },
    {
      question: 'What customization options are available?',
      answer: 'We offer embroidery, screen printing, heat transfer, vinyl application, and full-color digital printing. Custom colors, sizes, and materials are also available for most products.',
      expanded: false
    },
    {
      question: 'Do you provide samples before bulk orders?',
      answer: 'Yes, we can provide samples for most products. Sample costs vary but are often credited back toward your final order. Digital mockups are also available at no charge.',
      expanded: false
    },
    {
      question: 'What are your payment terms?',
      answer: 'We accept various payment methods including credit cards, wire transfers, and ACH. New customers typically require 50% deposit with balance due before shipping. Net 30 terms available for qualified accounts.',
      expanded: false
    }
  ];

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private destroyRef: DestroyRef,
    private route: ActivatedRoute
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[\d\s-()]{10,}$/)]],
      company: ['', [Validators.required, Validators.minLength(2)]],
      inquiryType: ['', Validators.required],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    
    // Check if this is a quote request from query params
    this.route.queryParams.subscribe(params => {
      if (params['action'] === 'quote') {
        this.isQuoteRequest.set(true);
        this.contactForm.patchValue({
          inquiryType: 'quote',
          subject: 'Product Quote Request'
        });
      }
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    const formData: ContactForm = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      company: this.contactForm.value.company,
      message: `Inquiry Type: ${this.getInquiryTypeLabel(this.contactForm.value.inquiryType)}
Subject: ${this.contactForm.value.subject}

${this.contactForm.value.message}`
    };

    this.contactService.submitContactForm(formData)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.isSubmitting.set(false);
          this.contactForm.reset();
          alert('Thank you for your message! We will respond within 24 hours.');
        },
        error: (error) => {
          console.error('Contact form submission error:', error);
          this.isSubmitting.set(false);
          alert('There was an error sending your message. Please try again or contact us directly.');
        }
      });
  }

  toggleFAQ(index: number): void {
    this.faqs[index].expanded = !this.faqs[index].expanded;
  }

  private getInquiryTypeLabel(value: string): string {
    const type = this.inquiryTypes.find(t => t.value === value);
    return type ? type.label : value;
  }

  callPhoneNumber(): void {
    window.open('tel:+15551234567', '_self');
  }

  sendEmail(): void {
    window.open('mailto:support@clozzet.com', '_self');
  }

}
