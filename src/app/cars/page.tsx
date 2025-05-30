import Image from "next/image";
import React from "react";

const fleet = [
  {
    id: 1,
    name: "1967 Ford Mustang",
    description: "Iconic American muscle car, perfect for cruising",
    image: "/fleet/car1.png",
  },
  {
    id: 2,
    name: "1959 Chevrolet Corvette",
    description: "Classic American sports car with timeless design",
    image: "/fleet/car2.png",
  },
  {
    id: 3,
    name: "1955 Mercedes-Benz 300SL",
    description: "Luxury grand tourer with gullwing doors",
    image: "/fleet/car3.png",
  },
  {
    id: 4,
    name: "1969 Jaguar E-Type",
    description: "British sports car known for its elegance and performance",
    image: "/fleet/car4.png",
  },
  {
    id: 5,
    name: "1965 Porsche 911",
    description: "German sports car with legendary handling",
    image: "/fleet/car5.png",
  },
  {
    id: 6,
    name: "1961 Cadillac DeVille",
    description: "American luxury car with distinctive tailfins",
    image: "/fleet/car6.png",
  },
];

const page = () => {
  return (
    <section className="container mx-auto px-4 py-12 space-y-12">
      <div>
        <h1 className="text-4xl font-bold font-serif">Our Fleet</h1>
        <p className="mt-3 text-[#8A7561] text-lg">
          Explore our collection of meticulously maintained vintage cars, each
          with its own unique story and charm.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {fleet.map((car) => (
          <div
            key={car.id}
            className="rounded-xl overflow-hidden transition hover:scale-[1.02]"
          >
            <div className="relative w-full h-60">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold text-[#8A7561]">
                {car.name}
              </h2>
              <p className="text-gray-600 text-sm">{car.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
