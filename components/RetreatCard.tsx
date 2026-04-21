import type { Retreat } from "../app/types/retreat";
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
    <div className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 h-64 md:h-auto">
          <img
            src={urlFor(retreat.image)
              .width(600)
              .height(400)
              .fit("crop")
              .auto("format")
              .url()}
            alt={retreat.title || "Retreat image"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex flex-col md:w-1/2">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">{retreat.title}</h3>
            <p className="text-sm text-gray-500">
              {formatDateRange(retreat.startDate, retreat.endDate)}
            </p>
            <p className="text-sm text-gray-500 mb-4">{retreat.location}</p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {retreat.description}
            </p>
          </div>
          {isUpcoming && retreat.bookingLink && (
            <a
              href={retreat.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Book ${retreat.title} retreat`}
              className="w-fit mx-auto px-6 py-3 bg-[#7A8F7C] text-white rounded-full hover:bg-[#596B59] transition shadow-sm hover:shadow-md"
            >
              Learn more & book
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
