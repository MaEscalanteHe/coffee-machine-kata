import { describe, expect, it, vitest } from "vitest"
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

  it("makes a coffee with a sugar", () => {
    const drinkMaker = new DrinkMaker()
    const drinkMakerSpy = vitest.spyOn(DrinkMaker.prototype, "execute")
    const coffeeMachine = new CoffeeMachine(drinkMaker)

    coffeeMachine.selectCoffee()
    coffeeMachine.addOneSugar()
    coffeeMachine.makeDrink()

    expect(drinkMakerSpy).toHaveBeenCalledWith("C:1:0")
  })

  it("makes a coffee with two sugar", () => {
    const drinkMaker = new DrinkMaker()
    const drinkMakerSpy = vitest.spyOn(DrinkMaker.prototype, "execute")
    const coffeeMachine = new CoffeeMachine(drinkMaker)

    coffeeMachine.selectCoffee()
    coffeeMachine.addTwoSugar()
    coffeeMachine.makeDrink()

    expect(drinkMakerSpy).toHaveBeenCalledWith("C:2:0")
  })

  it("makes a coffee without sugar", () => {
    const drinkMaker = new DrinkMaker()
    const drinkMakerSpy = vitest.spyOn(DrinkMaker.prototype, "execute")
    const coffeeMachine = new CoffeeMachine(drinkMaker)

    coffeeMachine.selectCoffee()
    coffeeMachine.makeDrink()

    expect(drinkMakerSpy).toHaveBeenCalledWith("C::")
  })

  it("makes a tea with two sugar", () => {
    const drinkMaker = new DrinkMaker()
    const drinkMakerSpy = vitest.spyOn(DrinkMaker.prototype, "execute")
    const coffeeMachine = new CoffeeMachine(drinkMaker)

    coffeeMachine.selectTea()
    coffeeMachine.addTwoSugar()
    coffeeMachine.makeDrink()

    expect(drinkMakerSpy).toHaveBeenCalledWith("T:2:0")
  })

  it("makes a hot chocolate without sugar", () => {
    const drinkMaker = new DrinkMaker()
    const drinkMakerSpy = vitest.spyOn(DrinkMaker.prototype, "execute")
    const coffeeMachine = new CoffeeMachine(drinkMaker)

    coffeeMachine.selectChocolate()
    coffeeMachine.makeDrink()

    expect(drinkMakerSpy).toHaveBeenCalledWith("H::")
  })
})
