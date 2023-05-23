import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rope-vertical',
  templateUrl: './rope-vertical.component.html',
  styleUrls: ['./rope-vertical.component.scss']
})
export class RopeVerticalComponent implements OnInit {
  @ViewChild('rope') private rope!: ElementRef<HTMLDivElement>;
  public ropeWidth: number = 0;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView(){
    if (isPlatformBrowser(this.platformId)) {
      if (this.rope){
        const rect = this.rope.nativeElement.getBoundingClientRect();
        const topShown = rect.top >= 0;
        const bottomShown = rect.bottom <= window.innerHeight;
        let isTestRopeScrolledIntoView = topShown && bottomShown;

        if(isTestRopeScrolledIntoView) {
          this.drawRope();
        }
        // else {
        //   this.ropeWidth = 0;
        // }
      }
    }
  }

  private drawRope() {
    setInterval(() => {
      if(this.ropeWidth <= 100) {
        this.ropeWidth++;
      }
    }, 50)
  }

}
