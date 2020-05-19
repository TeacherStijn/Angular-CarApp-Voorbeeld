import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaragetoolsComponent } from './garagetools/garagetools.component';
import { GarageautosComponent } from './garageautos/garageautos.component';
import { GarageoverzichtComponent } from './garageoverzicht/garageoverzicht.component';
import {AppRoutingModule} from "../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [GaragetoolsComponent, GarageautosComponent, GarageoverzichtComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [GarageoverzichtComponent]
})
export class GaragebeheerModule { }
