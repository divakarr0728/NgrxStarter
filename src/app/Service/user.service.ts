import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customers } from '../Model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl = 'http://localhost:3000/userData';
  constructor(private http: HttpClient) {

  }

  GetAll() {
    return this.http.get<Customers[]>(this.baseurl);
  }

  Getbycode(code: number) {
    return this.http.get<Customers>(this.baseurl + '/' + code);
  }
  Delete(code: number) {
    return this.http.delete(this.baseurl + '/' + code);
  }
  Update(data: Customers) {
    return this.http.put(this.baseurl + '/' + data.id, data);
  }
  Create(data: Customers) {
    return this.http.post(this.baseurl, data);
  }
}
