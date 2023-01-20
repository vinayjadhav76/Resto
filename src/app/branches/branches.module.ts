import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesRoutingModule } from './branches-routing.module';
import { HotelsComponent } from './hotels/hotels.component';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    HotelsComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    BranchesRoutingModule
  ]
})
export class BranchesModule { }
