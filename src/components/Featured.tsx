import Image from "next/image";
import React from "react";

const cars = [
  {
    name: "1957 Roadster",
    description: "Experience the thrill of driving this iconic sports car.",
    image: "/car1.png",
  },
  {
    name: "1962 Sedan",
    description: "Travel in style and comfort in this luxurious sedan.",
    image: "/car2.png",
  },
  {
    name: "1948 Convertible",
    description: "Enjoy the open air in this beautifully restored convertible.",
    image: "/car3.png",
  },
];

const Featured = () => {
  return (
    <section>
      <h1 className="font-[notoSerif] font-bold text-2xl">Featured Cars</h1>
      <section className="py-6">
        <div className="flex md:flex-row flex-col justify-center items-center gap-10">
          {cars.map((car, index) => (
            <div key={index}>
              <Image
                src={car.image}
                alt={car.name}
                height={200}
                width={300}
                className="w-full h-60 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg text-[#D47312] font-semibold font-[notoSerif]">
                {car.name}
              </h3>
              {/* <h3 className="text-lg text-gray-700 font-semibold font-[notoSerif]">
                {car.name}
              </h3> */}
              <p className="text-sm text-gray-600 mx-auto font-[notoSerif]">
                {car.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Featured;
