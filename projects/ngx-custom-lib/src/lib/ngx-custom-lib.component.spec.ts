import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCustomLibComponent } from './ngx-custom-lib.component';

describe('NgxCustomLibComponent', () => {
  let component: NgxCustomLibComponent;
  let fixture: ComponentFixture<NgxCustomLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxCustomLibComponent]
    });
    fixture = TestBed.createComponent(NgxCustomLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
