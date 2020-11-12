import {Component, OnInit} from '@angular/core';
import {CompanyService} from "./company.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.css']
})
export class CompanyTableComponent implements OnInit {
  companies: Observable<any> = new Observable<any>()
  displayedColumns: string[] = ['name', 'currency', 'exchange'];


  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companies = this.companyService.getCompanies()
  }

}
