import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CompanyDto} from './company.dto';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) {
  }

  getCompanies(): Observable<CompanyDto[]> {
    return this.httpClient.get<CompanyDto[]>('http://localhost:3000/companies/top-ten')
  }
}
