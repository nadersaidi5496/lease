import { Component, OnInit } from '@angular/core';
import {SavoirService} from '../../../shared/savoir.service';
import {Savoir} from '../../../model/savoir' ;

@Component({
  selector: 'app-savoir-emploi',
  templateUrl: './savoir-emploi.component.html',
  styleUrls: ['./savoir-emploi.component.css']
})
export class SavoirEmploiComponent implements OnInit {
  dataSource: Savoir[] ;
  listLib : string[] = [] ;
  listsav: string[]= [];
  listeSavoir = [
    { value: 'Applicatifs bureautiques dédiés ', title: 'Applicatifs bureautiques dédiés ' },
     { value: 'Architectures informatiques ', title: 'Architectures informatiques ' },
     { value: 'Bases de données et logiciels dédiés ', title: 'Bases de données et logiciels dédiés ' },
   ];
   data = [
    {},
  ];  
  constructor(private savoirService : SavoirService) { }
  Data: Savoir[];
  
  ngOnInit() {
    this.chargeData();
    
    console.log(this.listLib);
  }
  chargeData (){
    this.savoirService.getSavoirs("Savoir")
    .subscribe(data =>{
      this.dataSource=data;
      console.log(this.dataSource);
    })
    for (let data of this.dataSource){
      console.log(data.libelle);
      this.listLib.push(data.libelle);
      
     }
    }
    

  

  settings = {
    add: {
      addButtonContent: '<i  class="material-icons">add</i>',
      createButtonContent: '<i  class="material-icons">done</i>',
      cancelButtonContent: '<i  class="material-icons">cancel</i>',
     
    },
    edit: {
      editButtonContent: '<i  class="material-icons">edit</i>',
      saveButtonContent: '<i  class="material-icons">done</i>',
      cancelButtonContent: '<i  class="material-icons">cancel</i>',
      
    },
    delete: {
      deleteButtonContent: '<i  class="material-icons">delete_outline</i>',
    },

    columns: {
      id: {
        title: 'ID',
        width : '10%' ,
        
      },
      savoirs: {
        title: 'Savoirs',
        width: '75%',
        filter : {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: this.listeSavoir ,
          },
        },

        editor: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list:  this.listeSavoir,
          },
        },
      },
      niveau: {
        title: 'Niveau',
        width : '25%' ,
        editor: {
          width : '80%',
          type: 'list',
          config: {
            selectText: 'Select...',
            list:  [
            {value : '1', title : '1'},
            {value : '2', title : '2'},
            {value : '3', title : '3'},
            {value : '4', title : '4'},
            {value : '5', title : '5'},
          ],
          },
        },
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list:  [
            {value : '1', title : '1'},
            {value : '2', title : '2'},
            {value : '3', title : '3'},
            {value : '4', title : '4'},
            {value : '5', title : '5'},
          ],
          },
        },
      },
     
    },
  };

}
