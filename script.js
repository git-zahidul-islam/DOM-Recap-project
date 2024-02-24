const budget = elementNumber('budget');
const cart = elementNumber('cart');
const left = elementNumber('left');

const allBtn = document.getElementsByClassName('all-btn')
for (let btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const name = event.target.parentNode.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
        // create element & append 
        const showingPlayerName = document.getElementById('showing-player-name');

        const div = document.createElement('div')
        div.classList.add('flex');
        div.classList.add('justify-between');

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        // text added in p tag
        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;
        // p tag append in div
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        // div append in showing
        showingPlayerName.appendChild(div);
        updateTotalCost(price);
        updateGrandTotal();
    })
}


// updateTotal cost
function updateTotalCost(value) {
    const totalCost = elementNumber('total-cost');
    const sum = totalCost + parseInt(value);
    document.getElementById('total-cost').innerText = sum;
}
// update grandtotal
function updateGrandTotal(){
    const totalCost = elementNumber('total-cost');
    document.getElementById('grand-total').innerText = totalCost;
}

// function category
function elementNumber(elementId) {
    const element = document.getElementById(elementId);
    const elementInnerText = element.innerText;
    const number = parseInt(elementInnerText);
    return number;
};