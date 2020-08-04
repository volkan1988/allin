import { SousDomaine } from "./sous-domaine.model";

export class Realisation {

    constructor(
        public id: number,
        public libelle: string,
        public image: string[],
        public besoinClient: string,
        public projet: string,
        public sousDomaine: SousDomaine,
        public dateCreation: Date
    ) {}

}