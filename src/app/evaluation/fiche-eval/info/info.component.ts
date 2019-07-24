import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employe } from 'src/app/model/employe';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  public cin: string;
  emp: Employe;

  constructor(private route: ActivatedRoute,
              private service: EmployeeService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('cin');
    this.cin = id ;
    this.ChargerData();
    this.service.form.disable();
  }

  ChargerData() {
    this.service.getEmploye(this.cin)
    .subscribe( async res => {
      this.emp = await res;
      this.service.form.setValue(res);
    });

  }

}
