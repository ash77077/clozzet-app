import { Component } from '@angular/core';
import {Carousel} from "primeng/carousel";

@Component({
  selector: 'app-landing',
  imports: [
    Carousel
  ],
  templateUrl: './landing.component.html',
  standalone: true,
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  slider: any[] = [
    {
      img: 'assets/carousel-images/img1.jpg'
    },
    {
      img: 'assets/carousel-images/img2.jpg'
    },
    {
      img: 'assets/carousel-images/img3.jpg'
    },
    {
      img: 'assets/carousel-images/img4.jpg'
    },
    {
      img: 'assets/carousel-images/img5.jpg'
    },
    {
      img: 'assets/carousel-images/img6.jpg'
    },
    {
      img: 'assets/carousel-images/img7.jpg'
    },
    {
      img: 'assets/carousel-images/img8.jpg'
    }
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
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ]
}
