import create from "zustand";

const useProductsStore = create((set) => ({
  products: [],
  productDetails: [],

  getProducts: (products) =>
    set((state) => {
      return { products: [...products] };
    }),
  // getProductDetails: () =>
  //   set((state) => {
  //     const initialCartItems = JSON.parse(
  //       localStorage.getItem("grandmaProductDetails")
  //     );
  //     return { productDetails: initialCartItems };
  //   }),
}));

export { useProductsStore };
