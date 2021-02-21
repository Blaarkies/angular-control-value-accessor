export {}; // this file needs to be a module

Number.prototype.randomInteger = function (this: Number, max: number = 9): number {
  return Math.round(Math.random() * max);
};
