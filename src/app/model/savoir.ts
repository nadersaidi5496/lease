export class Savoir {
    idSv: number ;
    libelle: string;
    niv1: string;
    niv2: string;
    niv3:string;
    niv4:string;
    niv5:string;
    type: string;


constructor(idSv: number , libelle: string ,niv1: string,niv2: string,niv3:string,niv4:string,niv5:string, type:string){
    this.idSv=idSv;
    this.libelle=libelle;
    this.niv1=niv1;
    this.niv2=niv2;
    this.niv3=niv3;
    this.niv4=niv4;
    this.niv5=niv5;
    this.type=type;
}
}
