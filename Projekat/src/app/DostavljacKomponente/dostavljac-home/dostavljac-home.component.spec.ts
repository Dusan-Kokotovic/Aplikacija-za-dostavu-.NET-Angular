import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DostavljacHomeComponent } from './dostavljac-home.component';

describe('DostavljacHomeComponent', () => {
  let component: DostavljacHomeComponent;
  let fixture: ComponentFixture<DostavljacHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DostavljacHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DostavljacHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
