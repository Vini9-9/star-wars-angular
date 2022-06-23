import { UserService } from './../entities/users/users.service';
import { Films, FilmsResult } from './../entities/films/films.model';
import { FilmsService } from './../entities/films/films.service';
import { People, PeopleResult } from './../entities/people/people.model';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../entities/people/people.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalListComponent } from '../modal-list/modal-list.component';
import { User } from '../entities/users/users.model';

@Component({
  selector: 'app-tabela-dados',
  templateUrl: './tabela-dados.component.html',
  styleUrls: ['./tabela-dados.component.css']
})
export class TabelaDadosComponent implements OnInit{
  listOfData: User[] = [];
  headElements: string[] = [
    'id',
    'name',
    'email',
  ];

  constructor(private userService: UserService, private modalService: NgbModal) { 
    
  }

  ngOnInit(): void {
    this.showAllUsers()
  }

  showAllUsers() {
    this.userService.getAllUsers().subscribe(
      (listOfUsers: User[]) => {
        console.log('listOfUsers:', listOfUsers)
        this.listOfData = listOfUsers
      } );
  }

  openModal(name: string, data: string[]) {
    const modalRef = this.modalService.open(ModalListComponent, {backdrop: false, centered: true});
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.films = data;
  }

}
