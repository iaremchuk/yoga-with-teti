import { client } from "@/lib/sanity";

export default async function RetreatsPage() {
  const retreats = await client.fetch(`*[_type == "retreat"]`);

  return (
    <section className="py-16 px-4 bg-green-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-900 mb-10">
        Yoga Retreats
      </h1>

      <div className="max-w-4xl mx-auto grid gap-8">
        {retreats.map((retreat: any) => (
          <div
            key={retreat._id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              {retreat.title}
            </h2>

            <p className="text-sm text-gray-500 mb-2">📅 {retreat.date}</p>

            <p className="text-sm text-gray-600 mb-4">📍 {retreat.location}</p>

            <p className="text-gray-700 mb-6">{retreat.description}</p>

            {retreat.bookingLink && (
              <a
                href={retreat.bookingLink}
                target="_blank"
                className="inline-block bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
              >
                Book Now
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
