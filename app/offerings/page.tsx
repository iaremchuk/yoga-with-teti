export default function OfferingsPage() {
  const offerings = [
    {
      title: "Vinyasa Flow",
      description:
        "A dynamic and flowing practice that connects breath with movement to build strength and flexibility.",
      level: "All levels",
    },
    {
      title: "Hatha Yoga",
      description:
        "A slower-paced class focusing on alignment, balance, and mindful breathing.",
      level: "Beginner friendly",
    },
    {
      title: "Yin Yoga",
      description:
        "A deeply relaxing practice with longer holds to release tension and improve flexibility.",
      level: "All levels",
    },
    {
      title: "Private Sessions",
      description:
        "One-to-one personalised classes tailored to your needs, goals, and experience level.",
      level: "All levels",
    },
  ];

  return (
    <section className="py-16 px-4 bg-green-50 min-h-screen">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-green-900 mb-12">
        Offerings
      </h1>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {offerings.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              {item.title}
            </h2>

            <p className="text-sm text-green-600 mb-4">
              {item.level}
            </p>

            <p className="text-gray-700">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}