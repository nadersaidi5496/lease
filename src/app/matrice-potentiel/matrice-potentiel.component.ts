import { Component, OnInit,ViewChild } from '@angular/core';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Employe } from '../model/employe';
import { EmployeeService } from '../shared/employee.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}




// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
@Component({
  selector: 'app-matrice-potentiel',
  templateUrl: './matrice-potentiel.component.html',
  styleUrls: ['./matrice-potentiel.component.css']
  
})

export class MatricePotentielComponent implements OnInit {
  displayedColumns = ['nom', 'prenom', 'libelle'];
  dataFaFa: MatTableDataSource<Employe> = new MatTableDataSource();
  dataFaM: MatTableDataSource<Employe> = new MatTableDataSource();
  dataFaFo: MatTableDataSource<Employe> = new MatTableDataSource();
  dataMFa: MatTableDataSource<Employe> = new MatTableDataSource();
  dataMM: MatTableDataSource<Employe> = new MatTableDataSource();
  dataMFo: MatTableDataSource<Employe> = new MatTableDataSource();
  dataFoFa:MatTableDataSource<Employe> = new MatTableDataSource();
  dataFoM:MatTableDataSource<Employe> = new MatTableDataSource();
  dataFoFo: MatTableDataSource<Employe> = new MatTableDataSource();
  Data: Employe[];


  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    this.dataFaFa.paginator = this.paginator;
    this.chargeData(); 
  }

  chargeData(){
    this.employeeService.getEmployeesByPtAndPf('Faible','Faible')
    .subscribe(res=>{
      this.Data=res;
      console.log(this.Data);
      this.dataFaFa= new MatTableDataSource<Employe>(this.Data);
      this.dataFaFa.paginator = this.paginator;
      });
 
      this.employeeService.getEmployeesByPtAndPf('Faible','Moyenne')
    .subscribe(res=>{
      this.Data=res;
      console.log(this.Data);
      this.dataFaM= new MatTableDataSource<Employe>(this.Data);
      this.dataFaM.paginator = this.paginator;
      });
 

      this.employeeService.getEmployeesByPtAndPf('Faible','Fort')
      .subscribe(res=>{
        this.Data=res;
        console.log(this.Data);
        this.dataFaFo= new MatTableDataSource<Employe>(this.Data);
        this.dataFaFo.paginator = this.paginator;
        });

        this.employeeService.getEmployeesByPtAndPf('Moyenne','Faible')
        .subscribe(res=>{
          this.Data=res;
          console.log(this.Data);
          this.dataMFa= new MatTableDataSource<Employe>(this.Data);
          this.dataMFa.paginator = this.paginator;
          });
        
          this.employeeService.getEmployeesByPtAndPf('Moyenne','Moyenne')
          .subscribe(res=>{
            this.Data=res;
            console.log(this.Data);
            this.dataMM= new MatTableDataSource<Employe>(this.Data);
            this.dataMM.paginator = this.paginator;
            });

            this.employeeService.getEmployeesByPtAndPf('Moyenne','Fort')
            .subscribe(res=>{
              this.Data=res;
              console.log(this.Data);
              this.dataMFo= new MatTableDataSource<Employe>(this.Data);
              this.dataMFo.paginator = this.paginator;
              });

              this.employeeService.getEmployeesByPtAndPf('Fort','Faible')
              .subscribe(res=>{
                this.Data=res;
                console.log(this.Data);
                this.dataFoFa= new MatTableDataSource<Employe>(this.Data);
                this.dataFoFa.paginator = this.paginator;
                });

                this.employeeService.getEmployeesByPtAndPf('Fort','Moyenne')
                .subscribe(res=>{
                  this.Data=res;
                  console.log(this.Data);
                  this.dataFoM= new MatTableDataSource<Employe>(this.Data);
                  this.dataFoM.paginator = this.paginator;
                  });
                  
                  this.employeeService.getEmployeesByPtAndPf('Fort','Fort')
                  .subscribe(res=>{
                    this.Data=res;
                    console.log(this.Data);
                    this.dataFoFo= new MatTableDataSource<Employe>(this.Data);
                    this.dataFoFo.paginator = this.paginator;
                    });
    


  }
  

}

