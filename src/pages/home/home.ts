import { Component } from '@angular/core';
import {  NavController, IonicPage } from 'ionic-angular';
import { IonicPageModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login() {
   // this.auth.authenticate(this.creds)
     // .subscribe(response => {
       // this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
      }
     // error => {});    
  }

//}
