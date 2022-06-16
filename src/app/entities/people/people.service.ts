import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeopleResult } from './people.model';

@Injectable({
    providedIn: 'root'
})
export class PeopleService {
    constructor(private http: HttpClient) { }

    peopleUrl = 'https://swapi.dev/api/people/?format=json';

    getAllPeople(){
    return this.http.get<PeopleResult>(this.peopleUrl);
    }

}