import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeComponent } from './rope.component';

describe('RopeComponent', () => {
  let component: RopeComponent;
  let fixture: ComponentFixture<RopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
