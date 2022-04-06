import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoveDostavaComponent } from './nove-dostava.component';

describe('NoveDostavaComponent', () => {
  let component: NoveDostavaComponent;
  let fixture: ComponentFixture<NoveDostavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoveDostavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoveDostavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
