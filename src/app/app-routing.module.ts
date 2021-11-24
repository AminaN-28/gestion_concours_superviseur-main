import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcoursComponent } from './concours/concours.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditionsComponent } from './editions/editions.component';
import { LoginComponent } from './login/login.component';
import { ProjetsComponent } from './projets/projets.component';
import { ThematiqueComponent } from './thematique/thematique.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: DashboardComponent },
  { path: "concours", component: ConcoursComponent },
  { path: "editions", component: EditionsComponent },
  { path: "thematique", component: ThematiqueComponent },
  { path: "projet", component: ProjetsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
