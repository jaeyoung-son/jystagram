const logIn = document.getElementsByClassName('logV')[0];
const pw = document.getElementsByClassName('pwV')[0];
const changeCol = document.querySelector('button');
function changeColor() {
    if (pw.value.length >= 1 && logIn.value.length >= 1) {
    changeCol.style.backgroundColor = 'blue';
    } else {
        changeCol.style.backgroundColor = '#C6E0FA';
    };
}
pw.addEventListener('keyup', function() {
    changeColor();
})

logIn.addEventListener('keyup', function() {
    changeColor();
})