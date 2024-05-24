export class CoffeeMachine {
  private withStick: string = ""
  private sugarAmount: string = ""
  private drink: string = ""

  constructor(private drinkMaker: DrinkMaker) {}

  selectCoffee() {
    this.drink = "C"
  }

  selectTea() {
    this.drink = "T"
  }

  addOneSugar() {
    this.sugarAmount = "1"
    this.withStick = "0"
  }

  addTwoSugar() {
    this.sugarAmount = "2"
    this.withStick = "0"
  }

  makeDrink() {
    this.drinkMaker.execute(`${this.drink}:${this.sugarAmount}:${this.withStick}`)
  }
}

export class DrinkMaker {
  execute(instruction: string) {}
}
