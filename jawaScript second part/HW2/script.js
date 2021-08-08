"use strict"
class Products {
    constructor(title, price, img = 'img/unnamed.png') {
        this.title = title
        this.price = price
        this.img = img
    }
    render() {
        return `<div class="product-item">
                <h3  class="h">${this.title}</h3>
                <p class="p">${this.price}</p>
                <img class="product-foto" src ='${this.img}'>
                 <button class="by-btn">Добавить</button>
                </div>`

    }
}

class GoodList {
    constructor() {
        this.goods = []
    }
    fetchGoods() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 1000 },
            { id: 2, title: 'Mouse', price: 100 },
            { id: 3, title: 'Keyboard', price: 250 },
            { id: 4, title: 'Gamepad', price: 150 },

        ];
    }
    callc(a) {

        return a.reduce(function (a, b) {
            return a + b.price

        }, 0)
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new Products(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.products').innerHTML = listHtml;

    }
}
const list = new GoodList();
list.fetchGoods();
list.callc(list.goods)
list.render();

class Bascet {
    constructor() {
        this.price = price
    }
    append(){

    }//метод добавления товара в корзину
    del(){

    }//метод удаления из корзины
    summ(){

    }//метод подсчета товаров в корзине
}





class ListBascet extends Bascet {
    generItem(){

    } //генерация карточки товара
}