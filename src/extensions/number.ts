export {}; // this file needs to be a module

Number.prototype.randomInteger = function (this: Number, max: number = 9): number {
  return Math.round(Math.random() * max);
};

Number.prototype.let = function (this: Number, callback: (it) => any): any {
  return callback(this);
};

Number.prototype.also = function (this: Number, callback: (it) => void): Number {
  callback(this);
  return this;
};
