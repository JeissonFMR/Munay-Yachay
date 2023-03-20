import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoresComponent } from './autores/autores.component';
import { BibliografiaComponent } from './bibliografia/bibliografia.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'autores',
        component: AutoresComponent
      },
      {
        path: 'bibliografia',
        component: BibliografiaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionRoutingModule { }
