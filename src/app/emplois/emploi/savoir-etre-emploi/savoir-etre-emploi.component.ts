import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savoir-etre-emploi',
  templateUrl: './savoir-etre-emploi.component.html',
  styleUrls: ['./savoir-etre-emploi.component.css']
})
export class SavoirEtreEmploiComponent implements OnInit {

  listeSavoirEtre = [
    { value: 'Applicatifs bureautiques dédiés ', title: 'Applicatifs bureautiques dédiés ' },
     { value: 'Architectures informatiques ', title: 'Architectures informatiques ' },
     { value: 'Bases de données et logiciels dédiés ', title: 'Bases de données et logiciels dédiés ' },
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
      savoirEtre: {
        title: 'Savoir-être',
        width: '75%',
        filter : {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: this.listeSavoirEtre ,
          },
        },

        editor: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list:  this.listeSavoirEtre ,
          },
        },
      },
      niveau: {
        title: 'Niveau',
        width : '25%' ,
        editor: {
          type: 'list',
          config: {
            selectText: 'Niveau',
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
            selectText: 'Niveau',
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
