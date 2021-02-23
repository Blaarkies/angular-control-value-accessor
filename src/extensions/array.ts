export {}; // this file needs to be a module

Array.prototype.shuffle = function (this: Array<any>): Array<any> {
  return this
    .map(item => ({sort: Math.random(), value: item}))
    .sort((a, b) => a.sort - b.sort)
    .map(pair => pair.value);
};

Array.prototype.sortByRelevance = function (this: Array<any>, callback: (item: any) => number): Array<any> {
  return this
    .map(item => ({sort: callback(item), value: item}))
    .filter(({sort}) => sort > 0)
    .sort((a, b) => b.sort - a.sort)
    .map(pair => pair.value);
};

Array.prototype.count = function (this: Array<any>, callback: (item: any) => boolean): number {
  return this.filter(callback).length;
};
