import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutService} from "@layout/service/layout.service";
import {AppConfiguratorComponent} from "@layout/component/app.configurator";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppConfiguratorComponent],
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
