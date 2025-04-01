import { IPhone } from 'src/app/core/models/user.model';

export interface IPos {
    documentId: number;
    id: number;
    name: string;
    code: number;
    description: string;
    address: IAddress;
    phone: IPhone;
    billingDue: IBillingDue;
    ip: string;
    creditLimit: number;
    profitMargin: IProfitMargin[];
    lastUpdated: Date;
    created: Date;
    deleted: boolean;
    minTranscationAmount: number;
    maxTranscationAmount: number;
    topupEnabled: boolean;
    primaryDealerId: number;
    secondaryDealerId: number;
    recurringTopUpEnabled: boolean;
    bulkTopUpEnabled: boolean;
}

export interface IPosDealer {
    id: number;
    name: string;
    code: number;
    description: string;
}

export interface IAddress {
    id: number;
    addressLine1: string;
    addressLine2: string;
    pob: string;
    city: string;
    state: string;
    zipCode: string;
    country: number;
}

export interface IProfitMargin {
    id: number;
    providerId: number;
    clientId: number;
    margin: number;
    active: boolean;
    productPOSMargin: IProductPOSMargin[];
}

export interface IProductPOSMargin {
    id: number;
    productId: number;
    clientId: number;
    margin: number;
    name: string;
}

export interface IBillingDue {
    amount: number;
    dayOfMonth: number;
    dayOfWeek: number;
    id: number;
    type: string;
}
