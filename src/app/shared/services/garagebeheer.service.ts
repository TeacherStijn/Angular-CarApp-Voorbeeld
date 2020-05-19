import { Injectable } from '@angular/core';
import {Auto} from "../models/auto.model";
import {Subject} from "rxjs";
import {LoggerService} from "./logger.service";
import {Motorblok} from "../models/motorblok.model";
import {Kleur} from "../models/kleur.model";

@Injectable({
  providedIn: 'root'
})
export class GaragebeheerService {

  mijnAutos: Auto[];
  autoBus$: Subject<Auto>;

  constructor(private logger: LoggerService) {
    this.mijnAutos = [
      new Auto('BMW', '2002 Turbo', 1987, 'bmw_2002_turbo.jpg'),
      new Auto('Toyota', 'Celica ST', 1978, 'toyota_celica_st.jpg'),
      new Auto('Nissan', '240sx', 1988, 'nissan_240sx.jpg'),
      new Auto('Porsche', '959', 1989, 'porsche_959.jpg'),
      new Auto('Audi', 'Quattro', 1985, 'audi_quattro.jpg')
    ];

    this.autoBus$ = new Subject<Auto>();
  }

  addAuto(merk: String, type: String, bouwjaar: number, url: String, motorblok: Motorblok, koppeling: String, remmen: String, kleur: Kleur, aanschaf: Date, historie: String ) {
    let nieuweAuto = new Auto(merk, type, bouwjaar, url, motorblok, koppeling, remmen, kleur, aanschaf, historie);
    nieuweAuto.datumAanschaf = new Date();
    this.mijnAutos.push(nieuweAuto);
    this.autoBus$.next(nieuweAuto);
    this.logger.log(1, "Auto toegevoegd aan collectie", nieuweAuto);
  }

  dropAuto(current: Auto){
    this.mijnAutos = this.mijnAutos.filter(e=>e!=current);
  }

  getAuto(merk: String, type: String): Auto {
    return this.mijnAutos.find(
      e=> merk==e.merk && type==e.type
    );
  }

  getAutos() {
    return this.mijnAutos;
  }
}
