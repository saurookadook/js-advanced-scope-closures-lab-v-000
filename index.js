function produceDrivingRange (blockRange) {
  return function(start, end) {
    start = start.slice(0, -2);
    end = end.slice(0, -2);
    blocks = end - start;
    if (blocks <= blockRange) {
      return `within range by ${blockRange - blocks}`;
    } else {
      return `${blocks - blockRange} blocks out of range`;
    }
  }
}

function produceTipCalculator (percent) {
  return function(price) {
    return price * percent;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
