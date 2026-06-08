import { createFileRoute } from "@tanstack/react-router";
import heroFarm from "@/assets/hero-farm.jpg";
import meatPork from "@/assets/meat-pork.jpg";
import meatBeef from "@/assets/meat-beef.jpg";
import meatGoat from "@/assets/meat-goat.jpg";
import meatLamb from "@/assets/meat-lamb.jpg";
import vegCarrots from "@/assets/veg-carrots.jpg";
import vegPeas from "@/assets/veg-peas.jpg";
import vegKale from "@/assets/veg-kale.jpg";
import vegCabbage from "@/assets/veg-cabbage.jpg";
import mushrooms from "@/assets/mushrooms.jpg";
import equipment from "@/assets/equipment.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glent Worth Farm — Farm Fresh, Straight to Your Table" },
      {
        name: "description",
        content:
          "Quality meats, fresh vegetables, gourmet mushrooms & equipment hire — all from our family farm.",
      },
      { property: "og:title", content: "Glent Worth Farm" },
      { property: "og:description", content: "Farm fresh, straight to your table." },
      { property: "og:image", content: heroFarm },
    ],
  }),
  component: Landing,
});

const meats = [
  { name: "Pork", img: meatPork },
  { name: "Beef", img: meatBeef },
  { name: "Goat", img: meatGoat },
  { name: "Lamb", img: meatLamb },
];

const veggies = [
  { name: "Fresh Carrots", img: vegCarrots },
  { name: "Green Peas", img: vegPeas },
  { name: "Fresh Kale", img: vegKale },
  { name: "Cabbages", img: vegCabbage },
];

function ProductCard({ name, img, lazy = true }: { name: string; img: string; lazy?: boolean }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
      <div className="aspect-square overflow-hidden">
        <img
          src={img}
          alt={name}
          loading={lazy ? "lazy" : "eager"}
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="px-5 py-5 text-center">
        <h3 className="font-serif text-2xl text-foreground">{name}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          From our farm
        </p>
      </div>
    </div>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative min-h-[100vh] w-full overflow-hidden">
        <img
          src={heroFarm}
          alt="Aerial view of Glent Worth Farm at sunrise"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        {/* Top nav */}
        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
          <a href="#" className="flex items-center gap-2 text-[var(--cream)]">
            <span className="font-serif text-2xl leading-none md:text-3xl">
              Glent Worth
            </span>
            <span className="hidden font-serif text-2xl italic opacity-80 md:inline md:text-3xl">
              Farm
            </span>
          </a>
          <a
            href="#shop"
            className="rounded-full bg-[var(--cream)] px-6 py-2.5 text-sm font-medium tracking-wide text-[var(--soil)] shadow-[var(--shadow-soft)] transition-all hover:bg-white hover:shadow-lg"
          >
            Shop Now
          </a>
        </header>

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-120px)] max-w-4xl flex-col items-center justify-center px-6 pb-24 text-center">
          <span className="mb-6 text-xs uppercase tracking-[0.4em] text-[var(--cream)]/80">
            Est. Family Farm
          </span>
          <h1 className="font-serif text-5xl leading-[1.05] text-[var(--cream)] md:text-7xl lg:text-[5.5rem]">
            Farm Fresh,
            <br />
            <span className="italic font-normal">Straight to Your Table</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--cream)]/90 md:text-lg">
            Quality meats, fresh vegetables, gourmet mushrooms &amp; equipment hire —
            all from our family farm.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#shop"
              className="rounded-full bg-[var(--cream)] px-8 py-3.5 text-sm font-medium tracking-wide text-[var(--soil)] shadow-[var(--shadow-soft)] transition-all hover:bg-white"
            >
              Explore Our Produce
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--cream)]/60 px-8 py-3.5 text-sm font-medium tracking-wide text-[var(--cream)] transition-all hover:bg-[var(--cream)]/10"
            >
              Visit the Farm
            </a>
          </div>
        </div>
      </section>

      {/* PREMIUM MEATS */}
      <section id="shop" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-[var(--olive)]">
              Premium Meats
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Pasture raised, <span className="italic">ethically reared</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Cuts of exceptional quality from animals raised with care on open pasture.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-7">
            {meats.map((m) => (
              <ProductCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* FRESH VEGETABLES */}
      <section className="bg-[var(--sage)] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-[var(--olive)]">
              Fresh Vegetables
            </span>
            <h2 className="mt-4 font-serif text-4xl text-[var(--soil)] md:text-5xl">
              Picked at peak, <span className="italic">delivered the same day</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--soil)]/75">
              Crisp, vibrant, and grown without compromise.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-7">
            {veggies.map((v) => (
              <ProductCard key={v.name} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* GOURMET MUSHROOMS */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
            <img
              src={mushrooms}
              alt="Hand-picked gourmet mushrooms"
              loading="lazy"
              width={1200}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-[var(--olive)]">
              Gourmet Mushrooms
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl">
              Cultivated with <span className="italic">care</span>, picked by hand
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Our gourmet mushrooms — from velvety oyster to robust shiitake — are
              locally grown in climate-controlled chambers and harvested the morning
              they ship. The result is unparalleled freshness and a depth of flavor
              you simply cannot find on a supermarket shelf.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-foreground/80">
              {["Locally grown", "Hand-picked daily", "Restaurant-grade quality"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="h-px w-8 bg-[var(--olive)]" />
                    {t}
                  </li>
                ),
              )}
            </ul>
            <a
              href="#contact"
              className="mt-10 inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground shadow-[var(--shadow-card)] transition-all hover:opacity-90"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* EQUIPMENT FOR HIRE */}
      <section className="bg-[var(--muted)] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-[var(--olive)]">
              Equipment for Hire
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl">
              Modern machinery, <span className="italic">honest rates</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Tractors, ploughs, harvesters and more. Our well-maintained fleet is
              available by the day, week, or season — supporting neighbouring growers
              across the county.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
            <img
              src={equipment}
              alt="Tractors and farm equipment available for hire"
              loading="lazy"
              width={1600}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-block rounded-full border border-[var(--bark)]/30 px-8 py-3.5 text-sm font-medium tracking-wide text-[var(--soil)] transition-all hover:bg-[var(--bark)] hover:text-[var(--cream)]"
            >
              Enquire About Hire
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="bg-[var(--soil)] px-6 py-24 text-[var(--cream)] md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-[var(--cream)]/60">
            Contact
          </span>
          <h2 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl">
            Get in <span className="italic">Touch</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--cream)]/80">
            Place an order, arrange equipment hire, or just stop by for a chat.
            We'd love to hear from you.
          </p>

          <div className="mt-14 grid gap-10 text-left md:grid-cols-3 md:text-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--cream)]/60">
                Visit
              </p>
              <p className="mt-3 font-serif text-xl">
                Glent Worth Lane
                <br />
                North Yorkshire, UK
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--cream)]/60">
                Call
              </p>
              <p className="mt-3 font-serif text-xl">+44 1904 000 000</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--cream)]/60">
                Email
              </p>
              <p className="mt-3 font-serif text-xl">hello@glentworth.farm</p>
            </div>
          </div>

          <a
            href="mailto:hello@glentworth.farm"
            className="mt-14 inline-block rounded-full bg-[var(--cream)] px-10 py-4 text-sm font-medium tracking-wide text-[var(--soil)] transition-all hover:bg-white"
          >
            Place an Order
          </a>

          <div className="mt-20 border-t border-[var(--cream)]/15 pt-8 text-xs uppercase tracking-[0.3em] text-[var(--cream)]/50">
            © {new Date().getFullYear()} Glent Worth Farm
          </div>
        </div>
      </footer>
    </main>
  );
}
