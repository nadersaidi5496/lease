import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-fiche-eval',
  templateUrl: './fiche-eval.component.html',
  styleUrls: ['./fiche-eval.component.css']
})
export class FicheEvalComponent implements OnInit {
  public cin;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;



  constructor(private _formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('cin'));
    this.cin = id;
    this .firstFormGroup = this ._formBuilder.group ({
      firstCtrl: [ '' , Validators.required]
    });
    this .secondFormGroup = this ._formBuilder.group ({
      secondCtrl: [ '' , Validators.required]
    });
    this .thirdFormGroup = this ._formBuilder.group ({
      firstCtrl: [ '' , Validators.required]
    });
    this .forthFormGroup = this ._formBuilder.group ({
      firstCtrl: [ '' , Validators.required]
    });
    this .fifthFormGroup = this ._formBuilder.group ({
      firstCtrl: [ '' , Validators.required]
    });
}}
