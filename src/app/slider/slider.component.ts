import { Component,  Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent  {

  isDown = false;
  startX: number | null = null;
  scrollLeft: number | null = null;
  isMobile: boolean = false;


  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit() {

   this.scrollItemsToCenter();
  }

  scrollItemsToCenter(): void {
    const items = this.el.nativeElement.querySelector('.items');
    const itemWidth = 600; 
    const containerWidth = items.offsetWidth;
    const scrollLeft = (containerWidth - itemWidth) / 2;
    this.renderer.setProperty(items, 'scrollLeft', scrollLeft);
  }
  
 

  end(): void {
    this.isDown = false;
    const items = document.querySelector('.items') as HTMLElement;
    items.classList.remove('active');
  }

  start(e: MouseEvent | TouchEvent): void {
    this.isDown = true;
    const items = document.querySelector('.items') as HTMLElement;
    items.classList.add('active');
    this.startX = (e instanceof MouseEvent) ? e.pageX : (e.touches[0].pageX - (document.querySelector('.items') as HTMLElement).offsetLeft);
    this.scrollLeft = (document.querySelector('.items') as HTMLElement).scrollLeft;
  }

  move(e: MouseEvent | TouchEvent): void {
    if (!this.isDown) return;

    e.preventDefault();
    const x =
      e instanceof MouseEvent
        ? e.pageX
        : e.touches[0].pageX -
        (document.querySelector('.items') as HTMLElement).offsetLeft;
    const dist = x - (this.startX ?? 0);
    (document.querySelector('.items') as HTMLElement).scrollLeft =
      (this.scrollLeft ?? 0) - dist;
  }

  navigateLeft(): void {
    const items = document.querySelector('.items') as HTMLElement;
    items.scrollLeft -= 200; 
  }

  navigateRight(): void {
    const items = document.querySelector('.items') as HTMLElement;
    items.scrollLeft += 200; 
  }
}