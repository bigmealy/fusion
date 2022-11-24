import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, shareReplay} from "rxjs";
import {Track} from "./track.model";

@Injectable({
  providedIn: 'root'
})
export class SetlistService {
  private setlistUrl = 'assets/setlist.json';

  constructor(private http: HttpClient) {
  }

  setlist$ = this.http.get<Track[]>(this.setlistUrl).pipe(shareReplay(1));

  test = 'Real Setlist!';

}
