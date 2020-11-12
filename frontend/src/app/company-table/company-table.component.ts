import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.css']
})
export class CompanyTableComponent implements OnInit {
  companies = [{name: "Andres", currency: "USD", exchange:"NASDAQ"}]
  displayedColumns: string[] = ['name', 'currency', 'exchange'];


  constructor() { }

  ngOnInit(): void {
  }

}
