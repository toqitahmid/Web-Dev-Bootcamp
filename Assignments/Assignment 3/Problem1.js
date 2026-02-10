function newPrice(currentPrice, discount) {

  if (typeof(currentPrice) === 'string' || typeof(discount) === 'string') {
    return "Invalid";
  } 
  else {
    if (discount => 0.0 && discount <= 100.0) {

      let afterDiscount = currentPrice - (currentPrice * discount) / 100;
      return afterDiscount.toFixed(3);
    } 
    else {
      return "Invalid";
    }
  }
}

