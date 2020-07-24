import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NflComponent } from './nfl.component';

const routes: Routes = [{ path: '', component: NflComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NflRoutingModule { }
