import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section with background image */}
      <section
        className="flex items-center justify-center h-[70vh] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/home-page.jpg')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
          to Yoga With Teti
          </p>
        </div>
      </section>

      {/* About Teti Section */}
      <section className="flex-1 py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-green-900">About Teti</h2>
          <p className="text-lg text-gray-700 mb-6">
            Teti is a certified yoga instructor with over 10 years of experience helping people find inner calm and physical strength.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Whether you are a beginner or experienced yogi, Teti’s welcoming environment ensures you feel supported every step of the way.
          </p>
          <Link
            href="/schedule"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-green-800 transition"
          >
            Explore my class schedule
          </Link>
        </div>
      </section>
      
    </main>
  );
}