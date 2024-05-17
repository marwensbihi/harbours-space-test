import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsComponent } from './faqs.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiCallService } from '../shared/api-call.service';
import { of } from 'rxjs';

describe('FaqsComponent', () => {
  let component: FaqsComponent;
  let fixture: ComponentFixture<FaqsComponent>;
  let apiCallService: ApiCallService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ FaqsComponent ],
      providers: [  ApiCallService   ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqsComponent);
    component = fixture.componentInstance;
   
    fixture.detectChanges();
    apiCallService = TestBed.inject(ApiCallService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getFaqs method on ngOnInit', () => {
    spyOn(component, 'getFaqs');
    component.ngOnInit();
    expect(component.getFaqs).toHaveBeenCalled();
  });


  it('should filter FAQs by type', () => {
    component.faqs = [      
      {type: 'Application process', question: 'What happens once I conduct the interview with Harbour.Space?'},     
      {type: 'Application process', question: 'When will I know the outcome of my application?'},      
      {type: 'Programme conditions', question: 'How many hours will I dedicate to the classes, homework and internship?'},      
      {type: 'Programme conditions', question: "Can I start by studying/working remotely if I'm not able to be physically present?"},     
      {type: 'Apprenticeship conditions', question: 'Will I sign an internship contract?'},       
      {type: 'Application process', question: 'Is the application fee refundable?'},     
      {type: 'Apprenticeship conditions', question: 'Will I be provided with accommodation?'},     
      {type: 'Apprenticeship conditions', question: 'Will I get aa visa?'},      
      {type: 'Apprenticeship conditions', question: 'What happens if I can’t arrive for the starting date?'},      
      {type: 'Apprenticeship conditions', question: 'Is my living allowance negotiable?'},
    ];

    component.filterByType('Application process');

    expect(component.filteredFaqs).toEqual([
      {type: 'Application process', question: 'What happens once I conduct the interview with Harbour.Space?'},     
      {type: 'Application process', question: 'When will I know the outcome of my application?'},  
      {type: 'Application process', question: 'Is the application fee refundable?'}, 
    ]);

    component.filterByType('All');
    expect(component.filteredFaqs).toEqual(component.faqs);
  });
  
  it('should toggle the answer visibility', () => {
    const faq = { question: 'Q1', answer: 'A1', type: 'General', showAnswer: false };

    component.toggleAnswer(faq);

    expect(faq.showAnswer).toBe(true);

    component.toggleAnswer(faq);

    expect(faq.showAnswer).toBe(false);
  });

});
