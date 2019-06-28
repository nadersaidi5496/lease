import { Component, OnInit,ViewChild } from '@angular/core';
import {Observable} from 'rxjs' ;
import { EmployeeService } from '../../shared/employee.service';
import { Employe } from '../../model/employe';
import {MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import {Router} from '@angular/router' ;
@Component({
  selector: 'app-profil-list',
  templateUrl: './profil-list.component.html',
  styleUrls: ['./profil-list.component.css']
})
export class ProfilListComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
    private router : Router
    ) { }
     @ViewChild(MatPaginator) paginator: MatPaginator;
     @ViewChild(MatSort) sort: MatSort;
 
   dataSource: MatTableDataSource<Employe> = new MatTableDataSource();
   searchKey : string ;
   ajouter= false ;
   modifier= false;
   Data: Employe[];
 
   displayedColumns= ['Nom', 'Prenom' , 'Email', 'Telephone','Poste', 'Action'] ;
 
   ngOnInit() {
     this.chargeData();
   }
 
   chargeData(){
     this.employeeService.getEmployes()
     .subscribe(res=> {
       this.Data=res;
       console.log(this.Data);
     this.dataSource= new MatTableDataSource<Employe>(this.Data);
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
     this.employeeService.form.setValue(element);
     this.router.navigate(['/profil']);

   }
}
