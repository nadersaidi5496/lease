import { Ressource } from './ressource';
import { Savoir } from './savoir';

export class Emploi {
     
    code: number ;
    libelle: string;
    famille: string;
    finaliteEmploi:string;
    mission:string;
    filiereAct: string;
    nivInstruction: string;
    nivExigence: string;
    dateCreation: string;
    dateValidation: DataCue;
    signataireDC: string;
    signataireDV: string;
    emploiRessource: Ressource [];
    emploiSavoirs : Savoir [] ;
    
    



    constructor( code: number ,
        libelle: string,
        famille: string,
        finaliteEmploi:string,
        mission:string,
        filiereAct: string,
        nivInstruction: string,
        nivExigence: string,
        dateCreation: string,
        dateValidation: DataCue,
        signataireDC: string,
        signataireDV: string,
        emploiRessource: Ressource [],
        emploiSavoirs : Savoir []  ){
        
    this.code= code; 
    this.libelle= libelle;
    this.famille=famille; 
    this.finaliteEmploi=finaliteEmploi;
    this.mission=mission;
    this.filiereAct=filiereAct;
    this.nivInstruction=nivInstruction;
    this.nivExigence=nivExigence;
    this.dateCreation=dateCreation;
    this.dateValidation=dateValidation;
    this.signataireDC=signataireDC;
    this.signataireDV=signataireDV; 
    this.emploiRessource=emploiRessource;
    this.emploiSavoirs=emploiSavoirs;
    }

}
