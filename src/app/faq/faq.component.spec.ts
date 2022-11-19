import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Subject } from 'rxjs';
import { FaqComponent } from './faq.component';
import { Faq } from './faq.model';
import { FaqService } from './faq.service';

describe('FaqComponent', () => {
  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;
  let mockFaqService: jasmine.SpyObj<FaqService> = jasmine.createSpyObj(
    'fake FAQ service',
    [],
    {
      test: 'Fake MBT!',
      faq$: of([
        { question: 'Q1', answer: 'A1' },
        { question: 'Q2', answer: 'A2' },
      ]),
    }
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FaqComponent],
      providers: [{ provide: FaqService, useValue: mockFaqService }],
    }).compileComponents();

    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get fake test text from jasmine spy', () => {
    expect(component.test).toEqual('Fake MBT!');
  });

  it('should show questions', () => {
    const numQuestions = fixture.nativeElement.querySelectorAll('.question').length;
    expect(numQuestions).toEqual(2);
  });
});
