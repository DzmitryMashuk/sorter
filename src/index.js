class Sorter {
  constructor() {
    this.array = [];
    this.compareFunction = function(a, b) {
      return a - b;
    };
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    let temp      = this.array;
    let sortArray = [];

    indices.sort();

    indices.forEach(function(element) {
      sortArray.push(temp[element]);
    });

    sortArray.sort(this.compareFunction);

    let i = 0;
    indices.forEach(function(element) {
      temp[element] = sortArray[i++];      
    });

    this.array = temp;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;