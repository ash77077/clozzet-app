import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Table, TableModule, TableRowReorderEvent} from "primeng/table";
import {NgTemplateOutlet} from "@angular/common";
import {ExportColumn, TableModel} from "@core/models/table.model";
import {Button} from "primeng/button";
import {Toolbar} from "primeng/toolbar";
import {ConfirmationService, MessageService} from "primeng/api";
import {Tag} from "primeng/tag";

@Component({
  selector: 'app-table',
  imports: [
    TableModule,
    NgTemplateOutlet,
    Button,
    Toolbar,
    Tag
  ],
  templateUrl: './table.component.html',
  standalone: true,
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit{
  @ViewChild('dt') dt!: Table;

  @Input() data: any = [];
  @Input() columns: TableModel[] = [];
  @Input() paginator: boolean = false;
  @Input() rowsCount: number = 10;
  @Input() allowReorder: boolean = false;
  @Input() allowCheckbox: boolean = false;
  @Input() showToolBar: boolean = false;
  @Input() actionColumn?: TemplateRef<any>;
  selectedItems: any;
  exportColumns!: ExportColumn[];
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {
  }

  ngOnInit() {
    this.exportColumns = this.columns.map((col) => ({ title: col.label, dataKey: col.field }));
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // this.products.set(this.products().filter((val) => !this.selectedProducts?.includes(val)));
        this.selectedItems = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 4000,
        });
      },
    });
  }

  onDropRow(e: TableRowReorderEvent) {
    console.log(e)
  }
}
