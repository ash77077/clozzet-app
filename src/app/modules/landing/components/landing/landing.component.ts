import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  standalone: true,
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
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
}
