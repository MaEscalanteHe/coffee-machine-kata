import { describe, it, expect } from "vitest"
import { CoffeMachine } from "./CoffeeMachine.js"

describe(CoffeMachine, () => {
  it("make a coffee", () => {
    let coffeMachine = new CoffeMachine()

    coffeMachine.selectCoffee()
    coffeMachine.makeDrink()
  })
})
