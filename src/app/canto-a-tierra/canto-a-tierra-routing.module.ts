import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ContentCantoALaTierraComponent } from './content-canto-ala-tierra/content-canto-ala-tierra.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bienvenida',
        component: BienvenidaComponent
      },
      {
        path: 'content',
        component: ContentCantoALaTierraComponent
      },
      {
        path: '**',
        redirectTo: 'bienvenida'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CantoATierraRoutingModule { }
