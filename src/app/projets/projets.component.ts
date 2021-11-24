import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkingService } from 'src/service/networking.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  adminData: any;
  projetList: any[] = [];

  object: any = {
    "nom_thematique": "",
    "edition": {
      "nom_edition": ""
    }
  }

  constructor(private networkingService: NetworkingService, private router: Router) {
    this.adminData = this.networkingService.getData("CURRENT_ADMIN");
  }

  ngOnInit(): void {
    this.networkingService.get("projets/" + this.adminData.alias_concours + "/" + this.adminData.nom_edition).subscribe((data: any) => {
      this.projetList = data;
      console.log("DATA : " + JSON.stringify(data));
    });
  }

}
