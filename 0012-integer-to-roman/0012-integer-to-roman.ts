function intToRoman(num: number): string {
    const result: Array<string> = [];

	const roman: Array<string> = [`M`, `CM`, `D`, `CD`, `C`, `XC`, `L`, `XL`, `X`, `IX`, `V`, `IV`, `I`];
	const values: Array<number> = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

	for (let i = 0; num > 0; i++)
		while (num >= values[i]) {
			num -= values[i];
			result.push(roman[i]);
		}

	return result.join(``);    
}