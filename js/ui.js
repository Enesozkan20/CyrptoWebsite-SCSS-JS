// Arayüz elemanlarini bir arada tutan obje

import { formatMarketCap, formatPrice } from "./helpers.js";

const uiElements = {
  cardsWrapper: document.querySelector(".card-wrapper"),
  coinList: document.querySelector("#coin-list"),
};

// Loader edecek fonksiyon
const renderLoader = (outlet) => {
  outlet.innerHTML = `
   <div class="cube-spinner">
      <div class="cube-loader">
         <div class="cube-top"></div>
        <div class="cube-wrapper">
         <span style="--i:0" class="cube-span"></span>
         <span style="--i:1" class="cube-span"></span>
         <span style="--i:2" class="cube-span"></span>
         <span style="--i:3" class="cube-span"></span>
        </div>
      </div>
    </div>
      `;
};

// Trend coinleri render edecek fonksiyon
const renderTrendCoins = (coins) => {
  // Apiden alinan trend coinlerin her biri icin ekrana bir cripto karti render etsin.
  const trendsHtml = coins
    .map((coin) => {
      return `  <div class="card">
       
          <h4>${coin.rank}.</h4>
          <img src="${coin.iconUrl}" alt="coin-image" />
          <div class="info">
            <h3>${coin.name}</h3>

            <h5>${coin.symbol}</h5>
          </div>
          <p class="price">$ ${formatPrice(coin.price)}</p>
          <p class="${coin.change > 0 ? "increase" : "decrease"}">${
        coin.change
      }%</p>
        </div>
`;
    })
    .join(" ");

  uiElements.cardsWrapper.innerHTML = trendsHtml;
};

// Tüm coinleri render edecek fonksiyon
const renderAllCoins = (coins) => {
  const coinHtml = coins
    .map(
      (coin) => `  <tr>
            <td>${coin.rank}</td>
            <td><img src=${coin.iconUrl} alt="" /></td>
            <td>${coin.name}</td>
            <td>${formatMarketCap(coin.marketCap)}</td>
            <td>$ ${formatPrice(coin.price)}</td>
            <td class="change ${
              coin.change > 0 ? "change-increase" : "change-decrease"
            }">${coin.change}</td>
            <td><button>Trade</button></td>
          </tr>`
    )
    .join(" ");

  //Html i arayüze render et
  uiElements.coinList.innerHTML = coinHtml;
};

export { renderTrendCoins, renderLoader, uiElements, renderAllCoins };
