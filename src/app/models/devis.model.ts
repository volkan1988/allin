export class Devis {

    constructor(
        public civilite: string,
        public prenom: string,
        public nom: string,
        public adresse: string,
        public codePostal: string,
        public ville: string,
        public email: string,
        public telephone: string,
        public description: string,
        public dateCreation: Date,
        public id?: number) {}
}