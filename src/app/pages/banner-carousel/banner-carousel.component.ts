import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss']
})
export class BannerCarouselComponent implements OnInit {

  n: number = 0;

  @ViewChild('carousel', {static: false}) elementRef!: ElementRef;
  @ViewChild('dots', {static: false}) elementRef1!: ElementRef;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.next()
    }, 2000);
  }

  next() {
    this.showSlide(this.n);
    if ((this.n + 1) > 9 ) {this.n = 0; } else { this.n++; }
  }

  prev() {
    this.showSlide(this.n);
    if ((this.n - 1 ) < 0) {this.n = 9; } else { this.n--; }
  }

  showSlide(n: any) {
    // console.log(this.elementRef1);

    for (let i = 0; i < 10; i++) {
      if (i === n) {
        this.elementRef.nativeElement.children[i].style.display = 'block';
        this.elementRef1.nativeElement.children[i].style.backgroundColor = 'darkslategrey';
      } else { this.elementRef.nativeElement.children[i].style.display = 'none';
        this.elementRef1.nativeElement.children[i].style.backgroundColor = 'white';
      }
    }
  }

}
