import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriamunayComponent } from './galeriamunay/galeriamunay.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'galeriamunay',
        component: GaleriamunayComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriaMunayRoutingModule { }
