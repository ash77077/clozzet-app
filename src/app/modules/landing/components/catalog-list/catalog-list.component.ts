import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "@modules/products/products.service";
import {GalleriaModule} from "primeng/galleria";
import {Product} from "@core/models/product.model";

@Component({
  selector: 'app-catalog-list',
  imports: [
    GalleriaModule
  ],
  templateUrl: './catalog-list.component.html',
  standalone: true,
  styleUrl: './catalog-list.component.scss'
})
export class CatalogListComponent implements OnInit {
  @Input() id!: string;
  displayCustom: boolean = false;
  activeIndex: number = 0;
  images: Product[] = [];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.productsService.getAllProductsByCategory(this.id).subscribe(image => this.images = image)
  }

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }
}
