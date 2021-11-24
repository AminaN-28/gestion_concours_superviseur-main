import { Component, OnInit } from '@angular/core';
import { NetworkingService } from 'src/service/networking.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminAccess: any = {
    "login": "",
    "password": ""
  };

  constructor(private networkingService: NetworkingService) { }

  ngOnInit(): void {
  }

  connection() {
    this.networkingService.add("admins/login", this.adminAccess).subscribe((data: any) => {
      this.networkingService.adminData = JSON.stringify(data[0]);
      console.log("DATA : " + JSON.stringify(data[0]));
      localStorage.setItem("CURRENT_ADMIN", JSON.stringify(data[0]));
    });
  }

}
