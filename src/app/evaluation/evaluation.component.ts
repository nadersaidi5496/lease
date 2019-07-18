import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employe } from '../model/employe';
import {MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {Router} from '@angular/router' ;

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
              private router: Router) { }
    @ViewChild(MatPaginator) paginator: MatPaginator;
     @ViewChild(MatSort) sort: MatSort;

     dataSource: MatTableDataSource<Employe> = new MatTableDataSource();
     searchKey: string ;
     ajouter = false ;
     modifier = false;
     Data: any[];
     displayedColumns = ['Nom', 'Prenom' , 'Email', 'Telephone', 'Poste', 'Action'] ;

     ngOnInit() {
       this.chargeData();
     }

     chargeData() {
       this.employeeService.getEmployes()
       .subscribe(res => {
         this.Data = res;
         console.log(this.Data);
         this.dataSource = new MatTableDataSource<Employe>(this.Data);
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

     onSelect(row) {
      //  this.employeeService.form.setValue(row);
       this.router.navigate(['/fihceEvaluation', row.cin]);

     }
  }
