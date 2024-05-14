import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../shared/api-call.service';

@Component({
  selector: 'app-cost-duration',
  templateUrl: './cost-duration.component.html',
  styleUrls: ['./cost-duration.component.scss']
})
export class CostDurationComponent implements OnInit {
  study_commitment_text!:String
  total_value:number | null = null;
  tuition:number | null = null;
  stipend_per_month:number | null = null;
  stipend_per_year:number | null = null;
  remaining:number | null = null;
  internship_commitment_text!:string
  study_commitment: number | null = null;
  internship_commitment:number | null = null;



  constructor(private apiCallService : ApiCallService) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.apiCallService.getData().subscribe((data)=>{
      this.study_commitment_text = data.scholarship.study_commitment_text
      this.total_value = data.scholarship.total_value
      this.tuition = data.scholarship.tuition
      this.stipend_per_month= data.scholarship.stipend_per_month
      this.stipend_per_year= data.scholarship.stipend_per_year
      this.remaining = data.scholarship.remaining
      this.internship_commitment_text = data.scholarship.internship_commitment_text
      this.study_commitment = data.scholarship.study_commitment
      this.internship_commitment= data.scholarship.internship_commitment

      console.log('study commitment',this.study_commitment_text)
    });
}
}