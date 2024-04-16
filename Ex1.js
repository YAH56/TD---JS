class Voiture {
    constructor(model, marque, annee, typeCarburant) {
        this.model = model;
        this.marque = marque;
        this.annee = annee;
        this.typeCarburant = typeCarburant;
    }
}

class Hyundai extends Voiture {
    constructor(model, marque, annee, typeCarburant, serie, hybride) {
        super(model, marque, annee, typeCarburant);
        this.serie = serie;
        this.hybride = hybride;
    }

    alarmer() {
        console.log("Alarme activée!");
    }
}

class Ford extends Voiture {
    constructor(model, marque, annee, typeCarburant, options) {
        super(model, marque, annee, typeCarburant);
        this.options = options;
    }
}

// Création d'une liste de voitures
let voitures = [
    new Hyundai("i10", "Hyundai", 2019, "essence", "Série A", false),
    new Hyundai("Tucson", "Hyundai", 2020, "hybride", "Série B", true),
    new Ford("Focus", "Ford", 2018, "diesel", ["GPS", "Climatisation"]),
    new Ford("Mustang", "Ford", 2021, "essence", ["Toit ouvrant", "Sièges chauffants"])
];

// Trier les voitures par année
voitures.sort((a, b) => a.annee - b.annee);

// Affichage des voitures triées
voitures.forEach(voiture => {
    console.log(`${voiture.marque} ${voiture.model} - Année ${voiture.annee}`);
});
