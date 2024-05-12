import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProgramComponent } from './about-program.component';
import { HttpClientModule } from '@angular/common/http';

describe('AboutProgramComponent', () => {
  let component: AboutProgramComponent;
  let fixture: ComponentFixture<AboutProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ AboutProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
