import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  UserPlus,
  Share2,
  MessageSquare,
  Zap,
  X,
  FolderOpen,
  Shield,
  BarChart3,
  Clock,
  Users,
  Layers,
  Calendar,
  Tag,
  Video,
  PenTool,
  Image,
  Database,
  Send,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const ACCENT = "#10B981";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const categories = [
  {
    title: "Shared Workspace",
    icon: FolderOpen,
    description: "One place for every file, brief, and deliverable.",
    doesWhat: [
      "Centralizes all team assets in a single searchable library",
      "Organizes projects by team, campaign, or client automatically",
    ],
    works: [
      "Teams that migrate from scattered Google Drive folders see 40% faster file retrieval",
      "Smart tagging eliminates the 'where did that file go?' problem entirely",
    ],
    watchOut: [
      "Requires initial setup time to migrate existing assets",
      "Folder structures should be agreed on before onboarding the full team",
    ],
  },
  {
    title: "Real-Time Collaboration",
    icon: MessageSquare,
    description: "Comment, review, and approve — in context, not in Slack.",
    doesWhat: [
      "Enables inline commenting directly on content assets",
      "Tracks approval workflows with clear status indicators",
    ],
    works: [
      "Contextual feedback reduces revision rounds by up to 50%",
      "No more 'check the thread' — every decision lives where the work lives",
    ],
    watchOut: [
      "Over-commenting can slow things down — assign clear reviewers",
      "Set response time expectations so feedback doesn't bottleneck",
    ],
  },
  {
    title: "Role-Based Access",
    icon: Shield,
    description: "Everyone sees what they need. Nothing more, nothing less.",
    doesWhat: [
      "Assigns granular permissions by role, team, or project",
      "Controls who can edit, view, or approve content",
    ],
    works: [
      "Prevents accidental edits to published or approved content",
      "External collaborators (freelancers, agencies) get scoped access",
    ],
    watchOut: [
      "Too many permission levels create admin overhead",
      "Keep it simple — 3–4 roles cover 90% of team structures",
    ],
  },
  {
    title: "Team Analytics",
    icon: BarChart3,
    description: "See who's doing what — and where things get stuck.",
    doesWhat: [
      "Tracks content production velocity across team members",
      "Identifies bottlenecks in review and approval cycles",
    ],
    works: [
      "Weekly team dashboards surface blockers before they become problems",
      "Content calendar integration shows pipeline health at a glance",
    ],
    watchOut: [
      "Analytics are only useful if the team consistently uses the platform",
      "Focus on actionable metrics, not vanity numbers",
    ],
  },
];

const recommendedStack = [
  {
    step: "01",
    label: "Plan",
    tool: "Content Calendar",
    desc: "Align your team on what's being created and when.",
    icon: Calendar,
  },
  {
    step: "02",
    label: "Create",
    tool: "AI-Powered Tools",
    desc: "Generate, edit, and produce content faster together.",
    icon: PenTool,
  },
  {
    step: "03",
    label: "Review",
    tool: "In-Context Feedback",
    desc: "Comment and approve directly on the content — no side channels.",
    icon: MessageSquare,
  },
  {
    step: "04",
    label: "Store",
    tool: "Yettey Workspace",
    desc: "One source of truth for every asset your team creates.",
    icon: Database,
  },
  {
    step: "05",
    label: "Distribute",
    tool: "Multi-Platform Publishing",
    desc: "Push approved content to every channel from one place.",
    icon: Send,
  },
];

const relatedPages = [
  {
    title: "Content Marketing with AI: What Actually Works",
    slug: "/blog/content-marketing-ai",
    readTime: "7 min read",
    emoji: "🚀",
  },
  {
    title: "Best AI Tools for Content Creators in 2026",
    slug: "/blog/ai-tools-content-creators",
    readTime: "8 min read",
    emoji: "✨",
  },
];

export default function ForTeams() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[140px] opacity-15"
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}
            >
              For Teams
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-6"
          >
            Your team is not aligned.{" "}
            <br className="hidden sm:block" />
            <span style={{ color: ACCENT }}>And it's slowing everything down.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="text-lg text-muted-foreground leading-relaxed mb-8"
          >
            Bring everything — people, content, and workflows — into one place.
            Stop chasing files, feedback, and decisions across tools.
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
              March 25, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              6 min read
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4" />
              {["Team Collaboration", "Content Operations", "Workflow"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md text-xs font-medium bg-card border border-border"
                >
                  {tag}
                </span>
              ))}
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
          <p className="font-semibold text-sm mb-5" style={{ color: ACCENT }}>
            TL;DR — Key Takeaways
          </p>
          <ul className="flex flex-col gap-3">
            {[
              "Most teams lose hours every week to scattered files and unclear ownership.",
              "Context-switching between tools kills productivity more than the work itself.",
              "Centralized collaboration reduces revision rounds by up to 50%.",
              "You don't need more tools — you need one system your whole team actually uses.",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: `${ACCENT}20` }}
                >
                  <Check className="w-3 h-3" style={{ color: ACCENT }} />
                </div>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ── 3. WHY TEAMS STRUGGLE ──────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-8">
            Why Most Teams Struggle
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
          <div className="flex flex-col gap-4 mb-8">
            {[
              "Files scattered across Google Drive, Dropbox, Slack, and email",
              "No clear ownership — work gets duplicated or missed entirely",
              "Feedback buried in threads nobody checks",
              "Hours wasted every week just finding the right version of a file",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-500/15 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 text-red-400" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{point}</p>
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
            What Your Team Actually Needs
          </h2>
          <p className="text-muted-foreground mb-10">
            Each capability is built to solve a specific team pain point.
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
                      <Icon className="w-4.5 h-4.5" style={{ color: ACCENT }} />
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
                      <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: ACCENT }}>
                        What it does
                      </p>
                      {cat.doesWhat.map((item) => (
                        <div key={item} className="flex items-start gap-2 mb-2">
                          <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: ACCENT }} />
                          <p className="text-xs text-muted-foreground leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-blue-400">
                        What actually works
                      </p>
                      {cat.works.map((item) => (
                        <div key={item} className="flex items-start gap-2 mb-2">
                          <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-blue-400" />
                          <p className="text-xs text-muted-foreground leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-amber-400">
                        What to watch out for
                      </p>
                      {cat.watchOut.map((item) => (
                        <div key={item} className="flex items-start gap-2 mb-2">
                          <span className="w-3.5 h-3.5 mt-0.5 shrink-0 flex items-center justify-center text-amber-400 text-xs font-bold">!</span>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item}</p>
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
            Recommended Team Stack for 2026
          </h2>
          <p className="text-muted-foreground mb-10">
            A step-by-step system for teams that want to move fast without the chaos.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {recommendedStack.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="flex items-start gap-5 p-5 rounded-xl border border-border bg-card group hover:border-emerald-500/30 transition-colors duration-200"
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
                    <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                  </div>
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-foreground text-sm mb-0.5">
                    {item.label}{" "}
                    <span className="text-muted-foreground font-normal">→ {item.tool}</span>
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
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
              The best teams don't use more tools.
              <br />
              <span style={{ color: ACCENT }}>They use better systems.</span>
            </p>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Alignment isn't a meeting. It's a workspace that keeps everyone on the same page — automatically.
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
            border: `1px solid ${ACCENT}30`,
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
              Stop switching between tools. Build your content system and move faster as a team.
            </p>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{
                  backgroundColor: ACCENT,
                  boxShadow: `0 8px 32px ${ACCENT}40`,
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
            {relatedPages.map((post) => (
              <Link key={post.slug} href={post.slug}>
                <div className="p-5 rounded-xl border border-border bg-card hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex items-start gap-4">
                  <span className="text-3xl shrink-0">{post.emoji}</span>
                  <div>
                    <p className="font-semibold text-sm text-foreground group-hover:text-emerald-400 transition-colors leading-snug mb-1">
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
