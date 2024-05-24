export class CoffeeMachine {
  private withStick: string = ""
  private sugarAmount: string = ""

  constructor(private drinkMaker: DrinkMaker) {}

  selectCoffee() {}

  addOneSugar() {
    this.sugarAmount = "1"
    this.withStick = "0"
  }

  addTwoSugar() {
    this.sugarAmount = "2"
    this.withStick = "0"
  }

  makeDrink() {
    this.drinkMaker.execute(`C:${this.sugarAmount}:${this.withStick}`)
  }
}

export class DrinkMaker {
  execute(instruction: string) {}
}
