import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog , MatDialogConfig, MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import { EmployeeComponent } from './employee/employee.component';
import {Observable} from 'rxjs' ;
import { EmployeeService } from '../shared/employee.service';
import { Employe } from '../model/employe';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
 
  constructor(private dialog: MatDialog, private employeeService: EmployeeService
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

  ajouterDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    dialogConfig.width='120%';
    dialogConfig.height='90%';
    this.dialog.open(EmployeeComponent, dialogConfig).afterClosed().subscribe(res=>{
      this.chargeData();
    }); 
    }
    onEdit(row){
      this.employeeService.form.setValue(row);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus= true;
      dialogConfig.width='120%';
      dialogConfig.height='90%';
      this.dialog.open(EmployeeComponent, dialogConfig).afterClosed().subscribe(res=>{
        this.chargeData();
      });
    }
    onDelete(cin){
      
          this.employeeService.deleteEmploye(cin);}
        
      
    
  

}
