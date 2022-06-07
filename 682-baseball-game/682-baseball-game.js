/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = (ops) => ops.reduce((arr, score) => {
    switch (score) {
        case "+" : {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
            return arr;
         }
                
        case "C" : {
            arr.pop();
            return arr;
        }
                
        case "D" : {
            arr.push(arr[arr.length - 1] * 2);
            return arr;
        }
                
        default : {
            arr.push(parseInt(score));
            return arr;
        }
    }
}, []).reduce((sum, n) => sum + n, 0);