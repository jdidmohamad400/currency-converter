import React from "react";

function Result({ amount, fromCurrency, result, toCurrency }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>
        {amount} {fromCurrency} = {result} {toCurrency}
      </h3>
    </div>
  );
}

export default Result;
