import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi='https://fakestoreapi.com/products';
  constructor(private http:HttpClient) { }


  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
}
