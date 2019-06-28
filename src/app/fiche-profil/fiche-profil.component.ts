import { Component, OnInit,Input } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import {ActivatedRoute} from '@angular/router';
import { Employe } from '../model/employe';
@Component({
  selector: 'app-fiche-profil',
  templateUrl: './fiche-profil.component.html',
  styleUrls: ['./fiche-profil.component.css']
})
export class FicheProfilComponent implements OnInit {
  public cin;
  public employe : Employe;

  constructor(private service:EmployeeService ,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('cin'));
    this.cin = id ;
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
 } 
 onSubmit(){
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
    this.service.form.controls['evaluateur'].value,);

    this.service.updateEmploye(this.employe.cin, this.employe);

  }
 chargerForm(){
  //  this.service.getEmploye(this.cin).subscribe(res =>{
     
    

  //   this.service.form.controls['nom'].setValue = res.nom;
  //    this.service.form.controls['prenom'].setValue= res.prenom;
  //    this.service.form.controls['diplome'].setValue= res.diplome;
  //    this.service.form.controls['nivInstruction'].setValue= res.nivInstruction;
  //    this.service.form.controls['emploi'].setValue= res.emploi;
  //    this.service.form.controls['sexe'].setValue= res.sexe;
  //    this.service.form.setValue(res);

  //  })
   

   }
  
}
