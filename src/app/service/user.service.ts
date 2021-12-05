import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsersModule} from "../component/users/users.module";


const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(API_URL + '/list')
  }

  delete(id: any): Observable<any> {
    return this.http.get<any>(API_URL + '/delete/' +id);
  }

  create(data: any): Observable<any> {
    return this.http.post(API_URL + '/create',data);
  }

  findById(id: number): Observable<any> {
    return this.http.get<any>(`${API_URL}/update/${id}`);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.post<any>(`${API_URL}/update/${id}`, user);
  }
}
