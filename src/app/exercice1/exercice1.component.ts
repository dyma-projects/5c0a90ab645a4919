import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  divContent: string;
  imageUrl: string;

  constructor() { }

  ngOnInit() {
    this.divContent = 'Contenu du div';
    this.imageUrl = 'https://angular.dyma.fr/assets/images/angular/angular-header-logo.png';
  }

  onClick(){
    alert('coucou');
  }

}
