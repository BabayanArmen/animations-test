import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'animation-test';

  @ViewChild("canvas") myCanvas!: ElementRef;
  private canvas!: HTMLCanvasElement;
  private context!: any;
  private yPositions: number[] = [];

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll() {
  //     let scrollYPosition = window.scrollY;
  //     if(scrollYPosition === 1) {
  //       this.yPositions = [];
  //     }
  //     if(this.yPositions.length === 0) {
  //       this.yPositions.push(scrollYPosition);
  //       this.drawLine(scrollYPosition);
  //     }
  //     if(scrollYPosition < this.yPositions[this.yPositions.length - 1]) {
  //       this.yPositions.pop();
  //       this.redrawLine(scrollYPosition);
  //       // this.drawLine(scrollYPosition);
  //     } else {
  //       this.yPositions.push(scrollYPosition);
  //       this.drawLine(scrollYPosition);
  //     }
  // }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // this.canvas = this.myCanvas.nativeElement;
    // this.context = this.canvas.getContext("2d");
    // // this.drawLine();

    // this.drawLine();
    // this.drawLine2();
  }

  // drawLine() {
  //   if(this.context) {
  //     this.context.beginPath();
  //     this.context.strokeStyle = "green"
  //     this.context.moveTo(20, 20);
  //     this.context.lineTo(20, 100);
  //     this.context.lineTo(70, 100);
  //     this.context.lineTo(100, 100);
  //     this.context.lineTo(200, 100);
  //     this.context.lineWidth = 2;
  //     this.context.stroke();
  //   }
  // }

  // eraseLine() {
  //   this.context.clearRect(50, 50, 150, 150)
  // }


  // drawLine(y: number) {
  //   if(this.context) {
  //     this.context.beginPath();
  //     this.context.strokeStyle = "green"
  //     this.context.moveTo(20, this.yPositions[this.yPositions.length - 2]);
  //     this.context.lineTo(20, y);
  //     // this.context.lineWidth = 2;
  //     this.context.stroke();
  //   }
  // }

  // redrawLine(y: number) {
  //   this.context.clearRect(0, 0, 150, 150)
  //   this.drawLine(y);
  // }


}
