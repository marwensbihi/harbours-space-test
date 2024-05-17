import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiCallService } from '../shared/api-call.service';
import { DatePipe } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-about-program',
  templateUrl: './about-program.component.html',
  styleUrls: ['./about-program.component.scss']
})
export class AboutProgramComponent implements OnInit, OnDestroy {

  aboutHarbourSpace!:string
  location!:string
  startDate!:string
  endDate!:string
  duration!:string
  position!:string

  private unsubscribe$: Subject<void> = new Subject<void>();
  constructor(private api: ApiCallService, private datePipe : DatePipe) { }

  ngOnInit(): void {
    this.getData();

  }
   getData(){
    this.api.getData().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((data)=>{
      this.aboutHarbourSpace = data.scholarship.description[0].data
      this.location = data.scholarship.location.name
      this.startDate = this.formatDate(data.scholarship.scholarship_start_date);
      this.endDate = this.formatDate(data.scholarship.application_end_date);
      this.duration = data.scholarship.duration
      this.position = data.scholarship.position

      console.log('Harbour space description :',this.aboutHarbourSpace)
      console.log('Location is ',this.location)
      console.log('scholarship_start_date : ',this.startDate)
      console.log('scholarship_end_date : ',this.endDate)
      console.log('Duration ',this.duration)
    })
   }

   ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

   formatDate(dateString: string): string {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {    
      return '';
    } else {
      return this.datePipe.transform(date, 'dd MMM yyyy') || '';
    }
  }


}