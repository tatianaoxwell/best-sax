import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { IMenueItem } from '../menu.model';

const SMALL_WIDTH_BREAKPOINT = 720;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {


	// TODO make menueItems DRY - in sideNav and Header
	menueItems: IMenueItem[] = [
		{ segment: 'products', content: "The Best Sax’s" },
		{ segment: 'cart', content: 'Cart' },
		{ segment: 'about', content: 'About BSS' },
		{ segment: 'contact-us', content: 'Contact Us' },
	  ];

	isActive: boolean = true;
	public isScreenSmall!: boolean;
  
	constructor(
	  private breakpointObserver: BreakpointObserver,
	  private router: Router) { }
  
	@ViewChild(MatSidenav) sidenav!: MatSidenav;
  
  
	ngOnInit(): void {
	  this.breakpointObserver
		.observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
		.subscribe((state: BreakpointState) => {
		  this.isScreenSmall = state.matches;
		});
  
	  this.router.events.subscribe(() => {
		if (this.isScreenSmall) {
		  this.sidenav.close(); //method on Ang Material
		}
	  });
	}
  }
  