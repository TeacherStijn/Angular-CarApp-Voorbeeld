import { Component, OnInit } from '@angular/core';
import {GaragebeheerService} from "../../shared/services/garagebeheer.service";
import {Auto} from "../../shared/models/auto.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Motorblok} from "../../shared/models/motorblok.model";
import {Cilinder} from "../../shared/models/cilinder.model";

@Component({
  selector: 'app-garagetools',
  templateUrl: './garagetools.component.html',
  styleUrls: ['./garagetools.component.css']
})
export class GaragetoolsComponent implements OnInit {

  aanschafDatumEnable: boolean = false;
  currentTijd: Date = new Date();
  addAutoForm: FormGroup;

  constructor(private garageService: GaragebeheerService, private builder: FormBuilder) {
// mag ook met FormGroup:  constructor(private garageService: GaragebeheerService, private addAutoForm: FormGroup) {
  }

  ngOnInit(): void {
    this.addAutoForm = this.builder.group(
      {
        txtMerk: [],
        txtType: [],
        txtJaar: [],
        txtAfbeelding: [],
        cmbMotorblok: [],
        cmbKoppeling: [],
        txtRemmen: [],
        txtKleur: [],
        txtAanschaf: [],
        txtHistorie: []
      }
    );

    /* Manier met FormGroup:
    this.addAutoForm = new FormGroup(
      { txtMerk: new FormControl('') }
    )*/
  }

  addAuto(): void {
    let invoer = this.addAutoForm.getRawValue();

    if (invoer.cmbMotorblok == null || invoer.cmbMotorblok == '') {
      invoer.cmbMotorblok = new Motorblok([new Cilinder(75)], 50);
    }
    if (invoer.cmbKoppeling == null || invoer.cmbKoppeling == '') {
      invoer.cmbKoppeling = "Standaard clutch";
    }

    this.garageService.addAuto(
      invoer.txtMerk,
      invoer.txtType,
      invoer.txtJaar,
      invoer.txtAfbeelding,
      invoer.cmbMotorblok,
      invoer.cmbKoppeling,
      invoer.txtRemmen,
      invoer.txtKleur,
      invoer.txtAanschaf,
      invoer.txtHistorie
      );
  }
}
