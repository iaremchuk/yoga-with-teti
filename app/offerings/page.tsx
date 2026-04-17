import { playfair } from "@/lib/fonts/fonts";
import OfferingCard from "@/components/OfferingCard";

export default function OfferingsPage() {
  const offerings = [
    {
      id: "dharma",
      image: "/images/dharma.jpg",
      title: "Dharma Yoga",
      description: `Dharma Yoga is a traditional style of yoga created by Sri Dharma Mittra, a highly respected teacher who has been teaching since the 1960s and is based in New York.
      At its core, Dharma Yoga is a classical, spiritual, and devotional form of Hatha yoga. It blends physical practice with ethical living and inner development — it is not just exercise.
      The goal of Dharma Yoga is self-realisation: understanding that we are not the body or the mind, but a part of the Universe, or the Supreme Self, located on the right side of the heart and present equally in every being.
      Dharma Yoga is a devotional practice. Its highest spiritual principle is not meditation, but renouncing the fruits of one’s actions. Unified movement is also important: moving together to create a shared mind, or a unified consciousness. In this way, students support each other on a subtle, energetic level.
      The pace of the practice is slower and more intentional than most modern yoga flows, with greater emphasis on inner awareness than on movement.`,
    },
    {
      id: "breathework",
      image: "/images/breathwork.jpg",
      title: "Breathwork and Meditation",
      description: `Breathwork involves consciously controlling the breath to support physical, mental, and emotional wellbeing. It helps calm the nervous system, reduce stress and anxiety, and improve focus. Regular practice can increase energy levels, enhance lung function, and promote emotional balance. It also encourages relaxation and can create a deeper connection between the body and mind.
        Meditation is the practice of training the mind to be present and aware. It helps reduce mental clutter, ease anxiety, and improve concentration. Over time, meditation promotes a sense of inner calm, clarity, and resilience, allowing you to respond to life with greater balance and awareness.`,
    },
    {
      id: "nidra",
      image: "/images/nidra.jpg",
      title: "Yin • Restorative yoga • Nidra",
      description: `Yin, Restorative, and Yoga Nidra are deeply calming practices that support overall wellbeing by encouraging rest, recovery, and inner awareness.
        Yin Yoga involves holding passive poses for longer periods, gently targeting the deeper connective tissues, joints, and fascia. This helps improve flexibility, release tension, and cultivate patience and mindfulness. It also encourages a slower pace, allowing the nervous system to settle.
        Restorative Yoga focuses on complete relaxation. Using props to fully support the body, poses are held effortlessly to promote deep rest. This practice helps reduce stress, calm the mind, improve sleep, and restore energy by activating the body’s natural healing response.
        Yoga Nidra, often called “yogic sleep,” is a guided meditation practice that brings you into a state between wakefulness and sleep. It supports deep mental and emotional relaxation, reduces anxiety, improves sleep quality, and enhances clarity and resilience.
        Together, these practices help balance a busy lifestyle by creating space for stillness, recovery, and reconnection—supporting both physical health and mental wellbeing.`,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 py-16 px-6 bg-[#f5f1eb] text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h1
            className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12`}
          >
            Offerings
          </h1>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {offerings.map((item) => (
              <OfferingCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
