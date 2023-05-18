import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rope2Component } from './rope2.component';

describe('Rope2Component', () => {
  let component: Rope2Component;
  let fixture: ComponentFixture<Rope2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rope2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rope2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
