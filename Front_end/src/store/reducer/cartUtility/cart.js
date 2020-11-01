export const AddtoCart = (oldState, nextState) => {
  console.log(oldState, nextState);
  const existingCartItem = oldState.find((item) => item._id === nextState._id);

  if (existingCartItem) {
    return oldState.map((data) =>
      data._id === nextState._id
        ? { ...data, quantity: data.quantity + 1 }
        : data
    );
  } else {
    return [...oldState, { ...nextState, quantity: 1 }];
  }
};

export const addquantity = (oldState, nextState) => {
  console.log(oldState, nextState);
  const existingCartItem = oldState.find((item) => item._id === nextState._id);

  if (existingCartItem) {
    existingCartItem.quantity += 1;
    return [...oldState];
  }
};

export const removequantity = (oldState, nextState) => {
  console.log(oldState, nextState);
  const existingCartItem = oldState.find((item) => item._id === nextState._id);

  if (existingCartItem.quantity === 1) {
    oldState.filter((item) => item._id !== nextState._id);
    return [...oldState];
  } else {
    existingCartItem.quantity -= 1;
    return [...oldState];
  }
};
