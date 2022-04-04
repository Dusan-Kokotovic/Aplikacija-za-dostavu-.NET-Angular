import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjeProzivodaComponent } from './dodavanje-prozivoda.component';

describe('DodavanjeProzivodaComponent', () => {
  let component: DodavanjeProzivodaComponent;
  let fixture: ComponentFixture<DodavanjeProzivodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodavanjeProzivodaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjeProzivodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
