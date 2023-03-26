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
        name: 'test1',
        image: '../../../assets/img/galeria/4.jpg'
      },
      {
        name: 'test2',
        image: '../../../assets/img/galeria/5.jpg'
      },
      {
        name: 'test3',
        image: '../../../assets/img/galeria/1.jpg'
      },

    ]


    this.sliderImagesDesfileMagno = [
      {
        name: 'test1',
        image: '../../../assets/img/galeria/4.jpg'
      },
      {
        name: 'test2',
        image: '../../../assets/img/galeria/5.jpg'
      },
      {
        name: 'test3',
        image: '../../../assets/img/galeria/1.png'
      },

    ]

    this.sliderImagesCarnavalito = [
      {
        name: 'test1',
        image: '../../../assets/img/galeria/4.jpg'
      },
      {
        name: 'test2',
        image: '../../../assets/img/galeria/5.jpg'
      },
      {
        name: 'test3',
        image: '../../../assets/img/galeria/1.jpg'
      },

    ]
  }

}
