import getRandomNumber from "../outils/getRandomNumber.js"

function perso() {
  this.pv = 2000
  this.intelligence = getRandomNumber(50, 200)
  this.force = getRandomNumber(50, 200)
  this.agilite = 20
  this.money = 0

  // calculer si le perso réussit un coup critique
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
    console.log("Vos points de vie sont 🏋️‍♂️: " + this.pv)
    console.log("Votre intelligence est de 👨‍🎓: " + this.intelligence)
    console.log("Votre force est de 💪 : " + this.force)
    console.log("Votre agilité est de 🤺: " + this.agilite + "%")
    console.log("Vous avez " + this.money + " pièces d'or 🪙")
  }
}

export default perso
