import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { FaqService } from './faq.service';

describe('FaqServiceService', () => {
  let httpTestingController: HttpTestingController;
  let service: FaqService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(FaqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request data via http if data observed', () => {
    service.faq$.subscribe();

    httpTestingController.expectOne(req => req.url.endsWith('assets/faq.json'));
  })

  it('should not request data a second time via http if data observed twice', () => {
    service.faq$.subscribe();
    service.faq$.subscribe();

    httpTestingController.expectOne(req => req.url.endsWith('assets/faq.json'));
  })

  afterEach(() => {
    httpTestingController.verify();
  })
});
