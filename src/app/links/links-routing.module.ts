import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksComponent} from './links/links.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'links',
        component: LinksComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class LinksRoutingModule { }
