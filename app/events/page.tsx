import { playfair } from "@/fonts/fonts";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
  const events = [
    {
      id: "upcomingEvents",
      image: "/images/upcoming-events.jpg",
      title: "Coming Up",
      button: "What's On",
      link: "/events/upcomingEvents",
    },
    {
      id: "retreats",
      image: "/images/retreats.jpg",
      title: "Retreats",
      button: "View Retreats",
      link: "/events/retreats",
    },
    {
      id: "one-to-one",
      image: "/images/one-to-one.jpg",
      title: "One to One Sessions",
      button: "Email Me",
      link: "mailto:yogawithtania.om@gmail.com",
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
              <EventCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
