// Définition de la classe Vecteur2D
class Vecteur2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    // Méthode d'affichage
    afficher() {
        console.log(`(${this.x}, ${this.y})`);
    }

    // Méthode de surcharge d'addition de deux vecteurs du plan
    static additionner(vecteur1, vecteur2) {
        return new Vecteur2D(vecteur1.x + vecteur2.x, vecteur1.y + vecteur2.y);
    }
}

// Définition de la classe Rectangle
class Rectangle {
    constructor(longueur = 0, largeur = 0) {
        this.longueur = longueur;
        this.largeur = largeur;
        this.nom = "rectangle";
    }

    // Méthode d'affichage
    afficher() {
        console.log(`Nom: ${this.nom}, Longueur: ${this.longueur}, Largeur: ${this.largeur}`);
    }

    // Méthode pour calculer la surface
    surface() {
        return this.longueur * this.largeur;
    }
}

// Définition de la classe Carré héritant de Rectangle
class Carre extends Rectangle {
    constructor(cote) {
        super(cote, cote); // Appel du constructeur de la classe mère avec la même valeur pour longueur et largeur
        this.nom = "carré";
    }
}

// Définition de la classe Point
class Point {
    constructor(x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }
}

// Définition de la classe Segment composée de deux instances de la classe Point
class Segment {
    constructor(origineX, origineY, extremiteX, extremiteY) {
        this.orig = new Point(origineX, origineY);
        this.extrem = new Point(extremiteX, extremiteY);
    }
}

// Programme principal

// Instanciation d'un Vecteur2D sans paramètre et avec des paramètres
let vecteurSansParam = new Vecteur2D();
let vecteurAvecParam = new Vecteur2D(3, 4);

// Affichage des vecteurs
console.log("Vecteur sans paramètre :");
vecteurSansParam.afficher();
console.log("Vecteur avec paramètres :");
vecteurAvecParam.afficher();

// Addition de deux vecteurs
let vecteurSomme = Vecteur2D.additionner(vecteurSansParam, vecteurAvecParam);
console.log("Résultat de l'addition des deux vecteurs :");
vecteurSomme.afficher();

// Instanciation d'un Rectangle et d'un Carré
let rectangle = new Rectangle(5, 3);
let carre = new Carre(4);

// Affichage des formes
console.log("Rectangle :");
rectangle.afficher();
console.log("Surface du rectangle :", rectangle.surface());
console.log("Carré :");
carre.afficher();
console.log("Surface du carré :", carre.surface());

// Instanciation d'un Segment
let segment = new Segment(1, 2, 4, 6);
console.log("Segment :");
console.log("Origine :", segment.orig.x, ",", segment.orig.y);
console.log("Extrémité :", segment.extrem.x, ",", segment.extrem.y);
