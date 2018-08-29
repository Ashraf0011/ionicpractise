import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { SecondPage } from "../second/second";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 // these variables are available to entire function
  employees: any;
  username: any = "Type User name"; //data binding

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

    this.employees = [
      {picture: 'http://placehold.it/75', name: 'Ash', title: 'the Student'},
      {picture: 'http://placehold.it/76', name: 'Ashy', title: 'the Student'},
      {picture: 'http://placehold.it/77', name: 'Ashly', title: 'the Student'},
      {picture: 'http://placehold.it/78', name: 'Ashtyu', title: 'the Student'}
    ];
  }

  handleClick(employee){
    console.log("button working ");
    console.log(employee);
  }

  //data binding
  submitUsername(username){
    console.log(username);
    console.log(this.username);
  }

  //for data sharing
  launchSecondPage() {
    let data = { title: "Persona", name: "Ashraf", phone: ['0406', '2613', '3206']};

    this.navCtrl.push(SecondPage,data);

  }



}
