import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkingService } from 'src/service/networking.service';

@Component({
  selector: 'app-concours',
  templateUrl: './concours.component.html',
  styleUrls: ['./concours.component.css']
})
export class ConcoursComponent implements OnInit {

  concoursObject: any = {
    "nom_concours": "",
    "alias_concours": ""
  };

  concoursList: any[] = [];
  searchConcours = "";

  constructor(private networkingService: NetworkingService, private router: Router) { }

  ngOnInit(): void {
    console.log("DATA : ");
    this.networkingService.get("concours").subscribe((data: any) => {
      this.concoursList = data;
      console.log("DATA : " + JSON.stringify(data));
    });
  }

  saveConcours() {
    console.log("OBJECT " + JSON.stringify(this.concoursObject));
    this.networkingService.add("concours/add", JSON.stringify(this.concoursObject)).subscribe((data: any) => {
      this.router.navigate(["/concours"]);
      console.log("DATA : " + JSON.stringify(data));
    });
  }

  gotoEditionList(concours: string) {
    console.log("ALIAS : " + concours);
    this.networkingService.saveData("CONCOURS_TO_EDITION", concours);

    this.router.navigate(["/editions"]);
  }

}
