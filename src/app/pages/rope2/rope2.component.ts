import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rope2',
  templateUrl: './rope2.component.html',
  styleUrls: ['./rope2.component.scss']
})
export class Rope2Component implements OnInit, AfterViewInit {
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
    //   // this.rope.nativeElement.style.height = this.document.body.offsetHeight + "px";
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
  
      setTimeout(() => {
        if(scrolledSize + viewportHeight + scrollbarThumbSize > 7199) this.ropes.push("rope");
        this.ropeWrapper.nativeElement.style.height = this.document.documentElement.clientHeight + scrolledSize + "px";

        this.showButton2 = scrolledSize + viewportHeight + scrollbarThumbSize > 765; 
        this.showButton3 = scrolledSize + viewportHeight + scrollbarThumbSize > 1500;
        
      }, 500)
    }
  }

}
