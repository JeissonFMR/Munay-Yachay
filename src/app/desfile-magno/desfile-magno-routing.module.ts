import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaMagnoComponent } from './bienvenida-magno/bienvenida-magno.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bienvenida',
        component: BienvenidaMagnoComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesfileMagnoRoutingModule { }
