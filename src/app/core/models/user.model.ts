import { EUserRole } from '../enums/user-role.enum';

export interface IUser {
  readonly id: number;
  username: string;
  password: string;
  role: EUserRole;
  phone: string;
  email: string;
  firstname: string;
  lastname: string;
  access_token: string;
}

export class UserModel implements IUser {
  readonly id!: number;
  username!: string;
  password!: string;
  role!: EUserRole;
  phone!: string;
  email!: string;
  firstname!: string;
  lastname!: string;
  access_token!: string;

  constructor(params: IUser) {
    if (params) {
      this.id = params?.id;
      this.username = params?.username || '';
      this.password = params?.password || '';
      this.role = params?.role || EUserRole.GUEST;
      this.email = params?.email || '';
      this.firstname = params?.firstname || '';
      this.lastname = params?.lastname || '';
      this.phone = params?.phone || '';
      this.access_token = params?.access_token || '';
    }
    if (params?.access_token) {
      this.access_token = params?.access_token || '';
      sessionStorage.setItem('access_token', JSON.stringify(params?.access_token));
    }
  }

  public get isAdmin(): boolean {
    return this.role === EUserRole.ADMIN;
  }
}
