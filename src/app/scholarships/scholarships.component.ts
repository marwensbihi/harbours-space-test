import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiCallService } from '../shared/api-call.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.component.html',
  styleUrls: ['./scholarships.component.scss']
})
export class ScholarshipsComponent implements OnInit, OnDestroy {
  about!:string
  
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private apiCall: ApiCallService) { }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getData(){
    this.apiCall.getData().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((data)=>{
      this.about = data.scholarship.about[0].data
      console.log('about :',this.about)
    })
  }
 
}
