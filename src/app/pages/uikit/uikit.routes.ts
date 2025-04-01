import { Routes } from '@angular/router';
import { ButtonDemo } from './buttondemo';
import { ChartDemo } from './chartdemo';
import { FileDemo } from './filedemo';
import { FormLayoutDemo } from './formlayoutdemo';
import { InputDemo } from './inputdemo';
import { ListDemo } from './listdemo';
import { MediaDemo } from './mediademo';
import { MessagesDemo } from './messagesdemo';
import { MiscDemo } from './miscdemo';
import { PanelsDemo } from './panelsdemo';
import { TimelineDemo } from './timelinedemo';
import { TableDemo } from './tabledemo';
import { OverlayDemo } from './overlaydemo';
import { TreeDemo } from './treedemo';
import { MenuDemo } from './menudemo';
import { allRoles, rolesWithoutGuest } from '../../core/constants';
import { rolesGuard } from '../../core/guards/roles.guard';

export default [
  {
    path: 'button',
    data: { breadcrumb: 'Button', roles: allRoles },
    component: ButtonDemo,
    canActivate: [rolesGuard],
  },
  {
    path: 'charts',
    data: { breadcrumb: 'Charts', roles: allRoles },
    component: ChartDemo,
    canActivate: [rolesGuard],
  },
  {
    path: 'file',
    data: { breadcrumb: 'File', roles: allRoles },
    component: FileDemo,
    canActivate: [rolesGuard],
  },
  {
    path: 'formlayout',
    data: { breadcrumb: 'Form Layout', roles: allRoles },
    component: FormLayoutDemo,
    canActivate: [rolesGuard],
  },
  {
    path: 'input',
    data: { breadcrumb: 'Input', roles: allRoles },
    component: InputDemo,
    canActivate: [rolesGuard],
  },
  {
    path: 'list',
    data: { breadcrumb: 'List', roles: allRoles },
    component: ListDemo,
    canActivate: [rolesGuard],
  },
  {
    path: 'media',
    data: { breadcrumb: 'Media', roles: allRoles },
    component: MediaDemo,
    canActivate: [rolesGuard],
  },
  {
    path: 'message',
    data: { breadcrumb: 'Message', roles: allRoles },
    component: MessagesDemo,
    canActivate: [rolesGuard],
  },
  {
    path: 'misc',
    data: { breadcrumb: 'Misc', roles: allRoles },
    component: MiscDemo,
    canActivate: [rolesGuard],
  },
  {
    path: 'panel',
    data: { breadcrumb: 'Panel', roles: allRoles },
    component: PanelsDemo,
    canActivate: [rolesGuard],
  },
  {
    path: 'timeline',
    data: { breadcrumb: 'Timeline', roles: allRoles },
    component: TimelineDemo,
    canActivate: [rolesGuard],
  },
  {
    path: 'table',
    data: { breadcrumb: 'Table', roles: rolesWithoutGuest },
    component: TableDemo,
    canActivate: [rolesGuard],
  },
  {
    path: 'overlay',
    data: { breadcrumb: 'Overlay', roles: rolesWithoutGuest },
    component: OverlayDemo,
    canActivate: [rolesGuard],
  },
  {
    path: 'tree',
    data: { breadcrumb: 'Tree', roles: rolesWithoutGuest },
    component: TreeDemo,
    canActivate: [rolesGuard],
  },
  {
    path: 'menu',
    data: { breadcrumb: 'Menu', roles: allRoles },
    component: MenuDemo,
    canActivate: [rolesGuard],
  },
  { path: '**', redirectTo: '/notfound' },
] as Routes;
