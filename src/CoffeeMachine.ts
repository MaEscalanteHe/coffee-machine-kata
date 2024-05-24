export class CoffeeMachine {
  private instruction: string = ""

  private withTwoSugar: boolean = false

  constructor(private drinkMaker: DrinkMaker) {}

  selectCoffee() {}

  addOneSugar() {}

  addTwoSugar() {
    this.withTwoSugar = true
  }

  makeDrink() {
    this.drinkMaker.execute(`C:${this.withTwoSugar ? "2" : "1"}:0`)
  }
}

export class DrinkMaker {
  execute(instruction: string) {}
}
