export class CoffeeMachine {
  private instruction: string = ""

  constructor(private drinkMaker: DrinkMaker) {}

  selectCoffee() {}

  addOneSugar() {}

  addTwoSugar() {}

  makeDrink() {
    this.drinkMaker.execute("C:1:0")
  }
}

export class DrinkMaker {
  execute(instruction: string) {}
}
