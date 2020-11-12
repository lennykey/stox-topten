import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }


  getCompanies(): Observable<any>{
    return this.httpClient.get<any>('http://localhost:3000/companies/top-ten')
    // return [{name: "Apple", currency: "USD", exchange: "NASDAQ"}]
  }
}
