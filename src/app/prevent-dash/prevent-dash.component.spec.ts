import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventDashComponent } from './prevent-dash.component';

describe('PreventDashComponent', () => {
  let component: PreventDashComponent;
  let fixture: ComponentFixture<PreventDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreventDashComponent]
    });
    fixture = TestBed.createComponent(PreventDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
