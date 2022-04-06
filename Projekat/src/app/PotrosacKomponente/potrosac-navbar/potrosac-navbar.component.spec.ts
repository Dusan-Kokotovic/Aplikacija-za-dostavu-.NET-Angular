import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotrosacNavbarComponent } from './potrosac-navbar.component';

describe('PotrosacNavbarComponent', () => {
  let component: PotrosacNavbarComponent;
  let fixture: ComponentFixture<PotrosacNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotrosacNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotrosacNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
