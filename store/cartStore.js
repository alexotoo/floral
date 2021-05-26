import create from "zustand";

const useCartStore = create((set) => ({
  cartCount: 0,
  isInCart: false,
  cartItems: [],
  addToCart: (id, image, price, title) => {
    const cartItem = { id, image, price, title };

    set((state) => ({ cartItems: [...state.cartItems, cartItem] }));
  },
  removeAllBears: () => set({ bears: 0 }),
}));

export { useCartStore };
