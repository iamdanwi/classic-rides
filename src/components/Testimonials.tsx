import { ThumbsUp } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sophia Bennett",
    date: "May 15, 2024",
    avatar: "/sophia.png",
    rating: 5,
    text: `Renting the 1957 Roadster for our wedding was the best decision we made. It added a touch of class and made our photos stunning!`,
    likes: 12,
  },
  {
    name: "Ethan Carter",
    date: "April 22, 2024",
    avatar: "/ethan.png",
    rating: 4,
    text: `The 1962 Sedan was perfect for our corporate event. The car was immaculate, and the service was top-notch.`,
    likes: 8,
  },
  {
    name: "Olivia Davis",
    date: "March 10, 2024",
    avatar: "/olivia.png",
    rating: 5,
    text: `We had an amazing weekend getaway with the 1948 Convertible. The car was a dream to drive, and the experience was unforgettable.`,
    likes: 15,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex text-black">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="font-[notoSerif]">
      <h2 className="text-3xl font-bold mb-10 ">What Our Customers Say</h2>
      <div className="space-y-10">
        {testimonials.map((t, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center gap-3">
              <Image
                src={t.avatar}
                width={40}
                height={40}
                className="rounded-full"
                alt={t.name}
              />
              <div>
                <h4 className="font-semibold text-[#222]">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.date}</span>
              </div>
            </div>
            <StarRating rating={t.rating} />
            <p className="text-[#333] text-sm leading-relaxed">
              &quot;{t.text}&quot;
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <ThumbsUp size={16} />
                {t.likes}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
