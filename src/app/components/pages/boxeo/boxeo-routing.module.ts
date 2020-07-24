import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxeoComponent } from './boxeo.component';

const routes: Routes = [{ path: '', component: BoxeoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxeoRoutingModule { }
