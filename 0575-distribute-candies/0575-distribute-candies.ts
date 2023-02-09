function distributeCandies(candyType: number[]): number {
    const toBeEaten = candyType.length / 2, totalTypes = new Set(candyType).size;
    
    return toBeEaten >= totalTypes ? totalTypes : toBeEaten;
}