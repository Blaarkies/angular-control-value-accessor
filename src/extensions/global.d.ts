export {}; // this file needs to be a module
declare global {

  interface String {
    isNullOrEmpty(this: string): boolean;

    fuzzyEqual(this: string, search: string): boolean;
  }

  interface Number {
    randomInteger(this: Number, max: number): number;
  }

  interface Array<T> {
    shuffle(this: Array<T>): Array<T>;
  }

}
