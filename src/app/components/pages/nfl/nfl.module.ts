import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NflRoutingModule } from './nfl-routing.module';
import { NflComponent } from './nfl.component';


@NgModule({
  declarations: [NflComponent],
  imports: [
    CommonModule,
    NflRoutingModule
  ]
})
export class NflModule { }
