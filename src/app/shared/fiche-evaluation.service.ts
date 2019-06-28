import { Injectable } from '@angular/core';
import { FormGroup, FormControl,Validators } from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import{FicheEvaluation} from '../model/fiche-evaluation';
@Injectable({
  providedIn: 'root'
})
export class FicheEvaluationService {
 form: FormGroup = new FormGroup({
  dateEvaluation: new FormControl (''),
  commentaireEvalue: new FormControl ('',Validators.required),
  commentaireEvaluateur: new FormControl ('',Validators.required),
  syntheseEvaluateur: new FormControl('',Validators.required),
  moyAutoSavoir : new FormControl (''),
  moyAutoSavoirEtre: new FormControl (''),
  moyAutoSavoirFaire: new FormControl (''),
  moyAutoObjectif: new FormControl (''),
  moyEvaluateurSavoir: new FormControl (''),
  moyEvaluateurSavoirFaire: new FormControl (''),
  moyEvaluateurSavoirEtre: new FormControl (''),
  moyEvaluateurObjectif:new FormControl (''),
  moyReqSavoir: new FormControl (''),
  moyReqSavoirFaire: new FormControl (''),
  moyReqSavoirEtre: new FormControl (''),
  moyReqObjectif: new FormControl (''),
 });
 apiUrl = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { }

  initializeFormGroup(){
    this.form.reset();
 }; 
public getFicheEvaluation() : Observable<FicheEvaluation[]>{
  return this.httpClient.get<FicheEvaluation[]>(this.apiUrl+'/');
}

public addFicheEvaluation (ficheEvaluation :FicheEvaluation){
  return this.httpClient.post(this.apiUrl+'/',ficheEvaluation);
}

public updateFicheEvaluation(cin:string,ficheEvaluation: FicheEvaluation ){
  return this.httpClient.put(this.apiUrl+'/'+cin, ficheEvaluation);
}
}
