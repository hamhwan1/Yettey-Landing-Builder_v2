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
    description:
      "Takes long-form video and automatically generates short clips for TikTok, Reels, and Shorts.",
    doesWhat: [
      "Splits long videos into viral-ready short clips using AI",
      "Adds auto-captions, resizing, and platform formatting",
    ],
    works: [
      "Tools combining transcript analysis with visual scoring produce the best clips",
      "Auto-captioning quality varies — always test on your own content first",
    ],
    watchOut: [
      "Many tools cap export at 1080p or add watermarks on free plans",
      "AI clip selection still misses context — manual review is essential",
    ],
  },
  {
    icon: PenTool,
    title: "AI Writing & Caption Tools",
    description:
      "Generates captions, hooks, descriptions, and scripts from your content or prompts.",
    doesWhat: [
      "Creates variations of hooks, CTAs, and social captions",
      "Rewrites and adapts content for different platforms",
    ],
    works: [
      "Best for variation generation — give it your core message, get 10 hooks to test",
      "Use AI to multiply ideas you already have, not to write from scratch",
    ],
    watchOut: [
      "Generic outputs that sound like every other brand on the internet",
      "AI writing needs heavy editing to sound like you",
    ],
  },
  {
    icon: Image,
    title: "Image & Thumbnail Generation",
    description:
      "Creates custom images, thumbnails, and visual assets using text prompts.",
    doesWhat: [
      "Generates thumbnail options, social graphics, and brand visuals",
      "Batch creates visual variations for A/B testing",
    ],
    works: [
      "Generate 20 thumbnail options in minutes — pick the best three",
      "Great for rapid prototyping before final design polish",
    ],
    watchOut: [
      "Consistency is still a challenge across AI-generated images",
      "Maintaining a recognizable visual style requires careful prompting",
    ],
  },
  {
    icon: Database,
    title: "Asset Management",
    description:
      "The category most creators ignore — and it's quietly costing them hours every week.",
    doesWhat: [
      "Stores, organizes, and makes searchable all your content assets",
      "Centralizes raw footage, edited clips, thumbnails, and templates",
    ],
    works: [
      "A centralized library with tagging transforms how fast you repurpose content",
      "Find what you already have in seconds instead of recreating from scratch",
    ],
    watchOut: [
      "Google Drive and Dropbox weren't built for visual content workflows",
      "You can't preview, tag, or collaborate on content in a folder system",
    ],
  },
];

const stackSteps = [
  { step: "01", label: "Record", tool: "Zoom / Camera", icon: Camera },
  { step: "02", label: "Generate", tool: "AI clip tools", icon: Scissors },
  { step: "03", label: "Write", tool: "AI captions", icon: FileText },
  {
    step: "04",
    label: "Store",
    tool: "Asset management (Yettey)",
    icon: HardDrive,
  },
  { step: "05", label: "Distribute", tool: "Scheduling tools", icon: Send },
];

export default function AiToolsContentCreators() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-14 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[140px] opacity-20"
            style={{ backgroundColor: ACCENT }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <Link href="/blog">
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-6"
              style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}
            >
              AI Content
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-5"
          >
            Best AI Tools for Content Creators in 2026
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
          >
            We tested 20+ AI tools so you don't have to. Here's what actually
            works for creators who want to produce more without burning out.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-8 border-b border-border"
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 15, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4" />
              {["AI Content Tools", "Content Marketing AI", "Short-form Video"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-xs font-medium bg-card border border-border"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. TL;DR CARD ──────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-8"
        >
          <p
            className="font-semibold text-sm mb-5"
            style={{ color: ACCENT }}
          >
            TL;DR — Key Takeaways
          </p>
          <ul className="flex flex-col gap-3">
            {[
              "Most AI tools are hype — only a handful actually save creators meaningful time.",
              "The best tools focus on one job and do it extremely well.",
              "Asset management is the unsexy but critical layer most creators overlook.",
              "The right stack depends on your content type, not your follower count.",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: `${ACCENT}20` }}
                >
                  <Check
                    className="w-3 h-3"
                    style={{ color: ACCENT }}
                  />
                </div>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ── 3. WHY CREATORS STRUGGLE ───────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-8">
            Why Most Creators Struggle with AI Tools
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
          className="rounded-2xl border p-8 md:p-10 mb-8"
          style={{ borderColor: "#ef444425", backgroundColor: "#ef44440a" }}
        >
          <div className="flex flex-col gap-4">
            {[
              "Too many tools — new ones launch every week with the same promises",
              "No workflow — individual tools don't connect into a system",
              "No clear process — creators jump between apps without a plan",
              "Time wasted switching tools instead of actually creating content",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-500/15 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 text-red-400" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={2}
          className="rounded-2xl border p-8 text-center"
          style={{
            borderColor: `${ACCENT}30`,
            background: `linear-gradient(135deg, ${ACCENT}10, ${ACCENT}05)`,
          }}
        >
          <p className="text-xl sm:text-2xl font-display font-bold text-foreground leading-snug">
            You don't need more tools.{" "}
            <span style={{ color: ACCENT }}>You need a system.</span>
          </p>
        </motion.div>
      </section>

      {/* ── 4. CATEGORY SECTIONS ───────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
            What We Actually Found
          </h2>
          <p className="text-muted-foreground mb-10">
            Four categories. Tested across 20+ tools. Here's what matters.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${ACCENT}15` }}
                    >
                      <Icon
                        className="w-[18px] h-[18px]"
                        style={{ color: ACCENT }}
                      />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 ml-12">
                    {cat.description}
                  </p>

                  <div className="grid gap-6 sm:grid-cols-3">
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-wider mb-3"
                        style={{ color: ACCENT }}
                      >
                        What it does
                      </p>
                      {cat.doesWhat.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 mb-2"
                        >
                          <Check
                            className="w-3.5 h-3.5 mt-0.5 shrink-0"
                            style={{ color: ACCENT }}
                          />
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-blue-400">
                        What actually works
                      </p>
                      {cat.works.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 mb-2"
                        >
                          <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-blue-400" />
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-amber-400">
                        What to watch out for
                      </p>
                      {cat.watchOut.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 mb-2"
                        >
                          <span className="w-3.5 h-3.5 mt-0.5 shrink-0 flex items-center justify-center text-amber-400 text-xs font-bold">
                            !
                          </span>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── 5. RECOMMENDED STACK ───────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
            Recommended Stack for 2026
          </h2>
          <p className="text-muted-foreground mb-10">
            Rather than listing specific tools that change monthly, here's the
            architecture that works.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {stackSteps.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="flex items-start gap-5 p-5 rounded-xl border border-border bg-card group hover:border-violet-500/30 transition-colors duration-200"
              >
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: `${ACCENT}90` }}
                  >
                    {item.step}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${ACCENT}15` }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: ACCENT }}
                    />
                  </div>
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-foreground text-sm mb-0.5">
                    {item.label}{" "}
                    <span className="text-muted-foreground font-normal">
                      → {item.tool}
                    </span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-sm text-muted-foreground mt-6 leading-relaxed"
        >
          The creators burning out are trying to do all of this manually or
          across 8 disconnected tools. The creators growing efficiently have
          connected these layers into a system.
        </motion.p>
      </section>

      {/* ── 6. HIGHLIGHT QUOTE ─────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl p-12 md:p-16 text-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${ACCENT}12, ${ACCENT}06)`,
            border: `1px solid ${ACCENT}25`,
          }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full blur-[120px] opacity-20 pointer-events-none"
            style={{ backgroundColor: ACCENT }}
          />
          <div className="relative">
            <p className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground leading-snug mb-4">
              The best creators don't use more tools.
              <br />
              <span style={{ color: ACCENT }}>
                They use better systems.
              </span>
            </p>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              In 2026, the creators who win aren't the most talented. They're
              the most systematized.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── 7. CTA ─────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl p-12 text-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${ACCENT}18, ${ACCENT}08)`,
            borderColor: `${ACCENT}30`,
            border: "1px solid",
          }}
        >
          <div
            className="absolute top-0 right-0 w-[300px] h-[200px] rounded-full blur-[100px] opacity-20 pointer-events-none"
            style={{ backgroundColor: ACCENT }}
          />
          <div className="relative">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
              Start creating content with Yettey
            </h2>
            <p className="text-muted-foreground mb-10 text-base max-w-lg mx-auto">
              Stop switching between tools. Build your content system.
            </p>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{
                  backgroundColor: ACCENT,
                  boxShadow: `0 8px 24px ${ACCENT}40`,
                }}
              >
                Start for free
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── 8. RELATED ARTICLES ────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-xl text-foreground mb-6">
            Related Articles
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Content Marketing with AI: What Actually Works",
                slug: "/blog/content-marketing-ai",
                readTime: "7 min read",
                emoji: "🚀",
              },
              {
                title: "How to Turn Long Videos into Viral Shorts",
                slug: "/blog/viral-shorts-without-editing",
                readTime: "5 min read",
                emoji: "🎬",
              },
            ].map((post) => (
              <Link key={post.slug} href={post.slug}>
                <div className="p-5 rounded-xl border border-border bg-card hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex items-start gap-4">
                  <span className="text-3xl shrink-0">{post.emoji}</span>
                  <div>
                    <p className="font-semibold text-sm text-foreground group-hover:text-violet-400 transition-colors leading-snug mb-1">
                      {post.title}
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
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
