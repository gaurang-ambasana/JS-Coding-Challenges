class Encrypter {
    constructor (keys, values, dictionary) {
        this.encryptMap = keys.reduce((map, key, i) => (map[key] = values[i], map), {});
        this.encryptedVals = [...new Set(dictionary)].map((w) => this.encrypt(w));
    }
    
    encrypt (word) {
        return word.split(``).reduce((s, c) => s + this.encryptMap[c], ``);
    }
    
    decrypt (word) {
        return this.encryptedVals.filter((x) => x === word).length;
    }
}