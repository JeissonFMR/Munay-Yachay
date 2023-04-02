import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-canto-ala-tierra',
  templateUrl: './content-canto-ala-tierra.component.html',
  styleUrls: ['./content-canto-ala-tierra.component.scss']
})
export class ContentCantoALaTierraComponent implements OnInit {

  rutasA: Array<any> = [];


  constructor(private elementRef: ElementRef) { }

  scrollToElement(id: string) {
    const element = this.elementRef.nativeElement.querySelector('#' + id);
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  ngOnInit() {
    this.rutasA = [
      {
        image: '../../../assets/img/newSidenav/iconos/1.svg',
        span: 'Descripción',
        action: (elementId: string) => this.scrollToElement('seccion1')
      },
      {
        image: '../../../assets/img/newSidenav/iconos/2.svg',
        span: 'Reseña Histórica',
        action: (elementId: string) => this.scrollToElement('seccion2')
      },
      {
        image: '../../../assets/img/newSidenav/iconos/3.svg',
        span: 'Relatos',
        action: (elementId: string) => this.scrollToElement('seccion3')
      },
      {
        image: '../../../assets/img/newSidenav/iconos/4.svg',
        span: 'Reflexiones',
        action: (elementId: string) => this.scrollToElement('seccion4')
      },
      {
        image: '../../../assets/img/newSidenav/iconos/5.svg',
        span: 'Galería',
        action: (elementId: string) => this.scrollToElement('seccion5')
      },
      {
        image: '../../../assets/img/newSidenav/iconos/6.svg',
        span: 'Enlaces de Interés',
        action: (elementId: string) => this.scrollToElement('seccion6')
      },
    ]
  }

}
