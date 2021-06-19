//sum(a,b)(c,d)(e,f)
//should return a * c * e + b * d * f

const example = (a, b) => {
  return function (c, d) {
    return function (e, f) {
      return (
        Number(a) * Number(c) * Number(e) + Number(b) * Number(d) * Number(f)
      );
    };
  };
};

const res = example(1, 2)(1, 2)(3, 4); // 1 * 1 * 3 + 2 * 2 * 4 = 3 + 16 = 19
console.log(res); // -> 19
