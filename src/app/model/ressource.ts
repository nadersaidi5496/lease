import { Emploi } from './emploi';
export class Ressource {
    idRessource: number;
    libelle: string;
    emplois : Emploi [];

    constructor(idRessource: number, libelle: string, emplois: Emploi[]) {
        this.idRessource= idRessource;
        this.libelle= libelle;
        this.emplois= emplois;

    }
}
