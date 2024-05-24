export class CoffeeMachine {
  constructor(private drinkMaker: DrinkMaker) {}

  selectCoffee() {}

  makeDrink() {
    this.drinkMaker.execute("")
  }

  addOneSugar() {}
}

export class DrinkMaker {
  execute(instruction: string) {}
}
