import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CostDurationComponent } from './cost-duration.component';
import { ApiCallService } from '../shared/api-call.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('CostDurationComponent', () => {
  let component: CostDurationComponent;
  let fixture: ComponentFixture<CostDurationComponent>;
  let apiCallService: ApiCallService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [CostDurationComponent],
      providers: [ApiCallService] // Provide the actual service
    }).compileComponents();

    fixture = TestBed.createComponent(CostDurationComponent);
    component = fixture.componentInstance;
    apiCallService = TestBed.inject(ApiCallService);
  });

  // Test getData method:
  it('should call getData method on ngOnInit', () => {
    spyOn(component, 'getData');
    component.ngOnInit();
    expect(component.getData).toHaveBeenCalled();
  });

  it('should assign data to properties after getData', () => {
    const mockData = {
      scholarship: {
        study_commitment_text: 'text',
        total_value: 32000,
        tuition: 22900,
        stipend_per_month: 1000,
        stipend_per_year: 12000,
        remaining: 0,
        internship_commitment_text: 'text',
        study_commitment: 3,
        internship_commitment: 4
      }
    };
    spyOn(apiCallService, 'getData').and.returnValue(of(mockData));
    component.ngOnInit();
    expect(component.study_commitment_text).toBe('text');
    expect(component.total_value).toBe(32000);
    expect(component.tuition).toBe(22900);
    expect(component.stipend_per_month).toBe(1000);
    expect(component.stipend_per_year).toBe(12000);
    expect(component.remaining).toBe(0);
    expect(component.internship_commitment_text).toBe('text');
    expect(component.study_commitment).toBe(3);
    expect(component.internship_commitment).toBe(4);
  });

  it('should render template with assigned data', () => {
    const mockData = {
      scholarship: {
        study_commitment_text: 'text',
        total_value: 32000,
        tuition: 22900,
        stipend_per_month: 1000,
        stipend_per_year: 12000,
        remaining: 0,
        internship_commitment_text: 'text',
        study_commitment: 3,
        internship_commitment: 4
      }
    };
    spyOn(apiCallService, 'getData').and.returnValue(of(mockData));
    component.ngOnInit();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.cost-total .total').textContent).toContain('32,000');
    expect(compiled.querySelector('.cost-details .tuition p').textContent).toContain('22,900');
    expect(compiled.querySelector('.cost-details .remaining p').textContent).toContain('0');  

    // Test study commitment card content  
    expect(compiled.querySelector('.about-card.study p').textContent).toContain('3 hours / day');
    // Test work commitment card content
 
    expect(compiled.querySelector('.about-card.work p').textContent).toContain('4 hours / day');
    // Test contract card content

    expect(compiled.querySelector('.about-card.contract p').textContent).toContain('1 Year Full-Time');
  });
});