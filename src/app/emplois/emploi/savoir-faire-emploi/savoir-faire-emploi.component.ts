import { Component, OnInit } from '@angular/core';
import { SavoirService } from 'src/app/shared/savoir.service';
import { Savoir } from 'src/app/model/savoir';
// export class ListSavoir {
//   value: number;
//   title: string;
//   // tslint:disable-next-line: align
//   constructor(id: number, title: string){
//     this.value = id;
//     this.title = title;
//   }
// }
@Component({
  selector: 'app-savoir-faire-emploi',
  templateUrl: './savoir-faire-emploi.component.html',
  styleUrls: ['./savoir-faire-emploi.component.css']
})
export class SavoirFaireEmploiComponent implements OnInit {
  constructor(private service: SavoirService) { }

  listeSavoirFaire: any[]= [];
  data: Savoir[]= [];

  ngOnInit() {
    setTimeout(() =>{
      this.chargerSavoirFaire();
    }, 3000);
    this.settings = Object.assign({},this.settings);
    // console.log(this.data);
    // for (var sav of this.data){
    //   console.log(sav);
    //   this.listeSavoirFaire.push(new ListSavoir(sav.idSv, sav.libelle));
    //   console.log(this.listeSavoirFaire);
    // }
    // this.settings.columns.savoirFaire.editor.config.list = this.listeSavoirFaire;
    console.log(this.listeSavoirFaire);

  }

  // listeSavoirFaire = [
  //   { value: 'Applicatifs bureautiques dédiés ', title: 'Applicatifs bureautiques dédiés ' },
  //    { value: 'Architectures informatiques ', title: 'Architectures informatiques ' },
  //    { value: 'Bases de données et logiciels dédiés ', title: 'Bases de données et logiciels dédiés ' },
  //  ];
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
      savoirFaire: {
        title: 'Savoir-faire',
        width: '75%',
        filter : {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: this.listeSavoirFaire ,
          },
        },

        editor: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list:  this.listeSavoirFaire ,
          },
        },
      },
      niveau: {
        title: 'Niveau',
        width : '25%' ,
        editor: {
          
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



  chargerSavoirFaire(){
    this.service.getSavoirs('SavoirFaire').subscribe( res =>{
      this.data = res;
      res.forEach(sav =>{
        this.listeSavoirFaire.push({value: sav.idSv, title: sav.libelle});
      });
    }
      );
      
      // this.data = res;
      // console.log(res);
      // for (let sav of ) {
      //   console.log(sav);
      //   this.listeSavoirFaire.push(new ListSavoir(sav.idSv, sav.libelle));
      //   console.log(this.listeSavoirFaire);
      // }
  }

}
