// Objet Etudiant
class Etudiant {
    constructor(nom, prenom, age, cne) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.cne = cne;
    }

    étudier() {
        console.log(`${this.nom} ${this.prenom} étudie.`);
    }
}

// Objet Professeur
class Professeur {
    constructor(nom, age, cin) {
        this.nom = nom;
        this.age = age;
        this.cin = cin;
    }

    enseigner() {
        console.log(`${this.nom} enseigne.`);
    }
}

// Création des étudiants
let etudiant1 = new Etudiant("Brahim", "akdi", 22, "12345");
let etudiant2 = new Etudiant("Hamza", "akdi", 20, "54321");
let etudiant3 = new Etudiant("Bilale", "chemlale", 21, "67890");

// Ajout des étudiants à un tableau
let étudiants = [etudiant1, etudiant2, etudiant3];

// Méthode de comparaison pour le tri des étudiants par nom et prénom
function comparerEtudiants(a, b) {
    if (a.nom === b.nom) {
        return a.prenom.localeCompare(b.prenom);
    }
    return a.nom.localeCompare(b.nom);
}

// Trier les étudiants selon l’ordre alphabétique « nom et prénom »
étudiants.sort(comparerEtudiants);

// Affichage des étudiants triés
console.log("Étudiants triés par nom et prénom :");
étudiants.forEach(etudiant => {
    console.log(`${etudiant.nom} ${etudiant.prenom}`);
});
