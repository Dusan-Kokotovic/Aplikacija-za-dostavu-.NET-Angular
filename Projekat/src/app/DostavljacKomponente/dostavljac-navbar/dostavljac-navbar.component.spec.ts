import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DostavljacNavbarComponent } from './dostavljac-navbar.component';

describe('DostavljacNavbarComponent', () => {
  let component: DostavljacNavbarComponent;
  let fixture: ComponentFixture<DostavljacNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DostavljacNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DostavljacNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
