import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { Faq } from './faq.model';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  private faqUrl = 'assets/faq.json';

  constructor(private http: HttpClient) {}

  faq$ = this.http.get<Faq[]>(this.faqUrl).pipe(shareReplay(1));

  test = 'Real MBT!';
}
