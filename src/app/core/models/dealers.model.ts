import { IPhone } from './user.model';
import { IAddress, IBillingDue, IProfitMargin } from 'src/app/core/models/pos.model';

export interface IDealer {
    documentId: number;
    id: number;
    name: string;
    description: string;
    code: number;
    phone: IPhone;
    email: string;
    address: IAddress;
    pob: string;
    city: string;
    zipCode: number;
    mainPosId: string;
    ip: number;
    creditLimit: number;
    billingDue: IBillingDue;
    provider: string;
    profitMargin: IProfitMargin[];
}

