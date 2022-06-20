import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Films, FilmsResult } from './films.model';

@Injectable({
    providedIn: 'root'
})
export class FilmsService {
    constructor(private http: HttpClient) { }

    filmsUrl = 'https://swapi.dev/api/films/';
    formatJSON = '?format=json';

    getAllFilms(){
    return this.http.get<FilmsResult>(this.filmsUrl + this.formatJSON);
    }

    getFilmById(url: string){
    return this.http.get<Films>(url + this.formatJSON);
    }

}