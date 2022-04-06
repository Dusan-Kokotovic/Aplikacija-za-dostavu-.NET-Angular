import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaNarudzbinaComponent } from './nova-narudzbina.component';

describe('NovaNarudzbinaComponent', () => {
  let component: NovaNarudzbinaComponent;
  let fixture: ComponentFixture<NovaNarudzbinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaNarudzbinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaNarudzbinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
