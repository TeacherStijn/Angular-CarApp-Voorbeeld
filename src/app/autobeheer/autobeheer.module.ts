import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoimagesComponent } from './autoimages/autoimages.component';
import { AutostatsComponent } from './autostats/autostats.component';
import { AutooverzichtComponent } from './autooverzicht/autooverzicht.component';



@NgModule({
  declarations: [AutoimagesComponent, AutostatsComponent, AutooverzichtComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AutooverzichtComponent
  ]
})
export class AutobeheerModule { }
