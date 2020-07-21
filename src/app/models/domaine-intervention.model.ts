export class DomaineIntervention {

    constructor(
        public id: string,
        public libelle: string,
        public image: string
    ) {}

    getUrl(): string {
        return this.id;
    }
}