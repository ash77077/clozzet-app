import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';
import * as MobileDetect from 'mobile-detect';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  readonly IS_SERVER: boolean;
  readonly IS_BROWSER: boolean;

  private mobile: boolean = false;
  private tablet: boolean = false;
  private pc: boolean = false;

  public maintenance: boolean = false;
  public maintenance$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(@Inject(PLATFORM_ID) protected platformId: any) {
    this.IS_SERVER = isPlatformServer(this.platformId);
    this.IS_BROWSER = isPlatformBrowser(this.platformId);
    if (this.IS_BROWSER) {
      const detect = new MobileDetect(window.navigator.userAgent);
      this.setDevices(detect);
    }
    this.maintenance$.subscribe((value: boolean) => (this.maintenance = value));
  }

  get isLocal(): boolean {
    return window && /localhost/.test(window.location.host);
  }

  private setDevices(detect: MobileDetect): void {
    this.mobile = !!detect.phone();
    this.tablet = !!detect.tablet();
    this.pc = !detect.mobile();
  }

  get isMobile(): boolean {
    return this.mobile;
  }

  get isTablet(): boolean {
    return this.tablet;
  }

  get isPC(): boolean {
    return this.pc;
  }
}
