import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FaqService } from './faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(private titleService: Title, private faqService: FaqService) {
    this.titleService.setTitle('Fusion - FAQ');
  }

  ngOnInit(): void {
  }

  faq$ = this.faqService.faq$;

  test = this.faqService.test;

}
