import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OyoRoutingModule } from './oyo-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OyoRoutingModule
  ]
})
export class OyoModule { 

  constructor(){
    console.warn("Heyyyy");
    
  }
}
