import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityoverzichtComponent } from './communityoverzicht/communityoverzicht.component';
import { CommunityexportsComponent } from './communityexports/communityexports.component';
import { CommunitystatsComponent } from './communitystats/communitystats.component';



@NgModule({
  declarations: [CommunityoverzichtComponent, CommunityexportsComponent, CommunitystatsComponent],
  imports: [
    CommonModule
  ]
})
export class CommunitysharedModule { }
