import type { Retreat } from "@/app/events/retreats/page";

function formatDate(start: string, end: string) {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const startDate = new Date(start).toLocaleDateString("en-GB", options);
  const endDate = new Date(end).toLocaleDateString("en-GB", options);

  return `${startDate} – ${endDate}`;
}

export default function RetreatCard({ retreat }: { retreat: Retreat }) {
  const todayStr = new Date().toISOString().slice(0, 10);

  const isUpcoming = retreat.startDate.slice(0, 10) >= todayStr;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition">
      <h3 className="font-bold mb-6">{retreat.title}</h3>

      <p className="font-semibold mb-2">
        {formatDate(retreat.startDate, retreat.endDate)}
      </p>

      <p className="font-semibold mb-6">{retreat.location}</p>

      <p className="text-base text-gray-700 mb-4">{retreat.description}</p>

      {isUpcoming && retreat.bookingLink && (
        <a
          href={retreat.bookingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-[#C6A85C] text-white rounded-full hover:bg-[#B89A4F] transition shadow-sm hover:shadow-md"
        >
          Book Now
        </a>
      )}
    </div>
  );
}
