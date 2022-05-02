var numOfPairs = function(nums, target) {
    let map = {}
    let count = 0;
  
    for(const num of nums){
        if(map[num]) map[num]++
        else map[num] = 1
    }
    for(let num of nums){
        const str = target.substring(num.length)
        map[num]--
        if(target.startsWith(num) && map[str]) count += map[str]
        map[num]++
    }
    console.log(map);
    return count 
};