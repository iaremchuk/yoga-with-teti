import { playfair } from "@/lib/fonts/fonts";
import { client } from "@/lib/sanity/sanity";
import { isFutureDate } from "@/lib/utils/date";
import type { Retreat } from "@/types/retreat";
import RetreatCard from "@/components/RetreatCard";

async function getRetreats(): Promise<Retreat[]> {
  const query = `*[_type == "retreat"] | order(startDate asc){
    _id,
    title,
    location,
    startDate,
    endDate,
    description,
    bookingLink,
    image
  }`;

  return client.fetch<Retreat[]>(query, {}, { next: { revalidate: 60 } });
}

export default async function RetreatsPage() {
  const retreats = await getRetreats();

  const upcoming: Retreat[] = [];
  const past: Retreat[] = [];

  for (const retreat of retreats) {
    if (isFutureDate(retreat.startDate)) {
      upcoming.push(retreat);
    } else {
      past.push(retreat);
    }
  }

  return (
    <main className="min-h-screen py-16 px-6 bg-[#f5f1eb] text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1
          className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12`}
        >
          Retreats
        </h1>
        {upcoming.length > 0 ? (
          <section className="mb-16">
            <h2
              className={`${playfair.className} text-3xl md:text-4xl text-center mb-12`}
            >
              Upcoming Retreats
            </h2>
            <div className="space-y-6">
              {upcoming.map((r) => (
                <RetreatCard key={r._id} retreat={r} isUpcoming />
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg italic">New retreats are coming soon.</p>
          </div>
        )}
        {past.length > 0 && (
          <section>
            <h2
              className={`${playfair.className} text-3xl md:text-4xl text-center mb-12`}
            >
              Previous Retreats
            </h2>
            <div className="space-y-6">
              {past.map((r) => (
                <RetreatCard key={r._id} retreat={r} isUpcoming={false} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
