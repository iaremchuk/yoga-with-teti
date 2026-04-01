import { playfair } from "@/lib/fonts/fonts";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section
        className="flex items-center justify-center h-[60vh] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/home-page.jpg')" }}
      ></section>
      <section className="flex-1 py-16 px-6 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl font-bold mb-6 ${playfair.className}`}>
            About me
          </h1>
          <p className="text-base mb-6">
            My name is Teti, and I am a yoga teacher with over 800 hours of
            training. The styles I teach include Dharma, Vinyasa, Yin,
            Restorative, and Yoga Nidra. I have been practicing yoga for over 10
            years.
          </p>
          <p className="text-base mb-6">
            In the midst of the Covid-19 lockdowns, I decided to deepen my
            understanding of yoga and completed a 200-hour teacher training,
            after which I began teaching and have continued ever since. I felt a
            strong calling to share the practices that support a full, nourished
            life. Since my first training, I have remained deeply dedicated to
            yoga, maintaining a daily personal practice and continuing my
            education through various courses. These have allowed me to deepen
            my understanding of the styles that resonate with me and to develop
            skills that best serve my community.
          </p>
          <p className="text-base mb-10">
            With deep reverence and respect for the origins and philosophy of
            yoga, I love creating yoga experiences that weave together
            traditional yoga teachings and breathwork with developmental
            movement, neuroscience, and mindfulness practices, making them
            relevant for modern life. My classes are dynamic yet accessible to
            all levels. They incorporate restorative elements, pranayama, and
            meditation, guiding students toward balance in body, mind, and
            spirit.
          </p>
          <Link
            href="/schedule"
            className={`${playfair.className} inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-700 transition`}
          >
            Explore my schedule
          </Link>
        </div>
      </section>
    </main>
  );
}
