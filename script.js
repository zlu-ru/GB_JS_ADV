"use strict";

const goods = [
  { title: "Shirt", price: 150 },
  { title: "Socks", price: 50 },
  { title: "Jacket", price: 350 },
  { title: "Shoes", price: 250 },
  { title: "Shirt", price: 150 },
  { title: "Socks", price: 50 },
  { title: "Jacket", price: 350 },
  { title: "Shoes", price: 250 },
  { title: "Shirt", price: 150 },
  { title: "Socks", price: 50 },
  { title: "Jacket", price: 350 },
  { title: "Shoes", price: 250 },
];

// ??? ПОДСКАЖИТЕ ПОЧЕМУ КАРТИНКА НЕ ВСТАВЛЯЕТСЯ - КАК НУЖНО ИЗМЕНИТЬ КОД ЧТОБ ОНА БЫЛА НА СТРАНИЦЕ ???
const renderGoodsItem = (title = "GoodItem", price = 0) => {
  return `<div class="goods-item">
            <img scr="goodImg.jpg" alt="Товар для добавления в корзину">
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="cart-button">Добавить</button>
            </div>`;
};

// вариант с исправленной запятой и рендерингом объекта
// const renderGoodsList = (list) => {
//   let goodsList = list
//     .map(({ title, price }) => renderGoodsItem(title, price))
//     .join("");
//   document.querySelector(".goods-list").innerHTML = goodsList;
// };

// оптимизированный для поштучного добавления товаров вариант
const renderGoodsList = (list) => {
  let goodsList = list.map(({ title, price }) => {
    let item = renderGoodsItem(title, price);
    document.querySelector(".goods-list").insertAdjacentHTML("beforeend", item);
  });
};

renderGoodsList(goods);
