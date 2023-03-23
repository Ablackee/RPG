import getRandomNumber from "../outils/getRandomNumber.js"

function ennemi() {
  this.pv = 1000
  this.intelligence = getRandomNumber(50, 150)
  this.force = getRandomNumber(50, 150)
  this.agilite = 20

  // calculer si le ennemi réussit un coup critique
  this.getCoupCritique = function () {
    return Math.floor(Math.random() * 100) < this.agilite ? true : false
  }

  // calculer les dégâts infligés
  this.getInfligerDegats = function () {
    var degats = this.force

    if (this.getCoupCritique()) {
      degats = degats * 1.5 // Coup critique inflige 50% de dégâts en plus
    }

    return degats
  }

  // afficher les statistiques
  this.afficherStatistiques = function () {
    console.log("Points de vie sont 🕺🏿: " + this.pv)
    console.log("Intelligence est de 👩🏾‍💻: " + this.intelligence)
    console.log("Force est de 🏋🏿‍♂️: " + this.force)
    console.log("Agilité est de 🥷🏾: " + this.agilite + "%")
  }
}

export default ennemi
