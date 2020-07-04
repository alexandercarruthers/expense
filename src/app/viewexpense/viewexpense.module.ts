import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewexpensePageRoutingModule } from './viewexpense-routing.module';

import { ViewexpensePage } from './viewexpense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewexpensePageRoutingModule
  ],
  declarations: [ViewexpensePage]
})
export class ViewexpensePageModule {}
