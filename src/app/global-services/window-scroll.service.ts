import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import {fromEvent} from "rxjs/observable/fromEvent";

/**
 * Service for monitoring current window scroll position.
 */
@Injectable()
export class WindowScrollService {
  public scroll$: Observable<number>;

  constructor(@Inject(DOCUMENT) private document: any) {
    this.scroll$ = fromEvent(window, 'scroll').pipe(
      // throttle to optimize performance. Initial testing showed that 50ms
      // throttling led to some occasional missed events with rapid scrolling.
      /*throttleTime(10),*/
      map(event => {
        return window.scrollY || window.pageYOffset || this.document.documentElement.scrollTop;
      })
    );
  }

}
