import { User } from './../entities/users/users.model';
import { UserService } from './../entities/users/users.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  idUsuario = 0;
  nomeUsuario ='';
  emailUsuario ='';
  usuario: User = {
    id: 0,
    name: '',
    email: '',
  };

  options: string[] = ['Create', 'Update', 'Delete'];
  optionSelected: string | undefined;

  constructor(private userService: UserService) { 
    
  }

  ngOnInit(): void {
    this.showAllUsers()
  }

  showAllUsers() {
    this.userService.getAllUsers().subscribe(
      (listOfUsers: User[]) => {
        this.listOfData = listOfUsers
      } );
  }

  atualizar():void{
    const usuario:User = {
      id: this.idUsuario,
      name: this.nomeUsuario,
      email: this.emailUsuario,
    }
    this.userService.updateUser(usuario).subscribe
    (
      resposta => {
        alert("Usuario Salvo!")
      }, errors => {
        console.log('deu ruim:');
        console.log(errors);
      }
    );
  }

  limpar():void{
    this.idUsuario = 0;
    this.nomeUsuario ='';
    this.emailUsuario ='';
  }

}
