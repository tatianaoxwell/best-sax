import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMenueItem } from './menu.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menueItems: IMenueItem[] = [
	{ segment: 'products', content: "The Best Sax’s" },
	{ segment: 'cart', content: 'Cart' },
    { segment: 'about', content: 'About BSS' },
    { segment: 'contact-us', content: 'Contact Us' },
  ];

  @Output() toggleSidenav: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
}
