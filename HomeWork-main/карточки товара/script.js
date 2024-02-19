let url = './data.json';
let json;
let response = await fetch(url);
const filters = document.querySelector('#filters');

filters.addEventListener('input', filterGoods);

if (response.ok) { // если HTTP-статус в диапазоне 200-299
  // получаем тело ответа (см. про этот метод ниже)
  json = await response.json();
  console.log(json);
} else {
  alert("Ошибка HTTP: " + response.status);
}
function filterGoods() {
    const
      year = [...filters.querySelectorAll('#year input:checked')].map(n => n.value),
  
    outputGoods(DATA.filter(n => (
      (!years.length || sizes.includes(n.year))
    )));
  }

let card_product = document.querySelector(".cards");
for (let card of json){
    card_product.innerHTML += `
    
        <div class="card">
            <div class="card__top">
                <a href="" class="card__image">
                <img
                    src="./image/${card.image}"
                    alt=""
                />
                </a>
                <button class="card__like"></button>
            </div>
            <div class="card__bottom">
                <div class="card__prices">
                <div class="card__price card__price--common">${card.price}</div>
                </div>
                <a href="" class="card__title">
                ${card.name}
                </a>
                <div class="card__but">
                <button class="card__add">В корзину</button>
                <a class="card__like" href="#" >
                    <img class="bookmarks" height="25px" src="./image/bookmark.png">
                </a>
                </div>
            </div>
        </div>
    `;

    
}
