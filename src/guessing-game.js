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
      Math.round((this.arr[this.arr[this.max]] - this.arr[this.min]) / 2) +
      this.arr[this.min]
    console.log(this.mid)
    return this.mid
    // if (this.mid === this.result) {
    //   return this.mid
    // }
    // if (this.mid > this.result) {
    //   this.lower()
    // }
    // if (this.mid < this.result) {
    //   this.greater()
    // }
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

module.exports = GuessingGame
