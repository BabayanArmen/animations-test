import { Component, ContentChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent implements OnInit {
  @ContentChild('carouselItems') items!: ElementRef;
  public currentIndex = 0;

  constructor() { }

  ngOnInit(): void {}

  plus() {
    if(this.currentIndex === this.items.nativeElement.children.length) {
      return
    }
    this.currentIndex++;
    this.items.nativeElement.children[this.currentIndex].scrollIntoView({ behavior: "smooth", block: "start" });
  }

  minus() {
    if(this.currentIndex === 0) {
      return
    }
    this.currentIndex--;
    this.items.nativeElement.children[this.currentIndex].scrollIntoView({ behavior: "smooth", block: "start" });
  }

}
