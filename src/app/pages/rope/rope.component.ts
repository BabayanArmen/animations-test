import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rope',
  templateUrl: './rope.component.html',
  styleUrls: ['./rope.component.scss']
})
export class RopeComponent implements OnInit {
  @Input() settings: any;
  public imageCoverHeight?: string;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let scrolledSize = window.scrollY  // document.documentElement.scrollTop
    let viewportHeight = document.documentElement.clientHeight // window.innerHeight
    let documentHeight = document.body.offsetHeight;

    let scrollbarThumbRatio = viewportHeight / documentHeight;
    let scrollbarThumbSize = scrollbarThumbRatio * viewportHeight;

    let scrolledRatio = scrolledSize/(documentHeight - scrollbarThumbSize);

    let imageH = (viewportHeight + scrollbarThumbSize)*scrolledRatio;

    this.imageCoverHeight = imageH + 'px';
  }

  ngOnInit(): void {
  }

}
