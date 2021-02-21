export {}; // this file needs to be a module

String.prototype.isNullOrEmpty = function (this: string): boolean {
  return !this;
};

String.prototype.fuzzyEqual = function (this: string, search: string): boolean {
  const cleanThis = this.trim().toLowerCase();
  const cleanSearch = search.trim().toLowerCase();
  if (cleanThis.includes(cleanSearch)) {
    return true;
  }

  return cleanSearch.match(/\S+/g)
    .some(word => cleanThis.includes(word));
};
