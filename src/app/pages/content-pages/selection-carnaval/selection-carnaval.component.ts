import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material';
import { FormControl } from '@angular/forms';


const a = 'En esta sección se encuentran las categorías del carnaval:\n- CARNAVALITO\n- CANTO A LA TIERRA- DESFILE MAGNO.`;'

@Component({
  selector: 'app-selection-carnaval',
  templateUrl: './selection-carnaval.component.html',
  styleUrls: ['./selection-carnaval.component.scss']
})
export class SelectionCarnavalComponent implements OnInit {


  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);

  memoriesCarnaval: string = `En esta sección encontrarás las siguientes categorías del Carnaval: • CARNAVALITO • CANTO A LA TIERRA • DESFILE MAGNO.`;
  ourCarnaval: string = 'Nuestro carnaval'

  constructor() { }

  ngOnInit() {
  }

}
