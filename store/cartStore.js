import create from "zustand";

const useCartStore = create((set) => ({
  isInCart: false,
  isCartOpen: false,
  cartItems: [],

  getInitialCartItems: (initialCartItems) =>
    set((state) => ({
      cartItems: [...initialCartItems],
    })),

  addToCart: (cartItem) =>
    set((state) => {
      if (!state.cartItems.length) {
        localStorage.setItem(
          "grandmaCartItems",
          JSON.stringify([...state.cartItems, cartItem])
        );
        state.cartToggler();
        return { cartItems: [...state.cartItems, cartItem] };
      } else if (state.cartItems.length > 0) {
        const checkItemIsInCart = state.cartItems.find(
          (item) => item.id === cartItem.id
        );
        if (checkItemIsInCart === undefined) {
          localStorage.setItem(
            "grandmaCartItems",
            JSON.stringify([...state.cartItems, cartItem])
          );
          state.cartToggler();
          return { cartItems: [...state.cartItems, cartItem] };
        } else {
          console.log("item in cart already");
        }
      } else {
        return;
      }
      state.cartToggler();
    }),

  removeItemFromCart: (id) =>
    set((state) => {
      const filtedItems = state.cartItems.filter((item) => item.id !== id);

      localStorage.setItem("grandmaCartItems", JSON.stringify(filtedItems));

      return { cartItems: [...filtedItems] };
    }),

  findCartItemIndexAndUpdate: (updated, id) =>
    set((state) => {
      const getItemIndex = (item) => item.id === id;
      const cartItemsClone = [...state.cartItems];
      const itemIndex = cartItemsClone.findIndex(getItemIndex);
      cartItemsClone.splice(itemIndex, 1, updated);
      localStorage.setItem(
        "grandmaCartItems",
        JSON.stringify([...cartItemsClone])
      );
      return { cartItems: [...cartItemsClone] };
    }),

  updateQty: (id, type) =>
    set((state) => {
      const findItemQty = state.cartItems.find((item) => item.id === id);

      if (type === "inc" && findItemQty.qty >= 1) {
        const updated = { ...findItemQty, qty: (findItemQty.qty += 1) };
        state.findCartItemIndexAndUpdate(updated, id);
      } else if (type === "dec" && findItemQty.qty >= 2) {
        const updated = { ...findItemQty, qty: (findItemQty.qty -= 1) };
        state.findCartItemIndexAndUpdate(updated, id);
      }
    }),
  cartToggler: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));

export { useCartStore };
