import {Component, OnInit} from '@angular/core';
import {CompanyService} from './company.service';
import {Observable} from 'rxjs';
import {CompanyDto} from './company.dto';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.css']
})
export class CompanyTableComponent implements OnInit {
  companies: Observable<CompanyDto[]> = new Observable<CompanyDto[]>();
  displayedColumns: string[] = ['name', 'currency', 'exchange'];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.companies = this.companyService.getCompanies();
  }

}
