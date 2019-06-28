export class FicheEvaluation {

dateEvaluation: string;
commentaireEvalue: string;
commentaireEvaluateur: string ;
syntheseEvaluateur: string ;
moyAutoSavoir : number;
moyAutoSavoirEtre: number;
moyAutoSavoirFaire: number;
moyAutoObjectif: number;
moyEvaluateurSavoir: number;
moyEvaluateurSavoirFaire: number;
moyEvaluateurSavoirEtre: number;
moyEvaluateurObjectif: number;
moyReqSavoir: number;
moyReqSavoirFaire: number;
moyReqSavoirEtre: number;
moyReqObjectif: number;

constructor(dateEvaluation: string,
    commentaireEvalue: string,
    commentaireEvaluateur: string ,
    syntheseEvaluateur: string ,
    moyAutoSavoir : number,
    moyAutoSavoirEtre: number,
    moyAutoSavoirFaire: number,
    moyAutoObjectif: number,
    moyEvaluateurSavoir: number,
    moyEvaluateurSavoirFaire: number,
    moyEvaluateurSavoirEtre: number,
    moyEvaluateurObjectif: number,
    moyReqSavoir: number,
    moyReqSavoirFaire: number,
    moyReqSavoirEtre: number,
    moyReqObjectif: number,){


    this.dateEvaluation= dateEvaluation;
    this.commentaireEvalue= commentaireEvalue;
    this.commentaireEvaluateur= commentaireEvaluateur ;
    this.syntheseEvaluateur= syntheseEvaluateur; 
    this.moyAutoSavoir = moyAutoSavoir ;
    this.moyAutoSavoirEtre= moyAutoSavoirEtre ;
    this.moyAutoSavoirFaire = moyAutoSavoirFaire;
    this.moyAutoObjectif= moyAutoObjectif ;
    this.moyEvaluateurSavoir= moyEvaluateurSavoir;
    this.moyEvaluateurSavoirFaire= moyEvaluateurSavoirFaire ;
    this.moyEvaluateurSavoirEtre= moyEvaluateurSavoirEtre ;
    this.moyEvaluateurObjectif= moyEvaluateurObjectif ;
    this.moyReqSavoir = moyReqSavoir ;
    this.moyReqSavoirFaire= moyReqSavoirFaire ;
    this.moyReqSavoirEtre= moyReqSavoirEtre ;
    this.moyReqObjectif= moyReqObjectif ;

}
}
