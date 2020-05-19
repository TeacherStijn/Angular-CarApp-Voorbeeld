import { Component, OnInit } from '@angular/core';
import {Auto} from "../../shared/models/auto.model";
import {GaragebeheerService} from "../../shared/services/garagebeheer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-garageautos',
  templateUrl: './garageautos.component.html',
  styleUrls: ['./garageautos.component.css']
})
export class GarageautosComponent implements OnInit {

  constructor(private garageService: GaragebeheerService) {

  }

  ngOnInit(): void {

  }

  details(current: Auto){

  }

  tuneAuto(current: Auto){

  }

  dropAuto(current: Auto): void {
    this.garageService.dropAuto(current);
  }

  getAutos(): Auto[] {
    return this.garageService.getAutos();
  }
}
