
const form = document.querySelector('form');
const ul = document.querySelector('.todo-list');
const input = document.querySelector('input');
const button = document.querySelector('.btn-reset');
// const li = document.querySelector('li');
const addBtn = document.querySelector('.add-items-btn')
const listWrap = document.querySelector('.list-wrapper')

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));


// console.log(itemsArray)
// console.log(data)


const makeLi = text => {

    const li = document.createElement('li');
    li.className = 'todo-list-element';
    // li.textContent = text;

    const span = document.createElement('span');
    span.className = 'todo-list-element-title';
    span.textContent = text;


    const link = document.createElement('a');
    link.className = 'todo-list-element-trash';
    link.innerHTML = '<i class="fa fa-trash" ></i>';

    li.appendChild(span);
    li.appendChild(link);
    ul.appendChild(li);
    
    ulFill();

    

};

function ulFill() {
    let li = document.querySelector('li');
    let imgClass = document.querySelector('.imgClass')

    if (ul.contains(li)) {
        imgClass.style.display = 'none';
    }
};


form.addEventListener('submit', function (e) {

    e.preventDefault();
    
    if(input.value !== ''){
        itemsArray.push(input.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        addBtn.disabled = false
        makeLi(input.value);
        input.value = '';
        window.location.reload()
    }else{
        addBtn.disabled = false

    }
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
        // if(itemsArray == [] ){
        //     button.disabled = true
        // }else{
        //     button.disabled = false

        // }
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
            window.location.reload()

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

