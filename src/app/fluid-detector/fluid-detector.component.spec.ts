import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidDetectorComponent } from './fluid-detector.component';

describe('FluidDetectorComponent', () => {
  let component: FluidDetectorComponent;
  let fixture: ComponentFixture<FluidDetectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FluidDetectorComponent]
    });
    fixture = TestBed.createComponent(FluidDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
