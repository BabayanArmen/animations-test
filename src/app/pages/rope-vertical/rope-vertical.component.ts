import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-rope-vertical',
  templateUrl: './rope-vertical.component.html',
  styleUrls: ['./rope-vertical.component.scss']
})
export class RopeVerticalComponent implements OnInit, AfterViewInit {
  @ViewChild('rope-wrapper') private rope!: ElementRef<HTMLDivElement>;
  private isTestRopeScrolledIntoView: boolean = false;

  public ropeWidth: number = 0;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }


  ngAfterViewInit(): void {
    // this.rope.nativeElement.style.width = "200px"
  }

  ngOnInit(): void {
    // for(let i=0; i<=100; i++) {
    //   setTimeout(() => {
    //     this.ropeWidth = i;
    //     console.log(i);

    //   }, 200)
    // }
    setInterval(() => {
      if(this.ropeWidth < 100) {
        this.ropeWidth++;
      }
    }, 20)
  }

  // @HostListener('window:scroll', ['$event'])
  // isScrolledIntoView(){
  //   if (this.rope){
  //     const rect = this.rope.nativeElement.getBoundingClientRect();
  //     const topShown = rect.top >= 0;
  //     const bottomShown = rect.bottom <= window.innerHeight;
  //     this.isTestRopeScrolledIntoView = topShown && bottomShown;

  //     if(this.isTestRopeScrolledIntoView) {
  //       this.ropeWidth = 100;
  //       // for(let i=0; i<=100; i++) {
  //       //   setTimeout(() => {
  //       //     this.rope.nativeElement.style.width = i + "%"
  //       //     // this.rope.nativeElement.style.width = i + "%";
  //       //   }, 200)
  //       // }
  //       // this.rope.nativeElement.style.width = w + "%"
  //     }
  //   }
  // }

}
