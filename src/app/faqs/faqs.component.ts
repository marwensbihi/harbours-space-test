import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../shared/api-call.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  faqs: any[] = [];
  filteredFaqs: any[] = [];
  types: string[] = [];
  selectedType: string = '';
  

  constructor(private faqsdata: ApiCallService) {}

  ngOnInit(): void {
    this. getFaqs();
   
  }
  getFaqs(): void {
    this.faqsdata.getData().subscribe((data: any) => {
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
    }
  }
   
  toggleAnswer(faq: any): void {
    faq.showAnswer = !faq.showAnswer; 
  }
}
