import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {Dialog} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmDialog} from 'primeng/confirmdialog';
import {InputTextModule} from 'primeng/inputtext';
import {TextareaModule} from 'primeng/textarea';
import {CommonModule} from '@angular/common';
import {FileUpload} from 'primeng/fileupload';
import {SelectModule} from 'primeng/select';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {IconFieldModule} from 'primeng/iconfield';
import {InputIconModule} from 'primeng/inputicon';
import {Table} from 'primeng/table';
import {Product, ProductService} from "@pages/service/product.service";
import {DropdownModule} from "primeng/dropdown";
import {Button} from "primeng/button";
import {CategoriesService} from "@modules/categories/categories.service";
import {FileUploadComponent} from "@shared/components/file-upload/file-upload.component";
import {ToggleSwitch} from "primeng/toggleswitch";
import {TableModel} from "@core/models/table.model";
import {TableComponent} from "@shared/components/table/table.component";

interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'app-categories',
  imports: [TableModule, Dialog, SelectModule, ToastModule, ToolbarModule, ConfirmDialog, InputTextModule, TextareaModule, CommonModule, FileUpload, DropdownModule, InputTextModule, FormsModule, IconFieldModule, InputIconModule, Button, ReactiveFormsModule, FileUploadComponent, ToggleSwitch, TableComponent],
  providers: [MessageService, ConfirmationService, ProductService],
  templateUrl: './categories.component.html',
  standalone: true,
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categoryDialog: boolean = false;
  categories!: Product[];
  product!: Product;
  selectedCategory!: Product[] | null;
  submitted: boolean = false;
  statuses!: any[];
  @ViewChild('dt') dt!: Table;
  cols: TableModel[] = [
    {
      id: 1,
      label: 'Image',
      field: 'imageUrl',
      type: "image"
    },
    {
      id: 2,
      label: 'Name',
      field: 'name'
    },
    {
      id: 3,
      label: 'Active',
      field: 'active',
      boolValues: {
        trueVal: 'Active',
        falseVal: 'Inactive'
      }
    },
  ];
  exportColumns!: ExportColumn[];
  categoryGroup!: FormGroup;

  constructor(
    private categoriesService: CategoriesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
    this.categoryGroup = this.fb.group({
      image: new FormControl(),
      name: new FormControl('', [Validators.required]),
      active: new FormControl(true)
    })
    this.loadDemoData()
  }

  exportCSV() {
    this.dt.exportCSV();
  }

  loadDemoData() {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
      this.cd.markForCheck();
    });

    this.statuses = [
      {label: 'INSTOCK', value: 'instock'},
      {label: 'LOWSTOCK', value: 'lowstock'},
      {label: 'OUTOFSTOCK', value: 'outofstock'}
    ];

    this.exportColumns = this.cols.map((col) => ({title: col.label, dataKey: col.field}));
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.categoryDialog = true;
  }

  editProduct(product: Product) {
    this.product = {...product};
    this.categoryDialog = true;
  }

  deleteSelectedCategory() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected category?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categories = this.categories.filter((val) => !this.selectedCategory?.includes(val));
        this.selectedCategory = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Category Deleted',
          life: 3000
        });
      }
    });
  }

  hideDialog() {
    this.categoryDialog = false;
    this.submitted = false;
  }

  deleteCategory(category: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + category.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categoriesService.deleteCategories(category.id!).subscribe(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Category Deleted',
            life: 3000
          });
          this.loadDemoData();
        })
      }
    });
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default :
        return;
    }
  }

  saveCategory() {
    this.submitted = true;
    this.categoriesService.createCategory(this.categoryGroup.value).subscribe(() => {
      this.categoryDialog = false
      this.loadDemoData();
      this.categoryGroup.reset();
    });
  }
}
