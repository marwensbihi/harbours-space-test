import { ComponentFixture, TestBed, tick,fakeAsync } from '@angular/core/testing';

import { AboutProgramComponent } from './about-program.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { ApiCallService } from '../shared/api-call.service';
import { of } from 'rxjs';

describe('AboutProgramComponent', () => {
  let component: AboutProgramComponent;
  let fixture: ComponentFixture<AboutProgramComponent>;
  let apiCallService: ApiCallService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[DatePipe,ApiCallService],
      imports:[HttpClientModule,CommonModule],
      declarations: [ AboutProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutProgramComponent);
    component = fixture.componentInstance;
    apiCallService = TestBed.inject(ApiCallService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format dates correctly', () => {
    const startDate = component.formatDate('2020-11-30 00:00:00');
    const endDate = component.formatDate('2021-11-22 00:00:00');

    expect(startDate).toBe('30 Nov 2020');
    expect(endDate).toBe('22 Nov 2021');
  });

  it('should set aboutHarbourSpace and location variables', fakeAsync(() => {
    const dummyData = {
      scholarship: {
        description: [{ data: 'Harbour Space Description' }],
        location: { name: 'Barcelona' }
      }
    };
  
    spyOn(apiCallService, 'getData').and.returnValue(of(dummyData)); 
    component.getData(); 
    tick();
  
    expect(component.aboutHarbourSpace).toEqual('Harbour Space Description');
    expect(component.location).toEqual('Barcelona');
  }));
});
