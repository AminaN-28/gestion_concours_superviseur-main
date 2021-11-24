import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkingService } from 'src/service/networking.service';

@Component({
  selector: 'app-editions',
  templateUrl: './editions.component.html',
  styleUrls: ['./editions.component.css']
})
export class EditionsComponent implements OnInit {

  editionsList: any[] = [];
  searchEdition = "";
  admin: any;

  object: any = {
    "nom_edition": "",
    "date_debut": "",
    "date_fin": "",
    "date_fin_vote": "",
    "concours": {
      "nom_concours": "",
      "alias_concours": ""
    }
  };

  constructor(private networkingService: NetworkingService, private router: Router) {

  }

  ngOnInit(): void {
    this.admin = this.networkingService.getData("CURRENT_ADMIN");
    console.log("REQUEST : " + "editions/" + this.admin.alias_concours);
    this.networkingService.get("editions/" + this.admin.alias_concours).subscribe((data: any) => {
      this.editionsList = data;
      console.log("DATA : " + JSON.stringify(data));
    });
  }

  gotoEditionMoreInfo(oneEdition: any) {
    console.log("ALIAS : " + oneEdition);
    this.networkingService.saveData("EDITION_TO_MORE_INFOS", oneEdition);

    this.router.navigate(["/editions"]);
  }

}
