import { playfair } from "@/lib/fonts/fonts";
import OfferingCard from "@/components/OfferingCard";

export default function OfferingsPage() {
  const offerings = [
    {
      id: "dharma",
      image: "/images/dharma.jpg",
      title: "Dharma Yoga",
      description:
        "A dynamic and powerful practice combining strength, balance, and deep awareness.",
    },
    {
      id: "breathework",
      image: "/images/breathwork.jpg",
      title: "Breathwork and Meditation",
      description:
        "Guided breath practices and meditation to calm the nervous system and deepen awareness.",
    },
    {
      id: "nidra",
      image: "/images/nidra.jpg",
      title: "Yin • Restorative yoga • Nidra",
      description:
        "Slow, nourishing practices designed to restore the body, release tension, and support deep rest.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 py-16 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h1
            className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12`}
          >
            Offerings
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((item) => (
              <OfferingCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
