import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog , MatDialogConfig, MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import { EmployeeService } from '../../shared/employee.service';
import {SavoirService} from '../../shared/savoir.service';
import { Employe } from 'src/app/model/employe';
import { Savoir } from 'src/app/model/savoir';
export interface EmployesItem{
  
  Savoir : string ;
  NoteMin : number ;
  NoteAuto : number ;
  NoteEvaluateur: number;
}
export interface Transaction {
  item: string;
  cost: number; 
}
const EXAMPLE_DATA: EmployesItem[] = [
  {   Savoir: "Applicatifs bureautiques dédiés"   , NoteMin: 3 , NoteAuto: 3 , NoteEvaluateur:3 },
  {   Savoir: "Architectures informatiques"   ,   NoteMin: 4 , NoteAuto: 3, NoteEvaluateur:2 },
  {   Savoir: "Bases de données et logiciels dédiés"   ,  NoteMin: 3 , NoteAuto: 4, NoteEvaluateur:3 },
  {   Savoir: "Cadre législatif, réglementaire et juridique "   ,  NoteMin: 4 , NoteAuto: 3, NoteEvaluateur:3 },
  {   Savoir: "Concepts et techniques de gestion de bilan"   , NoteMin: 2 , NoteAuto: 3, NoteEvaluateur:2 },
  {   Savoir: "Moyenne"   , NoteMin:3.2  , NoteAuto:3.2 , NoteEvaluateur:2.6 },
];

const EXAMPLE_Faire: EmployesItem[] = [
  {   Savoir: "Applicatifs bureautiques dédiés"   , NoteMin: 2 , NoteAuto: 5 , NoteEvaluateur:4 },
  {   Savoir: "Architectures informatiques"   ,   NoteMin: 2 , NoteAuto: 1, NoteEvaluateur:3 },
  {   Savoir: "Bases de données et logiciels dédiés"   ,  NoteMin: 4 , NoteAuto: 3, NoteEvaluateur:2 },
  {   Savoir: "Cadre législatif, réglementaire et juridique "   ,  NoteMin: 3 , NoteAuto: 2, NoteEvaluateur:4 },
  {   Savoir: "Concepts et techniques de gestion de bilan"   , NoteMin: 4 , NoteAuto: 3, NoteEvaluateur:2 },
  {   Savoir: "Moyenne"   , NoteMin:3.4  , NoteAuto:3.6 , NoteEvaluateur:3.1 },
];

const EXAMPLE_Etre: EmployesItem[] = [
  {   Savoir: "Applicatifs bureautiques dédiés"   , NoteMin: 4 , NoteAuto: 2 , NoteEvaluateur:1 },
  {   Savoir: "Architectures informatiques"   ,   NoteMin: 1 , NoteAuto: 2, NoteEvaluateur:3 },
  {   Savoir: "Bases de données et logiciels dédiés"   ,  NoteMin: 4 , NoteAuto: 5, NoteEvaluateur:4 },
  {   Savoir: "Cadre législatif, réglementaire et juridique "   ,  NoteMin: 4 , NoteAuto: 3, NoteEvaluateur:2 },
  {   Savoir: "Concepts et techniques de gestion de bilan"   , NoteMin: 4 , NoteAuto: 3, NoteEvaluateur:2 },
  {   Savoir: "Moyenne"   , NoteMin:3.4  , NoteAuto:3.6 , NoteEvaluateur:3.1 },
];


@Component({
  selector: 'app-fiche-evaluation',
  templateUrl: './fiche-evaluation.component.html',
  styleUrls: ['./fiche-evaluation.component.css']
})
export class FicheEvaluationComponent implements OnInit {
  displayedColumns: string[] = ['Savoir', 'NoteMin', 'NoteAuto', 'NoteEvaluateur'];
  dataSource = EXAMPLE_DATA;
  dataSource2= EXAMPLE_Faire;
  dataSource3= EXAMPLE_Etre;
  public cin;
  public employe : Employe ;
  public savoirs: Savoir[];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  /*
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }*/
  constructor(private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private employeeService : EmployeeService,
    private savoirService : SavoirService) { }
 // dataSource: MatTableDataSource<any>;
  searchKey : string ;
  ajouter= false ;
  modifier= false;


  ngOnInit() {
    let cin = parseInt(this.route.snapshot.paramMap.get('cin'));
    this.cin = cin ;

    this.chargeData();
    this.chargeSavoir();
      
    this .firstFormGroup = this ._formBuilder.group ({
      firstCtrl: [ '' , Validators.required]
    });
    this .secondFormGroup = this ._formBuilder.group ({
      secondCtrl: [ '' , Validators.required]
    });
    this .thirdFormGroup = this ._formBuilder.group ({
      firstCtrl: [ '' , Validators.required]
    });
    this .forthFormGroup = this ._formBuilder.group ({
      firstCtrl: [ '' , Validators.required]
    });
    this .fifthFormGroup = this ._formBuilder.group ({
      firstCtrl: [ '' , Validators.required]
    });
  } 

  chargeData(){
    this.employeeService.getEmploye(this.cin)
    .subscribe(res=> {
      this.employe=res;
      console.log(this.employe);
   
    });
  }
  chargeSavoir(){
    this.savoirService.getSavoirs("Savoir")
    .subscribe((data =>{
      this.savoirs=data;
      console.log(data);
    }))

  }


  // applyFilter() {
  //   this.dataSource.filter = this.searchKey.trim().toLowerCase();
  // }
}
