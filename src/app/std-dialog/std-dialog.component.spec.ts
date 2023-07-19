import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdDialogComponent } from './std-dialog.component';

describe('StdDialogComponent', () => {
  let component: StdDialogComponent;
  let fixture: ComponentFixture<StdDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdDialogComponent]
    });
    fixture = TestBed.createComponent(StdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
