export {}; // this file needs to be a module
declare global {

  interface String {
    isNullOrEmpty(this: string): boolean;
  }

  interface Array<T> {
    shuffle(this: Array<T>): Array<T>;
  }

}
