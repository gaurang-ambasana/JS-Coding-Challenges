var reverseWords = (s: string): string => s.split(` `).map(w => w.trim()).filter(({ length }) => length).reverse().join(` `);