import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss']
})
export class BannerCarouselComponent implements OnInit, OnDestroy {
  @ViewChild('container') containerEl!: ElementRef;
  private currentIndex: number = 0;
  public images = [
    {
      src: "../../../assets/banners/1.png"
    },
    {
      src: "../../../assets/banners/2.png"
    },
    {
      src: "../../../assets/banners/3.png"
    },
  ];
  inetrval: any;

  constructor() { }

  ngOnInit() {
    // this.inetrval = setInterval(() => {
    //   this.next()
    // }, 2000);
  }

  public next() {
    if(this.currentIndex === this.images.length) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    // this.containerEl.nativeElement.children[this.currentIndex].scrollIntoView({behavior: "smooth"});
    this.containerEl.nativeElement.children[this.currentIndex].scrollLeft()
  }

  public prev() {
    if(this.currentIndex === 0) {
      this.currentIndex = this.images.length-1;
    } else {
      this.currentIndex--;
    }
    this.containerEl.nativeElement.children[this.currentIndex].scrollIntoView({behavior: "smooth"})
  }

  ngOnDestroy(): void {
    clearInterval(this.inetrval);
  }
}
