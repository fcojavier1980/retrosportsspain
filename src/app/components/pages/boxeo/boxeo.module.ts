import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxeoRoutingModule } from './boxeo-routing.module';
import { BoxeoComponent } from './boxeo.component';


@NgModule({
  declarations: [BoxeoComponent],
  imports: [
    CommonModule,
    BoxeoRoutingModule
  ]
})
export class BoxeoModule { }
