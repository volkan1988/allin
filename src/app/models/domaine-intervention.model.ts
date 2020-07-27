import StringUtils from "../utils/string-utils";

export class DomaineIntervention {

    constructor(
        public id: string,
        public libelle: string,
        public description: string,
        public image: string,
        public couleur: string
    ) {
    }

    getUrl(): string {
        return this.id;
    }
}