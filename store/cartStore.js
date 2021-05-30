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
    set((state) => ({
      cartItems: [...state.cartItems, cartItem],
    })),
  cartToggler: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));

export { useCartStore };
