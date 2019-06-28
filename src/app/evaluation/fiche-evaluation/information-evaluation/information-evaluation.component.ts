import { Component, OnInit } from '@angular/core';
import { EmploiService } from '../../../shared/emploi.service' ;
import { EmployeeService } from '../../../shared/employee.service';


@Component({
  selector: 'app-information-evaluation',
  templateUrl: './information-evaluation.component.html',
  styleUrls: ['./information-evaluation.component.css']
})
export class InformationEvaluationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
