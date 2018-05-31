import { TestBed, inject } from '@angular/core/testing';

import { FetchTranslationService } from './fetch-translation.service';

describe('FetchTranslationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchTranslationService]
    });
  });

  it('should be created', inject([FetchTranslationService], (service: FetchTranslationService) => {
    expect(service).toBeTruthy();
  }));
});
