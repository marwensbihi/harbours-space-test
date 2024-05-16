import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../shared/api-call.service';

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.component.html',
  styleUrls: ['./scholarships.component.scss']
})
export class ScholarshipsComponent implements OnInit {
  about!:string
  constructor(private apiCall: ApiCallService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.apiCall.getData().subscribe((data)=>{
      this.about = data.scholarship.about[0].data
      console.log('about :',this.about)
    })
  }
 
}
