class GuessingGame {
  arr = []

  mid
  min
  max
  constructor() {}
  setRange(min, max) {
    for (let i = min; i <= max; i++) {
      this.arr.push(i)
    }
    this.min = min
    this.max = max
  }
  guess() {
    console.log(this.min)
    console.log(this.mid)
    console.log(this.max)
    this.mid =
      Math.floor((this.arr[this.arr[this.max - 1]] - this.arr[this.min]) / 2) +
      this.arr[this.min]
    console.log(this.mid)
    return this.mid
  }

  lower() {
    this.max = this.mid
    console.log(this.min)
    console.log(this.mid)
    console.log(this.max)
    this.guess()
  }

  greater() {
    this.min = this.mid

    console.log(this.min)
    console.log(this.mid)
    console.log(this.max)
    this.guess()
  }
}

const number = 18
const game = new GuessingGame()
game.setRange(0, 5442)

let result = game.guess()
game.lower()
result = game.guess()
game.lower()
result = game.guess()
game.lower()
result = game.guess()
game.lower()
result = game.guess()
game.lower()
result = game.guess()
game.lower()
result = game.guess()
game.lower()
result = game.guess()
game.lower()
result = game.guess()
game.greater()
result = game.guess()
game.greater()
result = game.guess()
game.lower()
result = game.guess()
game.lower()
result = game.guess()

// expect(result).to.equal(number)
