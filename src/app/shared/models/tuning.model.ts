import {Motorblok} from "./motorblok.model";

export class Tuning {
  // zeg even +10% vermogen motorblok bij true op chiptune;

  constructor (public motorblok: Motorblok
              , public versnellingsbak: String
              , public turbo: String
              , public chiptune: boolean){

  }
}
