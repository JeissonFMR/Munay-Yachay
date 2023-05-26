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
        imagen: '../../../assets/img/desfile-magno/fotografiasCarnaval/_MG_7575.jpg',
        alt: 'Imagen 2'
      },
      {
        imagen: '../../../assets/img/desfile-magno/fotografiasCarnaval/_MG_9261.jpg',
        alt: 'Imagen 3'
      },
      {
        imagen: '../../../assets/img/desfile-magno/fotografiasCarnaval/_MG_9670.jpg',
        alt: 'Imagen 4'
      },
      {
        imagen: '../../../assets/img/desfile-magno/fotografiasCarnaval/_MG_9482.jpg',
        alt: 'Imagen 5'
      }
    ]
  }

}
