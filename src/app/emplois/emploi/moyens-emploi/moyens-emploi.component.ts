import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moyens-emploi',
  templateUrl: './moyens-emploi.component.html',
  styleUrls: ['./moyens-emploi.component.css']
})
export class MoyensEmploiComponent implements OnInit {
  listeMoyens = [
    { value: 'Ordinateur ', title: 'Ordinateur' },
     { value: 'Imprimante ', title: 'Imprimante ' },
     { value: 'Voiture ', title: 'Voiture ' },
   ];
   data = [
    {},
  ];
  constructor() { }

  ngOnInit() {
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
      Moyens: {
        title: 'Moyens',
        width: '90%',
        filter : {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: this.listeMoyens ,
          },
        },

        editor: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list:  this.listeMoyens ,
          },
        },
      },
      
     
    },
  };

}
