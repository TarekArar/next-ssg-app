import Image from "next/image";

export default function Product({
  title,
  description,
  price,
  category,
  images,
}) {
  return (
    <div className="border w-64 m-2 p-2 rounded flex flex-col gap-2 cursor-pointer">
      <Image src={images[0]} width="200" height="200" alt="Product Image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="text-red">$ {price}</p>
    </div>
  );
}
