import {Injectable, Injector} from '@angular/core';
import {ApiService} from "@core/services/api.service";
import {Observable} from "rxjs";
import {CreateProductDto, Product, ProductCategory} from "@core/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ApiService {

  constructor(protected override injector: Injector) {
    super(injector)
  }

  getAllProducts(): Observable<ProductCategory> {
    return this.get<ProductCategory>(['products'])
  }

  getAllProductsByCategory(category: string): Observable<Product[]> {
    return this.get<Product[]>(['products', category])
  }

  createProduct(productData: CreateProductDto): Observable<Product> {
    const formData = new FormData();
    formData.append('image', productData.imageUrl);
    formData.append('name', productData.name);
    formData.append('description', productData.description);
    formData.append('category', productData.category);

    return this.post<Product>(['products', 'with-image'], formData)
  }

  deleteProduct(id: string): Observable<Product> {
    return this.delete<Product>(['products', id])
  }
}
