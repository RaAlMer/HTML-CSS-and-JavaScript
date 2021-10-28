let items = [
    {
        name: 'Ironhack T',
        price: 10,
        image: 'https://miro.medium.com/max/1400/1*aVsUjp1zvlRb1799gDjbLA@2x.jpeg'
    },
    {
        name: 'Ironhack Hoodie',
        price: 15,
        image: 'https://cdn.shopify.com/s/files/1/2470/6078/files/Front_2048x2048.jpg?v=1587564144'
    },
    {
        name: 'Ironhack Sticker',
        price: 2,
        image: 'https://e7.pngegg.com/pngimages/887/803/png-clipart-ironhack-web-development-job-startup-company-design-blue-user-interface-design-thumbnail.png'
    },
    {
        name: 'Ironhack Mug',
        price: 8,
        image: 'https://miro.medium.com/max/1400/1*SvD0y7NKlhJryeWwIXoO9w.jpeg'
    }
]

let cart = [];

let list = document.querySelector('#items');

items.forEach((item,i)=>{
    console.log(item.name);
    list.innerHTML += `<li>
        <div>Name: ${item.name}</div>
        <div>Price: $${item.price}</div>
        <image src="${item.image}"/>
        <input type="number" placeholder="quantity" onchange='inputChange(${i}, "${item.name}", "${item.price}", "${item.image}")'/>
        <button>Buy Item</button>
    </li>`;
})

function showCart() {
    let cartItems = document.querySelector('#cart');
    let grandTotal = 0;
    cartItems.innerHTML = '';
    cart.forEach((item,i)=>{
        grandTotal += item.price * item.quantity;
        cartItems.innerHTML += `<li>
            <div>Name: ${item.name}</div>
            <div>Quantity: ${item.quantity}</div>
            <image src="${item.image}"/>
        </li>`;
    })

    document.querySelector('#grandTotal').innerHTML = '$' +grandTotal;
}

function inputChange(i, name, price, image){
    console.log('I want to buy the ', i, ' item named, ', name, ' that costs $', price);
    let listItem = document.querySelectorAll('li')[i];
    let input = listItem.querySelector('input');
    let button = listItem.querySelector('button');

    button.onclick = function(){
        cart.push({
            quantity: input.value,
            name: name,
            price: price,
            image: image
        })
        console.log(cart);
        showCart();
    }
}
