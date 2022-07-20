class Encrypter {
    constructor (keys, values, dictionary) {
        this.encryptMap = keys.reduce((map, key, i) => (map[key] = values[i], map), {});
        
        this.encryptedVals = [...new Set(dictionary)].map(w => this.encrypt(w));
    }
    
    encrypt (word1) {
        return word1.split(``).reduce((s, c) => s + this.encryptMap[c], ``);
    }
    
    decrypt (word2) {
        return this.encryptedVals.filter(x => x === word2).length;
    }
}