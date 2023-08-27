import Link from "next/link";

import Product from "src/components/Product";
import { getProducts } from "src/api/products";

export async function getServerSideProps() {
  const products = await getProducts();
  const productsJSON = await products.json();

  return {
    props: { products: productsJSON.products },
  };
}

export default function Products({ products }) {
  return (
    <div className="flex justify-center flex-wrap">
      {products?.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <Product {...product} />
        </Link>
      ))}
    </div>
  );
}
