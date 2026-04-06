import type { Retreat } from "@/types/retreat";
import { urlFor } from "@/lib/utils/image";
import { formatDateRange } from "@/lib/utils/date";

export default function RetreatCard({
  retreat,
  isUpcoming,
}: {
  retreat: Retreat;
  isUpcoming: boolean;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition">
      {isUpcoming && retreat.image && (
        <div className="relative mx-auto mb-6 w-full max-w-md h-56 rounded-xl overflow-hidden shadow-md">
          <img
            src={urlFor(retreat.image)
              .width(600)
              .height(400)
              .fit("crop")
              .auto("format")
              .url()}
            alt={retreat.title || "Retreat image"}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              {retreat.title}
            </h3>
            <p className="text-sm opacity-90">
              {formatDateRange(retreat.startDate, retreat.endDate)}
            </p>
            <p className="text-sm opacity-90">{retreat.location}</p>
          </div>
        </div>
      )}
      {!isUpcoming && (
        <>
          <h3 className="text-lg font-semibold mb-2">{retreat.title}</h3>
          <p className="text-sm text-gray-500">
            {formatDateRange(retreat.startDate, retreat.endDate)}
          </p>
          <p className="text-sm text-gray-500 mb-4">{retreat.location}</p>
        </>
      )}
      <p className="text-gray-700 mb-6 leading-relaxed">
        {retreat.description}
      </p>
      {isUpcoming && retreat.bookingLink && (
        <a
          href={retreat.bookingLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Book ${retreat.title} retreat`}
          className="inline-block px-6 py-3 bg-[#C6A85C] text-white rounded-full hover:bg-[#B89A4F] transition shadow-sm hover:shadow-md"
        >
          Book Now
        </a>
      )}
    </div>
  );
}
