import { Link } from "wouter";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Check,
  X,
  Lightbulb,
  Layers,
  RefreshCw,
  FileText,
  Zap,
  Play,
  Scissors,
  Send,
  FolderOpen,
  Search,
  Repeat,
  TrendingUp,
  Timer,
  BarChart3,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const ACCENT = "#0EA5E9";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

function PatternBreak({ line1, line2 }: { line1: string; line2: string }) {
  return (
    <section className="max-w-3xl mx-auto px-4 mb-16">
      <motion.div
        variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="rounded-2xl p-8 sm:p-10 text-center"
        style={{ background: `linear-gradient(135deg, ${ACCENT}12, ${ACCENT}04)`, border: `1px solid ${ACCENT}18` }}
      >
        <p className="font-display font-bold text-xl sm:text-2xl text-foreground leading-snug mb-2">{line1}</p>
        <p className="font-display font-bold text-xl sm:text-2xl" style={{ color: ACCENT }}>{line2}</p>
      </motion.div>
    </section>
  );
}

function InlineCta() {
  return (
    <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="my-10">
      <Link href="/pricing">
        <div
          className="flex items-center justify-between p-4 rounded-xl border cursor-pointer hover:-translate-y-0.5 transition-all duration-200 group"
          style={{ borderColor: `${ACCENT}25`, backgroundColor: `${ACCENT}06` }}
        >
          <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">
            Start building your content system now
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ color: ACCENT }} />
        </div>
      </Link>
    </motion.div>
  );
}

export default function ContentMarketingAi() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
            AI Content Strategy
          </motion.span>

          <motion.h1
            variants={fade} initial="hidden" animate="show" custom={2}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-3"
          >
            Content Marketing with AI: What Actually Works in 2026
          </motion.h1>

          <motion.div
            variants={fade} initial="hidden" animate="show" custom={3}
            className="text-lg text-muted-foreground leading-relaxed space-y-3 mb-4"
          >
            <p>AI won't replace your creative strategy.</p>
            <p>But it will <strong className="text-foreground">dramatically increase your output</strong> — if you have a system.</p>
          </motion.div>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={4}
            className="text-base italic text-foreground/50 mb-6"
          >
            Here's the AI content marketing strategy high-performing teams actually use.
          </motion.p>

          <motion.div
            variants={fade} initial="hidden" animate="show" custom={5}
            className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-6 pb-10 border-b border-border"
          >
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> March 5, 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 7 min read</span>
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4" />
              {["Content Marketing AI", "AI Content Tools", "Content Strategy"].map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded-md text-xs font-medium bg-card border border-border">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TL;DR ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl border p-7"
          style={{ borderColor: `${ACCENT}30`, backgroundColor: `${ACCENT}08` }}
        >
          <p className="font-semibold text-sm mb-5" style={{ color: ACCENT }}>TL;DR — What Actually Works</p>
          <div className="flex flex-col gap-3">
            {[
              "AI works best as a workflow accelerator, not a replacement for strategy.",
              "Highest-value use cases: ideation, variation, and repurposing.",
              "Teams with AI workflows see 2–4x output without proportional headcount growth.",
              "Content management is the biggest unsolved bottleneck.",
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

      {/* ── PAIN MOMENT ────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="space-y-4">
            <p className="text-lg text-foreground/70">You tried every AI tool.</p>
            <p className="text-lg text-foreground/70">You generated hundreds of pieces of content.</p>
            <p className="text-lg text-foreground/70">And still — nothing changed.</p>
            <p className="text-lg font-semibold text-foreground mt-2">That's not an AI problem.</p>
          </div>
        </motion.div>
      </section>

      {/* ── PATTERN BREAK 1 ────────────────────────────────────── */}
      <PatternBreak
        line1="You are not failing because of AI."
        line2="You are failing because of your system."
      />

      {/* ── WHY MOST AI CONTENT FAILS ──────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-6">
            Why Most AI Content Fails
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            AI was sold as "push button, get content."
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            That's not how it works.
          </p>
          <div className="rounded-2xl border border-border bg-card p-6 mb-6">
            <p className="text-sm font-medium text-muted-foreground mb-4">Common mistakes:</p>
            <div className="flex flex-col gap-3">
              {[
                "Using AI to replace strategy instead of accelerate it",
                "Generating content from scratch with zero context",
                "No system to organize what AI produces",
                "Treating AI output as finished content",
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
        </motion.div>
      </section>

      {/* ── PATTERN BREAK 2 ────────────────────────────────────── */}
      <PatternBreak
        line1="AI doesn't fail."
        line2="Your workflow does."
      />

      {/* ── WHAT HIGH-PERFORMING TEAMS DO ──────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-6">
            What High-Performing Teams Do Differently
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            They don't use AI to generate more. They use AI to <strong className="text-foreground">systematize</strong> what they already do.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
          {[
            { icon: Lightbulb, title: "Ideation & topic research", desc: "Generate 50 ideas in minutes. Pick the 5 that work. Faster than brainstorming from scratch." },
            { icon: Layers, title: "Creating variations", desc: "Take one headline or caption. Generate 20 variations. Test. Iterate. What used to take weeks now takes an afternoon." },
            { icon: RefreshCw, title: "Repurposing content", desc: "One blog post becomes 5 social posts, an email, and a video script. AI removes the reformatting friction." },
            { icon: FileText, title: "First drafts", desc: "AI kills the blank page. A strong editor turns rough AI drafts into publish-ready content faster than writing from zero." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${ACCENT}15` }}>
                    <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <InlineCta />
      </section>

      {/* ── WHAT TO KEEP HUMAN ─────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-6">
            What to Keep Human
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            AI is powerful. But some things still require you.
          </p>
          <div className="flex flex-col gap-4">
            {[
              { label: "Brand voice & differentiation", desc: "Your unique POV doesn't come from AI. It comes from you." },
              { label: "Genuine audience insight", desc: "AI can analyze patterns. It can't talk to your customers." },
              { label: "Creative risk-taking", desc: "The most memorable content breaks conventions. AI is structurally conservative." },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold text-foreground text-sm mb-1">{item.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── BEFORE vs AFTER ────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3 max-w-3xl mx-auto">
            Random Content vs. System Content
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            One approach hopes for results. The other engineers them.
          </p>
          <div className="rounded-2xl border border-border overflow-hidden shadow-xl shadow-black/50">
            <div className="bg-card/40 p-8 sm:p-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
                  <p className="text-sm font-bold text-red-400 mb-5">Without a system</p>
                  <div className="flex flex-col gap-3">
                    {["Random content", "No workflow", "Can't find old assets", "No growth"].map((s) => (
                      <div key={s} className="flex items-center gap-2.5">
                        <X className="w-3.5 h-3.5 text-red-400/60 shrink-0" />
                        <span className="text-sm text-foreground/50">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border bg-card p-6" style={{ borderColor: `${ACCENT}30` }}>
                  <p className="text-sm font-bold mb-5" style={{ color: ACCENT }}>With a system</p>
                  <div className="flex flex-col gap-3">
                    {["Structured system", "Repeatable workflow", "Instant asset access", "Predictable growth"].map((s) => (
                      <div key={s} className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 shrink-0" style={{ color: ACCENT }} />
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

      {/* ── THE BEST AI CONTENT WORKFLOW ────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-8">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
            The Best AI Content Workflow
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Here's the AI content workflow high-performing teams are running in 2026.
          </p>
        </motion.div>

        {/* Flow diagram */}
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: "Record", icon: Play },
              { label: "Generate", icon: Zap },
              { label: "Edit", icon: Scissors },
              { label: "Repurpose", icon: RefreshCw },
              { label: "Publish", icon: Send },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border bg-card">
                    <Icon className="w-4 h-4" style={{ color: ACCENT }} />
                    <span className="text-xs sm:text-sm font-semibold text-foreground">{s.label}</span>
                  </div>
                  {i < 4 && <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />}
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="flex flex-col gap-4 mb-6">
          {[
            { step: "Strategy", who: "Human", desc: "Audience insight, positioning, key messages", icon: Users },
            { step: "Ideation", who: "AI-assisted", desc: "Generate large idea sets, human curates", icon: Lightbulb },
            { step: "Creation", who: "AI + human", desc: "AI first draft, human edits for quality", icon: FileText },
            { step: "Repurposing", who: "AI", desc: "Transform one piece into multi-channel formats", icon: RefreshCw },
            { step: "Organization", who: "Platform", desc: "Store, search, and retrieve efficiently", icon: FolderOpen },
            { step: "Distribution", who: "Automated", desc: "Schedule and publish across channels", icon: Send },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className={`flex items-center gap-4 p-5 rounded-xl border transition-colors ${
                  item.step === "Organization"
                    ? "shadow-lg shadow-sky-500/5"
                    : "border-border bg-card"
                }`}
                style={item.step === "Organization" ? { borderColor: `${ACCENT}40`, background: `linear-gradient(135deg, ${ACCENT}10, ${ACCENT}05)` } : undefined}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${ACCENT}15` }}>
                  <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-sm">
                    {item.step} <span className="text-muted-foreground font-normal">— {item.who}</span>
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <InlineCta />
      </section>

      {/* ── HIDDEN BOTTLENECK ──────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-6">
            How to Build a Content System with AI
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Even teams using AI well are losing time to <strong className="text-foreground">content disorganization</strong>.
          </p>
          <div className="rounded-2xl border border-border bg-card p-8 mb-6">
            <div className="space-y-3">
              <p className="text-foreground/70 text-sm leading-relaxed">You create 50 pieces of content in a month.</p>
              <p className="text-foreground/70 text-sm leading-relaxed">Six months later, you can't find half of them.</p>
              <p className="text-foreground/70 text-sm leading-relaxed">Same assets get recreated. Old campaigns forgotten.</p>
              <p className="text-foreground font-semibold text-sm mt-4">AI at scale makes this worse — unless you have a system.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── RESULT PROOF ───────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div
            className="rounded-2xl border p-8 sm:p-10"
            style={{ borderColor: `${ACCENT}25`, backgroundColor: `${ACCENT}06` }}
          >
            <p className="font-display font-bold text-lg text-foreground mb-6">
              Teams with AI content systems:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: TrendingUp, stat: "2–4x", label: "output increase" },
                { icon: Timer, stat: "50%", label: "less time on organization" },
                { icon: BarChart3, stat: "3 people", label: "doing the work of 6" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="text-center p-4 rounded-xl border border-border bg-card/60">
                    <Icon className="w-5 h-5 mx-auto mb-2" style={{ color: ACCENT }} />
                    <p className="font-bold text-2xl text-foreground mb-1">{item.stat}</p>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── WHERE YETTEY FITS ──────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl border p-10 md:p-12"
          style={{ borderColor: `${ACCENT}30`, backgroundColor: `${ACCENT}06` }}
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-6">
            Where Yettey Fits In Your AI Content Workflow
          </h2>

          <div className="space-y-3 mb-8">
            <p className="text-foreground/70 leading-relaxed">Most AI tools help you <strong className="text-foreground">create</strong> content.</p>
            <p className="text-foreground/70 leading-relaxed">But very few help you <strong className="text-foreground">manage</strong> it.</p>
            <p className="text-foreground/80 leading-relaxed font-medium mt-4">That's where Yettey comes in.</p>
          </div>

          <div
            className="rounded-xl p-5 mb-8 text-center"
            style={{ background: `linear-gradient(135deg, ${ACCENT}15, ${ACCENT}06)`, border: `1px solid ${ACCENT}25` }}
          >
            <p className="font-display font-bold text-foreground text-base mb-1">Yettey is not another AI tool.</p>
            <p className="font-display font-bold text-base" style={{ color: ACCENT }}>It's the system that connects everything.</p>
          </div>

          <p className="text-foreground/80 font-medium mb-5">It solves the real bottleneck:</p>

          <div className="flex flex-col gap-3 mb-8">
            {[
              { icon: FolderOpen, text: "Centralize all content assets" },
              { icon: Search, text: "Find anything instantly" },
              { icon: Repeat, text: "Build a repeatable content creation system" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${ACCENT}20` }}>
                    <Icon className="w-4 h-4" style={{ color: ACCENT }} />
                  </div>
                  <span className="text-foreground/80 text-[15px]">{item.text}</span>
                </div>
              );
            })}
          </div>

          <div className="rounded-xl bg-background/50 border border-border p-5 mb-6">
            <p className="text-[14px] text-foreground/70 leading-relaxed">
              Not Google Drive. Not a shared Dropbox folder. A dedicated platform where everything is tagged, searchable, and connected to your team workflow.
            </p>
          </div>

          <Link href="/product">
            <span className="inline-flex items-center gap-1 text-sm font-medium hover:underline" style={{ color: ACCENT }}>
              See how Yettey works for content teams <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </motion.div>
      </section>

      {/* ── YETTEY DASHBOARD MOCK ──────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="rounded-2xl border border-border overflow-hidden shadow-xl shadow-black/50">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/80">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="text-xs text-muted-foreground ml-2 font-medium">Yettey — Content Dashboard</span>
            </div>
            <div className="bg-card/40 p-6 sm:p-8">
              <div className="grid grid-cols-4 gap-3 mb-4">
                {[
                  { label: "Videos", count: "38" },
                  { label: "Clips", count: "124" },
                  { label: "Drafts", count: "17" },
                  { label: "Published", count: "89" },
                ].map((cat) => (
                  <div key={cat.label} className="rounded-lg border border-border bg-background/50 p-3 text-center">
                    <p className="text-[10px] text-muted-foreground mb-1">{cat.label}</p>
                    <p className="text-lg font-bold" style={{ color: ACCENT }}>{cat.count}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-border bg-background/30 p-4 mb-3">
                <p className="text-xs text-muted-foreground mb-2">Recent timeline</p>
                <div className="flex gap-2">
                  {["Mar 1", "Mar 5", "Mar 10", "Mar 15", "Mar 20"].map((d) => (
                    <div key={d} className="flex-1 text-center">
                      <div className="h-8 rounded-sm mb-1" style={{ backgroundColor: `${ACCENT}${Math.floor(Math.random() * 30 + 10)}` }} />
                      <span className="text-[9px] text-muted-foreground">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {["blog_ai_marketing_v2.md", "social_batch_march.zip", "video_hooks_collection.mp4"].map((f) => (
                  <div key={f} className="flex items-center gap-3 px-3 py-2 rounded-lg border border-border bg-background/30">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
                    <span className="text-xs text-foreground/60 font-mono">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">Your entire content system — organized, searchable, reusable</p>
        </motion.div>
      </section>

      {/* ── HIGHLIGHT ──────────────────────────────────────────── */}
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
              The best marketing teams don't produce more content.
            </p>
            <p className="font-display font-bold text-2xl sm:text-3xl mb-6" style={{ color: ACCENT }}>
              They build better systems.
            </p>
            <div className="w-16 h-0.5 mx-auto rounded-full mb-6" style={{ backgroundColor: `${ACCENT}40` }} />
            <p className="text-foreground/60 text-base leading-relaxed max-w-md mx-auto">
              Not magic. Systems.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── PATTERN BREAK (PRE-CTA) ────────────────────────────── */}
      <PatternBreak
        line1="Stop producing more content."
        line2="Start building a system."
      />

      {/* ── DECISION PRESSURE BLOCK ────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-8 sm:p-10 text-center"
        >
          <p className="text-foreground/70 text-lg leading-relaxed mb-2">If nothing changes,</p>
          <p className="text-foreground/70 text-lg leading-relaxed mb-2">you will keep doing the same work.</p>
          <p className="font-display font-bold text-lg text-foreground">And getting the same results.</p>
        </motion.div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-20">
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl p-10 sm:p-12 text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${ACCENT}15, ${ACCENT}06)`, border: `1px solid ${ACCENT}30` }}
        >
          <div
            className="absolute top-0 right-0 w-[300px] h-[200px] rounded-full blur-[100px] opacity-25 pointer-events-none"
            style={{ backgroundColor: ACCENT }}
          />
          <div className="relative">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-2">
              You don't need more content.
            </h2>
            <p className="font-display font-bold text-xl text-foreground mb-1">
              You need a system.
            </p>
            <p className="font-display font-bold text-xl mb-8" style={{ color: ACCENT }}>
              And you need it now.
            </p>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Start building your system
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <p className="text-sm text-foreground/40 mt-6 max-w-sm mx-auto leading-relaxed">
              Every day without a system is wasted effort.
            </p>
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
              { title: "Video Editing Automation: The Future Is Already Here", slug: "video-editing-automation", readTime: "6 min read", emoji: "⚡" },
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

      {/* ── STICKY CTA ─────────────────────────────────────────── */}
      <div
        className={`fixed z-50 transition-all duration-300 bottom-6 right-6 sm:right-6 sm:left-auto left-1/2 sm:translate-x-0 -translate-x-1/2 ${
          showSticky ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <Link href="/pricing">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white hover:scale-105 transition-transform duration-200 shadow-2xl whitespace-nowrap"
            style={{ backgroundColor: ACCENT, boxShadow: `0 4px 20px ${ACCENT}50` }}
          >
            Build your system
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
