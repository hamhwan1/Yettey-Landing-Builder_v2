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
  Video,
  PenTool,
  Image,
  Database,
  Camera,
  Scissors,
  FileText,
  HardDrive,
  Send,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const ACCENT = "#8B5CF6";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07 },
  }),
};

const categories = [
  {
    icon: Video,
    title: "Video Clip Generation",
    description: "Long-form video → viral short clips, automatically.",
    doesWhat: [
      "Auto-splits long videos into short clips",
      "Adds captions, resizing, formatting",
    ],
    works: [
      "Transcript + visual scoring = best clips",
      "Always test captions on your own content",
    ],
    watchOut: [
      "Many cap exports at 1080p",
      "AI misses context — review manually",
    ],
  },
  {
    icon: PenTool,
    title: "AI Writing & Caption Tools",
    description: "Generate hooks, captions, and scripts from your content.",
    doesWhat: [
      "Creates hook and CTA variations",
      "Adapts content across platforms",
    ],
    works: [
      "Give it your message → get 10 hooks to test",
      "Multiply ideas, don't write from scratch",
    ],
    watchOut: [
      "Outputs sound generic without editing",
      "Heavy editing needed to sound like you",
    ],
  },
  {
    icon: Image,
    title: "Image & Thumbnail Generation",
    description: "Custom images and thumbnails from text prompts.",
    doesWhat: [
      "Generates thumbnails and social graphics",
      "Batch creates variations for A/B testing",
    ],
    works: [
      "20 thumbnails in minutes — pick the best 3",
      "Great for rapid prototyping",
    ],
    watchOut: [
      "Consistency across images is hard",
      "Careful prompting needed for brand style",
    ],
  },
  {
    icon: Database,
    title: "Asset Management",
    description: "The layer most creators ignore — costing hours every week.",
    doesWhat: [
      "Centralizes all content assets",
      "Searchable library with tagging",
    ],
    works: [
      "Find existing assets in seconds",
      "Repurpose instead of recreate",
    ],
    watchOut: [
      "Google Drive wasn't built for this",
      "Folders can't preview or tag content",
    ],
  },
];

const stackSteps = [
  { step: "01", label: "Record", tool: "Zoom / Camera", icon: Camera },
  { step: "02", label: "Generate", tool: "AI clip tools", icon: Scissors },
  { step: "03", label: "Write", tool: "AI captions", icon: FileText },
  { step: "04", label: "Store", tool: "Asset management (Yettey)", icon: HardDrive },
  { step: "05", label: "Distribute", tool: "Scheduling tools", icon: Send },
];

export default function AiToolsContentCreators() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[160px] opacity-25"
            style={{ backgroundColor: ACCENT }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <Link href="/blog">
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </button>
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1}>
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold mb-7"
              style={{ backgroundColor: `${ACCENT}25`, color: ACCENT }}
            >
              AI Content
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="font-display font-bold text-4xl sm:text-5xl md:text-[3.5rem] text-foreground leading-[1.15] mb-6"
          >
            Best AI Tools for Content Creators in 2026
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed"
          >
            We tested 20+ AI tools so you don't have to. Here's what actually
            works for creators who want to produce more without burning out.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground pb-10 border-b border-border"
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> March 15, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> 8 min read
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4" />
              {["AI Content Tools", "Content Marketing AI", "Short-form Video"].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-medium bg-card border border-border">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. TL;DR CARD ──────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-20">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl p-10 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${ACCENT}12, ${ACCENT}06)`,
            border: `1px solid ${ACCENT}30`,
          }}
        >
          <div
            className="absolute -top-10 -right-10 w-[300px] h-[200px] rounded-full blur-[100px] opacity-15 pointer-events-none"
            style={{ backgroundColor: ACCENT }}
          />
          <div className="relative">
            <p className="font-display font-bold text-base mb-6" style={{ color: ACCENT }}>
              TL;DR — Key Takeaways
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Most AI tools are hype — only a handful actually save meaningful time.",
                "The best tools focus on one job and do it extremely well.",
                "Asset management is the critical layer most creators overlook.",
                "The right stack depends on your content type, not your follower count.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: `${ACCENT}25` }}
                  >
                    <Check className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                  </div>
                  <span className="text-[15px] text-foreground/80 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* ── 3. WHY CREATORS STRUGGLE ───────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-10">
            Why Most Creators Struggle with AI Tools
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
          className="rounded-2xl border-2 p-10 md:p-12 mb-10"
          style={{ borderColor: "#ef444435", backgroundColor: "#ef444412" }}
        >
          <div className="flex flex-col gap-6">
            {[
              "Too many tools — new ones launch every week with the same promises",
              "No workflow — individual tools don't connect into a system",
              "No clear process — jumping between apps without a plan",
              "Time wasted switching tools instead of creating content",
            ].map((point) => (
              <div key={point} className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-foreground/80 text-[15px] leading-relaxed font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
          className="rounded-2xl border p-10 text-center"
          style={{
            borderColor: `${ACCENT}30`,
            background: `linear-gradient(135deg, ${ACCENT}12, ${ACCENT}06)`,
          }}
        >
          <p className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-snug">
            You don't need more tools.{" "}
            <span style={{ color: ACCENT }}>You need a system.</span>
          </p>
        </motion.div>
      </section>

      {/* ── 4. CATEGORY SECTIONS ───────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
            What We Actually Found
          </h2>
          <p className="text-muted-foreground text-base mb-12">
            Four categories. 20+ tools tested. Here's what matters.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="rounded-2xl border border-border bg-card overflow-hidden hover:border-violet-500/20 transition-colors duration-300"
              >
                <div className="p-9">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${ACCENT}18` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-8 ml-[52px]">
                    {cat.description}
                  </p>

                  <div className="grid gap-8 sm:grid-cols-3">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: ACCENT }}>
                        What it does
                      </p>
                      <div className="flex flex-col gap-3">
                        {cat.doesWhat.map((item) => (
                          <div key={item} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ACCENT }} />
                            <p className="text-[13px] text-foreground/70 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest mb-4 text-blue-400">
                        What actually works
                      </p>
                      <div className="flex flex-col gap-3">
                        {cat.works.map((item) => (
                          <div key={item} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 mt-0.5 shrink-0 text-blue-400" />
                            <p className="text-[13px] text-foreground/70 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest mb-4 text-amber-400">
                        Watch out for
                      </p>
                      <div className="flex flex-col gap-3">
                        {cat.watchOut.map((item) => (
                          <div key={item} className="flex items-start gap-2.5">
                            <span className="w-4 h-4 mt-0.5 shrink-0 flex items-center justify-center text-amber-400 text-[13px] font-bold">!</span>
                            <p className="text-[13px] text-foreground/70 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── 5. RECOMMENDED STACK ───────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
            Recommended Stack for 2026
          </h2>
          <p className="text-muted-foreground text-base mb-12">
            Not specific tools — the architecture that works.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {stackSteps.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="flex items-center gap-5 p-5 rounded-xl border border-border bg-card group hover:border-violet-500/30 transition-colors duration-200"
              >
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <span className="text-[11px] font-mono font-bold" style={{ color: `${ACCENT}90` }}>
                    {item.step}
                  </span>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${ACCENT}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-base">
                    {item.label}{" "}
                    <span className="text-muted-foreground font-normal">→ {item.tool}</span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── 6. HIGHLIGHT QUOTE ─────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-20">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-3xl py-16 px-10 md:py-20 md:px-16 text-center relative overflow-hidden"
          style={{
            background: `linear-gradient(145deg, ${ACCENT}18, ${ACCENT}08, ${ACCENT}12)`,
            border: `1px solid ${ACCENT}30`,
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[140px] opacity-25 pointer-events-none"
            style={{ backgroundColor: ACCENT }}
          />
          <div className="relative">
            <p className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-[1.2] mb-6">
              The best creators don't
              <br />
              use more tools.
            </p>
            <p className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.2]" style={{ color: ACCENT }}>
              They use better systems.
            </p>
            <p className="text-muted-foreground text-base mt-8 max-w-md mx-auto leading-relaxed">
              In 2026, the creators who win aren't the most talented.
              <br className="hidden sm:block" />
              They're the most systematized.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── 7. CTA ─────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-20">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-3xl py-16 px-10 text-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${ACCENT}20, ${ACCENT}10)`,
            border: `1px solid ${ACCENT}35`,
          }}
        >
          <div
            className="absolute top-0 right-0 w-[400px] h-[250px] rounded-full blur-[120px] opacity-20 pointer-events-none"
            style={{ backgroundColor: ACCENT }}
          />
          <div className="relative">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-5">
              Start creating content with Yettey
            </h2>
            <p className="text-foreground/70 text-lg max-w-lg mx-auto leading-relaxed mb-4">
              Stop switching between tools.
            </p>
            <p className="text-foreground/70 text-lg max-w-lg mx-auto leading-relaxed mb-12">
              Start building your content system.
            </p>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2.5 px-12 py-5 rounded-2xl font-bold text-lg text-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-200 shadow-xl"
                style={{
                  backgroundColor: ACCENT,
                  boxShadow: `0 12px 40px ${ACCENT}50`,
                }}
              >
                Start for free
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── 8. RELATED ARTICLES ────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 pb-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-xl text-foreground mb-8">
            Related Articles
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Content Marketing with AI: What Actually Works", slug: "/blog/content-marketing-ai", readTime: "7 min read", emoji: "🚀" },
              { title: "How to Turn Long Videos into Viral Shorts", slug: "/blog/viral-shorts-without-editing", readTime: "5 min read", emoji: "🎬" },
            ].map((post) => (
              <Link key={post.slug} href={post.slug}>
                <div className="p-6 rounded-xl border border-border bg-card hover:border-violet-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-200 cursor-pointer group flex items-start gap-4">
                  <span className="text-4xl shrink-0">{post.emoji}</span>
                  <div>
                    <p className="font-semibold text-sm text-foreground group-hover:text-violet-400 transition-colors leading-snug mb-2">
                      {post.title}
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
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
