import { Component, OnInit } from '@angular/core';
import { NoteSavoirService } from 'src/app/shared/note-savoir.service';
import { ActivatedRoute } from '@angular/router';
import { NoteSavoir } from 'src/app/model/note-savoir';

@Component({
  selector: 'app-savoir-evaluation',
  templateUrl: './savoir-evaluation.component.html',
  styleUrls: ['./savoir-evaluation.component.css']
})
export class SavoirEvaluationComponent implements OnInit {
  constructor(private service: NoteSavoirService,
    private route: ActivatedRoute  ) { }
public cin: string;
Data: NoteSavoir[];

displayedColumns: string[] = ['titre', 'NoteAuto', 'NoteEvaluateur'];

ngOnInit() {
this.cin = this.route.snapshot.paramMap.get('cin');
this.ChargerData();
}
ChargerData() {
this.service.getNoteSavoirByCinAndType(this.cin, 'Savoir')
.subscribe(async res => {
this.Data = await res;
console.log(res);
});
}

GetTotalAutoEval(){
// tslint:disable-next-line: radix
return this.Data.map(res => parseInt(res.noteAutoEvaluation)).reduce((acc , value) =>acc+ value, 0);
}

GetTotalEval(){
// tslint:disable-next-line: radix
return this.Data.map(res => parseInt(res.noteEvaluateur)).reduce((acc , value) =>acc+ value, 0);
}
OnChangeFn(){

  this.Data.map(dataa =>{
    this.service.updateNoteSavoir(dataa.ntS, dataa).subscribe(res =>{
      console.log(res);
    });
  });

}

}
