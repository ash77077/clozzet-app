import {Injectable, Injector} from '@angular/core';
import {ApiService} from "@core/services/api.service";
import {Observable} from "rxjs";
import {Category} from "@core/models/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends ApiService {

  constructor(protected override injector: Injector) {
    super(injector)
  }

  getCategories(): Observable<Category[]> {
    return this.get<Category[]>(['categories'])
  }

  createCategory(productData: any): Observable<Category> {
    const formData = new FormData();
    formData.append('image', productData.image);
    formData.append('name', productData.name);
    formData.append('active', productData.active);
    return this.post<Category>(['categories', 'with-image'], formData,)
  }

}
