function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.increaseBtn = this.counter.querySelector(".increase");
  this.decreaseBtn = this.counter.querySelector(".decrease");
  this.resetBtn = this.counter.querySelector(".reset");
  this.valueDOM = this.counter.querySelector(".value");
  this.valueDOM.textContent = this.value;

  this.increaseBtn.addEventListener("click", () => {
    this.value++;
    this.valueDOM.textContent = this.value;
  });
}

const firstCounter = new Counter(getElement(".first-counter"), 100);

const secondCounter = new Counter(getElement(".second-counter"), 300);

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`Please check ${selection} selector, no such element.`);
}
