import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkingService } from 'src/service/networking.service';

@Component({
  selector: 'app-thematique',
  templateUrl: './thematique.component.html',
  styleUrls: ['./thematique.component.css']
})
export class ThematiqueComponent implements OnInit {

  adminData: any;
  thematiqueList: any[] = [];

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
    this.networkingService.get("thematiques/" + this.adminData.alias_concours + "/" + this.adminData.nom_edition).subscribe((data: any) => {
      this.thematiqueList = data;
      console.log("DATA : " + JSON.stringify(data));
    });
  }

  addThematique() {
    this.object.edition.nom_edition = this.adminData.nom_edition;
    this.networkingService.add("thematiques/add/" + this.adminData.alias_concours, JSON.stringify(this.object)).subscribe((data: any) => {
      // REDIRECT
      console.log("DATA : " + JSON.stringify(data));
    });
  }

}
