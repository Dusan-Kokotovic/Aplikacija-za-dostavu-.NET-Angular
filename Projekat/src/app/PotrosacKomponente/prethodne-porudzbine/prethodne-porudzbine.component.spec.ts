import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrethodnePorudzbineComponent } from './prethodne-porudzbine.component';

describe('PrethodnePorudzbineComponent', () => {
  let component: PrethodnePorudzbineComponent;
  let fixture: ComponentFixture<PrethodnePorudzbineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrethodnePorudzbineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrethodnePorudzbineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
