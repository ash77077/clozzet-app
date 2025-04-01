import { IPhone } from 'src/app/core/models/user.model';
import { EUserRole } from 'src/app/core/enums/user-role.enum';

export interface IAdminUsers {
    readonly id: number;
    username: string;
    firstname: string;
    middlename: string;
    familyname: string;
    lastname: string;
    documentId: string;
    phone: IPhone;
    email: string;
    group: string;
    role: EUserRole;
    language: string;
    posId: number;
    dealerId: number;
    clientId: number;
    password: string;
}
