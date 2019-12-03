const inputEvent = document.getElementsByClassName('input_comment')[0],
    buttonEvent = document.querySelector('button'),
    divEvent = document.getElementsByClassName('input')[0];


function inputName() {
    const create = document.createElement('p')
    create.innerHTML = "wecode_bootcamp";
    create.className = "par";
    divEvent.appendChild(create);
    const createComment = document.createElement('span');
    createComment.innerHTML = inputEvent.value
    create.appendChild(createComment);
    inputEvent.value = ""
}

function inputComment(e) {
    if (e.keyCode === 13) {
        inputName();
    }
}

buttonEvent.addEventListener('click', inputName)

inputEvent.addEventListener('keydown', inputComment)