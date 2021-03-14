export {}; // this file needs to be a module
declare global {

  interface String {
    isNullOrEmpty(this: string): boolean;

    fuzzyMatch(this: string, search: string): boolean;

    relevanceScore(this: string, search: string): number;

    let<O>(this: String, callback: (it: String) => O): O;

    also(this: String, callback: (it: String) => void): String;
  }

  interface Number {
    randomInteger(this: Number, max: number): number;

    let<O>(this: Number, callback: (it: Number) => O): O;

    also(this: Number, callback: (it: Number) => void): Number;
  }

  interface Array<T> {
    shuffle(this: Array<T>): Array<T>;

    sortByRelevance(this: Array<T>, callback: (item) => number): Array<T>;

    count(this: Array<T>, callback: (item) => boolean): number;
  }

  interface Object {
    let<T, O>(this: T, callback: (it: T) => O): O;

    also<T>(this: T, callback: (it: T) => void): T;
  }

  interface Boolean {
    toString(this: Boolean, variety?: 'yes' | 'good' | '✅'): string;

    let<O>(this: Boolean, callback: (it: Boolean) => O): O;

    also(this: Boolean, callback: (it: Boolean) => void): Boolean;
  }

}
