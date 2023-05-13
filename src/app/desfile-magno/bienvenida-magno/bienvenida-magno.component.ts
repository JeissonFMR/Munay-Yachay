import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material';

@Component({
  selector: 'app-bienvenida-magno',
  templateUrl: './bienvenida-magno.component.html',
  styleUrls: ['./bienvenida-magno.component.scss']
})
export class BienvenidaMagnoComponent implements OnInit {

  imagenesSlider: Array<any> = [];

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);

  disfraz: string = `Ver categoria: Disfraz Individual`;
  comparza: string = `Ver categoria: Comparza`;
  murga: string = `Ver categoria: Murga`;
  carroza: string = `Ver categoria: Carroza`;
  carrozaNo: string = `Ver categoria: Carroza No Motorizada`;


  constructor() { }

  ngOnInit() {
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
