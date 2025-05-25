import React from "react";
import { Heart, Wine, MapPinned } from "lucide-react";

const rentalOptions = [
  {
    title: "Wedding Rentals",
    description: "Make your special day unforgettable with a classic car.",
    icon: <Heart className="text-[#D47312] w-10 h-10 mb-4" />,
  },
  {
    title: "Event Rentals",
    description:
      "Add a touch of elegance to your event with our vintage fleet.",
    icon: <Wine className="text-[#D47312] w-10 h-10 mb-4" />,
  },
  {
    title: "Weekend Getaways",
    description:
      "Explore scenic routes in style with our weekend rental packages.",
    icon: <MapPinned className="text-[#D47312] w-10 h-10 mb-4" />,
  },
];

const Services = () => {
  return (
    <section>
      <h1 className="font-[notoSerif] text-2xl font-bold">Services Overview</h1>
      <section className="py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 font-[notoSerif]">
          {rentalOptions.map((option, index) => (
            <div
              key={index}
              className="border p-8 rounded-xl hover:shadow-md transition"
            >
              {option.icon}
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-600 text-sm">{option.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Services;
