import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideNavService {
  private isSideNavOpen$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
	//	we don't want to expose isSideNavOpen$ (we don't want it to be changed by components?), 
	// therefore we make it into a BehSubject so that other components will subscribe to it. 
	// the Observable will be exposed to the components. 

  getIsSideNavOpen(): Observable<boolean> {
    return this.isSideNavOpen$.asObservable();
	// we expose a get property, that will allow components to subscribe to this BehavSubject. 
  }

  setIsSideNavOpen(value: boolean): void {
    this.isSideNavOpen$.next(value);
	console.log('setting', value);
	
    // next() - to publish data to all the subscribing components.
    // whenever we receive the value, we call next() on the BehSubject to let the listening
	// component know that data is available.
  }
}
