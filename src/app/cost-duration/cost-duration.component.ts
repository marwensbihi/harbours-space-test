import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiCallService } from '../shared/api-call.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-cost-duration',
  templateUrl: './cost-duration.component.html',
  styleUrls: ['./cost-duration.component.scss']
})
export class CostDurationComponent implements OnInit, OnDestroy {
  study_commitment_text!:String
  total_value:number | null = null;
  tuition:number | null = null;
  stipend_per_month:number | null = null;
  stipend_per_year:number | null = null;
  remaining:number | null = null;
  internship_commitment_text!:string
  study_commitment: number | null = null;
  internship_commitment:number | null = null;
  


  private unsubscribe$: Subject<void> = new Subject<void>();
  constructor(private apiCallService : ApiCallService) { }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.apiCallService.getData().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((data)=>{
      this.study_commitment_text = data.scholarship.study_commitment_text
      this.total_value = data.scholarship.total_value
      this.tuition = data.scholarship.tuition
      this.stipend_per_month= data.scholarship.stipend_per_month
      this.stipend_per_year= data.scholarship.stipend_per_year
      this.remaining = data.scholarship.remaining
      this.internship_commitment_text = data.scholarship.internship_commitment_text
      this.study_commitment = data.scholarship.study_commitment
      this.internship_commitment= data.scholarship.internship_commitment   
    });
}
}