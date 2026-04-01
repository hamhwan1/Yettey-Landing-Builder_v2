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
  Zap,
  Play,
  MessageSquare,
  Scissors,
  Type,
  Smartphone,
  Sparkles,
  Film,
  Users,
  Lightbulb,
  FileText,
  RefreshCw,
  Send,
  FolderOpen,
  Search,
  Repeat,
  TrendingUp,
  Timer,
  BarChart3,
  ChevronDown,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const ACCENT = "#10B981";

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
            Start building your system now
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ color: ACCENT }} />
        </div>
      </Link>
    </motion.div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="font-semibold text-sm text-foreground pr-4">{q}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function VideoEditingAutomation() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
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
            Video Editing
          </motion.span>

          <motion.h1
            variants={fade} initial="hidden" animate="show" custom={2}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-3"
          >
            How to Automate Video Editing in 2026
          </motion.h1>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={3}
            className="text-xl font-medium mb-8" style={{ color: ACCENT }}
          >
            Save 80% Editing Time with AI Video Editing Tools
          </motion.p>

          <motion.div
            variants={fade} initial="hidden" animate="show" custom={4}
            className="text-lg text-muted-foreground leading-relaxed space-y-3 mb-4"
          >
            <p>Video editing is already automated.</p>
            <p>The question is: <strong className="text-foreground">are you?</strong></p>
          </motion.div>

          <motion.div
            variants={fade} initial="hidden" animate="show" custom={5}
            className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-6 pb-10 border-b border-border"
          >
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> February 28, 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 6 min read</span>
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4" />
              {["Video Editing Automation", "AI Content Tools", "Content Production"].map((tag) => (
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
          <p className="font-semibold text-sm mb-5" style={{ color: ACCENT }}>TL;DR — Video Editing Automation</p>
          <div className="flex flex-col gap-3">
            {[
              "Repetitive editing tasks — cutting silences, captions, reframing — are now fully automatable.",
              "Creative judgment (tone, pacing, storytelling) remains human.",
              "Teams using automation report 60–70% reduction in editing time.",
              "The bottleneck is shifting from editing to content organization.",
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

      {/* ── PATTERN BREAK 1 ────────────────────────────────────── */}
      <PatternBreak
        line1="Editing is no longer the bottleneck."
        line2="Your workflow is."
      />

      {/* ── PAIN SECTION ───────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="space-y-4">
            <p className="text-lg text-foreground/70">You spend hours editing videos.</p>
            <div className="pl-4 border-l-2 space-y-2" style={{ borderColor: `${ACCENT}30` }}>
              <p className="text-foreground/60 text-sm">Cutting silence.</p>
              <p className="text-foreground/60 text-sm">Adding captions.</p>
              <p className="text-foreground/60 text-sm">Reframing clips.</p>
            </div>
            <p className="text-lg text-foreground/70">And then you repeat it again.</p>
            <p className="text-lg font-semibold text-foreground">That's the problem.</p>
          </div>
        </motion.div>
      </section>

      {/* ── CORE MESSAGE ───────────────────────────────────────── */}
      <PatternBreak
        line1="Automation is not optional anymore."
        line2="It's the baseline."
      />

      {/* ── WHAT IS VIDEO EDITING AUTOMATION ───────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-6">
            What Is Video Editing Automation
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A professional editor spends 4–8 hours on a single 30-minute interview.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            AI does the mechanical parts — cutting silences, removing filler words, adding captions, reframing for mobile — in under 10 minutes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This isn't hypothetical. It's happening now, at scale.
          </p>
        </motion.div>
      </section>

      {/* ── WHY IT MATTERS ─────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-6">
            Why Video Editing Automation Matters
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The question isn't whether automation is changing video editing.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            It's <strong className="text-foreground">which parts of the workflow</strong> you should still do manually.
          </p>
        </motion.div>

        {/* Before vs After */}
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="rounded-2xl border border-border overflow-hidden shadow-xl shadow-black/50 mb-6">
            <div className="bg-card/40 p-8 sm:p-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
                  <p className="text-sm font-bold text-red-400 mb-5">Before automation</p>
                  <div className="flex flex-col gap-3">
                    {["Manual editing", "6–8 hours per video", "Low output", "Repetitive grunt work"].map((s) => (
                      <div key={s} className="flex items-center gap-2.5">
                        <X className="w-3.5 h-3.5 text-red-400/60 shrink-0" />
                        <span className="text-sm text-foreground/50">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border bg-card p-6" style={{ borderColor: `${ACCENT}30` }}>
                  <p className="text-sm font-bold mb-5" style={{ color: ACCENT }}>After automation</p>
                  <div className="flex flex-col gap-3">
                    {["Automated workflow", "1 hour or less", "Scalable content", "Focus on creative work"].map((s) => (
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

      {/* ── BEST AI TOOLS FOR AUTOMATION (CARD GRID) ───────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
            Best AI Tools for Video Editing Automation
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Here's what automatic video editing software can do today.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: Scissors, title: "Silence removal", desc: "Detects and removes 'um,' 'uh,' long pauses. Saves 30–40% editing time alone.", time: "2 min" },
            { icon: Type, title: "Auto captions", desc: "95%+ accuracy transcription. Captions generated in minutes, need only light review.", time: "3 min" },
            { icon: Smartphone, title: "Auto reframing", desc: "16:9 to 9:16 conversion with AI face tracking. No manual keyframing required.", time: "1 min" },
            { icon: Sparkles, title: "Highlight detection", desc: "Scans hours of footage, surfaces the strongest 15–60 second clips automatically.", time: "5 min" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${ACCENT}15` }}>
                    <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-[11px] text-muted-foreground font-mono">{item.time}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <InlineCta />
      </section>

      {/* ── AHA MOMENT ─────────────────────────────────────────── */}
      <PatternBreak
        line1="Automation doesn't replace creativity."
        line2="It replaces wasted time."
      />

      {/* ── WHAT STAYS HUMAN ───────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-6">
            What Still Requires Human Judgment
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            AI handles the mechanical. You handle the meaningful.
          </p>
          <div className="flex flex-col gap-4">
            {[
              { label: "Narrative structure", desc: "AI can cut silence, but it can't feel the rhythm of a story." },
              { label: "Tone & brand voice", desc: "A technically well-edited clip can still feel off-brand. That requires you." },
              { label: "Creative direction", desc: "Music, color grading, visual metaphors — these shape perception. AI doesn't do this well." },
              { label: "Context & judgment", desc: "Keeping an awkward moment for authenticity? Cutting something good because it's off-message? That's editorial intelligence." },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold text-foreground text-sm mb-1">{item.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── REAL PROBLEM ───────────────────────────────────────── */}
      <PatternBreak
        line1="The real bottleneck is not editing."
        line2="It's workflow."
      />

      {/* ── HOW TO AUTOMATE STEP BY STEP ───────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-8">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
            How to Automate Video Editing Step by Step
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            High-performing teams aren't replacing editors. They're restructuring what editors do.
          </p>
        </motion.div>

        {/* Hook → Body → CTA diagram */}
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-8">
          <div className="rounded-2xl border border-border overflow-hidden shadow-xl shadow-black/50">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/80">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="text-xs text-muted-foreground ml-2 font-medium">Video Editing Workflow</span>
            </div>
            <div className="bg-card/40 p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
                {[
                  { name: "Import", icon: Film, label: "Raw footage" },
                  { name: "AI Edit", icon: Zap, label: "Automated" },
                  { name: "Review", icon: Play, label: "Human check" },
                  { name: "Publish", icon: Send, label: "Multi-channel" },
                ].map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.name} className="flex items-center gap-4 sm:gap-5">
                      <div
                        className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center gap-1"
                        style={{
                          backgroundColor: `${ACCENT}${i === 1 ? "20" : "10"}`,
                          border: i === 1 ? `2px solid ${ACCENT}60` : `1px solid ${ACCENT}20`,
                        }}
                      >
                        <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                        <span className="font-bold text-sm text-foreground">{step.name}</span>
                        <span className="text-[9px] text-muted-foreground">{step.label}</span>
                      </div>
                      {i < 3 && <ArrowRight className="w-4 h-4 text-muted-foreground hidden sm:block" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="rounded-2xl border border-border bg-card p-6 mb-6">
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-lg bg-red-500/5 border border-red-500/15 p-4">
                <p className="text-xs font-bold text-red-400 mb-2">Before</p>
                <p className="text-sm text-foreground/50">80% mechanical editing</p>
                <p className="text-sm text-foreground/50">20% creative decisions</p>
              </div>
              <div className="rounded-lg border p-4" style={{ borderColor: `${ACCENT}20`, backgroundColor: `${ACCENT}05` }}>
                <p className="text-xs font-bold mb-2" style={{ color: ACCENT }}>After</p>
                <p className="text-sm text-foreground/70">20% reviewing AI output</p>
                <p className="text-sm text-foreground/70">80% creative & strategic</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── WORKFLOW SECTION ────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
            Video Editing Automation Workflow
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The complete video editing workflow used by high-performing teams.
          </p>
        </motion.div>

        {/* Flow diagram */}
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-6">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {[
              { label: "Strategy", icon: Users },
              { label: "Ideation", icon: Lightbulb },
              { label: "Editing", icon: Scissors },
              { label: "Repurpose", icon: RefreshCw },
              { label: "Distribute", icon: Send },
              { label: "Organize", icon: FolderOpen },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border bg-card">
                    <Icon className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                    <span className="text-xs font-semibold text-foreground">{s.label}</span>
                  </div>
                  {i < 5 && <ArrowRight className="w-3 h-3 text-muted-foreground" />}
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="flex flex-col gap-3">
          {[
            { step: "Strategy", who: "Human", desc: "Define audience, goals, key messages", icon: Users },
            { step: "Ideation", who: "AI-assisted", desc: "Generate topics, hooks, and content angles", icon: Lightbulb },
            { step: "Editing", who: "AI-assisted", desc: "Automated cuts, captions, reframing", icon: Scissors, highlight: true },
            { step: "Repurposing", who: "AI", desc: "Transform long-form into multi-format clips", icon: RefreshCw },
            { step: "Distribution", who: "Automated", desc: "Schedule and publish across channels", icon: Send },
            { step: "Organization", who: "Platform", desc: "Store, tag, search all assets centrally", icon: FolderOpen, highlight: true },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className={`flex items-center gap-4 p-4 rounded-xl border ${
                  item.highlight ? "shadow-lg" : "border-border bg-card"
                }`}
                style={item.highlight ? { borderColor: `${ACCENT}40`, background: `linear-gradient(135deg, ${ACCENT}10, ${ACCENT}05)` } : undefined}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${ACCENT}15` }}>
                  <Icon className="w-4 h-4" style={{ color: ACCENT }} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-sm">
                    {item.step} <span className="text-muted-foreground font-normal text-xs">— {item.who}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <InlineCta />
      </section>

      {/* ── IS IT WORTH IT ─────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-6">
            Is Video Editing Automation Worth It
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            As editing time collapses, content output increases dramatically.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            A team that used to publish 4 videos a month now publishes 40.
          </p>
        </motion.div>

        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div
            className="rounded-2xl border p-8 sm:p-10"
            style={{ borderColor: `${ACCENT}25`, backgroundColor: `${ACCENT}06` }}
          >
            <p className="font-display font-bold text-lg text-foreground mb-6">
              Teams using video editing automation:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: TrendingUp, stat: "10x", label: "more content output" },
                { icon: Timer, stat: "80%", label: "editing time saved" },
                { icon: BarChart3, stat: "4 → 40", label: "videos per month" },
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

      {/* ── PRODUCT POSITIONING ────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl border p-10 md:p-12"
          style={{ borderColor: `${ACCENT}30`, backgroundColor: `${ACCENT}06` }}
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-6">
            Where Yettey Fits In Your Workflow
          </h2>

          <div className="space-y-3 mb-6">
            <p className="text-foreground/70 leading-relaxed">Most tools automate editing.</p>
            <p className="text-foreground/70 leading-relaxed">But none of them solve what comes <strong className="text-foreground">after</strong>.</p>
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
              { icon: FolderOpen, text: "Centralize all video assets" },
              { icon: Search, text: "Find any clip instantly" },
              { icon: Repeat, text: "Build a repeatable video editing workflow" },
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

          <Link href="/product">
            <span className="inline-flex items-center gap-1 text-sm font-medium hover:underline" style={{ color: ACCENT }}>
              See how Yettey works for video teams <ArrowRight className="w-3.5 h-3.5" />
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
              <span className="text-xs text-muted-foreground ml-2 font-medium">Yettey — Video Dashboard</span>
            </div>
            <div className="bg-card/40 p-6 sm:p-8">
              <div className="grid grid-cols-4 gap-3 mb-4">
                {[
                  { label: "Raw", count: "52" },
                  { label: "Edited", count: "48" },
                  { label: "Clips", count: "196" },
                  { label: "Published", count: "142" },
                ].map((cat) => (
                  <div key={cat.label} className="rounded-lg border border-border bg-background/50 p-3 text-center">
                    <p className="text-[10px] text-muted-foreground mb-1">{cat.label}</p>
                    <p className="text-lg font-bold" style={{ color: ACCENT }}>{cat.count}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {["interview_march_final.mp4", "shorts_batch_12.zip", "captions_approved_v3.srt", "broll_collection.mp4"].map((f) => (
                  <div key={f} className="flex items-center gap-3 px-3 py-2 rounded-lg border border-border bg-background/30">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
                    <span className="text-xs text-foreground/60 font-mono">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">All your video assets — organized, searchable, reusable</p>
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
              The next competitive advantage isn't faster editing.
            </p>
            <p className="font-display font-bold text-2xl sm:text-3xl mb-6" style={{ color: ACCENT }}>
              It's a better system.
            </p>
            <div className="w-16 h-0.5 mx-auto rounded-full mb-6" style={{ backgroundColor: `${ACCENT}40` }} />
            <p className="text-foreground/60 text-base leading-relaxed max-w-md mx-auto">
              Find it. Reuse it. Build on it.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── DECISION PRESSURE ──────────────────────────────────── */}
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
            <p className="font-display font-bold text-xl mb-8" style={{ color: ACCENT }}>
              You need a system.
            </p>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Automate your workflow
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <p className="text-sm text-foreground/40 mt-6 max-w-sm mx-auto leading-relaxed">
              If nothing changes, your results won't either.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-20">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-8">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-3">
            <FaqItem
              q="What is video editing automation?"
              a="Video editing automation uses AI to handle repetitive tasks like cutting silences, adding captions, reframing clips, and detecting highlights — tasks that previously required hours of manual work."
            />
            <FaqItem
              q="Can AI edit videos automatically?"
              a="Yes. Modern AI video editing tools can automatically remove filler words, generate captions with 95%+ accuracy, reframe video for different platforms, and identify the most engaging clips from long-form content."
            />
            <FaqItem
              q="What is the best AI video editing tool?"
              a="The best tool depends on your workflow. For silence removal, tools like Descript excel. For full workflow automation — editing, organizing, and distributing — a system like Yettey connects everything in one place."
            />
            <FaqItem
              q="How much time does automation save?"
              a="Teams using video editing automation report 60–80% reduction in editing time. A video that used to take 6–8 hours of manual editing can be processed in under an hour with AI-assisted tools."
            />
          </div>
        </motion.div>
      </section>

      {/* ── RELATED ARTICLES ───────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-xl text-foreground mb-6">Related Articles</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "How to Turn Long Videos into Viral Shorts", slug: "viral-shorts-without-editing", readTime: "5 min read", emoji: "🎬" },
              { title: "Best AI Tools for Content Creators in 2026", slug: "ai-tools-content-creators", readTime: "8 min read", emoji: "✨" },
              { title: "Content Marketing with AI: What Actually Works", slug: "content-marketing-ai", readTime: "7 min read", emoji: "🚀" },
            ].map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex items-start gap-3">
                  <span className="text-2xl shrink-0">{post.emoji}</span>
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
