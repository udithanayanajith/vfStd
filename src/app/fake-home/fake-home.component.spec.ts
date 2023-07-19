import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeHomeComponent } from './fake-home.component';

describe('FakeHomeComponent', () => {
  let component: FakeHomeComponent;
  let fixture: ComponentFixture<FakeHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeHomeComponent]
    });
    fixture = TestBed.createComponent(FakeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
