import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostDurationComponent } from './cost-duration.component';
import { ApiCallService } from '../shared/api-call.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

describe('CostDurationComponent', () => {
  let component: CostDurationComponent;
  let fixture: ComponentFixture<CostDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostDurationComponent ],
      providers:[ApiCallService],
      imports:[HttpClientModule,CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
