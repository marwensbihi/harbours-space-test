import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../shared/api-call.service';

@Component({
  selector: 'app-about-program',
  templateUrl: './about-program.component.html',
  styleUrls: ['./about-program.component.scss']
})
export class AboutProgramComponent implements OnInit {

  aboutScolarship!:any
  location!:any
  constructor(private api: ApiCallService) { }

  ngOnInit(): void {
    this.getData();

  }
   getData(){
    this.api.getData().subscribe((data)=>{
      this.aboutScolarship = data.scholarship.about[0].data
      this.location = data.scholarship.location
      console.log('your location is ',this.location)
    })
   }
}