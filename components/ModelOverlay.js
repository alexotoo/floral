import { useCartStore } from "../store/cartStore";

const ModelOverlay = ({ toggleOverlay }) => {
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  return (
    <div
      className={isCartOpen ? "overlay" : "cartModuleOut"}
      onClick={toggleOverlay}
    ></div>
  );
};

export default ModelOverlay;
