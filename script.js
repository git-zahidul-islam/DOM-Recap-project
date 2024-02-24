const budget = elementNumber('budget');
const cart = elementNumber('cart');
const left = elementNumber('left');

const allBtn = document.getElementsByClassName('all-btn')
for (let btn of allBtn) {
    btn.addEventListener('click',function(event){
        console.log(event.target.parentNode.parentNode);
    })
}

// function category
function elementNumber(elementId) {
    const element = document.getElementById(elementId);
    const elementInnerText = element.innerText;
    const number = parseInt(elementInnerText);
    return number;
};