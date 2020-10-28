// Utility function allow us to keep our files clean and orgazie
// functions that we may need in multiple files in on location

//Edw prosthetoume to quantity kathe fora pou patame panw sto button
//Add To Cart px ama patisw sto addidas 3 fores to quantity tha einai 3
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToReemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToReemove.id
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToReemove.id)
  }

  return cartItems.map(
    cartItem =>
    cartItem.id === cartItemToReemove.id ?
    { ...cartItem, quantity: cartItem.quantity -1 }
    : cartItem
  );
};