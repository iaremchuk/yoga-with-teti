import Link from "next/link";

export default function EventsPage() {
  const events = [
    {
      title: "Workshops",
      description: "Join special yoga workshops...",
      image: "/images/workshops.jpg",
      buttonText: "More Info",
      link: "/events/workshops",
    },
    {
      title: "Retreats",
      description: "Escape the city...",
      image: "/images/retreats.jpg",
      buttonText: "More Info",
      link: "/events/retreats",
    },
    {
      title: "One-to-One",
      description: "Personalised sessions...",
      image: "/images/private-lessons.jpg",
      buttonText: "Email Me",
      link: "mailto:tanianago@gmail.com",
    },
  ];

  return (
    <section className="py-16 px-4 bg-green-50 min-h-screen">
      <h2 className="text-4xl font-bold mb-12 text-center text-green-900">
        Upcoming Events
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            <div
              className="h-98 bg-cover bg-center"
              style={{ backgroundImage: `url(${event.image})` }}
            ></div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {event.description}
                </p>
              </div>

              <Link
                href={event.link}
                className="inline-block text-center bg-green-700 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-800 transition"
              >
                {event.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}