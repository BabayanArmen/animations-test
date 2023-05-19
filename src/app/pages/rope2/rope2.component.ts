import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rope2',
  templateUrl: './rope2.component.html',
  styleUrls: ['./rope2.component.scss']
})
export class Rope2Component implements OnInit, AfterViewInit {
  @ViewChild("rope") ropeEl!: ElementRef;
  @ViewChild("ropeWrapper") ropeWrapperEl!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.ropeEl.nativeElement.style.height = document.body.offsetHeight + "px";
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let scrolledSize = window.scrollY  // document.documentElement.scrollTop
    setTimeout(() => {
      this.ropeWrapperEl.nativeElement.style.height = document.documentElement.clientHeight + scrolledSize + "px"
    }, 500)
  }

}
