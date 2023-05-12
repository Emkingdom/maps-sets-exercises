// new Set([1,1,2,2,3,4]) -- ANSW Set {1,2,3,4}

// [...new Set("referee")].join("") --- ANSW Set "ref"

/*
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

ASNW
Map(2) {
    0: {[1,2,3], true}
    1:{1,2,3], false}
}

*/

const hasDuplicate = (number) => new Set(number).size !== number.length;

const isVowel = (vowel) => "aeiou".includes(vowel);

const vowelCount = (string) => {
  const vowelCounter = new Map();
  for (let char of string) {
    if (isVowel(char)) {
      vowelCounter.has(char)
        ? vowelCounter.set(char, vowelCounter.get(char) + 1)
        : vowelCounter.set(char, 1);
    }
  }
  return vowelCounter;
};
