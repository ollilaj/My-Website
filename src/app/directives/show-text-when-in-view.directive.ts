import { AfterViewInit, Directive, ElementRef, HostBinding } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Directive({
  selector: '[addClassWhenInView]'
})
export class ShowTextWhenInView implements AfterViewInit {

  @HostBinding('class.inView') inView: boolean;

  constructor(private el: ElementRef,
              private deviceService: DeviceDetectorService) {}

  ngAfterViewInit() {
    if((this.deviceService.isMobile() || this.deviceService.isTablet()) && this.isIntersectionObserverAvailable()) {
      this.showTextWhenInView();
    }
  }

  private isIntersectionObserverAvailable() {
    return window && 'IntersectionObserver' in window;
  }

  private showTextWhenInView() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.showText();
        } else {
          this.hideText();
        }
      });
    });
    obs.observe(this.el.nativeElement);
  }

  private showText() {
    this.inView = true;
  }

  private hideText() {
    this.inView = false;
  }
}
