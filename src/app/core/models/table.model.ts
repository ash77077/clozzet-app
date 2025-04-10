export interface TableModel {
  id?: number;
  field: string;
  label: string;
  type?: "image";
  boolValues?: {
    trueVal: string;
    falseVal: string
  }
}

export interface ExportColumn {
  title: string;
  dataKey: string;
}
