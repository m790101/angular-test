import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeServiceService extends BaseService {
load():Observable<Customer[]>{
return of([])
}
  constructor(http:HttpClient) {
    super(http);
  }

}


export class Customer {
  id!: string;
  name!: string;
}
