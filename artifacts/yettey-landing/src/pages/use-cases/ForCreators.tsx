import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, FolderOpen, Users, RefreshCw, Upload, X } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

export default function ForCreators() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-4 text-center max-w-4xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8">
            For Creators
          </span>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground leading-tight mb-6"
        >
          Stop losing files and feedback.
          <br />
          <span>
            Create, organize, and reuse content{" "}
            <span className="text-primary">— all in one place.</span>
          </span>
        </motion.h1>
        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Organize content, review it, and collaborate — all in one place.
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}>
          <Link href="/pricing">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-200">
              Start creating
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* ── 2. PRODUCT VISUAL (DOMINANT) ─────────────────────── */}
      <section className="py-4 px-4 max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card overflow-hidden shadow-2xl shadow-black/60"
        >
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border bg-card/80">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="text-xs text-muted-foreground ml-3 font-medium">Yettey — Content Workspace</span>
          </div>
          <img
            src="/images/team-collaboration-ui.png"
            alt="Yettey content workspace — asset list, preview, and comments panel"
            className="w-full h-auto block"
            loading="eager"
          />
        </motion.div>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-4"
        >
          Asset library · Content preview · Team comments — all in one screen
        </motion.p>
      </section>

      {/* ── 3. EMOTIONAL TRIGGER ─────────────────────────────── */}
      <section className="py-20 px-4 max-w-3xl mx-auto text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="text-center">
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              Content workflows shouldn't be this hard.
            </p>

            <ul className="mt-6 space-y-2 text-muted-foreground text-lg inline-block text-left">
              <li>• Files are scattered</li>
              <li>• Feedback is everywhere</li>
              <li>• Versions are a mess</li>
            </ul>

            <p className="mt-6 text-muted-foreground">
              Sound familiar? You're not alone.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── 4. PROBLEM SECTION ───────────────────────────────── */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl border border-red-500/20 bg-red-500/5 p-10 md:p-14"
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-8">
            Your content gets messy fast
          </h2>
          <div className="flex flex-col gap-5">
            {[
              "Files are everywhere — Google Drive, Dropbox, desktop, hard drives",
              "Feedback gets buried in Slack or lost in email threads",
              "You can't track versions — which one was the final?",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-500/15 flex items-center justify-center shrink-0 mt-1">
                  <X className="w-3.5 h-3.5 text-red-400" />
                </div>
                <p className="text-muted-foreground text-base leading-relaxed max-w-[520px]">
                  {point}
                </p>
              </div>
            ))}

            <p className="mt-6 text-muted-foreground">
              And it only gets worse as you scale.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── 5. SOLUTION SECTION ──────────────────────────────── */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl border border-primary/20 bg-primary/5 p-10 md:p-14"
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4">
            Finally, everything in one place
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            No more scattered files, lost feedback, or version chaos.
          </p>
        </motion.div>
      </section>

      {/* ── 6. HOW IT WORKS ──────────────────────────────────── */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="font-display font-bold text-2xl sm:text-3xl text-foreground text-center mb-14"
        >
          How Yettey works
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
             { icon: Upload, step: "01", label: "Bring everything in", desc: "Upload images, videos, and documents in one place." },
             { icon: FolderOpen, step: "02", label: "Stay organized from day one", desc: "Structure content by project, client, or campaign." },
             { icon: Users, step: "03", label: "Work together without chaos", desc: "Leave feedback directly on assets — no more Slack threads." },
             { icon: RefreshCw, step: "04", label: "Reuse anything, instantly", desc: "Find and repurpose content in seconds." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="relative flex flex-col gap-4 p-6 rounded-2xl border border-border bg-card"
              >
                <span className="text-xs font-mono font-bold text-primary/60">{item.step}</span>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
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

      {/* ── 7. WHY NOT GOOGLE DRIVE ──────────────────────────── */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-10 md:p-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Why Yettey?
          </p>

          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4">
            Not just storage. A system for content workflows.
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Google Drive and Notion store files. Yettey helps you manage, collaborate, and reuse content — all in one place.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Built for content, not just files",
                desc: "Preview images, videos, and documents instantly — no extra tools or downloads needed.",
              },
              {
                title: "Feedback where work happens",
                desc: "Leave comments directly on assets — no more switching between Slack, email, or docs.",
              },
              {
                title: "Reuse content instantly",
                desc: "Find, organize, and repurpose content quickly without digging through folders.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="p-6 rounded-xl border border-border bg-background flex flex-col gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── 8. KEY BENEFITS ──────────────────────────────────── */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="font-display font-bold text-2xl sm:text-3xl text-foreground text-center mb-12"
        >
          What you actually get
        </motion.h2>
        <div className="flex flex-col gap-4">
          {[
              "All your content, finally in one place",
              "Work together without switching tools",
              "Never lose feedback or final versions again",
              "Move faster with a clear, structured workflow",
          ].map((benefit, i) => (
            <motion.div
              key={benefit}
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card"
            >
              <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-primary" />
              </div>
              <p className="text-foreground font-medium">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 9. FINAL CTA ─────────────────────────────────────── */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
        </div>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="relative max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Start managing your content the right way
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">No credit card required</p>
          <Link href="/pricing">
            <button className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-200">
              Start free
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
