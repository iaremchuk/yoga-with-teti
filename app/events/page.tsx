import { playfair } from "@/lib/fonts/fonts";
import Link from "next/link";

export default function EventsPage() {
  const events = [
    {
      id: "workshops",
      image: "/images/workshops.jpg",
      title: "Workshops",
      button: "View Workshops",
      link: "/workshops",
    },
    {
      id: "retreats",
      image: "/images/retreats.jpg",
      title: "Retreats",
      button: "View Retreats",
      link: "/retreats",
    },
    {
      id: "one-to-one",
      image: "/images/one-to-one.jpg",
      title: "One to One Sessions",
      button: "Email Me",
      link: "mailto:tanianago@gmail.com",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 py-16 px-6 bg-[#f5f1eb] text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h1
            className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12`}
          >
            Upcoming Events
          </h1>
          <div className="grid md:grid-cols-3 gap-10">
            {events.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center rounded-lg overflow-hidden border border-gray-200 text-center group bg-white"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-[380px] md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h2 className="mt-5 text-lg font-semibold">{item.title}</h2>
                <Link
                  href={item.link}
                  className="mt-6 mb-6 px-6 py-2 border border-gray-800 rounded-full text-sm hover:bg-stone-600 hover:text-white transition"
                >
                  {item.button}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
