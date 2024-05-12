import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostDurationComponent } from './cost-duration.component';

describe('CostDurationComponent', () => {
  let component: CostDurationComponent;
  let fixture: ComponentFixture<CostDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostDurationComponent ]
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