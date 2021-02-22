
const form = document.querySelector('form');
const ul = document.querySelector('.todo-list');
const input = document.querySelector('input');
const button = document.querySelector('.btn-reset');
// const li = document.querySelector('li');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));


// console.log(itemsArray)
// console.log(data)



const makeLi = text => {
    //create li element 
    const li = document.createElement('li');

    //add class
    li.className = 'todo-list-element';

    //append text
    li.textContent = text;

    //create an a href element
    const link = document.createElement('a');

    //add class
    link.className = 'todo-list-element-trash';

    //inner HTML
    link.innerHTML = '<i class="fa fa-trash" ></i>';

    //append to li
    li.appendChild(link);

    //append to ul
    ul.appendChild(li);

    // console.log(li)
    ulFill()

};

function ulFill() {
    let li = document.querySelector('li');
    let imgClass = document.querySelector('.imgClass')

    if (ul.contains(li)) {
        imgClass.style.display = 'none';
    }
};

function addCond(){
    let link = document.createElement('a');

    let li = document.querySelector('li');
    if(makeLi(input.value) < 0){
        form.disabled()
    }
}

form.addEventListener('submit', function (e) {

    e.preventDefault();
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    makeLi(input.value);
    input.value = '';
    window.location.reload()
});




data.forEach(item => {
    // console.log(item)
    makeLi(item);
    ul.addEventListener('click', removeItem)
});


button.addEventListener('click', function () {
    if (confirm('Are you sure ? ')) {

        localStorage.clear();
        itemsArray = [];
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }
});


function removeItem(e) {

    e.preventDefault();
    // console.log(e.target)

    if (e.target.parentElement.classList.contains('todo-list-element-trash')) {
        if (confirm('Are you sure ? ')) {
            e.target.parentElement.parentElement.remove();

        }
        removeFromStorage(e.target.parentElement.parentElement);
    }


};

function removeFromStorage(liItem) {
    // console.log(liItem);
    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

    itemsArray.forEach(function (singleElement, index) {
        console.log(singleElement, index)

        if (liItem.textContent === singleElement) {
            itemsArray.splice(index, 1);
        }
    });
    // console.log(itemsArray)
    localStorage.setItem('items', JSON.stringify(itemsArray));
};

