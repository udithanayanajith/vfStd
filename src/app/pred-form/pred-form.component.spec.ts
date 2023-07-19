import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredFormComponent } from './pred-form.component';

describe('PredFormComponent', () => {
  let component: PredFormComponent;
  let fixture: ComponentFixture<PredFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PredFormComponent]
    });
    fixture = TestBed.createComponent(PredFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
