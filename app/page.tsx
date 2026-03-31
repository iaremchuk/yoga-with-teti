import { playfair } from "@/lib/fonts/fonts";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className={`${playfair.className} text-xl`}>
        This should be Playfair
      </h1>

      <p className="font-body text-lg mt-4">This should be Inter</p>
    </div>
  );
}
