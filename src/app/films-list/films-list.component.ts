import { Component, Input, OnInit } from '@angular/core';
import { Films } from '../entities/films/films.model';
import { FilmsService } from '../entities/films/films.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  @Input() films: string | undefined;
  titleFilm: string = '';
  listFilms: string[] | undefined;
  titlesFilms: string[] = [];

  constructor(private filmsService: FilmsService) { }
  
  ngOnInit(): void {
    if(this.films != undefined){
      this.listFilms = this.films.split(',');
      this.getAllTitles(this.listFilms)
    }
  }

  async getAllTitles(listFilms: string[]){
    listFilms.forEach(urlFilm => {
      this.filmsService.getFilmById(urlFilm).subscribe(
        (film: Films) => {
          this.titlesFilms.push(film.title);
        } );
    });
  }

}
