import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   MzSidenavModule,
   MzInputModule,
   MzDatepickerModule,
   MzButtonModule,   } from 'ngx-materialize';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MzSidenavModule,
    MzInputModule,
    MzDatepickerModule,
    MzButtonModule,
  ],
  exports: [
    MzSidenavModule,
    MzInputModule,
    MzDatepickerModule,
    MzButtonModule,
  ]
})
export class AppMaterializeModule { }
