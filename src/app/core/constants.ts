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
        label: 'Landing',
        icon: 'pi pi-fw pi-globe',
        routerLink: ['/landing'],
        roles: allRoles,
      },
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
  {
    label: 'Pages',
    icon: 'pi pi-fw pi-briefcase',
    routerLink: ['/pages'],
    roles: allRoles,
    items: [
      {
        label: 'Not Found',
        icon: 'pi pi-fw pi-exclamation-circle',
        routerLink: ['/pages/notfound'],
        roles: allRoles,
      },
      {
        label: 'Empty',
        icon: 'pi pi-fw pi-circle-off',
        routerLink: ['/pages/empty'],
        roles: allRoles,
      },
    ],
  },
];
