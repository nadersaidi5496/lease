import { Component, OnInit } from '@angular/core';
import { EmploiService } from '../../../shared/emploi.service' ;

@Component({
  selector: 'app-information-emploi',
  templateUrl: './information-emploi.component.html',
  styleUrls: ['./information-emploi.component.css']
}) 
export class InformationEmploiComponent implements OnInit {

  constructor(private service: EmploiService,) { }

  ngOnInit() {
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
 } 
}
 