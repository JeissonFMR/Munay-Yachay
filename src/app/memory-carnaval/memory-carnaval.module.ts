import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoryCarnavalRoutingModule } from './memory-carnaval-routing.module';
import { SelectCategoryComponent } from './select-category/select-category.component';


@NgModule({
  imports: [
    CommonModule,
    MemoryCarnavalRoutingModule,
  ],
  declarations: [SelectCategoryComponent]
})
export class MemoryCarnavalModule { }
