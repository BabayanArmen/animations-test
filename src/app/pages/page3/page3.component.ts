import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {
  public items = [1, 2, 3, 4, 5, 6, 7, 8]

  constructor() { }

  ngOnInit(): void {
  }

}
