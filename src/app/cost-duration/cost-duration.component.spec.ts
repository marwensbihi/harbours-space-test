import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CostDurationComponent } from './cost-duration.component';
import { ApiCallService } from '../shared/api-call.service';

describe('CostDurationComponent', () => {
  let component: CostDurationComponent;
  let fixture: ComponentFixture<CostDurationComponent>;
  let apiCallServiceSpy: jasmine.SpyObj<ApiCallService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ApiCallService', ['getData']);

    await TestBed.configureTestingModule({
      declarations: [CostDurationComponent],
      providers: [{ provide: ApiCallService, useValue: spy }]
    })
    .compileComponents();

    apiCallServiceSpy = TestBed.inject(ApiCallService) as jasmine.SpyObj<ApiCallService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostDurationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call apiCallService.getData() on initialization', () => {
    const mockData = {
      scholarship: {
        study_commitment_text: 'The programme consists of fifteen 3-week courses for graduation. Daily classes are 3 hours, plus coursework to complete on your own time.',
        total_value: 34900,
        tuition: 22900,
        stipend_per_month: 1000,
        stipend_per_year: 12000,
        remaining: 0,
        internship_commitment_text: 'You will learn about the mobile games world, you will have a dedicated mentor who will help you improve your skills, and last but not least, you will help the company make better data-driven decisions.',
        study_commitment: 3,
        internship_commitment: 4
      }
    };
    apiCallServiceSpy.getData.and.returnValue(of(mockData));

    fixture.detectChanges();

    expect(apiCallServiceSpy.getData).toHaveBeenCalled();
    expect(component.study_commitment_text).toBe('The programme consists of fifteen 3-week courses for graduation. Daily classes are 3 hours, plus coursework to complete on your own time.');
    expect(component.total_value).toBe(34900);
    expect(component.tuition).toBe(22900);
    expect(component.stipend_per_month).toBe(1000);
    expect(component.stipend_per_year).toBe(12000);
    expect(component.remaining).toBe(0);
    expect(component.study_commitment).toBe(3);
    expect(component.internship_commitment).toBe(4);
  });
});
