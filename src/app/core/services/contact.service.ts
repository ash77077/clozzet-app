import {Injectable, Injector} from '@angular/core';
import { Observable } from 'rxjs';
import {ApiService} from "@core/services/api.service";

export interface ContactForm {
  name: string;
  email: string;
  message: string;
  company: string
  phone: string
}

export interface ContactResponse {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService extends ApiService{

  constructor(protected override injector: Injector) {
    super(injector);
  }

  submitContactForm(formData: ContactForm): Observable<ContactResponse> {
    return this.post<ContactResponse>(['contact', 'send'], formData);
  }

  submitQuoteForm(formData: ContactForm): Observable<ContactResponse> {
    return this.post<ContactResponse>(['contact', 'quote'], formData);
  }
}
