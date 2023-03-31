import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bienvenida',
        component: BienvenidaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CantoATierraRoutingModule { }
