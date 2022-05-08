/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
    const acts = new Map();
  for (const n of names)
    if (!acts.has(n)) acts.set(n, 1);
    else {
      while (acts.has(`${n}(${acts.get(n)})`)) acts.set(n, acts.get(n) + 1);
      acts.set(`${n}(${acts.get(n)})`, 1);
    }
  return [...acts.keys()];
};