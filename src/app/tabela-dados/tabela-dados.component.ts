import { Films, FilmsResult } from './../entities/films/films.model';
import { FilmsService } from './../entities/films/films.service';
import { People, PeopleResult } from './../entities/people/people.model';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../entities/people/people.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalListComponent } from '../modal-list/modal-list.component';

@Component({
  selector: 'app-tabela-dados',
  templateUrl: './tabela-dados.component.html',
  styleUrls: ['./tabela-dados.component.css']
})
export class TabelaDadosComponent implements OnInit{
  listOfPeople: People[] = [];
  headElementsPeople: string[] = [
    // 'photo',
    'name',
    'films',
  ];
  charactersUrl: string = '.././assets/characters/'; 
  displayTable: any = {
    people: '',
    films: 'none',
  };
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

  constructor(private peopleService: PeopleService, private modalService: NgbModal) { 
    
  }

  ngOnInit(): void {
    this.showAllPeople()
  }

  showAllPeople() {
    this.peopleService.getAllPeople().subscribe(
      (listOfpeople: PeopleResult) => {
        this.listOfPeople = listOfpeople.results
      } );
  }

  openModal(name: string, data: string[]) {
    const modalRef = this.modalService.open(ModalListComponent, {backdrop: false, centered: true});
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.films = data;
  }

}
