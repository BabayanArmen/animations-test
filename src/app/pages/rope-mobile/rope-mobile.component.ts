import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rope-mobile',
  templateUrl: './rope-mobile.component.html',
  styleUrls: ['./rope-mobile.component.scss']
})
export class RopeMobileComponent implements OnInit {
  @ViewChild("rope") rope!: ElementRef;
  @ViewChild("ropeWrapper") ropeWrapper!: ElementRef;
  public ropes:string [] = ["rope"];

  public showButton2:boolean = false;
  public showButton3:boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   setTimeout(() => {
    //     // this.rope.nativeElement.style.height = this.document.body.offsetHeight + "px";
    //   }, 2000)
    // }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      let scrolledSize = window.scrollY  // document.documentElement.scrollTop
      let viewportHeight = document.documentElement.clientHeight // window.innerHeight
      let documentHeight = document.body.offsetHeight;

      let scrollbarThumbRatio = viewportHeight / documentHeight;
      let scrollbarThumbSize = scrollbarThumbRatio * viewportHeight;

      if(scrolledSize + viewportHeight + scrollbarThumbSize > 3638) this.ropes.push("rope");

      setTimeout(() => {
        this.ropeWrapper.nativeElement.style.height = this.document.documentElement.clientHeight + scrolledSize + "px";

        // this.showButton2 = scrolledSize + viewportHeight + scrollbarThumbSize > 765;
        // this.showButton3 = scrolledSize + viewportHeight + scrollbarThumbSize > 1500;

      }, 500)
    }
  }

}
