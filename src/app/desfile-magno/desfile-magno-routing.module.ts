import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaMagnoComponent } from './bienvenida-magno/bienvenida-magno.component';
import { DisfrazIndividualComponent } from './disfraz-individual/disfraz-individual.component';
import { CarrozaComponent } from './carroza/carroza.component';
import { CarrozaNoMotoriComponent } from './carroza-no-motori/carroza-no-motori.component';
import { ComparzaComponent } from './comparza/comparza.component';
import { MurgaComponent } from './murga/murga.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bienvenida',
        component: BienvenidaMagnoComponent
      },
      {
        path: 'disfraz-individual',
        component: DisfrazIndividualComponent
      },
      {
        path: 'carroza',
        component: CarrozaComponent
      },
      {
        path: 'carroza-no-motorizada',
        component: CarrozaNoMotoriComponent
      },
      {
        path: 'comparza',
        component: ComparzaComponent
      },
      {
        path: 'murga',
        component: MurgaComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesfileMagnoRoutingModule { }
