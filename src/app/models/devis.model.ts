export class Devis {
    id: number;
    sexe: string;
    prenom: string;
    nom: string;
    adresse: string;
    codePostal: string;
    ville: string;
    email: string;
    telephone: string;
    description: string;
    dateCreation: Date;

    constructor(
        sexe: string,
        prenom: string,
        nom: string,
        adresse: string,
        codePostal: string,
        ville: string,
        email: string,
        telephone: string,
        description: string,
        dateCreation: Date,
        id?: number) {
            this.id = id;
            this.sexe = sexe;
            this.prenom = prenom;
            this.nom = nom;
            this.adresse = adresse;
            this.codePostal = codePostal;
            this.ville = ville;
            this.email = email;
            this.telephone = telephone;
            this.description =  description;
            this.dateCreation = dateCreation;
    }
}