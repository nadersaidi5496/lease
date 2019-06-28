import { Component, OnInit } from '@angular/core';
import {SplitButtonModule} from 'primeng/splitbutton';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';

import {TieredMenuModule} from 'primeng/tieredmenu';





interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
    {name: 'Emploi',
    children: [
      {name: 'Emplois'},
      {name: 'Savoirs'},
      {name: 'SavoirsFaire'}, 
    ]},
  ];
  
  

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Savoir-faire', icon: 'pi pi-times', routerLink:['/savoirFaire']},
      {label: 'Savoir-être', icon: 'pi pi-times', routerLink:['/savoirEtre' ]},
      {label: 'Savoirs', icon: 'pi pi-info',routerLink:['/savoir' ]},
      
  ];
   
  }
  isMenuOpen = true;
  contentMargin = 240;

 

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
  

}


  