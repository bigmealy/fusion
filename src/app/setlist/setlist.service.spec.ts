import { TestBed } from '@angular/core/testing';

import { SetlistService } from './setlist.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('SetlistService', () => {
  let httpTestingController: HttpTestingController;
  let service: SetlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SetlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request data via http if data observed', () => {
    service.setlist$.subscribe();

    httpTestingController.expectOne(req => req.url.endsWith('assets/setlist.json'));
  })

  it('should not request data a second time via http if data observed twice', () => {
    service.setlist$.subscribe();
    service.setlist$.subscribe();

    httpTestingController.expectOne(req => req.url.endsWith('assets/setlist.json'));
  })

  afterEach(() => {
    httpTestingController.verify();
  })
});
