// Given a string of words, you need to find the highest scoring word.
//
//     Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
//     You need to return the highest scoring word as a string.
//
//     If two words score the same, return the word that appears earliest in the original string.
//
//     All letters will be lowercase and all inputs will be valid.

function high(x){
    const ScoreTable = ["0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];
    return x.split(" ").map(word => {
        let code = 0
        word.split("").map(letter => code += ScoreTable.indexOf(letter))
        return [word, code]
    }).sort((a,b) => b[1] - a[1])[0][0]
}

console.log(high('aa b'))