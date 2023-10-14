import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayAssignmentComponent } from './two-way-assignment.component';

describe('TwoWayAssignmentComponent', () => {
  let component: TwoWayAssignmentComponent;
  let fixture: ComponentFixture<TwoWayAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoWayAssignmentComponent]
    });
    fixture = TestBed.createComponent(TwoWayAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
