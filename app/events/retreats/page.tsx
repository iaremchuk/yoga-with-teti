export const revalidate = 60;

import { playfair } from "@/fonts/fonts";
import { client } from "@/lib/sanity/sanity";
import { isFutureDate } from "@/lib/utils/date";
import type { Experience } from "@/types/experience";
import ExperienceCard from "@/components/ExperienceCard";
import BackButton from "@/components/BackButton";

async function getRetreats(): Promise<Experience[]> {
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
  return (client.fetch as any)(query) as Promise<Experience[]>;
}

export default async function RetreatsPage() {
  const retreats = await getRetreats();
  const upcoming: Experience[] = [];
  const past: Experience[] = [];

  for (const retreat of retreats) {
    if (retreat.startDate && isFutureDate(retreat.startDate)) {
      upcoming.push(retreat);
    } else {
      past.push(retreat);
    }
  }

  return (
    <main className="min-h-screen py-16 px-6 bg-[#f5f1eb] text-gray-800">
      <div className="max-w-4xl mx-auto">
        <BackButton href="/events" label="Back to Events" />
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
            <div className="space-y-8">
              {upcoming.map((r, index) => (
                <ExperienceCard key={r._id} data={r} isUpcoming index={index} />
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg italic">
              We are preparing new retreat experiences.
            </p>
          </div>
        )}
        {past.length > 0 && (
          <section>
            <h2
              className={`${playfair.className} text-3xl md:text-4xl text-center mb-12`}
            >
              Previous Retreats
            </h2>
            <div className="space-y-8">
              {past.map((r, index) => (
                <ExperienceCard
                  key={r._id}
                  data={r}
                  isUpcoming={false}
                  index={index}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
