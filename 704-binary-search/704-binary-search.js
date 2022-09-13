const search = (nums, target) => {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
            
        if (nums[mid] > target)
            right = --mid;
        else if (nums[mid] < target)
            left = ++mid;
        else return mid;
    }
    
    return -1;
}