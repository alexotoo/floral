import { SimpleGrid } from "@chakra-ui/layout";
import ProductItem from "./ProductItem";

const ProductList = ({ products, type }) => {
  const allProducts = products
    .map((product) => {
      const { id } = product.sys;
      const { description, isInStock, price, title, type } = product.fields;
      const image = product.fields.image.fields.file.url;
      return { id, description, isInStock, price, title, type, image };
    })
    .filter((typedItem) => typedItem.type === type);

  return (
    <SimpleGrid minChildWidth="200px" spacing="20px">
      {allProducts.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </SimpleGrid>
  );
};

export default ProductList;
