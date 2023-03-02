import { TestBed } from '@angular/core/testing';

import { SellerservicesService } from './sellerservices.service';

describe('SellerservicesService', () => {
  let service: SellerservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
