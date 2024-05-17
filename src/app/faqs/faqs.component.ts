import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiCallService } from '../shared/api-call.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit, OnDestroy {

  faqs: any[] = [];
  filteredFaqs: any[] = [];
  types: string[] = [];
  selectedType: string = '';
  
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private faqsdata: ApiCallService) {}

  ngOnInit(): void {
    this. getFaqs();   
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getFaqs(): void {
    this.faqsdata.getData().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((data)=>{
      this.faqs = data.scholarship.faqs.items;
      this.types = data.scholarship.faqs.categories;
      this.types.unshift('All');
      this.filterByType(this.types[0]); 
      console.log('faqs is : ', this.faqs)
      console.log('typs is : ', this.types)
    });

  }

  filterByType(type: string): void {
    this.selectedType = type;
    if (type === 'All') {
      this.filteredFaqs = this.faqs; 
    } else {
      this.filteredFaqs = this.faqs.filter(faq => faq.type === type);
      console.log(this.filteredFaqs)
    }
  }
   
  toggleAnswer(faq: any): void {   
    faq.showAnswer = !faq.showAnswer; 
  }
}
