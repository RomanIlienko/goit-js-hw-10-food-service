import products from '../menu.json'

import menuTemp from '../templates/menu-temp.hbs'

const menuList = document.querySelector('.menu');
const menuMarkup = makeMenuMarkup(products)

function makeMenuMarkup(products) {
    return products
        .map(menuTemp)
    .join('')
}
makeMenuMarkup(products)

menuList.insertAdjacentHTML('beforeend', menuMarkup)