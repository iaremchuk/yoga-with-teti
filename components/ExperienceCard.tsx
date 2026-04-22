import type { Experience } from "@/types/experience";
import { urlFor } from "@/lib/utils/image";
import { formatDateRange } from "@/lib/utils/date";

type Props = {
  data: Experience;
  isUpcoming?: boolean;
  index?: number;
};

export default function ExperienceCard({ data, isUpcoming, index = 0 }: Props) {
  const isReversed = index % 2 !== 0;
  return (
    <div className="overflow-hidden">
      <div
        className={`flex flex-col md:flex-row ${
          isReversed ? "md:flex-row-reverse" : ""
        }`}
      >
        {data.image && (
          <div className="md:w-1/2">
            <img
              src={urlFor(data.image).width(400).height(500).auto("format").url()}
              alt={data.title || "Image"}
              className="w-full h-full object-contain"
            />
          </div>
        )}
        <div className="p-6 flex flex-col md:w-1/2">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
            {data.startDate && data.endDate && (
              <p className="text-sm text-gray-500">
                {formatDateRange(data.startDate, data.endDate)}
              </p>
            )}
            {data.location && (
              <p className="text-sm text-gray-500 mb-4">{data.location}</p>
            )}
            {data.description && (
              <p className="text-gray-700 mb-6 leading-relaxed">
                {data.description}
              </p>
            )}
          </div>
          {isUpcoming && data.bookingLink && (
            <a
              href={data.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
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
