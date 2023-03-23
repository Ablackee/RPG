import play, { perso1 } from "../menu/play.js"
import { rl } from "../../Index.js"

function welcome() {
  console.clear()
  console.log("Bienvenue dans la boutique!")
}

function menu() {
  console.log("que puis-je pour vous :")
  console.log("1. plus de vie (10pv = 10 pièces d'or))")
  console.log("2. plus de force (10 = 10 pièces d'or)")
  console.log("3. plus dinelligence (10 = 10 pièces d'or)")
  console.log("4. plus d'agilité (10 = 10 pièces d'or)")
  console.log("5. quitter")
}

async function shop() {
  welcome()
  perso1.afficherStatistiques()

  let choice = null // initialiser la variable choice à null

  while (choice < 1 || choice > 5) {
    menu()

    choice = await new Promise((resolve) => {
      rl.question("Entrez votre choix : ", (rep) => resolve(parseInt(rep)))
    })
  }

  switch (choice) {
    case 1:
      if (perso1.money < 10) {
        console.log("vous n'avez pas assez d'argent")

        return shop()
      } else if (perso1.money >= 10) {
        perso1.pv += 10
        perso1.money -= 10
      }

      return shop()

    case 2:
      if (perso1.money < 10) {
        console.log("vous n'avez pas assez d'argent")

        return shop()
      } else if (perso1.money >= 10) {
        perso1.force += 10
        perso1.money -= 10
      }

      return shop()

    case 3:
      if (perso1.money < 10) {
        console.log("vous n'avez pas assez d'argent")

        return shop()
      } else if (perso1.money >= 10) {
        perso1.intelligence += 10
        perso1.money -= 10
      }

      return shop()

    case 4:
      if (perso1.money < 10) {
        console.log("vous n'avez pas assez d'argent")

        return shop()
      } else if (perso1.money >= 10) {
        perso1.agilite += 10
        perso1.money -= 10
      }

      return shop()

    default:
      console.log("Au revoir !")

      return play()
  }
}

export default shop
