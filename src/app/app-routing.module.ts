import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RacebeheerModule} from "./racebeheer/racebeheer.module";
import {GaragebeheerModule} from "./garagebeheer/garagebeheer.module";
import {AutobeheerModule} from "./autobeheer/autobeheer.module";
import {GarageoverzichtComponent} from "./garagebeheer/garageoverzicht/garageoverzicht.component";
import {AutooverzichtComponent} from "./autobeheer/autooverzicht/autooverzicht.component";
import {RaceoverzichtComponent} from "./racebeheer/raceoverzicht/raceoverzicht.component";
import {CommunityoverzichtComponent} from "./communityshared/communityoverzicht/communityoverzicht.component";


const routes: Routes = [
  { path: '', component: GarageoverzichtComponent },
  { path: 'garage', component: GarageoverzichtComponent},
  { path: 'autos', component: AutooverzichtComponent},
  { path: 'race', component: RaceoverzichtComponent},
  { path: 'community', component: CommunityoverzichtComponent},
  { path: '**', redirectTo: 'garage'}
];

@NgModule({
  imports: [RacebeheerModule
           , GaragebeheerModule
           , AutobeheerModule
           , RouterModule.forRoot(routes)
           ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
