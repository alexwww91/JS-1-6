var goods = [
    {
        id: 1,
        name: "Телефон",
        img: "img/phone.jpg",
        price: 2000
    },
    {
        id: 2,
        name: "Пылесос",
        img: "img/vacuum.jpg",
        price: 3000
    },
    {
        id: 3,
        name: "Холодильник",
        img: "img/refrigerator.jpg",
        price: 10000
    }
]

for (var good of goods) {
    var goodCard = document.createElement("div");
    goodCard.classList.add("good_card");
    goodCard.id = "good_card_" + good.id;
    document.querySelector(".goods").append(goodCard);

    var goodImg = document.createElement("img");
    goodImg.src = good.img;
    goodImg.classList.add("good_card_img");
    goodCard.append(goodImg);

    var goodName = document.createElement("div");
    goodName.classList.add("good_card_name");
    goodName.innerHTML = good.name;
    goodCard.append(goodName);

    var goodPrice = document.createElement("div");
    goodPrice.classList.add("good_card_price");
    goodPrice.innerHTML = good.price;
    goodCard.append(goodPrice);

    var goodAddToCart = document.createElement("button");
    goodAddToCart.classList.add("good_card_button");
    goodAddToCart.innerHTML = "Добавить в корзину";
    goodAddToCart.id = "good_card_button_" + good.id;
    goodAddToCart.addEventListener("click", addToCart);
    goodAddToCart.addEventListener("click", addToCartCount);
    goodCard.append(goodAddToCart);
}

function addToCart(e) {
    var goodCardOnCartID = this.id;
    var goodCardOnCartIDArr = goodCardOnCartID.split('_');

    var goodCardOnCart = document.createElement("div");
    goodCardOnCart.classList.add("good_on_cart");
    goodCardOnCart.id = "good_on_cart_" + goodCardOnCartIDArr[3];
    document.querySelector(".cart").append(goodCardOnCart);

    var goodCardOnCartImg = document.createElement("img");
    goodCardOnCartImg.src = goods[goodCardOnCartIDArr[3] - 1].img;
    goodCardOnCartImg.classList.add("good_on_card_img");
    goodCardOnCart.append(goodCardOnCartImg);

    var goodCardOnCartName = document.createElement("div");
    goodCardOnCartName.classList.add("good_on_card_name");
    goodCardOnCartName.innerHTML = goods[goodCardOnCartIDArr[3] - 1].name;
    goodCardOnCart.append(goodCardOnCartName);

    var goodCardOnCartPrice = document.createElement("div");
    goodCardOnCartPrice.classList.add("good_on_card_price");
    goodCardOnCartPrice.innerHTML = goods[goodCardOnCartIDArr[3] - 1].price;
    goodCardOnCart.append(goodCardOnCartPrice);

    var goodCardOnCartCount = document.createElement("div");
    goodCardOnCartCount.classList.add("good_on_cart_count");
    goodCardOnCartCount.id = "good_on_cart_count_" + goodCardOnCartIDArr[3];
    goodCardOnCartCount.innerHTML = 0;
    goodCardOnCart.append(goodCardOnCartCount);

    var goodCardOnCartSum = document.createElement("div");
    goodCardOnCartSum.classList.add("good_on_cart_sum");
    goodCardOnCartSum.id = "good_on_cart_sum_" + goodCardOnCartIDArr[3];
    goodCardOnCartSum.innerHTML = 0;
    goodCardOnCart.append(goodCardOnCartSum);

    e.target.removeEventListener("click", addToCart);
}

function addToCartCount() {
    var goodCardOnCartID = this.id;
    var goodCardOnCartIDArr = goodCardOnCartID.split('_');
    var total = [];

    var count = +document.getElementById('good_on_cart_count_' + goodCardOnCartIDArr[3]).innerHTML;
    var goodPrice = goods[goodCardOnCartIDArr[3] - 1].price;
    document.getElementById('good_on_cart_count_' + goodCardOnCartIDArr[3]).innerHTML = ++count;
    document.getElementById('good_on_cart_sum_' + goodCardOnCartIDArr[3]).innerHTML = count * goodPrice;

    var goodCardOnCartTotal = document.querySelector(".total");
    var totals = document.getElementsByClassName('good_on_cart_sum');

    for (var item of totals) {
        total.push(+item.innerHTML);
    }

    var result = total.reduce(function (sum, current) {
        return sum + current;
    }, 0);
    console.log(result);

    goodCardOnCartTotal.remove();
    var totalBlock = document.createElement("div");
    totalBlock.innerHTML = result;
    totalBlock.classList.add("total");
    document.querySelector(".cart").after(totalBlock);
}