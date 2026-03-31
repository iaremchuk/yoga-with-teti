import Link from "next/link";

export default function WorkshopsPage() {
  return (
    <section className="py-16 px-6 bg-green-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-green-900 mb-6">
          Yoga Workshops
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Our workshops are designed to deepen your yoga practice through
          focused sessions on alignment, breathwork, and mindfulness.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Suitable for all levels, these sessions provide a supportive space to
          explore your body and mind in more detail.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-2">What to expect:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Small group sessions</li>
            <li>Personal guidance</li>
            <li>Relaxation & meditation</li>
          </ul>
        </div>
        <Link
          href="mailto:tanianago@gmail.com"
          className="inline-block text-center bg-green-700 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-800 transition"
        >
          Email Me for more information
        </Link>
      </div>
    </section>
  );
}
