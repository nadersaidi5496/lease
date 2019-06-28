import { Injectable } from '@angular/core';
import { FormGroup, FormControl,Validators } from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import{Emploi} from '../model/emploi';
@Injectable({
  providedIn: 'root'
})
export class EmploiService {

  

  form: FormGroup = new FormGroup({
    code: new FormControl(null) ,
    libelle : new FormControl('', Validators.required),
    famille: new FormControl('', Validators.required),    
    finaliteEmploi:new FormControl('',Validators.required),
    mission: new FormControl('', Validators.required),
    filiereAct: new FormControl('', Validators.required),
    nivInstruction: new FormControl('', Validators.required),
    nivExigence: new FormControl('',Validators.required),
    dateCreation: new FormControl('',Validators.required),
    dateValidation: new FormControl('',Validators.required),
    signataireDC : new FormControl('' , Validators.required ),
    signataireDV : new FormControl('' , Validators.required ),
    emploiRessource: new FormControl('' , Validators.required ),
    emploiSavoirs: new FormControl('' , Validators.required ),
  }); 
  apiUrl = 'http://localhost:8090//EmploiApi';
  constructor(private httpClient: HttpClient){}

  initializeFormGroup(){
    this.form.reset();
 }


 public getAllEmploi(): Observable<any[]>{
   return this.httpClient.get<any[]>(this.apiUrl+'/Emploi');
 }

 public getEmploiById(code : string) : any {
   return this.httpClient.get(this.apiUrl+'/Emploi/'+ code)


 }

 public addEmploi (emp: Emploi)  {
  return this.httpClient.post(this.apiUrl+'/Emploi', emp);
}

public deleteEmploi(code: number) {
  return this.httpClient.delete(this.apiUrl+'/Emploi/'+ code);
}
public updateEmploi(code:number, emp:Emploi){
  return this.httpClient.put(this.apiUrl+'/Emploi/'+code,emp);
}
}
