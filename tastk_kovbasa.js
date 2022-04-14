const a = 'жопа'
const b = 'опжа'

function anag (a,b) {
    const first = a.split('').sort();
    let secondEnd = [];
    let second = b.split('').sort();

    for (let i = 0; i < first.length; i++) {
        for (first[i] of second) {
            if (second.includes(first[i])) {
                secondEnd.push(first[i]);
                second.splice(first[i], 1);
            }
        }
    }
    if (first.length === secondEnd.length && second.length === 0) {
        console.log('true');
    } else {
        console.log('false');
    }
}

// anag(a,b);

function spliceByFaneraSecondTry (arr, index) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== index) {
            pushByFanera(newArray, arr[i]);
        }
    }
    return newArray;
}

function splitByFanera(word) {    
    const splitWord = [];
    for (let i = 0; i < word.length; i++) {
        pushByFanera(splitWord, word[i]);
    }
    return splitWord;
}

function pushByFanera(arr, elem) {
    const newArray = arr;
    const arrLength = arr.length;
    return newArray[arrLength] = elem;
}


function wada() {
    let abc = ['Привет','Здравствуйте','По приколу'];
    let imba = 'Хуй';
    let kaif = splitByFanera(imba);
    
    for (let i = 0; i < kaif.length; i++) {
        console.log(pushByFanera(abc, kaif[i]));
        console.log(abc);
    }
    // // console.log(abc.length);
    
    // // console.log(spliceByFaneraSecondTry(abc, 2));
    // console.log(abc);    
}

console.log(wada());
