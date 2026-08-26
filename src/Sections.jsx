import { useEffect, useState } from "react";

/* ============================================================
   NAV — sticky header, matches original site's nav structure
   ============================================================ */
export function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["#about", "About"],
    ["#rooms", "Rooms"],
    ["#safety", "Safety"],
    ["#daily", "Daily Life"],
    ["#gallery", "Gallery"],
    ["#stories", "Stories"],
    ["#contact", "Contact"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-[200] border-b border-black/10 bg-ivory/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-1.5 font-script text-3xl font-bold text-teal-deep">
          Karuna
          <small className="font-body text-[0.62rem] font-bold uppercase tracking-[0.12em] text-rose">
            PG for Women
          </small>
        </a>
        <ul className="hidden gap-8 md:flex">
          {links.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-semibold text-navy transition hover:text-rose"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-ivory transition hover:-translate-y-0.5 sm:inline-flex"
          >
            Book a Visit
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-1.5 md:hidden"
          >
            <span className="h-0.5 w-6 rounded bg-teal-deep" />
            <span className="h-0.5 w-6 rounded bg-teal-deep" />
            <span className="h-0.5 w-6 rounded bg-teal-deep" />
          </button>
        </div>
      </div>
      {open && (
        <ul className="flex flex-col gap-4 border-b border-black/10 bg-ivory px-6 pb-6 md:hidden">
          {links.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-navy"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

/* ============================================================
   MISSION ROAD, CUTTACK — sits before "Why Karuna"
   NOTE: the tagline "A home for every college chapter she's
   writing" now lives exclusively in the 3D intro, so this
   section uses different heading copy (reusing "second home"
   and "heart of Cuttack" straight from the lede) rather than
   repeating it. Flagging this as my judgment call.
   ============================================================ */
export function MissionRoad() {
  return (
    <section className="relative overflow-hidden bg-ivory px-6 py-20">
      <div className="pointer-events-none absolute -right-16 -top-10 h-64 w-64 rounded-full bg-rose-soft/60 blur-2xl" />
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <div>
          <span className="eyebrow">Mission Road, Cuttack</span>
          <h2 className="mt-2 text-[clamp(1.9rem,3vw,2.5rem)]">
            A <em className="not-italic text-rose">second home</em>, right in
            the heart of Cuttack.
          </h2>
          <p className="mt-4 max-w-[46ch] text-[#4b453f]">
            Karuna is a residence for college-going women — run not like a
            hostel, but like a second home. Home-cooked meals, festivals
            celebrated together, and Bibhu Uncle &amp; Sweta Aunty watching
            over every student like their own, right in the heart of Cuttack.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-ivory transition hover:-translate-y-0.5"
            >
              Schedule a Visit →
            </a>
            <a
              href="#rooms"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-teal px-6 py-3 text-sm font-semibold text-teal-deep transition hover:bg-teal hover:text-ivory"
            >
              View Rooms &amp; Pricing
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
            <div>
              <strong className="block font-display text-2xl text-teal-deep">60+</strong>
              <span className="text-xs uppercase tracking-wide text-[#71695f]">Students housed</span>
            </div>
            <div>
              <strong className="block font-display text-2xl text-teal-deep">2</strong>
              <span className="text-xs uppercase tracking-wide text-[#71695f]">Compulsory home-cooked meals</span>
            </div>
            <div className="basis-full">
              <strong className="block font-display text-2xl text-teal-deep">7 PM</strong>
              <span className="text-xs uppercase tracking-wide text-[#71695f]">Daily curfew, for peace of mind</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/4.6] overflow-hidden rounded-[28px] shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
              alt="Bright shared room at Karuna"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 max-w-[210px] rounded-2xl border border-black/10 bg-ivory p-5 shadow-soft">
            <strong className="block font-display text-lg text-rose">
              "Enjoy your best memories with us."
            </strong>
            <p className="mt-1.5 text-xs text-[#5c554d]">
              Every room, every meal, every evening on the terrace — made for
              the years you'll look back on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   WHY KARUNA / ABOUT — unchanged content, matches reference
   ============================================================ */
export function WhyKaruna() {
  return (
    <section id="about" className="bg-ivory px-6 py-20">
      <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-2 md:items-center">
        <div>
          <span className="eyebrow">Why Karuna</span>
          <h2 className="mt-2 text-[clamp(1.9rem,3vw,2.5rem)]">
            Not a landlord. Uncle &amp; Aunty.
          </h2>
          <p className="mt-4 max-w-[52ch] text-[#4b453f]">
            Karuna was started by Bibhu Uncle and Sweta Aunty with one simple
            idea: no student living away from home should ever feel like
            she's away from home. There's no distant staff here — just Uncle
            and Aunty, who know every resident by name and look after them
            like their own daughters.
          </p>
          <p className="mt-4 max-w-[52ch] text-[#4b453f]">
            From diyas on Diwali to color-drenched Holi mornings, every
            festival at Karuna is celebrated together, as one family. Located
            a short walk from Cuttack's leading colleges on Mission Road,
            Karuna houses students across courses and years — a real home,
            not just a room to rent.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80"
            alt="Residents studying together"
            className="rounded-2xl shadow-soft"
          />
          <img
            src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=500&q=80"
            alt="Quiet study corner"
            className="mt-10 rounded-2xl shadow-soft"
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ROOMS & PRICING — AC price updated 6,200 → 6,500
   ⚠️ Amenity bullet lists are UNCHANGED placeholders — the
   "provided" room descriptions weren't actually present
   anywhere in this conversation, so per the no-hallucination
   rule I left these as-is rather than inventing replacements.
   Paste the real descriptions and I'll swap them in exactly.
   ============================================================ */
export function RoomsPricing() {
  const rooms = [
    {
      key: "nonac",
      name: "Non-AC Room",
      price: "₹5,200",
      amenities: [
        "Cot, mattress & fan provided",
        "Common wardrobe & shelf space",
        "Lunch & dinner included daily",
        "Shared common living area",
      ],
    },
    {
      key: "ac",
      name: "AC Room",
      price: "₹6,500",
      amenities: [
        "Air-conditioned room",
        "Common wardrobe & shelf space",
        "Lunch & dinner included daily",
        "Shared common living area",
      ],
    },
  ];
  return (
    <section id="rooms" className="bg-ivory-deep px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-xl">
          <span className="eyebrow">Rooms &amp; Pricing</span>
          <h2 className="mt-2 text-[clamp(1.9rem,3vw,2.5rem)]">
            Choose the room that's right for her.
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {rooms.map((r) => (
            <div key={r.key} className="rounded-[20px] bg-ivory p-8 shadow-soft">
              <h3 className="text-2xl">{r.name}</h3>
              <p className="mt-2 mb-6 font-display text-2xl text-rose">
                {r.price}{" "}
                <span className="font-body text-sm font-medium text-[#8a8177]">
                  / month, meals included
                </span>
              </p>
              <ul className="mb-6 space-y-2">
                {r.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-[#3c3730]">
                    <span className="font-bold text-teal">✓</span>
                    {a}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-ivory transition hover:-translate-y-0.5"
              >
                Check Availability
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SAFETY GRID — unchanged
   ============================================================ */
export function SafetyGrid() {
  const cards = [
    {
      icon: "💬",
      title: "Family WhatsApp Group",
      body: "Every time a student steps out, it's shared in her room's WhatsApp group — parents included. They always know where she is, straight from home.",
      dark: false,
    },
    {
      icon: "👀",
      title: "Uncle & Aunty Are Always Watching",
      body: "No distant hired staff here. Bibhu Uncle and Sweta Aunty personally keep an eye on every student, the way family would.",
      dark: true,
    },
    {
      icon: "🕖",
      title: "7 PM Curfew",
      body: "Every student is expected back by 7 PM — a simple, non-negotiable rule that keeps everyone safe and accounted for.",
      dark: false,
    },
  ];
  return (
    <section id="safety" className="bg-ivory px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-xl">
          <span className="eyebrow">Not Hostel Security — Family Care</span>
          <h2 className="mt-2 text-[clamp(1.9rem,3vw,2.5rem)]">
            What "safe" really means at Karuna.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`min-h-[170px] rounded-[20px] p-7 text-ivory ${c.dark ? "bg-navy" : "bg-teal"}`}
            >
              <span className="mb-3 block text-2xl">{c.icon}</span>
              <h4 className="mb-2 text-lg text-ivory">{c.title}</h4>
              <p className="text-sm text-ivory/80">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   DAILY SCHEDULE — unchanged
   ============================================================ */
export function DailySchedule() {
  const items = [
    ["7:30 AM", "Breakfast (optional) — available for early risers"],
    ["1:00 PM", "Lunch — a home-cooked Odia menu, compulsory"],
    ["2:00 PM", "Missed lunch? A tiffin is kept aside"],
    ["6:30 – 7:00 PM", "Evening snacks (optional)"],
    ["7:00 PM", "Curfew — the latest time to be back home"],
    ["9:00 – 9:30 PM", "Dinner, home-cooked and compulsory"],
  ];
  return (
    <section id="daily" className="bg-ivory-deep px-6 py-20">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <span className="eyebrow">A Day at Karuna</span>
          <h2 className="mt-2 mb-5 text-[clamp(1.9rem,3vw,2.5rem)]">
            Structured enough to feel safe, free enough to feel like college.
          </h2>
          <ul>
            {items.map(([time, text]) => (
              <li
                key={time}
                className="flex gap-5 border-b border-dashed border-black/10 py-3.5 last:border-none"
              >
                <time className="min-w-[92px] font-display text-sm text-rose">{time}</time>
                <p className="text-sm text-[#4b453f]">{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="aspect-[4/5] overflow-hidden rounded-[22px] shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1547573854-74d2c355d040?auto=format&fit=crop&w=700&q=80"
            alt="Home-style meal at Karuna"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   GALLERY — ported verbatim (images, alts, bento layout,
   click-to-enlarge) from the original site's gallery section
   ============================================================ */
const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=700&q=80", alt: "Common room", big: true },
  { src: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=500&q=80", alt: "Study desk" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80", alt: "Friends together" },
  { src: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=500&q=80", alt: "Cozy room corner", tall: true },
  { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80", alt: "Single room" },
  { src: "https://images.unsplash.com/photo-1547573854-74d2c355d040?auto=format&fit=crop&w=500&q=80", alt: "Meal time" },
];

export function Gallery() {
  const [openImg, setOpenImg] = useState(null);
  return (
    <section id="gallery" className="bg-ivory px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-xl">
          <span className="eyebrow">Gallery</span>
          <h2 className="mt-2 text-[clamp(1.9rem,3vw,2.5rem)]">Life inside Karuna.</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[140px]">
          {GALLERY_IMAGES.map((img) => (
            <figure
              key={img.src}
              onClick={() => setOpenImg(img)}
              className={`group cursor-pointer overflow-hidden rounded-2xl ${
                img.big ? "col-span-2 row-span-2" : ""
              } ${img.tall ? "row-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                style={{ minHeight: img.big || img.tall ? "300px" : "140px" }}
              />
            </figure>
          ))}
        </div>
      </div>

      {openImg && (
        <div
          onClick={() => setOpenImg(null)}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-8"
        >
          <button
            onClick={() => setOpenImg(null)}
            aria-label="Close"
            className="absolute right-8 top-8 text-3xl text-white"
          >
            ×
          </button>
          <img
            src={openImg.src}
            alt={openImg.alt}
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
          />
        </div>
      )}
    </section>
  );
}

/* ============================================================
   RESIDENT STORIES — ported verbatim (3 quotes) with an
   auto-advancing carousel + dot navigation
   ============================================================ */
const STORIES = [
  {
    quote: "I was nervous about sending my daughter away for college. Karuna's warden calls me if anything's off — I finally sleep easy.",
    who: "— Parent of a 2nd-year resident",
  },
  {
    quote: "It genuinely feels like a hostel of friends, not strangers. The evening rooftop chats are my favourite part of the day.",
    who: "— 3rd-year Engineering student",
  },
  {
    quote: "The food tastes like home. That mattered more than I expected when I first moved here from Bhubaneswar.",
    who: "— 1st-year resident",
  },
];

export function ResidentStories() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % STORIES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="stories" className="bg-teal px-6 py-20 text-ivory">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow justify-center text-brass">Resident Stories</span>
        <h2 className="mt-2 text-ivory text-[clamp(1.9rem,3vw,2.5rem)]">
          What families say about Karuna.
        </h2>
        <div className="relative mx-auto mt-10 min-h-[160px] max-w-2xl">
          {STORIES.map((s, i) => (
            <div
              key={s.who}
              className={`transition-opacity duration-500 ${
                i === index ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
              }`}
            >
              <p className="font-display text-xl italic leading-relaxed sm:text-2xl">
                "{s.quote}"
              </p>
              <div className="mt-6 text-sm font-semibold text-brass">{s.who}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2.5">
          {STORIES.map((s, i) => (
            <button
              key={s.who}
              onClick={() => setIndex(i)}
              aria-label={`Show story ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-brass" : "w-2.5 bg-ivory/35"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT — Visit & Enquire (map + real address/email) beside
   the existing Request a Callback form
   ============================================================ */
const REAL_ADDRESS =
  "Karuna PG, Dr Sachiroutray Ln, Infront of SB Women's College, Kataka, Odisha 753001";
const REAL_EMAIL = "bibhumangaraj@gmail.com";
const REAL_PHONE = "9040199180";
const REAL_MAPS_LINK = "https://maps.app.goo.gl/xyeib9xJwNydBipS6";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  REAL_ADDRESS
)}&output=embed`;

export function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section id="contact" className="bg-ivory px-6 py-20">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
        {/* Visit & Enquire — map + real contact info */}
        <div>
          <span className="eyebrow">Visit &amp; Enquire</span>
          <h2 className="mt-2 mb-6 text-[clamp(1.9rem,3vw,2.5rem)]">
            Come see it for yourself.
          </h2>

          <div className="relative mb-6 overflow-hidden rounded-[22px] shadow-soft">
            <a
              href={REAL_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-3 top-3 z-10 rounded-lg bg-ivory px-3 py-1.5 text-xs font-semibold text-teal-deep shadow-soft hover:bg-ivory-deep"
            >
              Open in Maps ↗
            </a>
            <iframe
              title="Karuna PG location"
              src={MAP_EMBED_SRC}
              loading="lazy"
              className="h-[220px] w-full grayscale-[15%] contrast-[1.05]"
              style={{ border: 0 }}
            />
          </div>

          <ul>
            <li className="flex gap-3 border-b border-black/10 py-3.5 text-sm">
              <span className="text-lg">📍</span>
              <a
                href={REAL_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose"
              >
                {REAL_ADDRESS}
              </a>
            </li>
            <li className="flex gap-3 border-b border-black/10 py-3.5 text-sm">
              <span className="text-lg">📞</span>
              <a href={`tel:+91${REAL_PHONE}`} className="hover:text-rose">
                +91 {REAL_PHONE}
              </a>
            </li>
            <li className="flex gap-3 border-b border-black/10 py-3.5 text-sm">
              <span className="text-lg">🕐</span>
              Visiting hours: 10 AM – 6 PM, all days
            </li>
            <li className="flex gap-3 py-3.5 text-sm">
              <span className="text-lg">✉️</span>
              <a href={`mailto:${REAL_EMAIL}`} className="hover:text-rose">
                {REAL_EMAIL}
              </a>
            </li>
          </ul>
        </div>

        {/* Request a callback — existing form, preserved */}
        <div className="rounded-[22px] bg-ivory-deep p-8 shadow-soft sm:p-10">
          <h3 className="mb-6 text-2xl">Request a callback</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-navy">
                  Student's Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  className="w-full rounded-[10px] border-[1.5px] border-black/10 bg-ivory px-3.5 py-3 text-sm focus:border-teal focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-navy">
                  Parent's Contact
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Phone number"
                  className="w-full rounded-[10px] border-[1.5px] border-black/10 bg-ivory px-3.5 py-3 text-sm focus:border-teal focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-navy">
                College / Course
              </label>
              <input
                type="text"
                placeholder="e.g. SCB Medical, 2nd year"
                className="w-full rounded-[10px] border-[1.5px] border-black/10 bg-ivory px-3.5 py-3 text-sm focus:border-teal focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-navy">
                Preferred Room Type
              </label>
              <select className="w-full rounded-[10px] border-[1.5px] border-black/10 bg-ivory px-3.5 py-3 text-sm focus:border-teal focus:outline-none">
                <option>Non-AC Room — ₹5,200/mo</option>
                <option>AC Room — ₹6,500/mo</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-teal py-3.5 text-center text-sm font-semibold text-ivory transition hover:-translate-y-0.5"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER — ported from original, "Design preview" line removed
   ============================================================ */
export function Footer() {
  return (
    <footer className="bg-navy px-6 pb-8 pt-14 text-ivory/75">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 border-b border-ivory/10 pb-8 sm:grid-cols-3">
          <div>
            <a href="#top" className="font-script text-3xl font-bold text-ivory">
              Karuna <small className="font-body text-xs font-bold text-brass">PG for Women</small>
            </a>
            <p className="mt-4 max-w-[36ch] text-sm">
              Enjoy your best memories with us. A safe, warm residence for
              college-going women in Cuttack.
            </p>
          </div>
          <div>
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-wide text-ivory">
              Explore
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-ivory">About</a></li>
              <li><a href="#rooms" className="hover:text-ivory">Rooms</a></li>
              <li><a href="#safety" className="hover:text-ivory">Safety</a></li>
              <li><a href="#gallery" className="hover:text-ivory">Gallery</a></li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-wide text-ivory">
              Contact
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li>{REAL_ADDRESS}</li>
              <li>
                <a href={`tel:+91${REAL_PHONE}`} className="hover:text-ivory">
                  +91 {REAL_PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${REAL_EMAIL}`} className="hover:text-ivory">
                  {REAL_EMAIL}
                </a>
              </li>
              <li>Mon–Sun, 10 AM – 6 PM</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-2 pt-6 text-xs">
          <span>© 2026 Karuna PG. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
