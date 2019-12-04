const inputEvent = document.getElementsByClassName('input_comment')[0],
    buttonEvent = document.querySelector('button'),
    divEvent = document.getElementsByClassName('input')[0],
    eventButton = document.getElementsByClassName('but')[0];



function inputName() {
    const create = document.createElement('p');
    const divEvent = document.getElementsByClassName('input')[0];
    create.className = 'par'
    create.innerHTML = "wecode_bootcamp";
    divEvent.appendChild(create);
    const createComment = document.createElement('span');
    createComment.innerHTML = inputEvent.value
    create.appendChild(createComment);
    inputEvent.value = ""
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "X"
    deleteButton.addEventListener('click', () => {
        divEvent.removeChild(create)
    })
    create.appendChild(deleteButton)
}

function inputComment(e) {
    if (e.keyCode === 13) {
        inputName();
    }
}

buttonEvent.addEventListener('click', inputName)  
inputEvent.addEventListener('keydown', inputComment)