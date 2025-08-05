import {Component, DestroyRef, OnInit} from '@angular/core';
import {Carousel} from "primeng/carousel";
import {Button} from "primeng/button";
import {Menubar} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FloatLabelModule} from "primeng/floatlabel";
import {FadeInOnScrollDirective} from "@shared/directives/fade-in-on-scroll.directive";
import {TextareaModule} from "primeng/textarea";
import {DialogService} from "primeng/dynamicdialog";
import {Dialog} from "primeng/dialog";
import {MenuItem} from "primeng/api";
import {RouterLink} from "@angular/router";
import {ContactForm, ContactService} from "@core/services/contact.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-landing',
  imports: [
    Button,
    Carousel,
    Menubar,
    InputTextModule,
    ReactiveFormsModule,
    FloatLabelModule,
    TextareaModule,
    FadeInOnScrollDirective,
    Dialog,
    RouterLink,
  ],
  templateUrl: './landing.component.html',
  standalone: true,
  styleUrl: './landing.component.scss',
  providers: [DialogService]
})
export class LandingComponent implements OnInit {
  currentDate = new Date().getFullYear()
  display: boolean = false;
  contactForm: FormGroup;
  innerWith = window.innerWidth
  contactGroup: FormGroup;

  menuItems: MenuItem[] = [
    {label: 'Home', command: () => this.scrollToSection('home')},
    {label: 'Categories', command: () => this.scrollToSection('categories')},
    {label: 'About Us', command: () => this.scrollToSection('about')},
    {label: 'Contact Us', command: () => this.scrollToSection('contact')},
  ];
  bannerItems = [
    {
      image: './assets/images/banner-image.jpg',
      title: 'Elevate Your Brand',
      description: 'Your Trusted Fashion Supply Partner'
    },
    {image: './assets/images/banner-image1.jpg', title: 'Quality Clothing', description: 'For Your Corporate Needs'}
  ];

  categories = [
    {name: 'Polo', image: 'assets/images/pic01.png'},
    {name: 'T-Shirt', image: 'assets/images/pic02.png'},
    {name: 'Hoodie', image: 'assets/images/pic03.png'},
    {name: 'Cap', image: 'assets/images/pic04.png'},
    {name: 'Apron', image: 'assets/images/pic05.png'},
    {name: 'Eco Bag', image: 'assets/images/pic06.png'}
  ];

  constructor(
    private fb: FormBuilder,
    private dialogService: DialogService,
    private contactService: ContactService,
    private destroyRef: DestroyRef
  ) {
    this.contactGroup = this.fb.group({
      name: new FormControl(),
      email: new FormControl(),
      message: new FormControl(),
    })

    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[\d\s-]{10,}$/)]],
      company: ['', [Validators.required, Validators.minLength(2)]],
      message: ['']
    });
  }

  ngOnInit() {
    // this.categoryService.getCategories().subscribe((d: Category[]) => {
    //   this.catalogList = d
    // })
  }

  scrollToSection(sectionId: string) {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  openQuote() {
    this.dialogService.open(GetQuoteModalComponent, {
      width: '550px',
      closable: true,
      dismissableMask: true
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const formData: ContactForm = this.contactForm.value;
    this.contactService.submitContactForm(formData)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.contactForm.reset();
          this.display = false;
        },
        error: (error) => {
          console.error('Form submission error:', error);
        },
      });

  }

  close(): void {
    this.display = false;
    this.contactForm.reset();
  }

}
