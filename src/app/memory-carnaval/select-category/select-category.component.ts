import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategoryComponent implements OnInit {


  sliderImagesCantoTierra: Array<any> = [];
  sliderImagesDesfileMagno: Array<any> = [];
  sliderImagesCarnavalito: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.sliderImagesCantoTierra = [
      {
        name: 'Image 1',
        image: '../../../assets/img/memory-carnaval/images/slider/canto-tierra/img_1.jpg'
      },
      {
        name: 'Image 2',
        image: '../../../assets/img/memory-carnaval/images/slider/canto-tierra/img_2.jpg'
      },
      {
        name: 'Image 3',
        image: '../../../assets/img/memory-carnaval/images/slider/canto-tierra/img_3.jpg'
      },

    ]


    this.sliderImagesDesfileMagno = [
      {
        name: 'Image 1',
        image: '../../../assets/img/memory-carnaval/images/slider/desfile-magno/img_1.jpg'
      },
      {
        name: 'Image 2',
        image: '../../../assets/img/memory-carnaval/images/slider/desfile-magno/img_2.jpg'
      },
      {
        name: 'Image 3',
        image: '../../../assets/img/memory-carnaval/images/slider/desfile-magno/img_3.jpg'
      },
      {
        name: 'Image 4',
        image: '../../../assets/img/memory-carnaval/images/slider/desfile-magno/img_4.jpg'
      },
      {
        name: 'Image 5',
        image: '../../../assets/img/memory-carnaval/images/slider/desfile-magno/img_5.jpg'
      }

    ]

    this.sliderImagesCarnavalito = [
      {
        name: 'Image 1',
        image: '../../../assets/img/memory-carnaval/images/slider/carnavalito/img_1.jpg'
      },
      {
        name: 'Image 2',
        image: '../../../assets/img/memory-carnaval/images/slider/carnavalito/img_2.jpg'
      },
      {
        name: 'Image 3',
        image: '../../../assets/img/memory-carnaval/images/slider/carnavalito/img_3.jpg'
      },
      {
        name: 'Image 4',
        image: '../../../assets/img/memory-carnaval/images/slider/carnavalito/img_4.jpg'
      },

    ]
  }

}
