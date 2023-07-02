import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export abstract class BaseService {

  constructor(private http:HttpClient) { }

  protected get<T>(url: string) {
    this.http.get<any>(url).subscribe(data => {
      return  data;
    });
  }


  // protected get<T>(url: string): Observable<T> {
  //   return this.http.get<any>(this.url).subscribe(data => {
  //     this.data = data;
  //   });
}



