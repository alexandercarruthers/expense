import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewexpensePage } from './viewexpense.page';

const routes: Routes = [
  {
    path: '',
    component: ViewexpensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewexpensePageRoutingModule {}
