import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  email = 'info@fusionband.co.uk';
  phone = '07454 740775';

  constructor(private titleService: Title) {
    this.titleService.setTitle('Fusion');
  }

  ngOnInit(): void {
  }

}
