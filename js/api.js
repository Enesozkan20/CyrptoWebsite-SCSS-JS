class API {
  // Kururcu Metot
  constructor() {
    this.baseURL = "https://coinranking1.p.rapidapi.com";
    this.options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0b69b34586msh05de894806fa976p1d1f29jsnb3f3cdf15b46",
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      },
    };
  }

  //Trends coinler icin api istegi atacak fonksiyon
  async getTrendCoins() {
    // Api a istek at
    const response = await fetch(`${this.baseURL}/coins`, this.options);

    const data = await response.json();
    return data.data.coins.slice(0, 3);
  }

  //Tüm coinler icin api istegi atacak fonksiyon
  async getAllCoins() {
    // Api istegi at
    const response = await fetch(
      `${this.baseURL}/coins?&limit=15`,
      this.options
    );
    // js e uygun formata cevir
    const data = await response.json();

    return data.data.coins;
  }
}

export default API;
