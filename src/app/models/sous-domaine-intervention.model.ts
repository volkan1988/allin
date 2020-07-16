import { DomaineIntervention } from "./domaine-intervention.model";

export class SousDomaineIntervention {
    id: string;
    nom: string;
    domaineIntervention: DomaineIntervention;

    constructor(id: string, nom: string, domaineIntervention: DomaineIntervention) {
        this.id = id;
        this.nom = nom;
        this.domaineIntervention = domaineIntervention;
    }
}