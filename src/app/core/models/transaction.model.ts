import { IPhone } from 'src/app/core/models/user.model';
import { ETransactionStatus } from 'src/app/core/enums/transaction-status.enum';

export interface ITransaction {
    id: number;
    time: Date;
    type: string;
    status: ETransactionStatus;
    userId: number;
    providerId: number;
    posId: number;
    productId: number;
    buyerPhoneNumber: IPhone;
    currency: number;
    exchangeRate: number;
    amount: number;
    posIncome: number;
    dealerIncome: number;
    ourIncome: number;
    providerIncome: number;
    referenceNo: string;
    providerReferenceNo: string;
    providerTransactionId: number;
    deffredTopups: number;
    cancelationReason: string;
    deleted: boolean;
}

export interface ITransactionReq {
    time: Date;
    type: string;
    status: ETransactionStatus;
    userId: number;
    providerId: number;
    clientId: number;
    posId: number;
    productId: number;
    beneficiaryId: number;
    buyerPhoneNumber: IPhone;
    currency: number;
    referenceNo: string;
    providerReferenceNo: string;
    providerTransactionId: number;
    deffredTopups: number;
    cancelationReason: string;
}
