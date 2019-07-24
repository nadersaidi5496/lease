import { DatePipe } from '@angular/common';
import { Emploi } from './emploi';

export class Employe {
    cin : string;
    nom: string;
    prenom: string;
    dateNaiss: string;
    sexe: string;
    diplome: string;
    emploi: Emploi;
    numTel: string;
    mail: string;
    nivInstruction: string;
    adresse: string;
    dateRecru: string;
    dateDep: string;
    potentiel: string;
    perfermance: string;
    readiness: string;
    probabilite: string;
    impact: string;
    motif: string;
    evaluateur: Employe;
    
    
    

    constructor(cin: string,
        nom: string,
        prenom: string,
        dateNaiss: string,
        sexe: string,
        diplome: string,
        emploi: Emploi,
        numTel: string,
        mail: string,
        nivInstruction: string,
        adresse: string,
        dateRecru: string,
        dateDep: string,
        potentiel: string,
        perfermance: string,
        readiness: string,
        probabilite: string,
        impact: string,
        motif: string,
        evaluateur : Employe
    ){
        this.cin = cin;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaiss=dateNaiss;
        this.numTel = numTel;
        this.mail = mail;
        this.sexe =sexe ;
        this.nivInstruction = nivInstruction;
        this.emploi= emploi;
        this.diplome=diplome;
        this.dateRecru= dateRecru;
        this.dateDep=dateDep;
        this.adresse=adresse;
        this.potentiel=potentiel;
        this.perfermance=perfermance;
        this.readiness=readiness;
        this.probabilite=probabilite;
        this.impact=impact;
        this.motif=motif;
        this.evaluateur=evaluateur;
    }
}

