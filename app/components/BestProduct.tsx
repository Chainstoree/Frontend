import Image from "next/image";

const BestProduct = () => {
  const imageUrl = [
    "/assets/images/category1.jpg",
    "/assets/images/category2.jpg",
    "/assets/images/category3.jpg",
  ];

  return (
    <div className="p-6">
      <Image
        src="/assets/images/month.svg"
        width={100}
        height={200}
        alt="category"
      />
      <div className="flex justify-between pt-2">
        <h1 className="font-orbitron text-3xl">Best Selling Products</h1>
        <Image
          src="/assets/images/Button.svg"
          width={100}
          height={100}
          alt="category"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 pt-4">
        {imageUrl.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={300}
            height={300}
            alt={`category_${index + 1}`}
            className="rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default BestProduct;
