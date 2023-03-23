import main, { perso1 } from "../menu/play.js"
import { rl } from "../../Index.js"
import ennemi from "./ennemi.js"

async function fight() {
  // Création joueur
  var joueur = perso1

  // Création adversaire
  var adversaire = new ennemi()

  console.clear()
  // Affichage des statistiques des deux personnages
  console.log("\nVos statistiques :")
  joueur.afficherStatistiques()
  console.log("========================================")
  console.log("\nStatistiques de votre adversaire :")
  adversaire.afficherStatistiques()

  // Combat tour par tour jusqu'à ce qu'un personnage n'ait plus de PV
  while (joueur.pv > 0 && adversaire.pv > 0) {
    // Tour du joueur
    console.log("\n=====================")
    console.log("C'est à votre tour de jouer")
    console.log("=====================")
    var degats = joueur.getInfligerDegats()
    adversaire.pv -= degats
    console.log(
      "Vous infligez " +
        degats +
        " points de dégâts à l'adversaire " +
        adversaire.pv +
        " restant"
    )

    // Si l'adversaire est mort, sortir de la boucle
    if (adversaire.pv <= 0) {
      break
    }

    // Attendre 2 secondes avant de continuer avec le tour de l'adversaire
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Tour de l'adversaire
    console.log("\n=====================")
    console.log("C'est à votre adversaire de jouer")
    console.log("=====================")
    degats = adversaire.getInfligerDegats()
    joueur.pv -= degats
    console.log(
      "L'adversaire vous inflige " +
        degats +
        " points de dégâts " +
        joueur.pv +
        " restant "
    )
  }

  // Affichage du vainqueur
  console.log("\n=====================")

  if (joueur.pv > 0) {
    console.log("Vous avez gagné !")
    joueur.money += 100
    console.log("Vous avez gagné 100 pièces d'or !")
  } else {
    console.log("Vous avez perdu...")
  }

  // Demander au joueur s'il veut continuer à combattre ou retourner au menu
  function menu() {
    console.log("Voulez-vous combattre à nouveau ou retourner au menu ?")
    console.log("1. Combattre")
    console.log("2. Retourner au menu")
  }

  let choice = null

  while (choice !== 1 && choice !== 2) {
    menu()

    choice = await new Promise((resolve) => {
      rl.question("Entrez votre choix : ", (rep) => resolve(parseInt(rep)))
    })
  }

  switch (choice) {
    case 1:
      return fight()

    case 2:
      return main()

    default:
      console.clear()

      break
  }
}

export default fight
