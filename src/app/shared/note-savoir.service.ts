import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {NoteSavoir} from '../model/note-savoir';
@Injectable({
  providedIn: 'root'
})
export class NoteSavoirService {

  form : FormGroup = new FormGroup({
    id: new FormControl(null),
    libelle: new FormControl('', Validators.required),
    type:new FormControl('', Validators.required), 
    noteAutoEvaluation: new FormControl('', Validators.required),
    noteEvaluateur: new FormControl('', Validators.required),
  });
  apiUrl='http://localhost:8080/';

  constructor(private httpClient : HttpClient) { }
  initializeFormGroup(){
    this.form.reset();
 }; 

 public getNoteSavoir() : Observable<NoteSavoir[]> {
  return this.httpClient.get<NoteSavoir[]>(this.apiUrl+'/Employees'); 
}
public addEmploye (noteSavoir : NoteSavoir)  {
  return this.httpClient.post(this.apiUrl+'/', noteSavoir);
}
public deleteEmploye(id : number) {
  return this.httpClient.delete(this.apiUrl+'/'+ id);
}
public updateEmploye(id: number, noteSavoir: NoteSavoir){
  return this.httpClient.put(this.apiUrl+'/'+ id,noteSavoir);
}
}
 