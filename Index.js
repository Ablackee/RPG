import play from "./src/menu/play.js"
import exit from "./src/menu/exit.js"
import save from "./src/menu/save.js"
import readline from "readline"
import { Command } from "commander"

function welcome() {
  console.clear()
  console.log("Bienvenue dans le jeu !")
}

function menu() {
  console.log("1. Jouer au jeu")
  console.log("2. Sauvegarder")
  console.log("3. Quitter")
}

const program = new Command()

program.name("Jeu").description("Un jeu en ligne de commande")

program.command("jouer").alias("j").description("jouer au jeu").action(play)

program
  .command("sauvegarder")
  .alias("s")
  .description("sauvegarder la partie en cours")
  .action(save)

program.command("quitter").alias("q").description("quitter le jeu").action(exit)

welcome()
menu()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question("Entrez votre choix : ", (answer) => {
  switch (answer) {
    case "1":
      program.parse(["", "", "jouer"])

      break

    case "2":
      program.parse(["", "", "sauvegarder"])

      break

    case "3":
      program.parse(["", "", "quitter"])

      break

    default:
      console.log("Choix invalide.")

      break
  }
})

export { rl }
