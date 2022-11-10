import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { IMenuItem } from '../menu.model';
import { SideNavService } from './side-nav.service';

const SMALL_WIDTH_BREAKPOINT = 720;
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
  public isScreenSmall!: boolean;

  isOpen: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private sideNavService: SideNavService
  ) {}

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  ngOnInit(): void {
    this.sideNavService
      .getIsSideNavOpen()
      .pipe(
        tap((value: boolean) => {
          this.isOpen = value;
          console.log('getter', value);
        })
      )
      .subscribe();

    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });
  }
  closeSideNav(): void {
    console.log('clicked - false', this.isOpen);
    this.sideNavService.setIsSideNavOpen(false);
  }
}
