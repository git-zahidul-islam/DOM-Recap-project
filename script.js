const budget = elementNumber('budget');
const cart = elementNumber('cart');
const left = elementNumber('left');

const allBtn = document.getElementsByClassName('all-btn')
for (let btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const name = event.target.parentNode.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
        // color & disabled
        event.target.setAttribute("disabled",false)
        
        // valid card
        if (elementNumber('cart') + 1 > 6) {
            alert("you can't click")
            return;
        }
        event.target.parentNode.parentNode.style.backgroundColor = 'green';
        
        // budget change , cart & left
        const budget = elementNumber('budget')
        document.getElementById('budget').innerText = budget - parseInt(price);
        
        const cartCount = elementNumber('cart')
        document.getElementById('cart').innerText = cartCount + 1;

        const leftCount = elementNumber('left')
        document.getElementById('left').innerText = leftCount - 1;


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
function updateGrandTotal(status) {
    const totalCost = elementNumber('total-cost');
    if (status === undefined) {
        document.getElementById('grand-total').innerText = totalCost;
    }
    else {
        const couponCode = document.getElementById('coupon').value;
        if(couponCode === "Love 20"){
            const discountCoupon = totalCost * 0.20
            const discount = totalCost - discountCoupon;
            document.getElementById('grand-total').innerText = discount;
        }else{
            alert('invalid')
        }
    }

}

// function category
function elementNumber(elementId) {
    const element = document.getElementById(elementId);
    const elementInnerText = element.innerText;
    const number = parseInt(elementInnerText);
    return number;
};