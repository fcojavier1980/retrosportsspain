import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FutbolRoutingModule } from './futbol-routing.module';
import { FutbolComponent } from './futbol.component';


@NgModule({
  declarations: [FutbolComponent],
  imports: [
    CommonModule,
    FutbolRoutingModule
  ]
})
export class FutbolModule { }
