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

    // console.log('window.innerHeight', window.innerHeight);
    // // console.log(document.body.offsetHeight);
    // console.log('window.scrollY', window.scrollY);

    // //// window.scrollY + window.innerHeight > document.body.offsetHeight

    // // let screenH = window.innerHeight;
    // // let contentH = document.body.offsetHeight;
    // // let contentH = document.body.scrollHeight;

    // // let x = window.scrollY*(screenH / contentH);
    // // this.imageCoverHeight = x + 'px';

    // // this.imageCoverHeight = window.scrollY + 'px';

    // this.imageCoverHeight = (window.scrollY*(window.innerHeight/document.body.offsetHeight)) + 'px';

    // // if(window.scrollY + window.innerHeight > document.body.offsetHeight) {
    // //   this.imageCoverHeight = window.innerHeight + 'px';
    // // }

    ///////////////////////////////////////////////////////
    let scrolledSize = window.scrollY  // document.documentElement.scrollTop
    let viewportHeight = document.documentElement.clientHeight // window.innerHeight
    let documentHeight = document.body.offsetHeight;

    ////////////////////////////////////////////////
    // let scrollbarThumbSize = (viewportHeight-50)*(viewportHeight/documentHeight)
    ////////////////////////////////////////////////

    let scrollbarThumbRatio = viewportHeight / documentHeight;
    let scrollbarThumbSize = scrollbarThumbRatio * viewportHeight;

    let scrolledRatio = scrolledSize/(documentHeight - scrollbarThumbSize);

    let imageH = (viewportHeight + scrollbarThumbSize)*scrolledRatio;

    this.imageCoverHeight = imageH + 'px';

  }

  ngOnInit(): void {
  }

}
