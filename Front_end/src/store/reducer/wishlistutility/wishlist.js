export const AddtoWishlist = (oldState, nextState) => {
  console.log(oldState, nextState);
  const existingItem = oldState.find((item) => item._id === nextState._id);

  if (existingItem) {
    return oldState.map((data) =>
      data._id === nextState._id
        ? { ...data, quantity: data.quantity + 1 }
        : data
    );
  } else {
    return [...oldState, { ...nextState, quantity: 1 }];
  }
};
