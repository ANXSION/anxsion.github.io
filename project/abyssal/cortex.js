const base = document.getElementById('base');
const div = document.createElement('div');

function init(){
    base.innerHTML='';
    div.innerText='Beginning';
    base.insertAdjacentElement("beforeend", div);

    const button1 = document.createElement('button');

    button1.innerText='Next';

    button1.setAttribute('onclick', 'chapterII()');

    base.insertAdjacentElement("beforeend",button1);
}

function chapterII(){
    base.innerHTML='';
    div.innerText='Chapter II';
    base.insertAdjacentElement("beforeend", div);

    const button1 = document.createElement('button');
    const button2 = document.createElement('button');

    button1.innerText='Investigate';
    button2.innerText='Let it go';

    button1.setAttribute('onclick', 'chapterIIIA()');
    button2.setAttribute('onclick', 'chapterIIIB()');

    base.insertAdjacentElement("beforeend",button1);
    base.insertAdjacentElement("beforeend",button2);
}

init();

