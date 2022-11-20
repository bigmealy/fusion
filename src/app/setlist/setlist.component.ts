import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-setlist',
  templateUrl: './setlist.component.html',
  styleUrls: ['./setlist.component.scss']
})
export class SetlistComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Fusion - Setlist');
  }

  ngOnInit(): void {
  }

}
