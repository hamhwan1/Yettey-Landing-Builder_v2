import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, UserPlus, Share2, MessageSquare, Zap, X } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const ACCENT = "#10B981";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

export default function ForTeams() {
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
            For Teams
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="show" custom={1}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground leading-tight mb-6"
        >
          Your team is not aligned.{" "}
          <br className="hidden sm:block" />
          <span style={{ color: ACCENT }}>And it’s slowing everything down.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-3"
        >
          Bring everything — people, content, and workflows — into one place.
        </motion.p>
        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={3}
          className="text-base text-muted-foreground/70 max-w-xl mx-auto mb-10"
        >
          Stop chasing files, feedback, and decisions across tools. Work together clearly and move faster as a team.
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={4}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/pricing?plan=pro">
            <button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white shadow-xl hover:-translate-y-1 transition-all duration-200"
              style={{ backgroundColor: ACCENT, boxShadow: `0 8px 32px ${ACCENT}40` }}
            >
              Start collaborating
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
          style={{ borderColor: "#ef444425", backgroundColor: "#ef44440a" }}
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
            Your team is out of sync — and it shows
          </h2>
          <p className="text-muted-foreground mb-8">
            This is what slows teams down every day:
          </p>
          <div className="flex flex-col gap-5 mb-8">
            {[
              "Files are scattered across tools and people",
              "No clear ownership — work gets duplicated or missed",
              "Feedback is lost in Slack threads, email chains, and docs",
              "Teams move slowly because nothing is centralized",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-500/15 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 text-red-400" />
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <p className="text-foreground/60 text-sm italic border-t border-border/50 pt-6">
            One workspace for your entire team
          </p>
        </motion.div>
      </section>

      {/* ── 3. SOLUTION ──────────────────────────────────────── */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl border p-10 md:p-14"
          style={{ borderColor: `${ACCENT}30`, backgroundColor: `${ACCENT}08` }}
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4">
            Everything your team needs — in one place
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Bring your team, content, and workflows together in one place.
          </p>
          <p className="text-muted-foreground mb-6">
            Everyone knows what to do, where to find things, and how to move forward.
          </p>
          <p className="font-semibold" style={{ color: ACCENT }}>
            No confusion. No duplication. No chaos.
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
            { icon: UserPlus,      step: "01", label: "Invite your team", desc: "Add members and assign roles instantly — no setup friction." },
            { icon: Share2,        step: "02", label: "Share everything", desc: "Keep assets, projects, and feedback in one place everyone can access." },
            { icon: MessageSquare, step: "03", label: "Collaborate in context", desc: "Comment, review, and approve directly on content — not in a separate thread." },
            { icon: Zap,           step: "04", label: "Move faster together", desc: "Stay aligned and ship without confusion or back-and-forth." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="flex flex-col gap-4 p-6 rounded-2xl border border-border bg-card"
              >
                <span className="text-xs font-mono font-bold" style={{ color: `${ACCENT}99` }}>{item.step}</span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${ACCENT}15` }}
                >
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
          What teams actually get
        </motion.h2>
        <div className="flex flex-col gap-4">
          {[
            "Clear ownership and responsibilities — no more guessing who's doing what",
            "Faster collaboration without switching tools or losing context",
            "Fewer mistakes and duplicated work across the team",
            "A single source of truth for everything your team touches",
          ].map((benefit, i) => (
            <motion.div
              key={benefit}
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card"
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${ACCENT}20` }}
              >
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
            Stop working in chaos.{" "}
            <br className="hidden sm:block" />
            Start moving faster as a team.
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            No more scattered tools. No more confusion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing?plan=pro">
              <button
                className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-semibold text-base text-white shadow-xl hover:-translate-y-1 transition-all duration-200"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 32px ${ACCENT}40` }}
              >
                Start collaborating
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
