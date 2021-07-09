//sum(a,b)(c,d)(e,f)
//should return a * c * e + b * d * f

//higher order function.. returns 3 times
const example = (a, b) => {
  return (c, d) => {
    return (e, f) => {
      return (
        Number(a) * Number(c) * Number(e) + Number(b) * Number(d) * Number(f)
      );
    };
  };
};

const res = example(1, 2)(1, 2)(3, 4); // 1 * 1 * 3 + 2 * 2 * 4 = 3 + 16 = 19
console.log(res); // -> 19
