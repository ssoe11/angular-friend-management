import { TestBed } from '@angular/core/testing';

import { FriendsManagementService } from './friends-management.service';

describe('FriendsManagementService', () => {
  let service: FriendsManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendsManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
