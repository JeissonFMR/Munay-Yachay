import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrocita',
  templateUrl: './carrocita.component.html',
  styles: []
})
export class CarrocitaComponent implements OnInit {

  // ---------------------------------------------------------------------------------------------------------
  // Propiedades gráficas
  // ---------------------------------------------------------------------------------------------------------

  /**
   * Datos de la gráfica de número de participantes
   */
  lineChartData: Array<any> = [
    { data: [0, 66, 136, 401, 277, 230, 169], label: 'Participantes' }
  ];

  /**
   * Etiquetas de la gráfica de número de participantes
   */
  lineChartLabels: Array<any> = ['', '2013', '2014', '2015', '2016', '2017', '2018'];

  /**
   * Opciones de la gráfica de número de participantes
   */
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
      text: 'Participantes Carrocita'
    }
  };

  /**
   * Colores de la gráfica de número de participantes
   */
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
    }
  ];

  /**
   * Leyenda de la gráfica de número de participantes
   */
  lineChartLegend = true;

  /**
   * Tipo de gráfica de número de participantes
   */
  lineChartType = 'line';

  // ------------------- GRÁFICA # PROPUESTAS ------------------- //

  /**
   * Datos de la gráfica de número de participantes
   */
  lineChartData2: Array<any> = [
    {
      data: [0, 9, 12, 15, 22, 28, 26, 25],
      label: 'Propuestas'
    }
  ];


  /**
   * Etiquetas de la gráfica de número de participantes
   */
  lineChartLabels2: Array<any> = ['', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];

  /**
   * Opciones de la gráfica de número de participantes
   */
  public lineChartOptions2: any = {
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
          labelString: 'Número de propuestas'
        }
      }]
    },
    title: {
      display: true,
      text: 'Propuestas Carrocita'
    }
  };

  /**
   * Colores de la gráfica de número de participantes
   */
  lineChartColors2: Array<any> = [
    {
      fill: false,
      borderDash: [5, 5],
      borderColor: '#FF7D4D',
      pointBorderColor: '#FF7D4D',
      pointBackgroundColor: '#FFF',
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4,
    }
  ];

  // ---------------------------------------------------------------------------------------------------------
  // Propiedades
  // ---------------------------------------------------------------------------------------------------------

  title: string;


  // ---------------------------------------------------------------------------------------------------------
  // Constructor
  // ---------------------------------------------------------------------------------------------------------

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  // ---------------------------------------------------------------------------------------------------------
  // Metodos
  // ---------------------------------------------------------------------------------------------------------

  GetDetails(content, titleText) {
    this.title = titleText;
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
    }, (reason) => {
    });
  }


  // events
  public chartClicked(e: any): void {
    //your code here
  }

  public chartHovered(e: any): void {
    //your code here
  }

}

