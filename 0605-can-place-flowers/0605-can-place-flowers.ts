function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if (n === 0) return true;
    
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && flowerbed?.[i - 1] !== 1 && flowerbed?.[i+1] !== 1) {
            n--;
            flowerbed[i] = 1;
        }
        
        if (n === 0) return true;
    }
    
    return n === 0;
}