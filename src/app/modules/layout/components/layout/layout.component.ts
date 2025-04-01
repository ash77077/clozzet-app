import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {AppSidebarComponent} from "@layout/component/app.sidebar";
import {AppTopbar} from "@layout/component/app.topbar";
@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    AppSidebarComponent,
    AppTopbar,
  ],
  templateUrl: './layout.component.html',
  standalone: true,
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
