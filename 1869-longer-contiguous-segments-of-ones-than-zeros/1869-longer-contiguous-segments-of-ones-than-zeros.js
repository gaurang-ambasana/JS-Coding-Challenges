/**
 * @param {string} s
 * @return {boolean}
 */
const checkZeroOnes = (s) => s.replaceAll(`0`, `,`).split(`,`).filter(({ length }) => length).reduce((max, { length }) => max > length ? max : length, 0) > s.replaceAll(`1`, `,`).split(`,`).filter(({ length }) => length).reduce((max, { length }) => max > length ? max : length, 0);