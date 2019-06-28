import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import{Savoir} from '../model/savoir';
@Injectable({
  providedIn: 'root'
})
export class SavoirService {
 form : FormGroup = new FormGroup({
  idSv: new FormControl(null),
  libelle: new FormControl('',Validators.required) ,
  niv1: new FormControl('',Validators.required),
  niv2: new FormControl('',Validators.required),
  niv3:new FormControl('',Validators.required),
  niv4:new FormControl('',Validators.required),
  niv5:new FormControl('',Validators.required),
  type: new FormControl('',Validators.required),
 });
 apiUrl='http://localhost:8090/SavoirApi';
  constructor(private httpClient: HttpClient) { }
 
  initializeFormGroup(){
    this.form.reset();
 }; 

 public getSavoirs(type :string) : Observable<any[]>{
  return this.httpClient.get<any[]>(this.apiUrl+'/Savoirs/'+ type); 
}

public getSavoirById (idSv:number){
  return this.httpClient.get<any>(this.apiUrl + '/Savoir' + idSv);
}

public addSavoir (savoir : Savoir) {
  return this.httpClient.post(this.apiUrl+'/Savoirs', savoir);
}

public deleteSavoir(id_sv : number){
  return this.httpClient.delete(this.apiUrl+'/Savoirs/'+ id_sv);
}

public updateSavoir (idSv: number, savoir : Savoir){
  return this.httpClient.put(this.apiUrl+'/Savoir/ '+ idSv , savoir);
}
}
