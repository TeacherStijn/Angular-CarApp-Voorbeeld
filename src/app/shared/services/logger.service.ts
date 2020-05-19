import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  melding: String;
  level: LogLevel;
  tijdstip: Date;
  // constructoraanroep van specifieke Logger op basis van doel
  // (naar HTTP / console.log / LocalStorage)

  constructor() {
  }

  log(level: LogLevel, text: String, obj?: Object): void {
    this.tijdstip = new Date();
    console.group(`**** ${ level } melding om: ${this.tijdstip} ****`);
    console.log(`Melding opgetreden om ${this.tijdstip}`);
    console.log(text);
    if (obj) {
      console.log("Meegegeven object:");
      console.dir(obj);
    }
    console.groupEnd();
  }
}

enum LogLevel {
  Notie = 0,
  Waarschuwing = 1,
  Struikelblok = 2,
  Fout = 3
}
