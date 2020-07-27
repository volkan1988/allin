import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-carrousel',
  templateUrl: './home-carrousel.component.html',
  styleUrls: ['./home-carrousel.component.scss']
})
export class HomeCarrouselComponent implements OnInit {

  images = ["./assets/images/carousel1.jpeg", "./assets/images/carousel2.jpeg"];

  constructor() { }

  ngOnInit() {
  }

}
