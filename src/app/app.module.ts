import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from "./material/material.module";
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {SplitButtonModule} from 'primeng/splitbutton';
import {HttpClientModule} from '@angular/common/http';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {PanelModule} from 'primeng/panel';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { DataTableModule } from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeService} from './shared/employee.service';
import { BrowserAnimationsModule} from'@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmploisComponent } from './emplois/emplois.component';
import { MatStepperModule, MatIconModule } from '@angular/material';
import { EmploiComponent } from './emplois/emploi/emploi.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SavoirFaireComponent } from './emplois/savoir-faire/savoir-faire.component';
import { SavoirEtreComponent } from './emplois/savoir-etre/savoir-etre.component';
import { SavoirComponent } from './emplois/savoir/savoir.component';
import { ListeEmploiComponent } from './emplois/liste-emploi/liste-emploi.component';
import { InformationEmploiComponent } from './emplois/emploi/information-emploi/information-emploi.component';
import { SavoirFaireEmploiComponent } from './emplois/emploi/savoir-faire-emploi/savoir-faire-emploi.component';
import { SavoirEtreEmploiComponent } from './emplois/emploi/savoir-etre-emploi/savoir-etre-emploi.component';
import { SavoirEmploiComponent } from './emplois/emploi/savoir-emploi/savoir-emploi.component';
import { MoyensEmploiComponent } from './emplois/emploi/moyens-emploi/moyens-emploi.component';
import { MoyensComponent } from './emplois/moyens/moyens.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { FicheProfilComponent } from './fiche-profil/fiche-profil.component';
import { DatePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FicheEntrepriseComponent } from './fiche-entreprise/fiche-entreprise.component';
import { MatricePotentielComponent } from './matrice-potentiel/matrice-potentiel.component';
import { MatriceDepartComponent } from './matrice-depart/matrice-depart.component';
import { ProfilListComponent } from './fiche-profil/profil-list/profil-list.component';
import {DropdownModule} from 'primeng/dropdown';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FicheEvalComponent } from './evaluation/fiche-eval/fiche-eval.component';
import { SavoiretreComponent } from './evaluation/fiche-eval/savoiretre/savoiretre.component';
import { InfoComponent } from './evaluation/fiche-eval/info/info.component';
import { SavoirFaireEvaluationComponent } from './evaluation/fiche-eval/savoir-faire-evaluation/savoir-faire-evaluation.component';
import { SavoirEvaluationComponent } from './evaluation/fiche-eval/savoir-evaluation/savoir-evaluation.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    SidebarComponent,
    EmploisComponent,
    EmploiComponent,
    SavoirFaireComponent,
    SavoirEtreComponent,
    SavoirComponent,
    ListeEmploiComponent,
    InformationEmploiComponent,
    SavoirFaireEmploiComponent,
    SavoirEtreEmploiComponent,
    SavoirEmploiComponent,
    MoyensEmploiComponent,
    MoyensComponent,
    EvaluationComponent,
    FicheProfilComponent,
    FicheEntrepriseComponent,
    MatricePotentielComponent,
    MatriceDepartComponent,
    ProfilListComponent,
    LoginComponent,
    HomeComponent,
    FicheEvalComponent,
    SavoiretreComponent,
    InfoComponent,
    SavoirFaireEvaluationComponent,
    SavoirEvaluationComponent
    
    
  
    
    
    
    
    
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SmartTableModule,
    PanelMenuModule,
    TieredMenuModule,
    SplitButtonModule,
    HttpClientModule,
    TableModule,
    ScrollPanelModule,
    PanelModule,
    MatExpansionModule,
    MatTableModule,
    PaginatorModule,
    DropdownModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  providers: [EmployeeService, DatePipe],
  bootstrap: [AppComponent],
  entryComponents:[EmployeeComponent]
})
export class AppModule { }
