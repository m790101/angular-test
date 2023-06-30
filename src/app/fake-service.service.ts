import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeServiceService {
load():Observable<Customer[]>{
return of([])
}
  constructor() { }

}


export class Customer {
  id!: string;
  name!: string;
}
