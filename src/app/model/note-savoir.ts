import { Employe } from './employe';

export class NoteSavoir {
    ntS: number;
    libelle: string;
    type: string;
    noteAutoEvaluation: string ;
    noteEvaluateur: string;
    employe: Employe;

    constructor(ntS: number,
        libelle: string,
        type: string,
        noteAutoEvaluation: string ,
        noteEvaluateur: string,
        employe: Employe){


            this.ntS = ntS;
            this.libelle= libelle;
            this.type=type;
            this.noteAutoEvaluation= noteAutoEvaluation ;
            this.noteEvaluateur= noteEvaluateur;
            this.employe = employe;

    }
}

