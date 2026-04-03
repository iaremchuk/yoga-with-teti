import { playfair } from "@/lib/fonts/fonts";
import { client } from "@/lib/sanity/sanity";
import RetreatCard from "@/components/RetreatCard";

export type Retreat = {
  _id: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  bookingLink?: string;
};

async function getRetreats(): Promise<Retreat[]> {
  const query = `*[_type == "retreat"] | order(startDate asc){
    _id,
    title,
    location,
    startDate,
    endDate,
    description,
    bookingLink
  }`;

  return (
    client.fetch as <T>(
      q: string,
      params?: Record<string, unknown>,
      options?: { next?: { revalidate?: number } }
    ) => Promise<T>
  )(query, {}, { next: { revalidate: 60 } });
}

export default async function RetreatsPage() {
  const retreats = await getRetreats();

  function getTodayLocal(): string {
    const today = new Date();
    return today.toLocaleDateString("en-CA"); // YYYY-MM-DD format
  }

  const todayStr = getTodayLocal();

  const currentRetreats = retreats.filter((r) => {
    const date = r.startDate.slice(0, 10);
    return date && date >= todayStr;
  });

  const pastRetreats = retreats.filter((r) => {
    const date = r.startDate.slice(0, 10);
    return date && date < todayStr;
  });

  return (
    <main className="min-h-screen py-16 px-6 bg-[#f5f1eb] text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1
          className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12`}
        >
          Retreats
        </h1>
        {currentRetreats.length > 0 && (
          <section className="mb-16">
            <h2
              className={`${playfair.className} text-3xl md:text-4xl text-center mb-12`}
            >
              Upcoming Retreats
            </h2>

            <div className="space-y-6">
              {currentRetreats.map((r) => (
                <RetreatCard key={r._id} retreat={r} />
              ))}
            </div>
          </section>
        )}
        {currentRetreats.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg italic">New retreats are coming soon.</p>
          </div>
        )}
        {pastRetreats.length > 0 && (
          <section>
            <h2
              className={`${playfair.className} text-3xl md:text-4xl text-center mb-12`}
            >
              Previous Retreats
            </h2>

            <div className="space-y-6">
              {pastRetreats.map((r) => (
                <RetreatCard key={r._id} retreat={r} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
