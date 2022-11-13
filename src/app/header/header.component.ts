import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMenuItem } from './menu.model';
import { SideNavService } from './side-nav/side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuItems: IMenuItem[] = [
    { segment: 'products', content: "The Best Sax’s" },
    { segment: 'cart', content: 'Cart' },
    { segment: 'about', content: 'About BSS' },
    { segment: 'contact-us', content: 'Contact Us' },
  ];

  @Output() toggleSidenav: EventEmitter<void> = new EventEmitter<void>();
  constructor(private sideNavService: SideNavService) {}

  ngOnInit(): void {}

  openSidenav(): void {
    this.sideNavService.setIsSideNavOpen(true);
	console.log('openSideNav()');
	
  }
}
