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
    'password'
  ];

  nomeUsuario ='';
  emailUsuario ='';
  senhaUsuario = '';
  usuario: User = {
    id: 1,
    name: '',
    email: '',
    password: ''
  };

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
      id: 1,
      name: this.nomeUsuario,
      email: this.emailUsuario,
      password: this.senhaUsuario
    }
    alert(this.nomeUsuario + ' ' + this.emailUsuario + ' ' + this.senhaUsuario)
    // this.userService.updateUser(usuario).subscribe
    // (
    //   resposta => {
    //     alert("Usuario Salvo!")
    //   }, errors => {
    //     console.log('deu ruim: '+ errors);
    //   }
    // );
  }

  limpar():void{
    this.nomeUsuario ='';
    this.emailUsuario ='';
    this.senhaUsuario ='';
  }
}
