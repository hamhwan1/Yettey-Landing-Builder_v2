import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Calendar, Clock, Tag, Check } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const ACCENT = "#6366F1";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

export default function ViralShortsWithoutEditing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section className="relative pt-32 pb-10 overflow-hidden">
        <div
          className="hidden"
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
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-5"
          >
            Turn 1 Video into 10+ Viral Shorts in 10 Minutes
          </motion.h1>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={3}
            className="text-lg text-muted-foreground leading-relaxed mb-8"
          >
            AI can detect your best moments and turn a 60-minute recording into ready-to-post clips — in minutes, not hours.
          </motion.p>

          <motion.div
            variants={fade} initial="hidden" animate="show" custom={4}
            className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-10 border-b border-border"
          >
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> March 20, 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 5 min read</span>
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4" />
              {["Video Editing Automation", "Short-form Video", "AI Content Tools"].map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded-md text-xs font-medium bg-card border border-border">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HERO IMAGE (AI Dashboard) ─────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="rounded-2xl border border-border overflow-hidden shadow-2xl shadow-black/60">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/80">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="text-xs text-muted-foreground ml-2 font-medium">Yettey — AI Clip Studio</span>
            </div>
            <img
              src="/images/blog-ai-dashboard.png"
              alt="AI video dashboard showing clip detection and timeline"
              className="w-full h-auto block"
            />
          </div>
        </motion.div>
      </section>

      {/* ── 2. TL;DR ─────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl border p-7"
          style={{ borderColor: `${ACCENT}30`, backgroundColor: `${ACCENT}08` }}
        >
          <p className="font-semibold text-sm mb-5" style={{ color: ACCENT }}>TL;DR — Key Takeaways</p>
          <div className="flex flex-col gap-3">
            {[
              "Most creators waste 80% of their long-form content",
              "AI can instantly find highlights and turn them into short clips",
              "You don't need manual editing to go viral anymore",
              "Repurposing content is the fastest way to grow on TikTok, Reels, and Shorts",
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

      {/* ── 3. PROBLEM ───────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-8">
            The Problem Nobody Talks About
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">You spend hours recording a long video.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">You upload it. And nothing happens.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Meanwhile, someone else posts a short clip — and it gets views.</p>
          <p className="text-muted-foreground leading-relaxed">
            The difference is not the content. <strong className="text-foreground">It's distribution.</strong>
          </p>
        </motion.div>
      </section>

      {/* ── 4. GOLD MINE + BEFORE/AFTER IMAGE ────────────────── */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4 max-w-3xl mx-auto">
            Your Long-Form Content Is a Gold Mine
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
            One recording session contains dozens of viral moments. You're just not extracting them. Here's what that transformation looks like:
          </p>
          <div className="rounded-2xl border border-border overflow-hidden shadow-xl shadow-black/50">
            <img
              src="/images/blog-before-after.png"
              alt="Before: single long video timeline → After: multiple short clips"
              className="w-full h-auto block"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            One long video → multiple ready-to-post short clips, automatically
          </p>
        </motion.div>
      </section>

      {/* ── 5. WHAT AI DOES (workflow image + simple flow) ───── */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4 max-w-3xl mx-auto">
            What AI Actually Does
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
            AI doesn't replace your creativity. It removes the 2-hour mechanical work that gets between your idea and your audience.
          </p>

          {/* Workflow image */}
          <div className="rounded-2xl border border-border overflow-hidden shadow-xl shadow-black/50 mb-10">
            <img
              src="/images/blog-workflow.png"
              alt="AI workflow: Upload video → Analyzes → Finds highlights → Generates short clips"
              className="w-full h-auto block"
            />
          </div>

          {/* Simple flow pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
            {["Upload video", "AI analyzes", "Finds highlights", "Generates clips"].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span
                  className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  {step}
                </span>
                {i < 3 && <ArrowRight className="w-4 h-4 text-muted-foreground" />}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── 6. STEP-BY-STEP (4 steps) ────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-8">
            Step-by-Step Process
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { step: "Upload your video", desc: "Any long-form video — podcast, interview, webinar, or vlog. Raw footage works fine." },
              { step: "AI scans and ranks clips", desc: "The system surfaces the strongest 15–60 second windows, ranked by predicted engagement." },
              { step: "Review and approve", desc: "Browse suggestions in a timeline view. Accept, skip, or trim with one click." },
              { step: "Customize and publish", desc: "Add captions, your logo, and brand colors. Export or post directly to every platform." },
            ].map((item, i) => (
              <div key={item.step} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5"
                  style={{ backgroundColor: ACCENT }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-foreground mb-1">{item.step}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── SHORT VIDEO PREVIEW IMAGE ─────────────────────────── */}
      <section className="max-w-sm mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="rounded-2xl border border-border overflow-hidden shadow-xl shadow-black/50">
            <img
              src="/images/blog-short-preview.png"
              alt="Vertical short-form video with captions — ready to post"
              className="w-full h-auto block"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Auto-captioned, 9:16 formatted, ready to post
          </p>
        </motion.div>
      </section>

      {/* ── 7. OUTPUT — CLIPS PER VIDEO ──────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4">
            How Many Shorts Can You Get?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            As a rough guide, here's what to expect from a single recording:
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { length: "15 min video", clips: "2–4 clips" },
              { length: "30 min video", clips: "4–7 clips" },
              { length: "60 min video", clips: "7–12 clips" },
            ].map((item) => (
              <div
                key={item.length}
                className="p-6 rounded-xl border text-center"
                style={{ borderColor: `${ACCENT}25`, backgroundColor: `${ACCENT}08` }}
              >
                <p className="font-bold text-2xl mb-1" style={{ color: ACCENT }}>{item.clips}</p>
                <p className="text-sm text-muted-foreground">{item.length}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            Aim for 3–5 strong clips per video. That's 15–20 ready-to-post shorts from just 5 recordings — enough for a full month of daily posting.
          </p>
        </motion.div>
      </section>

      {/* ── 8. GROWTH STRATEGY ───────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-8">
            The Real Growth Strategy
          </h2>
          <div
            className="rounded-2xl p-10 text-center"
            style={{ background: `linear-gradient(135deg, ${ACCENT}15, ${ACCENT}05)`, border: `1px solid ${ACCENT}25` }}
          >
            <p className="font-display font-bold text-2xl text-foreground mb-3">
              The fastest creators don't create more.
            </p>
            <p className="font-display font-bold text-2xl" style={{ color: ACCENT }}>
              They reuse more.
            </p>
            <p className="text-muted-foreground mt-5 text-base leading-relaxed max-w-lg mx-auto">
              Your long-form library is a distribution asset. Every video you've already made contains clips you haven't posted yet.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── 9. FINAL CTA ─────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-20">
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl p-10 text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${ACCENT}20, ${ACCENT}08)`, border: `1px solid ${ACCENT}35` }}
        >
          <div
            className="hidden"
            style={{ backgroundColor: ACCENT }}
          />
          <div className="relative">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
              Turn your next video into 10+ shorts
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Upload once. Let AI find the best moments. Get platform-ready clips without touching a timeline.
            </p>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Try it with your own video
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── RELATED ARTICLES ─────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-xl text-foreground mb-6">Related Articles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Best AI Tools for Content Creators in 2026", slug: "ai-tools-content-creators", readTime: "8 min read", emoji: "✨" },
              { title: "How to Create Viral Short-Form Videos (The Framework)", slug: "short-form-video-framework", readTime: "6 min read", emoji: "📱" },
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
