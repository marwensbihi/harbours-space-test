import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../shared/api-call.service';

@Component({
  selector: 'app-cost-duration',
  templateUrl: './cost-duration.component.html',
  styleUrls: ['./cost-duration.component.scss']
})
export class CostDurationComponent implements OnInit {

  constructor(private apiCallService : ApiCallService) { }

  ngOnInit(): void {
  }
  getData(){
    this.apiCallService.getData().subscribe((data)=>{

    });
}
}