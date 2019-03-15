import { TestBed } from '@angular/core/testing';

import { CloudAppServiceService } from './cloud-app-service.service';

describe('CloudAppServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudAppServiceService = TestBed.get(CloudAppServiceService);
    expect(service).toBeTruthy();
  });
});
