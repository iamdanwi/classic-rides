import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="container mx-auto px-2 space-y-10">
      <Hero />
      <Featured />
      <Services />
      <Testimonials />
    </main>
  );
}
