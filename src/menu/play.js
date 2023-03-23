import fight from "../game/fight.js"
import shop from "../game/shop.js"
import save from "./save.js"
import exit from "./exit.js"
import { rl } from "../../Index.js"
import perso from "../game/perso.js"

function welcome() {
  console.clear()
  console.log("Votre perso!")
  console.log("\n=====================================")
}

export var perso1 = new perso()

function menu() {
  console.log("Options :")
  console.log("1. Jouer")
  console.log("2. Aller au magasin")
  console.log("3. Sauvegarder")
  console.log("4. Quitter")
}

async function main() {
  welcome()

  let choice = null // initialiser la variable choice à null

  while (choice < 1 || choice > 4) {
    perso1.afficherStatistiques()
    console.log("\n=====================================")
    menu()

    choice = await new Promise((resolve) => {
      rl.question("Entrez votre choix : ", (rep) => resolve(parseInt(rep)))
    })
  }

  switch (choice) {
    case 1:
      return fight()

    case 2:
      return shop()

    case 3:
      return save()

    default:
      console.log("Au revoir !")

      return exit()
  }
}

export default main
