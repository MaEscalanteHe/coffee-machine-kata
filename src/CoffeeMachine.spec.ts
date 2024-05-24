import { describe, it, expect, vitest } from "vitest"
import { CoffeeMachine, DrinkMaker } from "./CoffeeMachine.js"

describe(CoffeeMachine, () => {
  it("called drink maker", () => {
    const drinkMaker = new DrinkMaker()
    const drinkMakerSpy = vitest.spyOn(DrinkMaker.prototype, "execute")
    const coffeMachine = new CoffeeMachine(drinkMaker)

    coffeMachine.selectCoffee()
    coffeMachine.makeDrink()

    expect(drinkMakerSpy).toHaveBeenCalledOnce()
  })
})
