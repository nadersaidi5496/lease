import { Injectable } from '@angular/core';
import { FormGroup, FormControl,Validators } from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Employe} from '../model/employe';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
 })
 export class EmployeeService {
  

  form: FormGroup = new FormGroup({
    cin : new FormControl(null,[Validators.required,
      Validators.maxLength(8),
      Validators.minLength(8),
      Validators.pattern('[1-9]+[0-9]*')]) ,
    nom: new FormControl('', Validators.required),
    prenom:new FormControl('',Validators.required),
    dateNaiss: new FormControl(''),
    sexe : new FormControl(''),
    diplome: new FormControl('',Validators.required),
    emploi:new FormControl(null ,Validators.required),
    numTel: new FormControl('',[Validators.required,
      Validators.maxLength(8),
      Validators.minLength(8),
      Validators.pattern('[1-9]+[0-9]*')]),
    mail : new FormControl('',[Validators.required,Validators.email]),
    nivInstruction: new FormControl('',Validators.required),
    adresse: new FormControl('',Validators.required),
    dateRecru: new FormControl(''),
    dateDep: new FormControl(''),
    potentiel: new FormControl('',Validators.required),
    perfermance: new FormControl('',Validators.required),
    readiness: new FormControl('',Validators.required),
    probabilite: new FormControl('',Validators.required),
    impact: new FormControl('',Validators.required),
    motif: new FormControl('',Validators.required),
    evaluateur: new FormControl(null,Validators.required),
    subordinatets: new FormControl(null,Validators.required),
    objectifs: new FormControl(null,Validators.required),
    noteSavoirs: new FormControl(null,Validators.required),
    ficheEvaluations: new FormControl(null,Validators.required)

  });  
  apiUrl = 'http://localhost:8090//EmployeApi';
  apiUrl2= 'http://localhost:8090/potentiel/';
  apiUrl3='http://localhost:8090/Impact/';
  constructor(private httpClient: HttpClient) { }


  initializeFormGroup(){
    this.form.reset();
 }; 

  

 public  getEmployes(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl+'/Employees'); 
  }

  public  getEmploye(cin: string): any {
    return this.httpClient.get<any>(this.apiUrl+'/Employees/'+cin); 
  }
 
  public addEmploye (emp: Employe)  {
    return this.httpClient.post(this.apiUrl+'/Employees', emp);
  }

  public deleteEmploye(cin : string) {
    return this.httpClient.delete(this.apiUrl+'/Employees/'+ cin);
  }

  public updateEmploye(cin: string, emp: Employe){
    return this.httpClient.put(this.apiUrl+'/Employees/'+ cin, emp);
  }
  
  public getEmployeesByPtAndPf(pt: string , pf:string) : Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl2 + pt + '/perfermance/' +pf);

  }


  public getEmployeesByImapctAndPoba(impact : string, proba: string) : Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl3+ impact +'/Probabilte/' + proba);
  }

  
}
