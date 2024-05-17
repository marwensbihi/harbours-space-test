import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SliderComponent } from './slider.component';
import { By } from '@angular/platform-browser';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if mobile', fakeAsync(() => {
    spyOnProperty(window, 'innerWidth', 'get').and.returnValue(767);
    component.checkIfMobile();
    tick();
    expect(component.isMobile).toBeTrue();
  }));

  it('should scroll items to center', () => {
    component.scrollItemsToCenter();
    expect(fixture.debugElement.query(By.css('.items')).nativeElement.scrollLeft).toBe(180);
  });

  it('should navigate left and right', () => {
    const items = fixture.debugElement.query(By.css('.items')).nativeElement;

    component.navigateLeft();
    expect(items.scrollLeft).toBe(0);

    component.navigateRight();
    expect(items.scrollLeft).toBe(200);
  });

});
