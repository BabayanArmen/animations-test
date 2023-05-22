import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeVerticalComponent } from './rope-vertical.component';

describe('RopeVerticalComponent', () => {
  let component: RopeVerticalComponent;
  let fixture: ComponentFixture<RopeVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopeVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RopeVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
