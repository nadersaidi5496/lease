import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {Employe} from '../../model/employe';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { EmployeeService } from '../../shared/employee.service';
import { DatePipe } from '@angular/common';
import { Emploi } from 'src/app/model/emploi';
import { EmploiService } from 'src/app/shared/emploi.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  myControl = new FormControl();
  employe: Employe ;
  DateTest: Date = new Date();
  emplois: any[];
 // options: Emploi[Emploi[libelle]]
  filteredOptions: Observable<Emploi["libelle"]>;
  constructor(private service: EmployeeService,
    public dialogRef: MatDialogRef<EmployeeComponent>,
    private date: DatePipe,
    private emp: EmploiService) { }
  

  ngOnInit() {
    this.ChargerEmploi();
  }

 onClear() {
    
    this.service.initializeFormGroup();
 } 

 getEmploiLibelle(row : Emploi){
   return row.libelle;
 }
 onClose() {
  this.service.form.reset();
  this.service. initializeFormGroup();
  this.dialogRef.close();
}

ChargerEmploi(){
  this.emp.getAllEmploi().subscribe(res =>{
    this.emplois = res;
  });
}

OnSubmit(){
   
 
   this.employe = new Employe(
    this.service.form.controls['cin'].value,
    this.service.form.controls['nom'].value,
    this.service.form.controls['prenom'].value,
    this.service.form.controls['dateNaiss'].value,
    this.service.form.controls['sexe'].value,
    this.service.form.controls['diplome'].value,
    this.service.form.controls['emploi'].value,
    this.service.form.controls['numTel'].value,
    this.service.form.controls['mail'].value,
    this.service.form.controls['nivInstruction'].value,
    this.service.form.controls['adresse'].value,  
    this.service.form.controls['dateRecru'].value,
    this.service.form.controls['dateDep'].value,
    this.service.form.controls['potentiel'].value,
    this.service.form.controls['perfermance'].value,
    this.service.form.controls['readiness'].value,
    this.service.form.controls['probabilite'].value,
    this.service.form.controls['impact'].value,
    this.service.form.controls['motif'].value,
    this.service.form.controls['evaluateur'].value
   );
  
   

   if (this.service.form.controls['cin'].value){
      this.service.addEmploye(this.employe).subscribe(res => {
      this.service.initializeFormGroup();
      this.onClose();
    });
  //  } else {
  //   this.service.updateEmploye(this.employe.cin, this.employe).subscribe(
  //     res=>{
  //       this.service.initializeFormGroup();
  //       this.onClose();
  //     }
  //   );
  } 
  
}

}
