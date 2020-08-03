import { Domaine } from "./domaine.model";

export class SousDomaine {

    constructor(
        public id: string,
        public libelle: string,
        public description: string,
        public image: string,
        public domaine: Domaine
    ) {}

    getUrl(): string {
        return this.domaine.id + "/" +
            this.id;
    }
}