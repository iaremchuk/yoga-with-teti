export const revalidate = 60;

import { playfair } from "@/fonts/fonts";
import { client } from "@/lib/sanity/sanity";
import type { Experience } from "@/types/experience";
import ExperienceCard from "@/components/ExperienceCard";
import BackButton from "@/components/BackButton";

async function getPractices(): Promise<Experience[]> {
  const query = `*[_type == "practice"] | order(_createdAt desc){
    _id,
    title,
    description,
    image,
    bookingLink
  }`;
  return (client.fetch as any)(query) as Promise<Experience[]>;
}

export default async function PracticesPage() {
  const practices = await getPractices();

  return (
    <main className="min-h-screen py-16 px-6 bg-[#f5f1eb] text-gray-800">
      <div className="max-w-4xl mx-auto">
        <BackButton href="/events" label="Back to Events" />
        <h1
          className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12`}
        >
          Practices
        </h1>
        {practices.length > 0 ? (
          <div className="space-y-8">
            {practices.map((p, index) => (
              <ExperienceCard key={p._id} data={p} isUpcoming index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg italic">New practices are coming soon.</p>
          </div>
        )}
      </div>
    </main>
  );
}
