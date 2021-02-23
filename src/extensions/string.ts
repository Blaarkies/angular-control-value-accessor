export {}; // this file needs to be a module

String.prototype.isNullOrEmpty = function (this: string): boolean {
  return !this;
};

String.prototype.fuzzyMatch = function (this: string, search: string): boolean {
  const cleanThis = this.trim().toLowerCase();
  const cleanSearch = search.trim().toLowerCase();
  if (cleanThis.includes(cleanSearch)) {
    return true;
  }

  return cleanSearch.match(/\S+/g)
    .every(word => cleanThis.includes(word));
};

String.prototype.relevanceScore = function (this: string, search: string): number {
  const cleanThis = this.trim().toLowerCase();
  const cleanSearch = search.trim().toLowerCase();

  let relevanceScore = 0;
  relevanceScore += cleanThis.includes(cleanSearch) ? 1 : 0;

  const searchWords = cleanSearch.match(/\S+/g);
  if (searchWords) {
    relevanceScore += searchWords.count(word => cleanThis.includes(word));
  }

  return relevanceScore;
};
