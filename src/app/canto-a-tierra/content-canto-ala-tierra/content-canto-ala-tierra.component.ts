import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';



declare const YT: any; // Para evitar errores de compilación
@Component({
  selector: 'app-content-canto-ala-tierra',
  templateUrl: './content-canto-ala-tierra.component.html',
  styleUrls: ['./content-canto-ala-tierra.component.scss']
})
export class ContentCantoALaTierraComponent implements OnInit {

  // RUTAS UTILIZADAS EN SIDENAV
  rutasA: Array<any> = [];

  //IMAGENES GALERÍA
  imagenesGaleria: Array<any> = [];

  imagenesInteres: Array<any> = [];

  // INFORMACIÓN PARA VIDEOS DEL REPRODUCTOR
  infVideos: Array<any> = [];


  // REPRODUCTOR DE VIDEO
  @ViewChild('youtubePlayer') youtubePlayer: ElementRef;
  player: any; // Almacena la instancia del reproductor de YouTube

  constructor(private elementRef: ElementRef) { }


  ngAfterViewInit() {
    // Llama a la función playVideo con el ID del video 1 al cargar el componente
    this.playVideo('8_QY5gFQUTg');
  }

  playVideo(videoId: string) {
    if (this.player) {
      this.player.destroy(); // Destruye la instancia anterior del reproductor
    }

    this.player = new YT.Player(this.youtubePlayer.nativeElement, {
      videoId: videoId,
      playerVars: {
        autoplay: 0,
        iv_load_policy: 3,
      },
    });

  }

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

    this.infVideos = [
      {
        idVideo: '8_QY5gFQUTg',
        fotoPersona: '../../../assets/img/canto-a-la-tierra/contentPages/relatos/person/sinFoto.jpg',
        nombrePersona: 'Pepito perez',
        nombreVideo: 'Video 1',
        tiempo: '3:00'
      },
      {
        idVideo: 'BxuY9FET9Y4',
        fotoPersona: '../../../assets/img/canto-a-la-tierra/contentPages/relatos/person/sinFoto.jpg',
        nombrePersona: 'Pepito perez',
        nombreVideo: 'Video 2',
        tiempo: '3:00'
      },
      {
        idVideo: 'EkHTsc9PU2A',
        fotoPersona: '../../../assets/img/canto-a-la-tierra/contentPages/relatos/person/sinFoto.jpg',
        nombrePersona: 'Pepito perez',
        nombreVideo: 'Video 3',
        tiempo: '3:00'
      },
      {
        idVideo: 'yKNxeF4KMsY',
        fotoPersona: '../../../assets/img/canto-a-la-tierra/contentPages/relatos/person/sinFoto.jpg',
        nombrePersona: 'Pepito perez',
        nombreVideo: 'Video 4',
        tiempo: '3:00'
      },
      {
        idVideo: 'yKNxeF4KMsY',
        fotoPersona: '../../../assets/img/canto-a-la-tierra/contentPages/relatos/person/sinFoto.jpg',
        nombrePersona: 'Pepito perez',
        nombreVideo: 'Video 5',
        tiempo: '3:00'
      }
    ]

    this.imagenesGaleria = [
      {
        Img: '../../../assets/img/galeria/1.jpg',
        alt: 'Imagen 1'
      },
      {
        Img: '../../../assets/img/galeria/2.jpg',
        alt: 'Imagen 1'
      },
      {
        Img: '../../../assets/img/galeria/3.jpg',
        alt: 'Imagen 1'
      },

    ]


    this.imagenesInteres = [

      {
        Img: '../../../assets/img/canto-a-la-tierra/contentPages/enlacesInteres/contornoEnlacesInteres.png',
        alt: 'Imagen 1',
        nombre: 'Pepito perez',
        titulo: 'Titulo de testeo...😀',
        tiempo: '3:00'
      },

      {
        Img: '../../../assets/img/canto-a-la-tierra/contentPages/enlacesInteres/contornoEnlacesInteres.png',
        alt: 'Imagen 2',
        nombre: 'Pepito perez',
        titulo: 'Titulo de testeo...😀',
        tiempo: '3:00'
      },

      {
        Img: '../../../assets/img/canto-a-la-tierra/contentPages/enlacesInteres/contornoEnlacesInteres.png',
        alt: 'Imagen 3',
        nombre: 'Pepito perez',
        titulo: 'Titulo de testeo...😀',
        tiempo: '3:00'
      },


    ]
  }

}
