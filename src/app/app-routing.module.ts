import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import { EmploisComponent } from './emplois/emplois.component';
import { EmploiComponent } from './emplois/emploi/emploi.component';
import {SavoirFaireComponent} from './emplois/savoir-faire/savoir-faire.component';
import {SavoirEtreComponent} from './emplois/savoir-etre/savoir-etre.component';
import {SavoirComponent} from './emplois/savoir/savoir.component';
import {MoyensComponent} from './emplois/moyens/moyens.component' ;
import{FicheProfilComponent} from './fiche-profil/fiche-profil.component';
import{EvaluationComponent} from './evaluation/evaluation.component';
import{FicheEntrepriseComponent} from './fiche-entreprise/fiche-entreprise.component';
import {MatricePotentielComponent} from './matrice-potentiel/matrice-potentiel.component';
import {MatriceDepartComponent} from './matrice-depart/matrice-depart.component';
import {ProfilListComponent} from './fiche-profil/profil-list/profil-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FicheEvalComponent } from './evaluation/fiche-eval/fiche-eval.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children : [
      {
        path: 'employes' ,
        component: EmployeesComponent,
      } ,
      
      {
        path : 'emplois' ,
        component : EmploisComponent,
      } ,
      {
        path: 'emploi' ,
        component: EmploiComponent
      },
      {
        path: 'savoirFaire',
        component: SavoirFaireComponent,
      },
      {
        path: 'savoirEtre',
        component: SavoirEtreComponent,
      },
      {
        path: 'savoir',
        component: SavoirComponent,
      },
      {
        path: 'moyens',
        component: MoyensComponent ,
      },
     { 
       path: 'evaluation',
      component: EvaluationComponent,},
      {
        path: 'profil',
       component: FicheProfilComponent,
      },
      {
        path : 'ficheEntreprise',
        component: FicheEntrepriseComponent ,
      },
      {
        path: 'matricePotentiel',
        component: MatricePotentielComponent,
      },
      {
        path: 'matriceDepart',
        component: MatriceDepartComponent,
      },
      {
        path : 'listeProfil',
        component: ProfilListComponent,
      },
      {
        path: 'ficheEval/:cin',
        component: FicheEvalComponent
      }
    ]
  },
  {
    path:'login',
    component: LoginComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
