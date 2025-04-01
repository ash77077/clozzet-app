export interface IBulkUploadModel {
    id?: number;
    data?: string;
    filename: string;
}

export interface IBulkStatus {
    id?: number;
    completed?: number;
    failed: number;
}
