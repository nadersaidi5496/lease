import { Injectable } from '@angular/core';
import { FormGroup, FormControl,Validators } from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Ressource} from '../model/ressource' ;
@Injectable({
  providedIn: 'root'
}) 
export class RessourceService {
  form: FormGroup = new FormGroup({
    idRessource: new FormControl(null),
    libelle: new FormControl('',Validators.required),
    emplois : new FormControl('',Validators.required),
  });

  apiUrl = 'http://localhost:8090/RessourceApi/';

  constructor(private httpClient: HttpClient) { }

  initializeFormGroup(){
    this.form.reset();
  }; 

  public getRessources() : Observable<Ressource[]>{
    return this.httpClient.get<Ressource[]>(this.apiUrl+'/Ressources');
  }

  public addRessource (ressource : Ressource) {
    return this.httpClient.post(this.apiUrl+ '/Ressource/', ressource);
  }

  public deleteRessource (idRessource : number){
    return this.httpClient.delete(this.apiUrl+'/Moyens/'+ idRessource);
  }

  public updateRessource(idRessource : number, ressource : Ressource){
    return this.httpClient.put(this.apiUrl+'/Ressource/'+ idRessource ,ressource);
  }
}
