import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  adminData: any = {};

  constructor() {
    console.log("DATA" + this.adminData);
  }

  ngOnInit(): void {
    this.adminData = localStorage.getItem("CURRENT_ADMIN");
    console.log("DATA" + this.adminData);
  }

}
