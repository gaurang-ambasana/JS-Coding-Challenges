/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
    return properties.sort(([a1, d1], [a2, d2]) => a2 - a1 || d1 - d2).reduce(({ weak, max_d }, [attack, defence]) => {
        if (defence < max_d) weak++;
        if (defence > max_d) max_d = defence;
        return { max_d, weak };
    }, { max_d: 0, weak: 0 }).weak;
}