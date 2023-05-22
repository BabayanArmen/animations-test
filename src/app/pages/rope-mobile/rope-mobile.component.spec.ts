import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeMobileComponent } from './rope-mobile.component';

describe('RopeMobileComponent', () => {
  let component: RopeMobileComponent;
  let fixture: ComponentFixture<RopeMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopeMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RopeMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
