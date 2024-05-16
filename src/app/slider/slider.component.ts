import { Component, Renderer2, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  isDown = false;
  startX: number | null = null;
  scrollLeft: number | null = null;
  isMobile = false;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.checkIfMobile();
    this.scrollItemsToCenter();

    // Add event listeners for mouse and touch events
    const items = this.el.nativeElement.querySelector('.items');
    this.renderer.listen(items, 'mousedown', (e) => this.start(e));
    this.renderer.listen(items, 'touchstart', (e) => this.start(e));
    this.renderer.listen(items, 'mousemove', (e) => this.move(e));
    this.renderer.listen(items, 'touchmove', (e) => this.move(e));
    this.renderer.listen(items, 'mouseup', () => this.end());
    this.renderer.listen(items, 'mouseleave', () => this.end());
    this.renderer.listen(items, 'touchend', () => this.end());
  }

  ngOnDestroy() {
    // Clean up event listeners if necessary
  }

  checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 768;
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
    const items = this.el.nativeElement.querySelector('.items');
    this.renderer.removeClass(items, 'active');
  }

  start(e: MouseEvent | TouchEvent): void {
    if (this.isMobile) return;
    this.isDown = true;
    const items = this.el.nativeElement.querySelector('.items');
    this.renderer.addClass(items, 'active');
    this.startX = (e instanceof MouseEvent) ? e.pageX : e.touches[0].pageX - items.offsetLeft;
    this.scrollLeft = items.scrollLeft;
  }

  move(e: MouseEvent | TouchEvent): void {
    if (!this.isDown || this.isMobile) return;
    e.preventDefault();
    const items = this.el.nativeElement.querySelector('.items');
    const x = (e instanceof MouseEvent) ? e.pageX : e.touches[0].pageX - items.offsetLeft;
    const dist = x - (this.startX ?? 0);
    items.scrollLeft = (this.scrollLeft ?? 0) - dist;
  }

  navigateLeft(): void {
    const items = this.el.nativeElement.querySelector('.items');
    items.scrollLeft -= 200;
  }

  navigateRight(): void {
    const items = this.el.nativeElement.querySelector('.items');
    items.scrollLeft += 200;
  }
}
