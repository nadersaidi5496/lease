import { Injectable } from '@angular/core';
import { FormGroup, FormControl,Validators } from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Objectif} from '../model/objectif';
@Injectable({
  providedIn: 'root'
})
export class ObjectifService {
  form: FormGroup= new FormGroup({
  idObjectif:  new FormControl (null),
  libelle: new FormControl('', Validators.required),
  nivMin: new FormControl('', Validators.required),
  noteAutoEvaluation: new FormControl('', Validators.required),
  noteEvaluation: new FormControl('', Validators.required),
});
apiUrl = 'http://localhost:8080/';
  constructor(private httpClient : HttpClient) { }
  initializeFormGroup(){
    this.form.reset();
 }; 

 public getObjectifs(): Observable<Objectif[]> {
   return this.httpClient.get<Objectif[]>(this.apiUrl+'/');
 }


 public addObjectif (objectif : Objectif){
   return this.httpClient.put(this.apiUrl+'/',objectif);
 }

 public deleteObjectif (idObjectif : number) {
   return this.httpClient.delete(this.apiUrl+'/'+ idObjectif);
 }

 public updateObjectif (idObjectif : number, objectif: Objectif){
   return this.httpClient.put(this.apiUrl+'/'+idObjectif, objectif);
 }


}
