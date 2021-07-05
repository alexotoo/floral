import create from "zustand";

const useProductsStore = create((set) => ({
  products: [],

  getProducts: (products) =>
    set((state) => {
      console.log(products);
      return { products: [...products] };
    }),
}));

export { useProductsStore };
