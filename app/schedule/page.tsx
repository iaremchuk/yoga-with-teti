import { playfair } from "@/lib/fonts/fonts";

export default function SchedulePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 py-16 px-6 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h1
            className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12`}
          >
            Weekly Schedule
          </h1>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div
              className="w-full h-[300px] md:h-full bg-cover bg-center rounded-lg animate-zoom-in"
              style={{ backgroundImage: "url('/images/schedule.jpg')" }}
            />
            <div className="space-y-8 text-xl">
              <div>
                <h2 className="font-semibold mb-2 md:text-center">Monday</h2>
                <p>Morning Flow — 7:30am · MoreYoga NF</p>
                <p>Dharma — 5:30pm · MoreYoga KT</p>
                <p>Yin and Nidra — 6:45pm · MoreYoga KT</p>
              </div>
              <div>
                <h2 className="font-semibold mb-2 md:text-center">Tuesday</h2>
                <p>Morning Flow — 7:30am · MoreYoga NF</p>
                <p>Dharma — 5:30pm · MoreYoga KT</p>
                <p>Yin and Nidra — 6:45pm · MoreYoga KT</p>
              </div>
              <div>
                <h2 className="font-semibold mb-2 md:text-center">Friday</h2>
                <p>Morning Flow — 7:30am · MoreYoga NF</p>
                <p>Dharma — 5:00pm · MoreYoga NF</p>
              </div>
              <div>
                <h2 className="font-semibold mb-2 md:text-center">Saturday</h2>
                <p>Dharma — 1:15pm · MoreYoga FP</p>
                <p>Flow to Restore — 2:30pm · MoreYoga FP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
