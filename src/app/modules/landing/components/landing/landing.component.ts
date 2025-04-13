import {Component, OnInit} from '@angular/core';
import {Carousel} from "primeng/carousel";
import {RouterLink} from "@angular/router";
import {CategoriesService} from "@modules/categories/categories.service";
import {Category} from "@core/models/category.model";

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
export class LandingComponent implements OnInit{
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
  catalogList: Category[] = [];
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

  constructor(private categoryService: CategoriesService) {
    const width = window.innerWidth;
    if (width < 500) {
      this.imageHeight = '450px';
    }else if (width < 900 && width > 500) {
      this.imageHeight = '630px';
    }else if (width < 1540 && width > 900) {
      this.imageHeight = '494px';
    }else if (width < 2500 && width > 1541) {
      this.imageHeight = '630px';
    }
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((d: Category[]) => {
      this.catalogList = d
    })
  }
}
