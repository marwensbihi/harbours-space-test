import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipsComponent } from './scholarships.component';
import { HttpClientModule } from '@angular/common/http';

describe('ScholarshipsComponent', () => {
  let component: ScholarshipsComponent;
  let fixture: ComponentFixture<ScholarshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholarshipsComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScholarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
