export const calculateTotalPrice = (cart) => {
    let totalPrice = 0;
  
    for (const item of cart) {
      
      if (item.productId && item.productId.price && item.quantity) {
        totalPrice += item.productId.price * item.quantity;
      }
    }
  
    return totalPrice;
  };