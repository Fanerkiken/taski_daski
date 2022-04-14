let str = 'abcde';
const searchLiteral = ['a', 'b', 'e']

function filter(array, searchLiteral) {
    const newStr = [];
    const arraySplit = array.split('');
    for (let checkLiteral of arraySplit) {
        if (searchLiteral.includes(checkLiteral)) {
            newStr.push(checkLiteral);
            continue;
        }
    }
    console.log(newStr);
}
filter(str, searchLiteral);
