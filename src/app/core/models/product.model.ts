export interface IProduct {
    id?: number;
    filterProducts?: boolean;
    wholesalePrice?: number;
    retailPrice?: number;
    serviceFee?: number;
    margin?: number;
    providerId?: number;
    code?: number;
    providerNumber?: string;
    providerName?: string;
    details: IProductDetails[];
    categoryId?: string;
    priority?: number;
    sortOrder?: number;
    image?: string;
    forSpecificPOS?: boolean;
    posList?: [
        {
            id: number;
            productId: number;
            posId: number;
        }
    ];
    isFeeAmount?: boolean;
    active?: boolean;
}

export interface IProductDetails {
    id: number;
    productId: number;
    language: string;
    name: string;
    description: string;
    image: string;
    //status: boolean
}