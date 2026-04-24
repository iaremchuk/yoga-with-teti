"use client";
import { useState } from "react";

type OfferingCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function OfferingCard({
  image,
  title,
  description,
}: OfferingCardProps) {
  const [expanded, setExpanded] = useState(false);
  const shortText = description.slice(0, 290);

  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-[450px] object-cover" />
        <div className="absolute bottom-0 w-full text-white text-center py-3 bg-black/40">
          {title}
        </div>
      </div>
      <div className="flex flex-col">
        <p className="p-4 text-base text-gray-600 text-center">
          {expanded ? description : `${shortText}...`}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="pb-4 text-sm text-gray-500 underline mt-auto"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      </div>
    </div>
  );
}
