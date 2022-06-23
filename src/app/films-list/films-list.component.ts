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
  titleFilm: string = '';
  listFilms: string[] | undefined;
  titlesFilms: string[] = [];
  // ---------------------
  listOfFilms: Films[] = [];
  listOfTitles: string[] = [];

  constructor(private filmsService: FilmsService) { }
  
  ngOnInit(): void {
    if(this.films != undefined){
      this.listFilms = this.films.split(',');
      this.getAllFilms()
      // this.getTitlesByUrl(this.listFilms)
    }
  }

  async getTitlesByUrl(listFilms: string[]){
    console.time("api");
    listFilms.forEach(urlFilm => {
      this.filmsService.getFilmById(urlFilm).subscribe(
        (film: Films) => {
          this.titlesFilms.push(film.title);
        } );
      });
        console.timeEnd("api");
  }

  getAllFilms() {
    console.time("filter");
    this.filmsService.getAllFilms().subscribe(
      (listOfFilms: FilmsResult) => {
        this.listOfFilms = listOfFilms.results.filter((el) => {
          return this.listFilms?.includes(el.url)
        })
        this.listOfTitles = this.listOfFilms.map((el) => el.title)
      } );
        console.timeEnd("filter");
  }

}
