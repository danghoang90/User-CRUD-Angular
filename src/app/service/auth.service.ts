import { Injectable } from '@angular/core';
import {UsersModule} from "../component/users/users.module";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  checkLogin(data: any): Observable<any> {
    // if (data.email === "admin@gmail.com" && data.password === '123456') {
    //   let user = {
    //     email: data.email,
    //     password: data.password,
    //     name: "Hoang",
    //     address: "HN"
    //   }
    //   localStorage.setItem('userLogin', JSON.stringify(data));
      return this.http.post<any>(API_URL + '/login',data);
    }

}
