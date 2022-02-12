class Counter {
  count = 0;

  incrementCount() {
    this.count++;
    console.log(this.count);
  }
}

const counter1 = new Counter();
counter1.incrementCount();
counter1.incrementCount();
