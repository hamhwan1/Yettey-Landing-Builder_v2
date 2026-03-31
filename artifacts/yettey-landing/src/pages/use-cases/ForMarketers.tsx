import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, FolderOpen, Sparkles, PenLine, Megaphone, X } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const ACCENT = "#0EA5E9";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

export default function ForMarketers() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-4 text-center max-w-4xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8"
            style={{ borderColor: `${ACCENT}40`, backgroundColor: `${ACCENT}15`, color: ACCENT }}
          >
            For Marketers
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="show" custom={1}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground leading-tight mb-6"
        >
          Too many tools.{" "}
          <br className="hidden sm:block" />
          <span style={{ color: ACCENT }}>Not enough content.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Manage all your assets, collaborate on campaigns, and ship content faster — without adding headcount.
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={3}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/pricing?plan=pro">
            <button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white shadow-xl hover:-translate-y-1 transition-all duration-200"
              style={{ backgroundColor: ACCENT, boxShadow: `0 8px 32px ${ACCENT}40` }}
            >
              Start for free
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <Link href="/contact">
          </Link>
        </motion.div>
      </section>

      {/* ── 2. PROBLEM ───────────────────────────────────────── */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl border p-10 md:p-14"
          style={{ borderColor: `${ACCENT}25`, backgroundColor: `${ACCENT}08` }}
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
            Creating content is slow, expensive, and hard to scale
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl">
            This is where most marketing teams get stuck.
          </p>
          <div className="flex flex-col gap-5">
            {[
              "Your assets are scattered across Google Drive, Slack, and five other tools",
              "Brand guidelines get ignored because no one can find the right files",
              "Every campaign starts from scratch instead of reusing what already works",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-500/15 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 text-red-400" />
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── 3. SOLUTION ──────────────────────────────────────── */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl border p-10 md:p-14"
          style={{ borderColor: `${ACCENT}30`, backgroundColor: `${ACCENT}08` }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT }}>
            That's why we built Yettey.
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4">
            All your content in one system — finally.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            One place to manage assets, collaborate on campaigns, and ship content faster. No extra tools. No extra hires.
          </p>
        </motion.div>
      </section>

      {/* ── 4. HOW IT WORKS ──────────────────────────────────── */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="font-display font-bold text-2xl sm:text-3xl text-foreground text-center mb-14"
        >
          How it works
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: FolderOpen, step: "01", label: "Find anything instantly", desc: "All brand assets in one searchable library — no more digging through folders." },
            { icon: Sparkles,   step: "02", label: "Create with AI", desc: "Generate on-brand content at scale without adding to your team." },
            { icon: PenLine,    step: "03", label: "Review without back-and-forth", desc: "Comment, approve, and iterate directly inside the platform." },
            { icon: Megaphone,  step: "04", label: "Ship to every channel", desc: "Distribute finished content from one dashboard — instantly." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="flex flex-col gap-4 p-6 rounded-2xl border border-border bg-card"
              >
                <span className="text-xs font-mono font-bold" style={{ color: `${ACCENT}99` }}>{item.step}</span>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${ACCENT}15` }}>
                  <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{item.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── 5. BENEFITS ──────────────────────────────────────── */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="font-display font-bold text-2xl sm:text-3xl text-foreground text-center mb-12"
        >
          The results you'll actually see
        </motion.h2>
        <div className="flex flex-col gap-4">
          {[
            "Finally find any asset in seconds — without asking anyone",
            "Ship campaigns faster without adding headcount",
            "Stay on-brand instantly across every channel",
            "Reuse what works instead of starting from scratch every time",
          ].map((benefit, i) => (
            <motion.div
              key={benefit}
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card"
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${ACCENT}20` }}>
                <Check className="w-3.5 h-3.5" style={{ color: ACCENT }} />
              </div>
              <p className="text-foreground font-medium">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 6. FINAL CTA ─────────────────────────────────────── */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[120px]"
            style={{ backgroundColor: `${ACCENT}18` }}
          />
        </div>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="relative max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Stop wasting time. Start scaling your content.
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            No extra tools. No extra hires.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing?plan=pro">
              <button
                className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-semibold text-base text-white shadow-xl hover:-translate-y-1 transition-all duration-200"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 32px ${ACCENT}40` }}
              >
                Start for free
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/contact">

            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
