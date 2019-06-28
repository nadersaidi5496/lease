export class NoteSavoir {
    id: number;
    libelle: string;
    type: string;
    noteAutoEvaluation: number ;
    noteEvaluateur: number;

    constructor(id: number,
        libelle: string,
        type: string,
        noteAutoEvaluation: number ,
        noteEvaluateur: number){


            this.id = id;
            this.libelle= libelle;
            this.type=type;
            this.noteAutoEvaluation= noteAutoEvaluation ;
            this.noteEvaluateur= noteEvaluateur;

    }
}

