import React, { useEffect } from 'react';

// Simple icons (replace with SVG or other icons)
const Icon = ({ name, className = 'w-8 h-8 text-indigo-400' }) => {

  //Switch case to return the correct icon
  switch (name) {
    case 'tasks':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="9" y1="11" x2="21" y2="11" />
          <line x1="9" y1="6" x2="21" y2="6" />
          <line x1="9" y1="16" x2="21" y2="16" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="11" x2="3.01" y2="11" />
          <line x1="3" y1="16" x2="3.01" y2="16" />
        </svg>
      );

    //Return the calendar icon    
    case 'calendar':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );

    //Return the chart icon
    case 'chart':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18" />
          <line x1="12" y1="17" x2="12" y2="10" />
          <line x1="18" y1="17" x2="18" y2="7" />
          <line x1="6" y1="17" x2="6" y2="13" />
        </svg>
      );

    //Return the check icon
    case 'check':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    default:
      return null;
  }
};

// Data arrays
const FEATURES = [
  {
    id: 1,
    title: 'Smart Lists & Tags',
    desc: 'Group, filter and prioritize tasks with flexible lists, tags, and reminders.',
    icon: 'tasks',
  },
  {
    id: 2,
    title: 'Timeline & Calendar',
    desc: 'See your tasks on a timeline or calendar to plan your day and week effectively.',
    icon: 'calendar',
  },
  {
    id: 3,
    title: 'Reports & Insights',
    desc: 'Track your productivity with simple analytics and streaks.',
    icon: 'chart',
  },
];

// Reviews array        
const REVIEWS = [
  {
    id: 1,
    name: 'Ava M.',
    role: 'Product Manager',
    quote: "TaskFlow transformed my team's workflow — fewer meetings, more doing.",
  },
  {
    id: 2,
    name: 'Luis R.',
    role: 'Freelancer',
    quote: 'I finally finished a project on time thanks to the timeline view!',
  },
  {
    id: 3,
    name: 'Kira P.',
    role: 'Student',
    quote: 'Simple, clean and dependable — perfect for my study routine.',
  },
];

// Plans array  
const PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    perks: ['Unlimited tasks', 'Basic lists & tags', 'Community support'],
    highlight: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$6 / mo',
    perks: ['Priority reminders', 'Calendar sync', 'Advanced filters'],
    highlight: true,
  },
  {
    id: 'team',
    name: 'Team',
    price: '$18 / mo',
    perks: ['Shared projects', 'Team analytics', 'Roles & permissions'],
    highlight: false,
  },
];

// Scroll reveal animation hook 
function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-6');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Feature card
function FeatureCard({ feature }) {
  return (
    <article className="reveal bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800 opacity-0 translate-y-6 transition-all duration-700 ease-out hover:bg-gray-800">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-indigo-900 flex items-center justify-center text-indigo-400">
          <Icon name={feature.icon} className="w-6 h-6" />
        </div>
        <div>
          <h4 className="font-semibold text-white">{feature.title}</h4>
          <p className="text-sm text-gray-400 mt-1">{feature.desc}</p>
        </div>
      </div>
    </article>
  );
}

// Review card
function ReviewCard({ review }) {
  return (
    <blockquote className="reveal bg-gray-900 rounded-xl p-5 shadow-lg border border-gray-800 opacity-0 translate-y-6 transition-all duration-700 ease-out hover:bg-gray-800">
      <p className="text-gray-300">"{review.quote}"</p>
      <footer className="mt-3 text-sm text-gray-400">
        — {review.name}, <span className="text-gray-500">{review.role}</span>
      </footer>
    </blockquote>
  );
}

// Plan card
function PlanCard({ plan }) {
  return (
    <div
      className={`reveal p-6 rounded-2xl border ${
        plan.highlight
          ? 'border-indigo-600 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800'
          : 'bg-gray-900 shadow-lg border-gray-800'
      } opacity-0 translate-y-6 transition-all duration-700 ease-out hover:bg-gray-800`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
          <p className="text-sm text-gray-400">{plan.price}</p>
        </div>
        <div className="text-indigo-400">
          <Icon name="check" className="w-6 h-6" />
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-gray-300">
        {plan.perks.map((perk, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-400">
              <Icon name="check" className="w-3 h-3" />
            </span>
            <span>{perk}</span>
          </li>
        ))}
      </ul>
      <button
        className={`mt-6 w-full py-2 rounded-md ${
          plan.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-800 border border-gray-700 text-white hover:bg-gray-700'
        } transition-colors`}
      >
        Choose
      </button>
    </div>
  );
}

// Content sections 
export default function ContentSections() {
  useScrollReveal();

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Features */}
      <section id="features" className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-white">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-white">What people say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-white">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-500 to-blue-400 flex items-center justify-center text-white font-bold">
                TF
              </div>
              <div>
                <div className="font-bold text-white">TaskFlow</div>
                <div className="text-xs text-gray-400">Make progress, every day.</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Questions? Contact us anytime — we'd love to hear from you.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Support
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Privacy
            </a>
          </div>

          <div className="flex items-center justify-end gap-4">
            <a href="#" aria-label="twitter" className="p-2 rounded-md hover:bg-gray-800 transition-colors">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.37a9 9 0 0 1-2.88 1.1A4.5 4.5 0 0 0 11.07 6.9 12.8 12.8 0 0 1 1.64 2.15 4.5 4.5 0 0 0 2.9 8.72 4.47 4.47 0 0 1 .9 8v.06A4.5 4.5 0 0 0 4.5 13a4.5 4.5 0 0 1-2 .08 4.5 4.5 0 0 0 4.2 3.12A9 9 0 0 1 1 19.54 12.8 12.8 0 0 0 7.29 21c8.85 0 13.7-7.33 13.7-13.69 0-.21 0-.42-.02-.63A9.72 9.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" aria-label="email" className="p-2 rounded-md hover:bg-gray-800 transition-colors">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8" />
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
