import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LayoutService} from "@layout/service/layout.service";
import {AppConfiguratorComponent} from "@layout/component/app.configurator";
import {LoadingService} from "@core/services/loading.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppConfiguratorComponent,
    AsyncPipe,
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private layoutService: LayoutService,
    public loadingService: LoadingService
  ) {

  }

  ngOnInit() {
    this.layoutService.layoutConfig.set(this.layoutService._config);
    this.layoutService.onConfigUpdate();
    this.layoutService.toggleDarkMode();
  }
}
