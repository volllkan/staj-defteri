import Link from 'next/link';
import Header from './components/Header';

export default function Home() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div>
      <Header />
      <main>
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center "><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Staj Defteri</span></h1>
        <div className="card-grid">
          {days.map(day => (
            <Link href={`/details/${day}`} key={day}>
              <div className="card">
                <h2>Gün {day}</h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
