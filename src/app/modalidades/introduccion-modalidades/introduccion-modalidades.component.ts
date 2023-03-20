import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/servicios.index';
import { TimelineElement } from '../horizontal/component/timeline-element';

@Component({
  selector: 'app-introduccion-modalidades',
  templateUrl: './introduccion-modalidades.component.html',
  styles: []
})
export class IntroduccionModalidadesComponent implements OnInit {


  // lineChart
  lineChartData: Array<any> = [

    // { data: [0, 0, 2, 4, 15, 15, 16, 11, 12], label: 'Propuestas' },
    // datos colectivo
    { data: [0, 247, 1171, 940, 1079, 582, 784], label: 'Colectivo Coreográfico' },
    // datos comparsa
    { data: [0, 99, 385, 200, 129, 189, 141], label: 'Comparsa' },
    // datos disfraz individual
    { data: [0, 11, 27, 6, 2, 3, 15], label: 'Disfraz Individual' },
    // datos murguita
    { data: [0, 51, 203, 139, 238, 195, 112], label: 'Murguita' },
    // datos carrocita
    { data: [0, 66, 136, 401, 277, 230, 169], label: 'Carrocita' }

  ];

  lineChartLabels: Array<any> = ['', '2013', '2014', '2015', '2016', '2017', '2018'];

  public lineChartOptions: any = {
    animation: {
      duration: 1000, // general animation time
      easing: 'easeOutBack'
    },
    hover: {
      animationDuration: 1000, // duration of animations when hovering an item
      mode: 'label'
    },
    responsiveAnimationDuration: 1000, // animation duration after a resize
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
    },
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          color: '#f3f3f3',
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: 'Año'
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          color: '#f3f3f3',
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: 'Número de participantes'
        }
      }]
    },
    title: {
      display: true,
      text: 'Datos estadísticos Generales'
    }
  };

  lineChartColors: Array<any> = [

    {

      fill: false,
      borderDash: [5, 5],
      borderColor: '#9C27B0',
      pointBorderColor: '#9C27B0',
      pointBackgroundColor: '#FFF',
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4,
    },
    {

      fill: false,
      borderDash: [5, 5],
      borderColor: '#00A5A8',
      pointBorderColor: '#00A5A8',
      pointBackgroundColor: '#FFF',
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4,
    },
    {

      fill: false,
      borderDash: [5, 5],
      borderColor: '#06AC61',
      pointBorderColor: '#06AC61',
      pointBackgroundColor: '#FFF',
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4,
    },
    {

      fill: false,
      borderDash: [5, 5],
      borderColor: '#FF2D3C',
      pointBorderColor: '#FF2D3C',
      pointBackgroundColor: '#FFF',
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4,
    },
    {

      fill: false,
      borderDash: [5, 5],
      borderColor: '#FF5D33',
      pointBorderColor: '#FF5D33',
      pointBackgroundColor: '#FFF',
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4,
    },
    {
      lineTension: 0,
      fill: false,
      borderColor: '#FF7D4D',
      pointBorderColor: '#FF7D4D',
      pointBackgroundColor: '#FFF',
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4,
    },

  ];
  lineChartLegend = true;
  lineChartType = 'line';


  /**
   * contenido de los datos historicos
   */
  contentHistoricos1 = `Primeras construcciones de carrocitas y 
  disfraces individuales para niños que desfilaban al lado de sus 
  padres en el Festival Estudiantil y La Cultura`;
  // tslint:disable-next-line:max-line-length
  contentHistoricos2 = `Presencia de cuadrillas y comparsas danzantes
  Participaron comparsas a caballo y comparsas femeninas`;
  contentHistoricos3 = `Hace presencia la comparsa familia MACHUCA
  como alusión de arrieros antioqueños y que luego se incorpora a
  la Familia Castañeda`;
  contentHistoricos4 = `Por primera vez se califican y premian disfraces
  individuales`;
  contentHistoricos5 = `Aparece una comparsa de disfraces 
  amenizada por músicos `;
  contentHistoricos6 = `El barrio obrero se destaca en la elaboración 
  de comparsas y carrozas`;
  contentHistoricos7 = `Se incluyen las murgas como modalidad concursal`;
  contentHistoricos8 = `Se empiezan a involucran temas más regionales 
  en los motivos y propuestas artísticas del carnaval`;
  contentHistoricos9 = `Inicio del carnavalito desde los barrios sur orientales`;
  contentHistoricos10 = `Se reconoce a Mario Fernando Rodríguez como Fundador 
  del carnavalito`;


  /**
   * Content para cada uno de los contenidos de los datos historicos
   */

  timelineHistoricos: TimelineElement[] = [
    { date: new Date(1926, 0, 1), selected: true, title: 'Dato Historico 1', content: this.contentHistoricos1 },
    { date: new Date(1927, 1, 1), title: 'Dato Historico 2', content: this.contentHistoricos2 },
    { date: new Date(1929, 1, 1), title: 'Dato Historico 3', content: this.contentHistoricos3 },
    { date: new Date(1939, 1, 1), title: 'Dato Historico 4', content: this.contentHistoricos4 },
    { date: new Date(1940, 1, 1), title: 'Dato Historico 5', content: this.contentHistoricos5 },
    { date: new Date(1949, 1, 1), title: 'Dato Historico 6', content: this.contentHistoricos6 },
    { date: new Date(1950, 1, 1), title: 'Dato Historico 7', content: this.contentHistoricos7 },
    { date: new Date(1959, 1, 1), title: 'Dato Historico 8', content: this.contentHistoricos8 },
    { date: new Date(1966, 1, 1), title: 'Dato Historico 9', content: this.contentHistoricos9 },
    { date: new Date(1966, 1, 2), title: 'Dato Historico 10', content: this.contentHistoricos10 },
    { date: new Date(1969, 1, 2), title: 'FIN', content: '' }
  ];




  constructor() { }

  ngOnInit() {
  }


  // events
  public chartClicked(e: any): void {
    //your code here
  }

  public chartHovered(e: any): void {
    //your code here
  }

}

