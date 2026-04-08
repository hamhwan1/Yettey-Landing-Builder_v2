import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export interface ProductFeature {
  icon: string;
  title: string;
  desc: React.ReactNode;
  image?: string;
}

export interface ProductStep {
  step: string;
  label: string;
  desc: React.ReactNode;
  image?: string;
}

export interface ProductPageData {
  badge: string;
  badgeColor: string;
  heroTitle: string;
  heroHighlight: string;
  heroDesc: string;
  ctaText: string;
  ctaHref: string;
  whatItDoes: React.ReactNode;
  features: ProductFeature[];
  steps: ProductStep[];
  previewLabel?: string;
  previewImage?: string;
  accentColor: string;
}

export function ProductPageLayout({ data }: { data: ProductPageData }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border bg-white/5 border-white/10 text-white/70"
            >
              {data.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
          >
            {data.heroTitle}{" "}
            <span className="text-primary">
              {data.heroHighlight}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
          >
            {data.heroDesc}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}>
            <Link href={data.ctaHref}>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200">
                {data.ctaText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 max-w-3xl mx-auto px-4 text-center">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl bg-card border border-border p-10 relative overflow-hidden"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            What it does
          </p>
          <p className="text-xl md:text-2xl font-display font-semibold text-foreground leading-relaxed">
            {data.whatItDoes}
          </p>
        </motion.div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Key Features</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {data.features.map((feat, i) => (
            <motion.div
              key={feat.title}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
              className="rounded-2xl bg-card border border-border hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
            >
              {feat.image && (
                <div className="aspect-[4/3] overflow-hidden border-b border-border">
                  <img src={feat.image} alt={feat.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              )}
              <div className="p-7 flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-xl bg-white/5"
                >
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">How it works</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border/50" />

          {data.steps.map((s, i) => (
            <motion.div
              key={s.step}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-4 relative"
            >
              {s.image ? (
                <div className="w-full rounded-2xl overflow-hidden border border-border bg-card relative z-10">
                  <img src={s.image} alt={s.label} className="w-full aspect-square object-cover" loading="lazy" />
                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold w-6 h-6 rounded-lg flex items-center justify-center">
                    0{i + 1}
                  </div>
                </div>
              ) : (
                <div
                  className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center border border-border bg-card relative z-10"
                >
                  <span className="text-xs font-bold text-primary mb-0.5">0{i + 1}</span>
                  <span className="text-xl">{s.step}</span>
                </div>
              )}
              <div>
                <p className="font-semibold text-foreground text-sm">{s.label}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card overflow-hidden"
        >
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border bg-card/80">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="text-xs text-muted-foreground ml-3 font-medium">
              {data.previewLabel ?? "UI Preview"}
            </span>
          </div>

          {data.previewImage ? (
            <div className="relative w-full overflow-hidden bg-card">
              <img
                src={data.previewImage}
                alt={data.previewLabel ?? "UI Preview"}
                className="w-full h-auto object-cover block"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="h-64 md:h-80 flex items-center justify-center bg-card">
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl bg-white/5"
                >
                  {data.features[0]?.icon}
                </div>
                <p className="text-sm text-muted-foreground">
                  {data.previewLabel ?? "UI Preview"} — screenshot goes here
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="relative max-w-2xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Join thousands of creators already using Yettey.
          </p>
          <Link href={data.ctaHref}>
            <button className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base hover:-translate-y-0.5 transition-all duration-200">
              {data.ctaText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
