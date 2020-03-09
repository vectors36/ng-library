import { TestBed } from '@angular/core/testing';

import { NavlistService } from './navlist.service';

describe('NavlistService', () => {
  let service: NavlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
