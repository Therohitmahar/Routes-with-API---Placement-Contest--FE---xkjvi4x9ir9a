import React, { useState, useEffect } from "react";

function Top() {
  const [cryptoArr, setCryptoArr] = useState([]);

  useEffect(() => {
    fetch("https://api.coinlore.net/api/tickers/?start=0&limit=10")
      .then((res) => res.json())
      .then((data) => {
        return setCryptoArr(data);
      }, []);
  });
  return (
    <div className="top-container">
      <h1>Top 10 Global Crypto Coins</h1>
      <div className="display-container">
        {cryptoArr.length > 0 && (
          <div className="display-container">
            {cryptoArr.map((item) => (
              <div key={item.id} className="coin-container">
                <p className="rank-para">{item.rank}</p>
                <h3 className="coin-symbol">{item.symbol}</h3>
                <p className="price-para">{item.price_btc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Top;
