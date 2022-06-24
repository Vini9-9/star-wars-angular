import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './users.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  userUrl = 'http://localhost:8080/api/user/';
  tokenAdmin = '';

  public getAllUsers(){
  return this.http.get<any>(this.userUrl);
  }

  public saveUser(usuario: User): Observable<any> {
      console.log(usuario);
      const body = JSON.stringify(usuario);
  
      return this.http.request('POST', this.userUrl, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        body: body
      })
    }
  
  public updateUser(usuario: User): Observable<any> {
    const body = JSON.stringify(usuario);

    return this.http.request('PUT', this.userUrl , {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: body
    })
  }

  public deleteUser(id: number): Observable<any> {
    const body = JSON.stringify({id: id});

    return this.http.request('DELETE', this.userUrl + 'admin', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: body
    })
  }


}