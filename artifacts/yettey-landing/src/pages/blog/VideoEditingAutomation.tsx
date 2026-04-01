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
  Scissors,
  Type,
  Smartphone,
  Sparkles,
  Film,
  Users,
  Upload,
  Download,
  RefreshCw,
  Send,
  FolderOpen,
  Search,
  Repeat,
  TrendingUp,
  Timer,
  BarChart3,
  ChevronDown,
  Megaphone,
  Video,
  Layers,
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

function InlineCta({ text = "Start creating clips" }: { text?: string }) {
  return (
    <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="my-10">
      <Link href="/pricing">
        <div
          className="flex items-center justify-between p-4 rounded-xl border cursor-pointer hover:-translate-y-0.5 transition-all duration-200 group"
          style={{ borderColor: `${ACCENT}25`, backgroundColor: `${ACCENT}06` }}
        >
          <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">
            {text}
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
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
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

      {/* ═══════════════════════════════════════════════════════════
          1. HERO — Outcome-focused, product-first
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[140px] opacity-20 pointer-events-none"
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
            AI Video Editor
          </motion.span>

          <motion.h1
            variants={fade} initial="hidden" animate="show" custom={2}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-4"
          >
            Turn long videos into viral short-form content in minutes
          </motion.h1>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={3}
            className="text-lg text-muted-foreground leading-relaxed mb-3"
          >
            Automatically generate clips for TikTok, Reels, and YouTube Shorts — <strong className="text-foreground">no editing required.</strong>
          </motion.p>

          <motion.div
            variants={fade} initial="hidden" animate="show" custom={4}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
            style={{ backgroundColor: `${ACCENT}15`, color: ACCENT, border: `1px solid ${ACCENT}30` }}
          >
            1 video → 10+ clips → ready to post
          </motion.div>

          <motion.div
            variants={fade} initial="hidden" animate="show" custom={5}
            className="flex flex-wrap gap-3 mb-8"
          >
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Start creating clips
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/product">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base text-foreground/80 border border-border bg-card hover:bg-card/80 transition-all duration-200">
                See how it works
              </button>
            </Link>
          </motion.div>

          <motion.div
            variants={fade} initial="hidden" animate="show" custom={6}
            className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-6 border-t border-border"
          >
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> February 28, 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 6 min read</span>
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4" />
              {["Video Automation", "Short-form Video", "AI Editor"].map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded-md text-xs font-medium bg-card border border-border">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. PROBLEM — Editing is slow and broken
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-8">
            The Problem: Editing Is Still Manual
          </h2>
          <div className="space-y-4 mb-8">
            <p className="text-lg text-foreground/70">You spend hours editing videos.</p>
            <div className="pl-4 border-l-2 space-y-2" style={{ borderColor: `${ACCENT}30` }}>
              <p className="text-foreground/60 text-sm">Cutting silence.</p>
              <p className="text-foreground/60 text-sm">Adding captions.</p>
              <p className="text-foreground/60 text-sm">Reframing for every platform.</p>
            </div>
            <p className="text-lg text-foreground/70">And then you repeat it. For every single video.</p>
            <p className="text-lg font-semibold text-foreground">That's not a content strategy. That's a time trap.</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm font-medium text-muted-foreground mb-4">What most creators deal with:</p>
            <div className="flex flex-col gap-3">
              {[
                "6–8 hours of manual editing per video",
                "Repetitive grunt work instead of creative decisions",
                "Low output, inconsistent posting",
                "No system — just random editing sessions",
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

      {/* ═══════════════════════════════════════════════════════════
          3. SHIFT — Automation is the new workflow
      ═══════════════════════════════════════════════════════════ */}
      <PatternBreak
        line1="Editing is no longer the bottleneck."
        line2="Your workflow is."
      />

      <section className="max-w-4xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="rounded-2xl border border-border overflow-hidden shadow-xl shadow-black/50">
            <div className="bg-card/40 p-8 sm:p-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
                  <p className="text-sm font-bold text-red-400 mb-5">Before Yettey</p>
                  <div className="flex flex-col gap-3">
                    {["Manual editing for every clip", "6–8 hours per video", "Low, inconsistent output", "No scalable workflow"].map((s) => (
                      <div key={s} className="flex items-center gap-2.5">
                        <X className="w-3.5 h-3.5 text-red-400/60 shrink-0" />
                        <span className="text-sm text-foreground/50">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border bg-card p-6" style={{ borderColor: `${ACCENT}30` }}>
                  <p className="text-sm font-bold mb-5" style={{ color: ACCENT }}>With Yettey</p>
                  <div className="flex flex-col gap-3">
                    {["Automated clip generation", "Minutes, not hours", "10+ clips from 1 video", "Scalable, repeatable system"].map((s) => (
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

      {/* ═══════════════════════════════════════════════════════════
          4. YETTEY SOLUTION — Introduce the product clearly
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl border p-10 md:p-12"
          style={{ borderColor: `${ACCENT}30`, backgroundColor: `${ACCENT}06` }}
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-6">
            Meet Yettey: Your Short-Form Video Generator
          </h2>
          <div className="space-y-3 mb-6">
            <p className="text-foreground/70 leading-relaxed">Other tools automate one part of editing.</p>
            <p className="text-foreground/70 leading-relaxed"><strong className="text-foreground">Yettey automates the entire workflow</strong> — from raw video to ready-to-post clips.</p>
          </div>

          <div
            className="rounded-xl p-5 mb-8 text-center"
            style={{ background: `linear-gradient(135deg, ${ACCENT}15, ${ACCENT}06)`, border: `1px solid ${ACCENT}25` }}
          >
            <p className="font-display font-bold text-foreground text-base mb-1">Yettey is not another AI tool.</p>
            <p className="font-display font-bold text-base" style={{ color: ACCENT }}>It's the system that turns one video into a content machine.</p>
          </div>

          <div className="flex flex-col gap-3 mb-6">
            {[
              "No manual editing required",
              "No timeline work",
              "Fully automated clip detection and export",
              "Built specifically for short-form content",
              "Export-ready for TikTok, Reels, and YouTube Shorts",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${ACCENT}25` }}>
                  <Check className="w-3 h-3" style={{ color: ACCENT }} />
                </div>
                <span className="text-foreground/80 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <Link href="/pricing">
            <button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white hover:-translate-y-0.5 transition-all duration-200"
              style={{ backgroundColor: ACCENT, boxShadow: `0 4px 16px ${ACCENT}40` }}
            >
              Start creating clips
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. HOW YETTEY WORKS — Step-based
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
            How Yettey Does This Automatically
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Four steps. Zero editing skills needed.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { step: "01", icon: Upload, title: "Upload your video", desc: "Drop any long-form video into Yettey." },
            { step: "02", icon: Sparkles, title: "Yettey AI detects key moments", desc: "AI scans energy, clarity, and emotional peaks automatically." },
            { step: "03", icon: Scissors, title: "Clips are generated instantly", desc: "10+ clips created, captioned, and reframed — done by Yettey." },
            { step: "04", icon: Download, title: "Export to TikTok / Reels / Shorts", desc: "Download or publish directly. Ready to post." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="rounded-xl border border-border bg-card p-6 relative overflow-hidden"
              >
                <span className="absolute top-4 right-4 text-4xl font-bold font-mono opacity-5 text-foreground">{item.step}</span>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${ACCENT}15` }}>
                  <Icon className="w-6 h-6" style={{ color: ACCENT }} />
                </div>
                <p className="font-semibold text-foreground mb-1">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <InlineCta text="Generate clips now" />
      </section>

      {/* ═══════════════════════════════════════════════════════════
          6. VISUAL WORKFLOW — Diagram-style UI
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="rounded-2xl border border-border overflow-hidden shadow-xl shadow-black/50">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/80">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="text-xs text-muted-foreground ml-2 font-medium">Yettey — Clip Generation Pipeline</span>
            </div>
            <div className="bg-card/40 p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
                {[
                  { name: "Upload", icon: Upload, label: "Your video" },
                  { name: "Detect", icon: Sparkles, label: "Yettey AI" },
                  { name: "Generate", icon: Video, label: "10+ clips" },
                  { name: "Export", icon: Send, label: "All platforms" },
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
              <p className="text-center text-sm text-muted-foreground mt-6">Powered by Yettey AI — every step is automated</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHAT YETTEY AUTOMATES — Card grid
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
            What Yettey Automates for You
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Everything that used to take hours — done in minutes by Yettey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: Scissors, title: "Silence & filler removal", desc: "Yettey detects and removes 'um,' 'uh,' dead air automatically. Saves 30–40% editing time.", badge: "2 min" },
            { icon: Type, title: "Auto captions & subtitles", desc: "Yettey generates 95%+ accuracy captions instantly. Multi-language support included.", badge: "3 min" },
            { icon: Smartphone, title: "Smart reframing", desc: "Yettey converts 16:9 to 9:16 with AI face tracking. No manual keyframing needed.", badge: "1 min" },
            { icon: Sparkles, title: "Highlight detection", desc: "Yettey AI scans footage and surfaces the strongest moments for viral clips.", badge: "5 min" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${ACCENT}15` }}>
                      <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                    </div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full" style={{ backgroundColor: `${ACCENT}15`, color: ACCENT }}>{item.badge}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          AHA MOMENT
      ═══════════════════════════════════════════════════════════ */}
      <PatternBreak
        line1="Automation doesn't replace creativity."
        line2="It replaces wasted time."
      />

      {/* ═══════════════════════════════════════════════════════════
          7. RESULTS / IMPACT — Numbers + benefits
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-8">
            The Yettey Impact
          </h2>
          <div
            className="rounded-2xl border p-8 sm:p-10"
            style={{ borderColor: `${ACCENT}25`, backgroundColor: `${ACCENT}06` }}
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { stat: "1 → 10+", label: "video to clips", icon: Layers },
                { stat: "80%", label: "editing time saved", icon: Timer },
                { stat: "0", label: "editing skills required", icon: Scissors },
                { stat: "3", label: "platforms ready (TikTok, Reels, Shorts)", icon: Send },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/60">
                    <Icon className="w-5 h-5 shrink-0" style={{ color: ACCENT }} />
                    <div>
                      <p className="font-bold text-xl text-foreground">{item.stat}</p>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <InlineCta text="Create your first clip" />
      </section>

      {/* ═══════════════════════════════════════════════════════════
          8. COMPARISON — Why Yettey wins
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
            Why Yettey Is Different
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            There are many video automation tools. Here's why teams choose Yettey.
          </p>

          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="grid grid-cols-3 text-xs font-bold text-muted-foreground border-b border-border">
              <div className="p-4">Feature</div>
              <div className="p-4 text-center">Other tools</div>
              <div className="p-4 text-center" style={{ color: ACCENT }}>Yettey</div>
            </div>
            {[
              { feature: "Clip generation", other: "Manual selection", yettey: "Fully automatic" },
              { feature: "Captions", other: "Separate tool", yettey: "Built-in, auto-synced" },
              { feature: "Multi-platform export", other: "Manual reframing", yettey: "One-click, all formats" },
              { feature: "Workflow integration", other: "Editing only", yettey: "End-to-end system" },
              { feature: "Content organization", other: "Not included", yettey: "Centralized asset hub" },
            ].map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 text-sm ${i < 4 ? "border-b border-border" : ""}`}>
                <div className="p-4 font-medium text-foreground/80">{row.feature}</div>
                <div className="p-4 text-center text-foreground/40">{row.other}</div>
                <div className="p-4 text-center font-semibold" style={{ color: ACCENT }}>{row.yettey}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          9. USE CASES — Creators / Marketers / Teams
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-8">
            Who Uses Yettey
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              icon: Play,
              title: "Content Creators",
              points: ["Turn podcasts into clips", "Post daily without editing", "Grow on every platform"],
            },
            {
              icon: Megaphone,
              title: "Marketing Teams",
              points: ["Repurpose webinars at scale", "Consistent brand content", "3x content output"],
            },
            {
              icon: Users,
              title: "Agencies & Teams",
              points: ["Manage multiple clients", "Centralized asset library", "Scalable video workflow"],
            },
          ].map((uc, i) => {
            const Icon = uc.icon;
            return (
              <motion.div
                key={uc.title}
                variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${ACCENT}15` }}>
                  <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                </div>
                <p className="font-semibold text-foreground mb-3">{uc.title}</p>
                <div className="flex flex-col gap-2">
                  {uc.points.map((p) => (
                    <div key={p} className="flex items-center gap-2">
                      <Check className="w-3 h-3 shrink-0" style={{ color: ACCENT }} />
                      <span className="text-xs text-muted-foreground">{p}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          YETTEY DASHBOARD MOCK
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="rounded-2xl border border-border overflow-hidden shadow-xl shadow-black/50">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/80">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="text-xs text-muted-foreground ml-2 font-medium">Yettey — Clip Dashboard</span>
            </div>
            <div className="bg-card/40 p-6 sm:p-8">
              <div className="grid grid-cols-4 gap-3 mb-4">
                {[
                  { label: "Uploaded", count: "12" },
                  { label: "Clips", count: "148" },
                  { label: "Exported", count: "96" },
                  { label: "Published", count: "84" },
                ].map((cat) => (
                  <div key={cat.label} className="rounded-lg border border-border bg-background/50 p-3 text-center">
                    <p className="text-[10px] text-muted-foreground mb-1">{cat.label}</p>
                    <p className="text-lg font-bold" style={{ color: ACCENT }}>{cat.count}</p>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-3 gap-2 mb-3">
                {[
                  { name: "interview_ep23.mp4", clips: "14 clips", status: "Done" },
                  { name: "podcast_march.mp4", clips: "11 clips", status: "Done" },
                  { name: "webinar_q1.mp4", clips: "Processing...", status: "Active" },
                ].map((f) => (
                  <div key={f.name} className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-border bg-background/30">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: f.status === "Active" ? "#FBBF24" : ACCENT }} />
                    <div className="min-w-0">
                      <p className="text-xs text-foreground/60 font-mono truncate">{f.name}</p>
                      <p className="text-[10px] text-muted-foreground">{f.clips}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">All your clips — generated, organized, and ready to post</p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HIGHLIGHT SECTION
      ═══════════════════════════════════════════════════════════ */}
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
              It's a system that does it for you.
            </p>
            <div className="w-16 h-0.5 mx-auto rounded-full mb-6" style={{ backgroundColor: `${ACCENT}40` }} />
            <p className="text-foreground/60 text-base leading-relaxed max-w-md mx-auto">
              That system is Yettey.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          10. FINAL CTA — Strong conversion push
      ═══════════════════════════════════════════════════════════ */}
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
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
              Stop editing. Start scaling content.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Turn your next video into viral clips in minutes.
            </p>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Start creating for free
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <p className="text-sm text-foreground/40 mt-5">
              No credit card required.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          11. FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-4 mb-20">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-8">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-3">
            <FaqItem
              q="What is video editing automation?"
              a="Video editing automation uses AI to handle repetitive tasks like cutting silences, adding captions, reframing clips, and detecting highlights. Yettey takes this further by automating the entire pipeline from upload to export-ready clips."
            />
            <FaqItem
              q="Can AI edit videos automatically?"
              a="Yes. Yettey AI automatically detects the strongest moments in your video, generates clips with captions and proper framing, and exports them ready for TikTok, Reels, and YouTube Shorts — all without manual editing."
            />
            <FaqItem
              q="What is the best AI video editing tool?"
              a="For turning long-form videos into short-form content, Yettey is designed specifically for this workflow. Unlike general editing tools, Yettey automates clip generation, captioning, reframing, and organization in one system."
            />
            <FaqItem
              q="How much time does Yettey save?"
              a="Teams using Yettey report saving up to 80% of their editing time. A video that used to take 6–8 hours of manual editing produces 10+ clips in minutes with Yettey."
            />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          RELATED / INTERNAL LINKS
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-xl text-foreground mb-6">Related Articles</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "How to Turn Long Videos into Viral Shorts", slug: "viral-shorts-without-editing", readTime: "5 min read", emoji: "🎬" },
              { title: "Content Marketing with AI: What Actually Works", slug: "content-marketing-ai", readTime: "7 min read", emoji: "🚀" },
              { title: "How to Create Viral Short-Form Videos", slug: "short-form-video-framework", readTime: "7 min read", emoji: "📱" },
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
            Start creating clips
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
