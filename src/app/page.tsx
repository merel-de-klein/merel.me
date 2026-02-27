export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* 1. HERO / IDENTITY */}
      <section className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-[0.9]">
          Frontend Dev <br />
          <span className="text-slate-300 dark:text-slate-700">&</span> Media Enthusiast
        </h1>
        <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 font-medium max-w-xl">
          Building interfaces by day and curating a library of experiences by night.
          This is my personal archive of everything I'm consuming and creating.
        </p>
      </section>
    </main>
  );
}
