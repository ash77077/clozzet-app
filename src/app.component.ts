import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutService} from "@layout/service/layout.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit{
  constructor(private layoutService: LayoutService) {

  }

  ngOnInit() {
    this.layoutService.layoutConfig.set(this.layoutService._config);
    this.layoutService.onConfigUpdate();
    this.layoutService.toggleDarkMode();
  }
}
