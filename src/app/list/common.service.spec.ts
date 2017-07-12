import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CommonService } from './common.service';

describe('CommonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonService],
      imports: [ HttpModule ]
    });
  });

  it('should create common service', inject([CommonService], (service: CommonService) => {
    expect(service).toBeTruthy();
  }));
});
