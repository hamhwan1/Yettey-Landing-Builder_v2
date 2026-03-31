import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Check,
  X,
  Play,
  Zap,
  MessageSquare,
  Repeat,
  LayoutGrid,
  FolderOpen,
  Search,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const ACCENT = "#F97316";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

export default function ShortFormVideoFramework() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section className="relative pt-32 pb-10 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[130px] opacity-20 pointer-events-none"
          style={{ backgroundColor: ACCENT }}
        />
        <div className="relative max-w-3xl mx-auto px-4">
          <motion.div variants={fade} initial="hidden" animate="show" custom={0}>
            <Link href="/blog">
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </button>
            </Link>
          </motion.div>

          <motion.span
            variants={fade} initial="hidden" animate="show" custom={1}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-6"
            style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}
          >
            Short-Form Strategy
          </motion.span>

          <motion.h1
            variants={fade} initial="hidden" animate="show" custom={2}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-3"
          >
            How to Create Viral Short-Form Videos
          </motion.h1>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={3}
            className="text-xl font-medium mb-6" style={{ color: ACCENT }}
          >
            The Framework That Actually Works in 2026
          </motion.p>

          <motion.div
            variants={fade} initial="hidden" animate="show" custom={4}
            className="text-lg text-muted-foreground leading-relaxed mb-4 space-y-3"
          >
            <p>Most short-form videos fail.</p>
            <p>Not because of content — <strong className="text-foreground">but because there's no system.</strong></p>
            <p className="text-base italic text-foreground/60">This is the short form video strategy used by top creators.</p>
          </motion.div>

          <motion.div
            variants={fade} initial="hidden" animate="show" custom={5}
            className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-6 pb-10 border-b border-border"
          >
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> March 10, 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 7 min read</span>
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4" />
              {["Short-form Video", "Social Media", "Content Marketing AI"].map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded-md text-xs font-medium bg-card border border-border">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HERO VISUAL ────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="rounded-2xl border border-border overflow-hidden shadow-2xl shadow-black/60">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/80">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="text-xs text-muted-foreground ml-2 font-medium">Short-Form Content Framework</span>
            </div>
            <div className="bg-card/40 p-8 sm:p-12">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                {[
                  { name: "Hook", time: "0–2s", icon: Zap },
                  { name: "Body", time: "2–8s", icon: Play },
                  { name: "CTA", time: "End", icon: MessageSquare },
                ].map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.name} className="flex items-center gap-4 sm:gap-6">
                      <div
                        className="w-28 h-28 rounded-2xl flex flex-col items-center justify-center gap-1.5"
                        style={{ backgroundColor: `${ACCENT}${i === 0 ? "20" : "10"}`, border: i === 0 ? `2px solid ${ACCENT}60` : `1px solid ${ACCENT}20` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                        <span className="font-bold text-lg text-foreground">{step.name}</span>
                        <span className="text-[10px] text-muted-foreground">{step.time}</span>
                      </div>
                      {i < 2 && <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />}
                    </div>
                  );
                })}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">The viral short-form video framework</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 2. TL;DR ──────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl border p-7"
          style={{ borderColor: `${ACCENT}30`, backgroundColor: `${ACCENT}08` }}
        >
          <p className="font-semibold text-sm mb-5" style={{ color: ACCENT }}>TL;DR — Viral Short-Form Formula</p>
          <div className="flex flex-col gap-3">
            {[
              "Hook → Body → CTA",
              "You have 2 seconds to stop the scroll",
              "Specific beats generic",
              "Consistency beats perfection",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${ACCENT}25` }}>
                  <Check className="w-3 h-3" style={{ color: ACCENT }} />
                </div>
                <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── 3. PROBLEM ─────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-8">
            Why Most Short-Form Videos Fail
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Most creators treat short-form like long-form.
          </p>
          <div className="rounded-2xl border border-border bg-card p-6 mb-6">
            <p className="text-sm font-medium text-muted-foreground mb-4">They:</p>
            <div className="flex flex-col gap-3">
              {[
                "Take too long to get to the point",
                "Start with weak intros",
                "Try to explain instead of hook",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-red-500/20">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-foreground/80 text-sm leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: `linear-gradient(135deg, ${ACCENT}12, ${ACCENT}05)`, border: `1px solid ${ACCENT}20` }}
          >
            <p className="font-display font-bold text-xl text-foreground mb-1">
              You don't have 30 seconds.
            </p>
            <p className="font-display font-bold text-xl" style={{ color: ACCENT }}>
              You have 2.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── PROBLEM VISUAL ─────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="rounded-2xl border border-border overflow-hidden shadow-xl shadow-black/50">
            <div className="bg-card/40 p-8 sm:p-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
                  <p className="text-sm font-bold text-red-400 mb-4">What most creators do</p>
                  <div className="flex flex-col gap-2">
                    {["Long intro", "Explains context", "Gets to point at 15s", "Viewer already scrolled"].map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <X className="w-3.5 h-3.5 text-red-400/60" />
                        <span className="text-sm text-foreground/50">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border bg-card p-6" style={{ borderColor: `${ACCENT}30` }}>
                  <p className="text-sm font-bold mb-4" style={{ color: ACCENT }}>What top creators do</p>
                  <div className="flex flex-col gap-2">
                    {["Hook in first 1s", "Specific claim", "Visual proof", "CTA at the end"].map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                        <span className="text-sm text-foreground/70">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">The difference is in the first 2 seconds</p>
        </motion.div>
      </section>

      {/* ── 4. MAIN FRAMEWORK ──────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
            Short Form Video Framework (Hook → Body → CTA)
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            This short form video framework is used by top creators to consistently go viral.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {/* HOOK */}
          <motion.div
            variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="rounded-xl border border-border bg-card"
          >
            <div className="flex items-center gap-5 p-6 pb-3">
              <div className="flex flex-col items-center gap-1 shrink-0">
                <span className="text-[11px] font-mono font-bold" style={{ color: `${ACCENT}90` }}>01</span>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${ACCENT}20` }}>
                  <Zap className="w-6 h-6" style={{ color: ACCENT }} />
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg">
                  Hook <span className="text-muted-foreground font-normal text-base">(0–2s)</span>
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pl-[88px]">
              <p className="text-[14px] text-foreground/70 leading-relaxed mb-4">
                If the hook fails, nothing else matters. Your only job: <strong className="text-foreground">stop the scroll.</strong>
              </p>
              <div className="rounded-lg bg-background/50 border border-border p-4 mb-4">
                <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Examples that work</p>
                <div className="flex flex-col gap-2">
                  {[
                    '"Most people don\'t know this…"',
                    '"I went from 0 to 50K followers in 30 days"',
                    '"You\'re doing this wrong"',
                  ].map((ex) => (
                    <div key={ex} className="flex items-center gap-2.5">
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: ACCENT }} />
                      <span className="text-sm text-foreground/70">{ex}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[13px] italic" style={{ color: ACCENT }}>Don't explain. Create curiosity.</p>
            </div>
          </motion.div>

          {/* BODY */}
          <motion.div
            variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="rounded-xl border border-border bg-card"
          >
            <div className="flex items-center gap-5 p-6 pb-3">
              <div className="flex flex-col items-center gap-1 shrink-0">
                <span className="text-[11px] font-mono font-bold" style={{ color: `${ACCENT}90` }}>02</span>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${ACCENT}20` }}>
                  <Play className="w-6 h-6" style={{ color: ACCENT }} />
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg">
                  Body <span className="text-muted-foreground font-normal text-base">(2–8s)</span>
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pl-[88px]">
              <p className="text-[14px] text-foreground/70 leading-relaxed mb-4">
                Deliver fast. No fluff.
              </p>
              <div className="rounded-lg bg-background/50 border border-border p-4 mb-4">
                <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Rules</p>
                <div className="flex flex-col gap-2">
                  {["Be specific", "Use numbers", "Cut everything unnecessary"].map((r) => (
                    <div key={r} className="flex items-center gap-2.5">
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: ACCENT }} />
                      <span className="text-sm text-foreground/70">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-red-500/5 border border-red-500/15 p-3">
                  <p className="text-xs font-bold text-red-400 mb-1">Don't</p>
                  <p className="text-sm text-foreground/50">"Content is important"</p>
                </div>
                <div className="rounded-lg border p-3" style={{ borderColor: `${ACCENT}20`, backgroundColor: `${ACCENT}05` }}>
                  <p className="text-xs font-bold mb-1" style={{ color: ACCENT }}>Do</p>
                  <p className="text-sm text-foreground/70">"3 content mistakes killing your growth"</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="rounded-xl border border-border bg-card"
          >
            <div className="flex items-center gap-5 p-6 pb-3">
              <div className="flex flex-col items-center gap-1 shrink-0">
                <span className="text-[11px] font-mono font-bold" style={{ color: `${ACCENT}90` }}>03</span>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${ACCENT}20` }}>
                  <MessageSquare className="w-6 h-6" style={{ color: ACCENT }} />
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg">CTA</p>
              </div>
            </div>
            <div className="px-6 pb-6 pl-[88px]">
              <p className="text-[14px] text-foreground/70 leading-relaxed mb-4">
                Every video needs a next step.
              </p>
              <div className="rounded-lg bg-background/50 border border-border p-4 mb-4">
                <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Examples</p>
                <div className="flex flex-col gap-2">
                  {["Follow for more", "Save this", "Comment your problem"].map((c) => (
                    <div key={c} className="flex items-center gap-2.5">
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: ACCENT }} />
                      <span className="text-sm text-foreground/70">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[13px] font-medium" style={{ color: ACCENT }}>Engagement = distribution</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. CREATOR WORKFLOW ─────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
            Content Creation Workflow for Creators
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Top creators don't create randomly. They build systems.
          </p>
          <p className="text-sm italic text-foreground/50 mb-8">
            A structured content creation workflow helps creators scale faster.
          </p>
        </motion.div>

        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="rounded-2xl border border-border overflow-hidden shadow-xl shadow-black/50 mb-6">
            <div className="bg-card/40 p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { day: "Monday", task: "Brainstorm hooks", icon: Zap },
                  { day: "Tuesday", task: "Record content", icon: Play },
                  { day: "Wednesday", task: "Edit & refine", icon: Repeat },
                  { day: "Thu – Sun", task: "Post & analyze", icon: LayoutGrid },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.day}
                      className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/60"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${ACCENT}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                      </div>
                      <div>
                        <p className="text-xs font-mono font-bold text-muted-foreground">{item.day}</p>
                        <p className="text-sm font-semibold text-foreground">{item.task}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground">Systematic workflow used by top creators</p>
        </motion.div>
      </section>

      {/* ── 6. BREAK POINT ─────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-8">
            Where Most Creators Break
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="space-y-4 mb-6">
              <p className="text-foreground/80 leading-relaxed">Not at creation. <strong className="text-foreground">After creation.</strong></p>
              <div className="flex flex-col gap-2 pl-4 border-l-2" style={{ borderColor: `${ACCENT}30` }}>
                <p className="text-foreground/60 text-sm">Files get messy.</p>
                <p className="text-foreground/60 text-sm">Clips get lost.</p>
                <p className="text-foreground/60 text-sm">Ideas disappear.</p>
              </div>
            </div>
            <p className="font-semibold text-foreground">Nothing is reusable.</p>
          </div>
        </motion.div>
      </section>

      {/* ── BREAK VISUAL ───────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="rounded-2xl border border-border overflow-hidden shadow-xl shadow-black/50">
            <div className="bg-card/40 p-8 sm:p-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
                  <p className="text-sm font-bold text-red-400 mb-4">Without a system</p>
                  <div className="flex flex-col gap-3">
                    {["Files in 5+ locations", "Can't find old clips", "Duplicate versions everywhere", "Team has no process"].map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <X className="w-3.5 h-3.5 text-red-400/60" />
                        <span className="text-sm text-foreground/50">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border bg-card p-6" style={{ borderColor: `${ACCENT}30` }}>
                  <p className="text-sm font-bold mb-4" style={{ color: ACCENT }}>With a system</p>
                  <div className="flex flex-col gap-3">
                    {["Everything in one place", "Instant search", "Clear version history", "Shared team workflow"].map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                        <span className="text-sm text-foreground/70">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 7. WHERE YETTEY FITS ───────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl border p-10 md:p-12"
          style={{ borderColor: `${ACCENT}30`, backgroundColor: `${ACCENT}06` }}
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-6">
            Where Yettey Fits In This System
          </h2>

          <div className="space-y-4 mb-8">
            <p className="text-foreground/70 leading-relaxed">Most AI tools help you <strong className="text-foreground">create</strong> content.</p>
            <p className="text-foreground/70 leading-relaxed">But very few help you <strong className="text-foreground">manage</strong> it.</p>
            <p className="text-foreground/80 leading-relaxed font-medium">That's where Yettey comes in.</p>
          </div>

          <div className="space-y-3 mb-8">
            <p className="text-sm text-foreground/50">It doesn't replace recording tools.</p>
            <p className="text-sm text-foreground/50">It doesn't try to automate everything.</p>
          </div>

          <p className="text-foreground/80 font-medium mb-5">Instead, it solves the real problem:</p>

          <div className="flex flex-col gap-3 mb-8">
            {[
              { icon: FolderOpen, text: "Organize all your assets" },
              { icon: Search, text: "Find anything instantly" },
              { icon: Repeat, text: "Build a repeatable content system" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${ACCENT}20` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: ACCENT }} />
                  </div>
                  <span className="text-foreground/80 text-[15px]">{item.text}</span>
                </div>
              );
            })}
          </div>

          <div className="rounded-xl bg-background/50 border border-border p-5 mb-6">
            <p className="text-[14px] text-foreground/70 leading-relaxed">
              Without a system, more content = more chaos.
            </p>
          </div>

          <p className="text-[14px] text-foreground/70 leading-relaxed mb-3">
            If you're managing a lot of content, you'll need a system.
          </p>
          <Link href="/product">
            <span className="inline-flex items-center gap-1 text-sm font-medium hover:underline" style={{ color: ACCENT }}>
              See how Yettey works for asset management <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <p className="text-[13px] text-foreground/50 mt-5 italic">
            Without this step, scaling content is almost impossible.
          </p>
        </motion.div>
      </section>

      {/* ── YETTEY VISUAL ──────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="rounded-2xl border border-border overflow-hidden shadow-xl shadow-black/50">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/80">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="text-xs text-muted-foreground ml-2 font-medium">Yettey — Asset Dashboard</span>
            </div>
            <div className="bg-card/40 p-6 sm:p-8">
              <div className="grid grid-cols-3 gap-3 mb-4">
                {["Videos", "Thumbnails", "Scripts"].map((cat) => (
                  <div key={cat} className="rounded-lg border border-border bg-background/50 p-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">{cat}</p>
                    <p className="text-lg font-bold" style={{ color: ACCENT }}>{cat === "Videos" ? "24" : cat === "Thumbnails" ? "48" : "12"}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {["hook_compilation_v3.mp4", "shorts_batch_march.zip", "captions_final.srt"].map((f) => (
                  <div key={f} className="flex items-center gap-3 px-3 py-2 rounded-lg border border-border bg-background/30">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
                    <span className="text-xs text-foreground/60 font-mono">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">All your content assets, organized in one system</p>
        </motion.div>
      </section>

      {/* ── 8. HIGHLIGHT (MOST VISUALLY DOMINANT) ──────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl p-12 md:p-16 text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${ACCENT}20, ${ACCENT}08)`, border: `1px solid ${ACCENT}35` }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[250px] rounded-full blur-[120px] opacity-30 pointer-events-none"
            style={{ backgroundColor: ACCENT }}
          />
          <div className="relative">
            <p className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4 leading-snug">
              The best creators don't use more tools.
            </p>
            <p className="font-display font-bold text-2xl sm:text-3xl mb-6" style={{ color: ACCENT }}>
              They use better systems.
            </p>
            <div className="w-16 h-0.5 mx-auto rounded-full mb-6" style={{ backgroundColor: `${ACCENT}40` }} />
            <p className="text-foreground/60 text-base leading-relaxed max-w-md mx-auto">
              If you can't manage your content, you can't scale it.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── 9. CTA ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-20">
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl p-10 text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${ACCENT}15, ${ACCENT}06)`, border: `1px solid ${ACCENT}30` }}
        >
          <div
            className="absolute top-0 right-0 w-[300px] h-[200px] rounded-full blur-[100px] opacity-25 pointer-events-none"
            style={{ backgroundColor: ACCENT }}
          />
          <div className="relative">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4">
              Start creating viral content with Yettey
            </h2>
            <p className="text-muted-foreground mb-2">Stop guessing.</p>
            <p className="text-muted-foreground mb-8">Start building a system.</p>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Start for free
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── RELATED ARTICLES ───────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-xl text-foreground mb-6">Related Articles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Best AI Tools for Content Creators in 2026", slug: "ai-tools-content-creators", readTime: "8 min read", emoji: "✨" },
              { title: "How to Turn Long Videos into Viral Shorts", slug: "viral-shorts-without-editing", readTime: "5 min read", emoji: "🎬" },
            ].map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex items-start gap-4">
                  <span className="text-3xl shrink-0">{post.emoji}</span>
                  <div>
                    <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug mb-1">
                      {post.title}
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />{post.readTime}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
