import { DomaineIntervention } from "./domaine-intervention.model";

export class SousDomaineIntervention {

    constructor(
        public id: string,
        public libelle: string,
        public description: string,
        public image: string,
        public domaineIntervention: DomaineIntervention
    ) {}

    getUrl(): string {
        return this.domaineIntervention.id + "/" +
            this.id;
    }
}