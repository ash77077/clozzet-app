import { EUserRole } from './enums/user-role.enum';
import { MenuItem } from 'primeng/api';

export const allRoles: EUserRole[] = [EUserRole.ADMIN, EUserRole.PARTNER, EUserRole.MANAGER, EUserRole.GUEST];
export const rolesWithoutGuest: EUserRole[] = [EUserRole.ADMIN, EUserRole.PARTNER, EUserRole.MANAGER];

export const menuItems: MenuItem[] = [
  {
    label: 'Home',
    roles: allRoles,
    items: [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/admin'], roles: allRoles },
      {
        label: 'Products',
        icon: 'pi pi-fw pi-images',
        routerLink: ['/admin/products'],
        roles: allRoles,
      },
      {
        label: 'Categories',
        icon: 'pi pi-fw pi-images',
        routerLink: ['/admin/categories'],
        roles: allRoles,
      },
    ],
  },
];
