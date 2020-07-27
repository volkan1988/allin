import { SousDomaineIntervention } from "./sous-domaine-intervention.model";

export class Realisation {

    constructor(
        public id: number,
        public libelle: string,
        public image: string[],
        public besoinClient: string,
        public projet: string,
        public sousDomaineIntervention: SousDomaineIntervention,
        public dateCreation: Date
    ) {}

    getUrl(): string {
        return this.sousDomaineIntervention.domaineIntervention.id + "/" + 
        this.sousDomaineIntervention.id + "/" +
        this.id;
    }
}