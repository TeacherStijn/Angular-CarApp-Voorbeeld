import { Injectable } from '@angular/core';
import {Auto} from "../models/auto.model";
import {Tuning} from "../models/tuning.model";

@Injectable ()
export class AutobeheerService {

    // wordt straks data uit Firebase!
    mijnTuning: Tuning;

    constructor() {
      // connectie met de FirebaseDB + authenticatie
    }

    addMotorblok(){

    }

    removeMotorblok(){

    }

    addTurbo() {

    }

    removeTurbo() {

    }

    wijzigBoring (){

    }

    addChiptune(){

    }

    removeChiptune(){

    }

    saveTuning(){
      // mijnTuning uitwerken over stats v/d auto en het motorblok...
      // bij genoeg inkomen?
    }
}
