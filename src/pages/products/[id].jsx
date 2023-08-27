import { getProducts, getSingleProduct } from "@/api/products";
import Image from "next/image";
import { useState } from "react";

export async function getStaticPaths() {
  const products = await getProducts();
  const productsJSON = await products.json();

  const paths = productsJSON.products.map((product) => ({
    params: { id: `${product.id}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = await getSingleProduct(params.id);

  const productJSON = await product.json();

  return {
    props: { ...productJSON },
  };
}

export default function SingleProduct({ title, description, images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => setCurrentImageIndex((c) => (c + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((c) => (c == 0 ? 0 : c - 1));

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center gap-5 border">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="flex gap-4">
        <button onClick={prevImage}>prev</button>
        <Image
          src={images[currentImageIndex]}
          width={300}
          height={300}
          alt={`${title} product image`}
        />
        <button onClick={nextImage}>next</button>
      </div>
    </div>
  );
}
