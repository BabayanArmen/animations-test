import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselBlockComponent } from './carusel-block.component';

describe('CaruselBlockComponent', () => {
  let component: CaruselBlockComponent;
  let fixture: ComponentFixture<CaruselBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaruselBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaruselBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
