import { TestBed } from '@angular/core/testing';

import { NgxCustomLibService } from './ngx-custom-lib.service';

describe('NgxCustomLibService', () => {
  let service: NgxCustomLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCustomLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
