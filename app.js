const title = document.getElementById('para');
const content = document.getElementById('textarea');
const box = document.getElementById('notes_container');
let i = 1;
let editing = false;
let toEdit = null;
const editMe = (id) => {
    editing = true;
    toEdit = id;
    const contentArray = document.getElementsByClassName(id);
    console.log(contentArray[1]);
    title.value = contentArray[0].innerText;
    content.value = contentArray[1].innerText;
}

const deleteMe = (id) => {
    box.removeChild(document.getElementById(id));
}

const getData = () => {
    console.log(editing);
    if(title.value.length === 0){
        alert('PLEASE ENTER THE TITLE.');
        return;
    }
    if(content.value.length === 0){
        alert('PLEASE ENTER THE CONTENT.');
        return;
    }
    if(!editing){
    const cardNode = document.createElement('div');
    cardNode.classList.add('card_container');
    cardNode.id = i;
    const htmlData = `
    <div id="card_title" class=${i}>${title.value}</div>
        <div id="card_content" class=${i}>${content.value}</div>
        <div id="card_buttons">
            <button type="button" id="edit" onclick=editMe(${i})><img src="https://www.freeiconspng.com/thumbs/edit-icon-png/edit-editor-pen-pencil-write-icon--4.png" alt="add" height="25px"></button>
            <button type="button" id="delete" onclick=deleteMe(${i})><img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="add" height="25px"></button>
        </div>
    `
    cardNode.insertAdjacentHTML('afterbegin', htmlData);
    box.appendChild(cardNode);
    i++;
    title.value = "";
    content.value = "";
    }else{
        deleteMe(toEdit);
        const cardNode = document.createElement('div');
        cardNode.classList.add('card_container');
        cardNode.id = toEdit;
        const htmlData = `
        <div id="card_title" class=${toEdit}>${title.value}</div>
        <div id="card_content" class=${toEdit}>${content.value}</div>
        <div id="card_buttons">
            <button type="button" id="edit" onclick=editMe(${toEdit})><img src="https://www.freeiconspng.com/thumbs/edit-icon-png/edit-editor-pen-pencil-write-icon--4.png" alt="add" height="25px"></button>
            <button type="button" id="delete" onclick=deleteMe(${toEdit})><img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="add" height="25px"></button>
        </div>
    `
    cardNode.insertAdjacentHTML('afterbegin', htmlData);
    box.appendChild(cardNode);
    editing=false;
    toEdit=null;
    title.value = "";
    content.value = "";
    }
}