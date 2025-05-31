import {Component, DestroyRef} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {ContactForm, ContactService} from "@core/services/contact.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-get-quote-modal',
  imports: [
    DialogModule,
    DropdownModule,
    InputNumberModule,
    ReactiveFormsModule
  ],
  templateUrl: './get-quote-modal.component.html',
  standalone: true,
  styleUrl: './get-quote-modal.component.scss',
  providers: [MessageService]
})
export class GetQuoteModalComponent {
  display = true;
  quoteForm!: FormGroup;
  productTypes = [
    {label: 'T-Shirt', value: 't-shirt'},
    {label: 'Hoodie', value: 'hoodie'},
    {label: 'Polo', value: 'polo'},
    {label: 'EcoBag', value: 'ecobag'},
    {label: 'Cap', value: 'cap'}
  ];

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private destroyRef: DestroyRef,
    private ref: DynamicDialogRef
  ) {
    this.quoteForm = this.fb.group({
      clientName: ['', Validators.required],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      company: ['', [Validators.required]],
      employeeCount: [1, [Validators.required, Validators.min(1)]],
      quantity: [1, [Validators.required, Validators.min(1)]],
      productType: ['', Validators.required],
      message: [''],
    });
  }

  onSubmit() {
    if (this.quoteForm.invalid) {
      this.quoteForm.markAllAsTouched();
      return;
    }

    const formData: ContactForm = this.quoteForm.value;
    this.contactService.submitQuoteForm(formData)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.quoteForm.reset()
          this.display = false
        },
        error: (error) => {
          console.error('Form submission error:', error);
        },
      });
  }

  close() {
    this.ref.close();
  }
}
