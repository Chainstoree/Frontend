import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ExploreProduct = () => {
  const products = [
    {
      name: "iPhone 14 Pro Max",
      price: 0.001,
      imageUrl: "/assets/images/cart/cart1.jpg",
    },
    {
      name: "Samsung Curved Monitor",
      price: 0.001,
      imageUrl: "/assets/images/cart/cart2.jpg",
    },
    {
      name: "Starlink",
      price: 0.001,
      imageUrl: "/assets/images/cart/cart3.jpg",
    },
    {
      name: "Alienware M15 R6 Laptop",
      price: 0.001,
      imageUrl: "/assets/images/cart/cart4.jpg",
    },
    {
      name: "Smartwatch",
      price: 0.001,
      imageUrl: "/assets/images/cart/cart5.jpg",
    },
    {
      name: "Smart clear Anti-blue light",
      price: 0.001,
      imageUrl: "/assets/images/cart/cart6.jpg",
    },
  ];

  return (
    <div className="p-6">
      <Image
        src="/assets/images/product.svg"
        width={100}
        height={200}
        alt="category"
      />
      <div className="flex justify-between pt-2">
        <h1 className="font-orbitron text-3xl">Explore Our Products</h1>
      </div>
      <div className="p-6 px-10">
        <div className="grid grid-cols-3 gap-4 pt-4">
          {products.map((product, index) => (
            <div key={index} className="rounded-md shadow-lg p-4">
              <Image
                src={product.imageUrl}
                width={300}
                height={300}
                alt={product.name}
                className="rounded-md"
              />
              <h2 className="text-xl font-bold mt-4">{product.name}</h2>
              <p className="text-lg text-gray-500">Price: {product.price} ETH</p>
              <div className="flex gap-1">
                <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400"/>
                <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400"/>
                <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400"/>
                <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400"/>
                <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400"/>
                <p className="text-gray-500">(65)</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center pt-4">
            <button className="bg-[#008080] text-white p-4 rounded-sm self-center font-orbitron">View All Products</button>
        </div>
      </div>
    </div>
  );
};

export default ExploreProduct;
