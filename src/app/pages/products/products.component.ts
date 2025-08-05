import {Component, OnInit, signal, computed} from '@angular/core';
import {Button} from "primeng/button";
import {Dialog} from "primeng/dialog";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {TextareaModule} from "primeng/textarea";
import {DropdownModule} from "primeng/dropdown";
import {NgClass} from "@angular/common";
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  materials: string[];
  sizes: string[];
  colors: string[];
  minOrder: number;
  priceRange: string;
  customization: string[];
  leadTime: string;
  popular?: boolean;
  new?: boolean;
}

interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  products: Product[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    Button,
    Dialog,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    DropdownModule,
    NgClass,
    NavbarComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  showQuoteDialog = signal(false);
  selectedProduct = signal<Product | null>(null);
  activeCategory = signal('all');
  
  quoteForm: FormGroup;
  
  // Product categories and data
  productCategories: ProductCategory[] = [
    {
      id: 'corporate-wear',
      name: 'Corporate Wear',
      description: 'Professional attire for business environments',
      icon: 'pi-briefcase',
      products: [
        {
          id: 'polo-shirt',
          name: 'Corporate Polo Shirts',
          category: 'corporate-wear',
          image: 'assets/images/products/polo-corporate.jpg',
          description: 'Premium quality polo shirts perfect for corporate uniforms and business casual wear.',
          features: ['Moisture-wicking fabric', 'Wrinkle-resistant', 'Professional fit', 'Reinforced seams'],
          materials: ['100% Cotton Pique', '65% Cotton 35% Polyester', 'Bamboo Cotton Blend'],
          sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
          colors: ['Navy', 'White', 'Light Blue', 'Gray', 'Black', 'Burgundy'],
          minOrder: 25,
          priceRange: '$18.99 - $24.99',
          customization: ['Embroidered logo', 'Screen printing', 'Custom colors', 'Monogramming'],
          leadTime: '7-10 business days',
          popular: true
        },
        {
          id: 'dress-shirts',
          name: 'Business Dress Shirts',
          category: 'corporate-wear',
          image: 'assets/images/products/dress-shirts.jpg',
          description: 'Classic dress shirts for professional business attire.',
          features: ['Easy-iron finish', 'French seams', 'Button-down collar', 'Tailored fit'],
          materials: ['100% Cotton', 'Cotton-Polyester blend'],
          sizes: ['14.5-32', '15-32', '15.5-33', '16-34', '16.5-35', '17-36'],
          colors: ['White', 'Light Blue', 'Pink', 'Striped'],
          minOrder: 20,
          priceRange: '$28.99 - $38.99',
          customization: ['Embroidered logo', 'Monogramming', 'Custom cuffs'],
          leadTime: '10-14 business days'
        }
      ]
    },
    {
      id: 'casual-wear',
      name: 'Casual Wear',
      description: 'Comfortable apparel for team events and casual work environments',
      icon: 'pi-users',
      products: [
        {
          id: 't-shirts',
          name: 'Custom T-Shirts',
          category: 'casual-wear',
          image: 'assets/images/products/t-shirts.jpg',
          description: 'High-quality t-shirts perfect for team building events, company merchandise, and casual Fridays.',
          features: ['Pre-shrunk fabric', 'Reinforced neckline', 'Side-seamed construction', 'Tear-away label'],
          materials: ['100% Cotton', 'Cotton-Polyester blend', 'Tri-blend'],
          sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
          colors: ['White', 'Black', 'Navy', 'Gray', 'Red', 'Royal Blue', 'Forest Green'],
          minOrder: 50,
          priceRange: '$12.99 - $18.99',
          customization: ['Screen printing', 'Vinyl graphics', 'Embroidery', 'Full-color printing'],
          leadTime: '5-7 business days',
          popular: true
        },
        {
          id: 'hoodies',
          name: 'Corporate Hoodies',
          category: 'casual-wear',
          image: 'assets/images/products/hoodies.jpg',
          description: 'Comfortable hoodies for corporate casual wear and outdoor events.',
          features: ['Fleece-lined hood', 'Kangaroo pocket', 'Ribbed cuffs', 'Double-needle stitching'],
          materials: ['Cotton-Polyester fleece', '100% Cotton fleece'],
          sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
          colors: ['Black', 'Navy', 'Gray', 'Maroon', 'Forest Green'],
          minOrder: 20,
          priceRange: '$34.99 - $44.99',
          customization: ['Embroidered logo', 'Screen printing', 'Applique'],
          leadTime: '7-10 business days'
        }
      ]
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Branded accessories to complete your corporate identity',
      icon: 'pi-shopping-bag',
      products: [
        {
          id: 'caps',
          name: 'Branded Caps',
          category: 'accessories',
          image: 'assets/images/products/caps.jpg',
          description: 'Professional caps and hats with custom branding options.',
          features: ['Adjustable strap', 'Structured crown', 'Pre-curved visor', 'Sweatband'],
          materials: ['Cotton twill', 'Cotton-Polyester blend', 'Mesh back'],
          sizes: ['One size fits most', 'Fitted sizes available'],
          colors: ['Navy', 'Black', 'White', 'Gray', 'Red', 'Royal Blue'],
          minOrder: 36,
          priceRange: '$15.99 - $22.99',
          customization: ['Embroidered logo', '3D embroidery', 'Patch application'],
          leadTime: '5-8 business days'
        },
        {
          id: 'bags',
          name: 'Corporate Bags',
          category: 'accessories',
          image: 'assets/images/products/bags.jpg',
          description: 'Eco-friendly tote bags and promotional bags for corporate events.',
          features: ['Reinforced handles', 'Large capacity', 'Eco-friendly materials', 'Foldable design'],
          materials: ['Canvas', 'Non-woven polypropylene', 'Organic cotton'],
          sizes: ['Standard (15"x16")', 'Large (18"x20")', 'Custom sizes'],
          colors: ['Natural', 'Black', 'Navy', 'Red', 'Royal Blue', 'Forest Green'],
          minOrder: 100,
          priceRange: '$8.99 - $15.99',
          customization: ['Screen printing', 'Heat transfer', 'Embroidery'],
          leadTime: '7-10 business days',
          new: true
        }
      ]
    },
    {
      id: 'workwear',
      name: 'Industrial Workwear',
      description: 'Durable workwear for industrial and safety applications',
      icon: 'pi-cog',
      products: [
        {
          id: 'safety-vests',
          name: 'Safety Vests',
          category: 'workwear',
          image: 'assets/images/products/safety-vests.jpg',
          description: 'High-visibility safety vests meeting ANSI standards.',
          features: ['ANSI Class 2 compliance', 'Reflective strips', 'Breathable mesh', 'Multiple pockets'],
          materials: ['Polyester mesh', 'Solid polyester'],
          sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
          colors: ['Safety Orange', 'Safety Yellow', 'Lime Green'],
          minOrder: 25,
          priceRange: '$18.99 - $28.99',
          customization: ['Company name printing', 'Logo embroidery', 'Reflective printing'],
          leadTime: '10-14 business days'
        },
        {
          id: 'work-shirts',
          name: 'Industrial Work Shirts',
          category: 'workwear',
          image: 'assets/images/products/work-shirts.jpg',
          description: 'Durable work shirts designed for industrial environments.',
          features: ['Industrial wash', 'Reinforced stress points', 'Moisture-wicking', 'Stain-resistant'],
          materials: ['Cotton-Polyester blend', 'Performance fabric'],
          sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
          colors: ['Navy', 'Gray', 'Khaki', 'Red', 'Royal Blue'],
          minOrder: 25,
          priceRange: '$24.99 - $34.99',
          customization: ['Name patches', 'Company logo', 'Department identification'],
          leadTime: '10-14 business days'
        }
      ]
    }
  ];

  // Flattened product list
  allProducts = computed(() => {
    return this.productCategories.flatMap(category => category.products);
  });

  // Filtered products based on active category
  filteredProducts = computed(() => {
    if (this.activeCategory() === 'all') {
      return this.allProducts();
    }
    return this.allProducts().filter(product => product.category === this.activeCategory());
  });

  // Popular products
  popularProducts = computed(() => {
    return this.allProducts().filter(product => product.popular);
  });

  // Active category info
  activeCategoryInfo = computed(() => {
    return this.productCategories.find(cat => cat.id === this.activeCategory());
  });

  constructor(private fb: FormBuilder) {
    this.quoteForm = this.fb.group({
      productId: ['', Validators.required],
      companyName: ['', [Validators.required, Validators.minLength(2)]],
      contactName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[\d\s-]{10,}$/)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      customization: [''],
      message: ['']
    });
  }

  ngOnInit(): void {
    // Scroll to top when component loads
    window.scrollTo(0, 0);
  }

  setActiveCategory(categoryId: string): void {
    this.activeCategory.set(categoryId);
  }

  openQuoteDialog(product?: Product): void {
    if (product) {
      this.selectedProduct.set(product);
      this.quoteForm.patchValue({
        productId: product.id
      });
    }
    this.showQuoteDialog.set(true);
  }

  closeQuoteDialog(): void {
    this.showQuoteDialog.set(false);
    this.selectedProduct.set(null);
    this.quoteForm.reset();
  }

  onSubmitQuote(): void {
    if (this.quoteForm.invalid) {
      this.quoteForm.markAllAsTouched();
      return;
    }

    // Here you would typically send the quote request to your backend
    console.log('Quote request:', this.quoteForm.value);
    
    // For now, just close the dialog
    this.closeQuoteDialog();
    
    // You could show a success message here
    alert('Quote request submitted successfully! We will contact you within 24 hours.');
  }

  getProductsByCategory(categoryId: string): Product[] {
    const category = this.productCategories.find(cat => cat.id === categoryId);
    return category ? category.products : [];
  }
}
