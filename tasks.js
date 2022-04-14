//  x and o (если их кол-во совпадает в массиве то это true, только LowerCase)
function logika(str) {
    let a = str.split('');
    const x = 'x';
    const o = 'o';
    let countX = 0;
    let countO = 0;
    for (let i = 0; i <= str.length; i++) {
        if (x === a[i]) {
            countX++
        }
        if (o === a[i]) {
            countO++
        }
    }
    if (countX === countO) {
        console.log('true');
    } else {
        console.log('false');
    }
}

// logika('xxoo');

