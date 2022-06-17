import { People, PeopleResult } from './../entities/people/people.model';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../entities/people/people.service';
// import { readFile } from 'fs';

@Component({
  selector: 'app-tabela-dados',
  templateUrl: './tabela-dados.component.html',
  styleUrls: ['./tabela-dados.component.css']
})
export class TabelaDadosComponent {
  listOfpeople: People[] = [];
  headElements: string[] = [
    'photo',
    'name',
    'films',
  ];
  charactersUrl: string = '.././assets/characters/'; 
  // headElements: string[] = [
  //   'name',
  //   'height',
  //   'mass',
  //   'hair color',
  //   'skin color',
  //   'eye color',
  //   'birth year',
  //   'gender',
  //   'homeworld',
  //   'films',
  //   'species',
  //   'vehicles',
  //   'starships'
  // ];

  constructor(private peopleService: PeopleService) { 
    this.showAllPeople()
  }

  showAllPeople() {
    this.peopleService.getAllPeople().subscribe(
      (listOfpeople: PeopleResult) => {
        // this.headElements = Object.keys(listOfpeople.results[0])
        this.listOfpeople = listOfpeople.results
      } );
  }

}
