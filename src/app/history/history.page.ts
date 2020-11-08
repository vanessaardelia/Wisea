import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/service/history.service';
import History from '../model/history';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  // emplyee object - type: Employee
  employee: History = new History();

  // array of emplyee - type: Employee
  employees: History[];
  constructor(private historyService: HistoryService) {
  }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    // we call getEmployees() from EmployeeService to get list of employees
    this.historyService.getAll().subscribe(data => {
      // this.employees stores list of employee
      this.employees = data.map(e => {
        return {
          nama: e.payload.doc['nama'],
          ...e.payload.doc.data()
        } as History;
      });
    });
  }

}
