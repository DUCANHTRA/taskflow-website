import React from 'react';

export default function HeaderHero() {

  // Scroll to pricing section
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  //Return the header and hero section
  return (
    <>
      <header className="w-full bg-black/80 backdrop-blur sticky top-0 z-40 shadow-lg border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-500 to-blue-400 flex items-center justify-center text-white font-bold">
              TF
            </div>
            <div>
              <div className="font-bold text-lg text-white">TaskFlow</div>
              <div className="text-xs text-gray-400 -mt-1">Plan. Focus. Ship.</div>
            </div>
          </div>
          <button
            onClick={scrollToPricing}
            className="ml-3 px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 transition"
          >
            Get Started
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            TaskFlow — organize your day, actually finish it
          </h1>
          <p className="text-lg text-gray-300">
            A clean, fast task manager made for focus. Group tasks, plan with a timeline,
            and measure progress.
          </p>
          <div className="flex gap-3">
            <button
              onClick={scrollToPricing}
              className="px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Get Started
            </button>
            <a
              href="#features"
              className="px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white shadow-sm hover:bg-gray-700 transition"
            >
              Learn more
            </a>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            Trusted by teams and freelancers worldwide.
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-800 bg-gray-900 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded bg-indigo-900 flex items-center justify-center text-indigo-400 font-bold">
              TF
            </div>
            <div>
              <div className="font-semibold text-white">Today</div>
              <div className="text-xs text-gray-400">2 important tasks</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white">
              Design landing page — <span className="text-xs text-gray-400">Due today</span>
            </div>
            <div className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white">
              Fix signup bug — <span className="text-xs text-gray-400">Due tomorrow</span>
            </div>
            <div className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white">
              Write release notes — <span className="text-xs text-gray-400">Later this week</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
