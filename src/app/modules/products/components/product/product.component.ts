import {Component, OnChanges, OnInit, signal, SimpleChanges, ViewChild} from '@angular/core';
import {Table, TableModule} from 'primeng/table';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {InputTextModule} from 'primeng/inputtext';
import {TextareaModule} from 'primeng/textarea';
import {SelectModule} from 'primeng/select';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import {DialogModule} from 'primeng/dialog';
import {TagModule} from 'primeng/tag';
import {InputIconModule} from 'primeng/inputicon';
import {IconFieldModule} from 'primeng/iconfield';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "primeng/tabs";
import {ProductsService} from "@root/src/app/modules/products/products.service";
import {Product, ProductCategory} from "@core/models/product.model";
import {Category} from "@core/models/category.model";
import {CategoriesService} from "@modules/categories/categories.service";
import {TableComponent} from "@shared/components/table/table.component";
import {TableModel} from "@core/models/table.model";
import {FileUploadComponent} from "@shared/components/file-upload/file-upload.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  standalone: true,
  styleUrl: './product.component.scss',
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    TextareaModule,
    SelectModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    TagModule,
    InputIconModule,
    IconFieldModule,
    ConfirmDialogModule,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    ReactiveFormsModule,
    TableComponent,
    FileUploadComponent,
  ],
  providers: [MessageService, ConfirmationService],
})
export class ProductComponent implements OnInit, OnChanges {
  @ViewChild('dt') dt!: Table;
  @ViewChild('fileUpload') fileUpload!: any;

  productDialog: boolean = false;
  products = signal<Product[]>([]);
  product: ProductCategory = {};
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
      label: 'Description',
      field: 'description'
    },
  ];
  productGroup: FormGroup;
  categories: Category[] = [];

  constructor(
    private productService: ProductsService,
    private categoryService: CategoriesService,
    private fb: FormBuilder
  ) {
    this.productGroup = this.fb.group({
      imageUrl: new FormControl(),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  getProductData() {
    this.productService.getAllProducts().subscribe((data) => {
      this.product = data;
    });
  }

  openNew() {
    this.productGroup.reset();
    this.productDialog = true;
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((d: Category[]) => {
      this.categories = d;
      this.getProductData();
    })
  }

  editProduct(product: Product) {
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
  }

  saveProduct() {
    this.productService.createProduct(this.productGroup.value).subscribe(() => {
      this.productDialog = false
      this.getProductData();
    });
  }

  getProductList(name: string) {
    return this.product[name] ?? this.product[name?.toLowerCase()];
  }

  deleteProduct(data: ProductCategory) {
    console.log(data)
  }
}
