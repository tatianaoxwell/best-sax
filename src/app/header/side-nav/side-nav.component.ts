import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { tap } from 'rxjs';
import { IMenuItem } from '../menu.model';
import { SideNavService } from './side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  // TODO make menuItems DRY - in sideNav and Header
  menuItems: IMenuItem[] = [
    { segment: 'products', content: 'The Best Sax’s' },
    { segment: 'cart', content: 'Cart' },
    { segment: 'about', content: 'About BSS' },
    { segment: 'contact-us', content: 'Contact Us' },
  ];

  isActive: boolean = true;
  isOpen: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sideNavService: SideNavService
  ) {}

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  ngOnInit(): void { // THIS COMPONENT IS LISTENING TO BEHAV SUBJ
    this.sideNavService
      .getIsSideNavOpen()
      .pipe(
        tap((value: boolean) => {
          this.isOpen = value;
          console.log('getter', value);
        })
      )
      .subscribe();
  }
  
  closeSideNav(): void {
    console.log('clicked - false', this.isOpen);
    this.sideNavService.setIsSideNavOpen(false);
  }
}
