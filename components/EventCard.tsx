import Link from "next/link";
import type { Event } from "../app/types/event";

export default function EventCard({ image, title, button, link }: Event) {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden border border-gray-200 text-center group bg-white">
      <div className="overflow-hidden w-full">
        <img
          src={image}
          className="block w-full h-[380px] md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h2 className="mt-5 text-lg font-semibold">{title}</h2>
      <Link
        href={link}
        className="self-center text-center min-w-[180px] mt-6 mb-6 px-6 py-2 border border-gray-800 rounded-full text-sm hover:bg-stone-600 hover:text-white transition"
      >
        {button}
      </Link>
    </div>
  );
}
