import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog , MatDialogConfig, MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import {Emploi} from '../../model/emploi';
import {EmploiService} from '../../shared/emploi.service';
import {Router} from '@angular/router' ;


/*export interface EmployesItem{
  CODE : number ;
  Emploi : string ;
  FiliereAct : string ;
  Famille : string ;
}
 /*
const EXAMPLE_DATA: EmployesItem[] = [
  {  CODE :1, Emploi: "Chargé Recouvrement"   , FiliereAct: "Recouvrement"  , Famille: "Fonction Support"   },
  {  CODE :2, Emploi: "Analyste risques de crédits"   , FiliereAct: "Risques et contrôle"  , Famille: "Support"    },
  {  CODE :3, Emploi: "Assistant opérations mognétiques"   , FiliereAct: "Traitement des opérations bancaires"  , Famille: "Traitement des opérations "  },
  {  CODE :4, Emploi: "Chargé d’affaires financements spécialisés"   , FiliereAct: "Marketing /Communication"  , Famille: "Support"  },
];*/
@Component({
  selector: 'app-liste-emploi',
  templateUrl: './liste-emploi.component.html',
  styleUrls: ['./liste-emploi.component.css']
})
export class ListeEmploiComponent implements OnInit {

  constructor(private emploiService : EmploiService,
    private router : Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<Emploi> = new MatTableDataSource();
  searchKey : string ; 
  ajouter= false ;
  modifier= false;
  Data: Emploi[];

  displayedColumns= ['code','libelle', 'filiereAct' , 'famille', 'Action'] ;

  ngOnInit() {
    this.chargeData();
  }
 
  chargeData(){
    this.emploiService.getAllEmploi()
    .subscribe(res=> {
      this.Data=res;
      console.log(this.Data);
    this.dataSource= new MatTableDataSource<Emploi>(this.Data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    });
  }
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter(); 
  }
  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  onSelect(element) {
    this.emploiService.form.setValue(element);
    this.router.navigate(['/emploi']);

  } 

  onDelete(code){
    if(confirm('voulez-vous supprimer cet employé ?')){
      this.emploiService.deleteEmploi(code).subscribe(res=>{
        
        this.chargeData();
      });}
  }
}
/*
  ngOnInit() {
    this.dataSource= new MatTableDataSource(EXAMPLE_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }*/
