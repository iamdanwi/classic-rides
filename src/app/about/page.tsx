import { CarFront, Heart, Shield } from "lucide-react";
import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    image: "/ethanAbout.png",
    name: "Ethan Carter",
    post: "Founder & CEO",
  },
  {
    id: 2,
    image: "/shophiaAbout.png",
    name: "Shophia Bennett",
    post: "Head of Operations",
  },
  {
    id: 3,
    image: "/liamAbout.png",
    name: "Liam Harper",
    post: "Chife Mechanics",
  },
];

const values = [
  {
    id: 1,
    icon: <CarFront size={32} />,
    title: "Preservation",
    description:
      "Maintaining the authenticity and heritage of classic automobiles",
  },
  {
    id: 2,
    icon: <Shield size={32} />,
    title: "Quality",
    description: "Ensuring the highest standards in maintenance and service",
  },
  {
    id: 3,
    icon: <Heart size={32} />,
    title: "Passion",
    description: "Sharing our love for classic cars with every customer",
  },
];

const page = () => {
  return (
    <section className="container mx-auto px-4 py-10 space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl font-serif font-semibold">
          About Classic Rides
        </h1>
        <p className="font-serif text-lg leading-relaxed text-gray-700">
          At Classic Rides, we&apo;re passionate about preserving automotive
          history and sharing the thrill of driving iconic vehicles. Our journey
          began in 2010 with a small collection of meticulously restored vintage
          cars, driven by a love for their timeless design and engineering.
          Today, we&apos;ve grown into a premier rental service, offering a
          diverse fleet of classic cars for enthusiasts and special occasions.
        </p>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-serif font-semibold">Our Mission</h1>
        <p className="font-serif text-lg leading-relaxed text-gray-700">
          Our mission is to provide unforgettable experiences by connecting
          people with the elegance and excitement of classic automobiles. We
          strive to maintain the highest standards of vehicle quality and
          customer service, ensuring every rental is a journey back in time.
        </p>
      </div>

      <div className="relative w-full h-[28rem] rounded-xl overflow-hidden shadow-md">
        <Image
          src="/about.jpg"
          alt="About Classic Rides"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-10">
        <h1 className="text-3xl font-serif font-semibold">Meet the team</h1>
        <div className="flex justify-between">
          {data.map((item) => (
            <div key={item.id} className=" space-y-7">
              <Image src={item.image} height={200} width={200} alt="image" />
              <div className="text-center text-sm ">
                <h3>{item.name}</h3>
                <p className="font-[#8A7561]">{item.post}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="font-serif text-lg leading-relaxed text-gray-700">
          Our team is comprised of dedicated professionals with a shared passion
          for classic cars. From our experienced mechanics to our knowledgeable
          customer service representatives, we&apos;re committed to making your
          rental experience exceptional.
        </p>
      </div>

      <div className="space-y-10">
        <h1 className="text-3xl font-serif font-semibold">Our Values</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.id}
              className="flex flex-col items-center space-y-4 p-6 border-2 border-gray-200 rounded-lg hover:border-[#D47312] transition-colors duration-300"
            >
              <div className="text-[#D47312]">{value.icon}</div>
              <h3 className="text-xl font-serif font-semibold">
                {value.title}
              </h3>
              <p className="text-center text-gray-600 text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
        <p>
          We are dedicated to preserving the legacy of classic cars, ensuring
          they remain in pristine condition for generations to come. We uphold
          the highest standards of quality in our vehicle maintenance and
          customer service. Our customers are at the heart of everything we do,
          and we strive to exceed their expectations.
        </p>
      </div>
    </section>
  );
};

export default page;
