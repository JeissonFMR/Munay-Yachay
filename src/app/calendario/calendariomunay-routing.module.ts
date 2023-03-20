import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioamunayComponent} from './calendariomunay/calendariomunay.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'calendariomunay',
        component: CalendarioamunayComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class CalendarioMunayRoutingModule { }
