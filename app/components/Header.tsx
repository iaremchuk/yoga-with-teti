import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-green-600 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Yoga With Teti</h1>
        <div className="space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/schedule" className="hover:underline">Schedule</Link>
          <Link href="/events" className="hover:underline">Upcoming Events</Link>
          <Link href="/offerings" className="hover:underline">Offerings</Link>
        </div>
      </nav>
    </header>
  );
}