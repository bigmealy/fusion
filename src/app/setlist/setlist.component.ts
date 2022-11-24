import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {SetlistService} from "./setlist.service";

@Component({
  selector: 'app-setlist',
  templateUrl: './setlist.component.html',
  styleUrls: ['./setlist.component.scss']
})
export class SetlistComponent implements OnInit {

  constructor(private titleService: Title, private setlistService: SetlistService) {
    this.titleService.setTitle('Fusion - Setlist');
  }

  ngOnInit(): void {
  }

  test = this.setlistService.test;

  setlist$ = this.setlistService.setlist$;

}
