import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "@modules/products/products.service";

@Component({
  selector: 'app-catalog-list',
  imports: [],
  templateUrl: './catalog-list.component.html',
  standalone: true,
  styleUrl: './catalog-list.component.scss'
})
export class CatalogListComponent implements OnInit {
  @Input() category!: string;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.productsService.getAllProductsByCategory(this.category).subscribe(() => {
    })
  }
}
