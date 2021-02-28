export {}; // this file needs to be a module
declare global {

  interface String {
    isNullOrEmpty(this: string): boolean;

    fuzzyMatch(this: string, search: string): boolean;

    relevanceScore(this: string, search: string): number;
  }

  interface Number {
    randomInteger(this: Number, max: number): number;
  }

  interface Array<T> {
    shuffle(this: Array<T>): Array<T>;

    sortByRelevance(this: Array<T>, callback: (item) => number): Array<T>;

    count(this: Array<T>, callback: (item) => boolean): number;
  }

  interface Object {
    let(this: Object, callback: (it) => any): any;

    also(this: Object, callback: (it) => any): Object;
  }

}
