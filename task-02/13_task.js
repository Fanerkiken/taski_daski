const a = '234';
function ymnojaem(a) {
    let aSplit = a.split('');
    let total = 1;
    for (let i = 0; i < aSplit.length; ++i) {
        total *= aSplit[i];
    }
    console.log(total);
}
ymnojaem(a);
