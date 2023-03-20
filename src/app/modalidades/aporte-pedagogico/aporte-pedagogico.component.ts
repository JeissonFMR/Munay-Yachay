import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-aporte-pedagogico',
  templateUrl: './aporte-pedagogico.component.html',
  styleUrls: ['./aporte-pedagogico.component.scss']
})
export class AportePedagogicoComponent {

  title: string;
  constructor(private modalService: NgbModal) { }


  GetDetails(content, titleText) {
    this.title = titleText;
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
    }, (reason) => {
    });
  }




}
