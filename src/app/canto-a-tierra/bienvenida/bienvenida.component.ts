import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  rutasA: Array<any> = [];


  imagenesSlider: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.rutasA = [
      {
        image: '../../../assets/img/newSidenav/iconos/1.svg',
        span: 'Descripción'
      },
      {
        image: '../../../assets/img/newSidenav/iconos/2.svg',
        span: 'Reseña Histórica'
      },
      {
        image: '../../../assets/img/newSidenav/iconos/3.svg',
        span: 'Relatos'
      },
      {
        image: '../../../assets/img/newSidenav/iconos/4.svg',
        span: 'Reflexiones'
      },
      {
        image: '../../../assets/img/newSidenav/iconos/5.svg',
        span: 'Galería'
      },
      {
        image: '../../../assets/img/newSidenav/iconos/6.svg',
        span: 'Enlaces de Interés'
      }
    ]

    this.imagenesSlider = [
      {
        imagen: 'https://via.placeholder.com/800x400?text=Imagen+2',
        alt: 'Imagen 2'
      },
      {
        imagen: 'https://via.placeholder.com/800x400?text=Imagen+3',
        alt: 'Imagen 3'
      },
      {
        imagen: 'https://via.placeholder.com/800x400?text=Imagen+4',
        alt: 'Imagen 4'
      },
      {
        imagen: 'https://via.placeholder.com/800x400?text=Imagen+5',
        alt: 'Imagen 5'
      }
    ]
  }


}
