export {}; // this file needs to be a module

Array.prototype.shuffle = function (this: Array<any>): Array<any> {
  return this
    .map(item => ({sort: Math.random(), value: item}))
    .sort((a, b) => a.sort - b.sort)
    .map(pair => pair.value);
};
