import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotrosacHomeComponent } from './potrosac-home.component';

describe('PotrosacHomeComponent', () => {
  let component: PotrosacHomeComponent;
  let fixture: ComponentFixture<PotrosacHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotrosacHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotrosacHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
