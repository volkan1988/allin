import { SousDomaineIntervention } from "./sous-domaine-intervention.model";

export class Realisation {
    id: number;
    titre: string;
    image: string;
    description: string;
    sousDomaineIntervention: SousDomaineIntervention;
    dateCreation: Date;
    url: string

    constructor(id: number,
        titre: string,
        image: string,
        description: string,
        sousDomaineRealisation: SousDomaineIntervention,
        dateCreation: Date
    ) {
        this.id = id;
        this.titre = titre;
        this.image = image;
        this.description = description;
        this.sousDomaineIntervention = sousDomaineRealisation;
        this.dateCreation = dateCreation;
        this.url = this.getUrl()
    }

    getUrl(): string {
        return this.sousDomaineIntervention.domaineIntervention.id + "/" + 
        this.sousDomaineIntervention.id + "/" +
        this.id;
    }
}