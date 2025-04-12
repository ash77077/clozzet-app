import {Component} from '@angular/core';
import {Carousel} from "primeng/carousel";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-landing',
  imports: [
    Carousel,
    RouterLink
  ],
  templateUrl: './landing.component.html',
  standalone: true,
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  slider: any[] = [
    {
      img: 'assets/carousel-images/img1.jpg',
      text: 'IT companies',
      color: "yellow"
    },
    {
      img: 'assets/carousel-images/img2.jpg',
      text: 'Banks',
      color: "blue"
    },
    {
      img: 'assets/carousel-images/img3.jpg',
      text: 'Supermarkets',
      color: "green"
    },
    {
      img: 'assets/carousel-images/img5.jpg',
      text: 'School',
      color: "orange"
    },
    {
      img: 'assets/carousel-images/img6.jpg',
      text: "Expo's",
      color: "gray"
    },
    {
      img: 'assets/carousel-images/img7.jpg',
      text: 'Kindergarten',
      color: "red"
    },
  ]
  catalogList: any[] = [
    {
      name: 'Polo',
      description: 'bla bla',
      img: 'assets/images/pic01.png',
    },
    {
      name: 'T-shirt',
      description: 'bla bla',
      img: 'assets/images/pic02.png',
    },
    {
      name: 'Hoodie',
      description: 'bla bla',
      img: 'assets/images/pic03.png',
    },
    {
      name: 'Bag',
      description: 'bla bla',
      img: 'assets/images/pic04.png',
    },
    {
      name: 'Apron',
      description: 'bla bla',
      img: 'assets/images/pic05.png',
    },
    {
      name: 'Cap',
      description: 'bla bla',
      img: 'assets/images/pic06.png',
    },
  ];
  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ]
  imageHeight: string = '580px'

  constructor() {
    const width = window.innerWidth;
    if (width < 500) {
      this.imageHeight = '400px';
    }else if (width < 900 && width > 500) {
      this.imageHeight = '630px';
    }else if (width < 1540 && width > 900) {
      this.imageHeight = '494px';
    }else if (width < 2500 && width > 1541) {
      this.imageHeight = '630px';
    }
  }
}
