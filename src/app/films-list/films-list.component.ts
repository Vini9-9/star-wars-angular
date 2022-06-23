import { Component, Input, OnInit } from '@angular/core';
import { Films, FilmsResult } from '../entities/films/films.model';
import { FilmsService } from '../entities/films/films.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  @Input() films: string | undefined;
  listFilms: string[] | undefined;
  // ---------------------
  listOfFilms: Films[] = [];
  listOfTitles: string[] = [];

  constructor(private filmsService: FilmsService) { }
  
  ngOnInit(): void {
    if(this.films != undefined){
      this.listFilms = this.films.split(',');
      this.getAllFilms()
    }
  }

  getAllFilms() {
    this.filmsService.getAllFilms().subscribe(
      (listOfFilms: FilmsResult) => {
        this.listOfFilms = listOfFilms.results.filter((el) => {
          return this.listFilms?.includes(el.url)
        })
        this.listOfTitles = this.listOfFilms.map((el) => el.title)
      } );
  }

}
