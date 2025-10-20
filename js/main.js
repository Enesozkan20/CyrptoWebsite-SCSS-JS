import API from "./api.js";
import {
  renderAllCoins,
  renderLoader,
  renderTrendCoins,
  uiElements,
} from "./ui.js";

// Api classindan bir örnek al
const api = new API();

document.addEventListener("DOMContentLoaded",async () => {
  // Loaderi render et
  renderLoader(uiElements.cardsWrapper);
  // Api'a istek at
  api.getTrendCoins().then((trendCoins) => {
    renderTrendCoins(trendCoins);
  });
});

const allCoins = await api.getAllCoins();

renderAllCoins(allCoins);

