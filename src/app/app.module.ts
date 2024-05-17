import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { FaqsComponent } from './faqs/faqs.component';
import { AboutProgramComponent } from './about-program/about-program.component';
import { CostDurationComponent } from './cost-duration/cost-duration.component';
import { FormsModule } from '@angular/forms';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
  declarations: [    
    AppComponent,
    SliderComponent,
    HeaderComponent,
    FaqsComponent,
    AboutProgramComponent,
    CostDurationComponent,
    ScholarshipsComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
