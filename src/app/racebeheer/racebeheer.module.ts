import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceagendaComponent } from './raceagenda/raceagenda.component';
import { RaceresultatenComponent } from './raceresultaten/raceresultaten.component';
import { RaceoverzichtComponent } from './raceoverzicht/raceoverzicht.component';



@NgModule({
  declarations: [RaceagendaComponent, RaceresultatenComponent, RaceoverzichtComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RaceoverzichtComponent
  ]
})
export class RacebeheerModule { }
