import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rope2',
  templateUrl: './rope2.component.html',
  styleUrls: ['./rope2.component.scss']
})
export class Rope2Component implements OnInit, AfterViewInit {
  @ViewChild("rope") ropeEl!: ElementRef;
  @ViewChild("ropeWrapper") ropeWrapperEl!: ElementRef;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.ropeEl.nativeElement.style.height = this.document.body.offsetHeight + "px";
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      let scrolledSize = window.scrollY  // document.documentElement.scrollTop
      setTimeout(() => {
        this.ropeWrapperEl.nativeElement.style.height = this.document.documentElement.clientHeight + scrolledSize + "px";
      }, 500)
    }
  }

}
