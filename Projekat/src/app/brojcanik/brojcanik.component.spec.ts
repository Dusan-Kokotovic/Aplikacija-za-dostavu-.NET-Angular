import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrojcanikComponent } from './brojcanik.component';

describe('BrojcanikComponent', () => {
  let component: BrojcanikComponent;
  let fixture: ComponentFixture<BrojcanikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrojcanikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrojcanikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
