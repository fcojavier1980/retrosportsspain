import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FutbolComponent } from './futbol.component';

const routes: Routes = [{ path: '', component: FutbolComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FutbolRoutingModule { }
