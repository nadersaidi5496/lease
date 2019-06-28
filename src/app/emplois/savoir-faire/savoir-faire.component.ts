import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import {SavoirService} from '../../shared/savoir.service';
import {Savoir} from '../../model/savoir' ;
@Component({
  selector: 'app-savoir-faire',
  templateUrl: './savoir-faire.component.html',
  styleUrls: ['./savoir-faire.component.css']
})
export class SavoirFaireComponent implements OnInit {
  dataSource: Savoir[] ;
  
  constructor(private savoirService : SavoirService) { }
  Data: Savoir[];
  ngOnInit() {
    this.chargeData();

  }

  chargeData (){
    this.savoirService.getSavoirs("SavoirFaire")
    .subscribe((data =>{
      this.dataSource=data;
    }))
    
  }

 
 
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
      idSv: {
        title: 'ID',
        width: '3%',
        filter: false,
      },
      libelle: {
        title: 'Savoirs',
        width: '30%',
        
      },
      niv1: {
        title: 'Niveau 1',
        filter: false
      },
      niv2: {
        title: 'Niveau 2',
        filter: false
      },
      niv3: {
        title: 'Niveau 3',
        filter: false
      },
      niv4: {
        title: 'Niveau 4',
        filter: false
      },
      niv5: {
        title: 'Niveau 5',
        filter: false
      }
    }
  };

  addRecord(event) {
   
    var data = {
      "idSv": event.newData.idSv,
      "libelle": event.newData.libelle,
      "niv1": event.newData.niv1,
      "niv2": event.newData.niv2,
      "niv3": event.newData.niv3,
      "niv4": event.newData.niv4,
      "niv5": event.newData.niv5,
      "type": "SavoirFaire"

    };
     
     this.savoirService.addSavoir(data).subscribe(res=>{
      console.log(res);
      event.confirm.resolve(event.newData);
     })
  }
  deleteRecord(event){
    console.log(event.data);
    // console.log((event.data).idSV)
    this.savoirService.deleteSavoir((event.data).idSv)
    .subscribe(res=>{
      console.log(res);
      event.confirm.resolve(event.source.data);
    })
  } 
updateRecord(event){
  var data = {
    "idSv": event.newData.idSv,
    "libelle": event.newData.libelle,
    "niv1": event.newData.niv1,
    "niv2": event.newData.niv2,
    "niv3": event.newData.niv3,
    "niv4": event.newData.niv4,
    "niv5": event.newData.niv5,
    "type": "SavoirFaire"
  };
  this.savoirService.updateSavoir(event.newData.idSv,data)
  .subscribe(res =>{
    console.log(res);
    event.confirm.resolve(event.newData);
  })
}


}

