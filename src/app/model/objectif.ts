export class Objectif {
    idObjectif: number;
    libelle: string;
    nivMin: number ;
    noteAutoEvaluation: number;
    noteEvaluation: number;
 
    constructor( idObjectif: number,
        libelle: string,
        nivMin: number,
        noteAutoEvaluation: number,
        noteEvaluation: number) {

            this.idObjectif= idObjectif ;
            this.libelle= libelle ;
            this.nivMin= nivMin ;
            this.noteAutoEvaluation= noteAutoEvaluation;
            this.noteEvaluation= noteEvaluation;

    }
}
