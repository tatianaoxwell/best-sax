import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBssDevComponent } from './about-bss-dev.component';

describe('AboutBssDevComponent', () => {
  let component: AboutBssDevComponent;
  let fixture: ComponentFixture<AboutBssDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBssDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutBssDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
