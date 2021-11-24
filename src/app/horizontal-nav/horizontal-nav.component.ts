import { Component, OnInit } from '@angular/core';
import { NetworkingService } from 'src/service/networking.service';

@Component({
  selector: 'app-horizontal-nav',
  templateUrl: './horizontal-nav.component.html',
  styleUrls: ['./horizontal-nav.component.css']
})
export class HorizontalNavComponent implements OnInit {

  adminData: any = {};

  constructor(private networkingService: NetworkingService) {
    this.adminData = this.networkingService.getData("CURRENT_ADMIN");
  }

  ngOnInit(): void {
  }

}
