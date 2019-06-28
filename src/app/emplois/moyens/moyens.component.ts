import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import {Ressource} from '../../model/ressource';
import {RessourceService} from '../../shared/ressource.service';
@Component({
  selector: 'app-moyens',
  templateUrl: './moyens.component.html',
  styleUrls: ['./moyens.component.css']
})
export class MoyensComponent implements OnInit {
  dataSource: Ressource[];
  constructor(private ressourceService : RessourceService) { 
  }
  Data : Ressource[];
  ngOnInit() {
    this.chargerData();
  }

  chargerData (){
    this.ressourceService.getRessources()
    .subscribe(data =>{
      this.dataSource=data;
    })

  }

  // onSearch(query: string = '') {
  //   this.source.setFilter([
  //     // fields we want to include in the search
  //     {
  //       field: 'id',
  //       search: query
  //     },
  //     {
  //       field: 'moyens',
  //       search: query
  //     }, 
      
  //   ], false); }
  settings = {
    add: {
      addButtonContent: '<i  class="material-icons">add</i>',
      createButtonContent: '<i  class="material-icons">done</i>',
      cancelButtonContent: '<i  class="material-icons">cancel</i>',
      confirmCreate: true,

    },
    edit: {
      editButtonContent: '<i  class="material-icons">edit</i>',
      saveButtonContent: '<i  class="material-icons">done</i>',
      cancelButtonContent: '<i  class="material-icons">cancel</i>',
      confirmSave: true,

    },
    delete: {
      deleteButtonContent: '<i  class="material-icons">delete_outline</i>',
      confirmDelete: true

    },
    columns: {
      idRessource: {
        title: 'ID',
        filter: false
      },
      libelle: {
        title: 'Resources',
        width: '90%',
        
      },
     
    }
  };

  addRecord(event) {
   
    var data = {
      "idRessource": event.newData.idSv,
      "libelle": event.newData.libelle,
      "emplois" : null,
    };
     
     this.ressourceService.addRessource(data).subscribe(res=>{
      console.log(res);
      event.confirm.resolve(event.newData);
     })
  }

  deleteRecord(event){
    console.log(event.data);
    // console.log((event.data).idSV)
    this.ressourceService.deleteRessource((event.data).idRessource)
    .subscribe(res=>{
      console.log(res);
      event.confirm.resolve(event.source.data);
    })
  } 
  updateRecord(event){
    var data = {
      "idRessource": event.newData.idRessource,
      "libelle": event.newData.libelle,
      "emplois" : null,
    };

    this.ressourceService.updateRessource(event.newData.idRessource,data)
    .subscribe(res =>{
      console.log(res);
      event.confirm.resolve(event.newData);
    })

  }
}
