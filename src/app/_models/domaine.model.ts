export class Domaine {

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