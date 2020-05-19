import {Kleur} from "./kleur.model";
import {Motorblok} from "./motorblok.model";

export class Auto {
  constructor (public merk: String
               , public type: String
               , public bouwjaar: number
               , public afbeelding: String
               , public motorblok?: Motorblok
               , public koppeling?: String // later ook objecttype
               , public remmen?: String // later ook objecttype, in array
               , public kleur?: Kleur
               , public datumAanschaf?: Date
               , public verhaal?: String){
  }
}
