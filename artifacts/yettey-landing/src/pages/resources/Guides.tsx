import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  FolderOpen,
  Search,
  Share2,
  Users,
  RefreshCw,
  Sparkles,
  Zap,
  X,
  Check,
  Upload,
  UserPlus,
  Link2,
  Shield,
  GitBranch,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const ACCENT = "#8B5CF6";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

const guides = [
  {
    icon: FolderOpen,
    accent: "#8B5CF6",
    tag: "Organize",
    title: "Can't find your files?",
    seo: "AI digital asset management system for file organization",
    desc: "Upload once. Everything organizes itself automatically.",
    cta: "Fix file organization",
  },
  {
    icon: Search,
    accent: "#0EA5E9",
    tag: "Find",
    title: "Still digging through folders?",
    seo: "Search files instantly with AI asset search",
    desc: "Find images, videos, and content in seconds.",
    cta: "Find files instantly",
  },
  {
    icon: Share2,
    accent: "#F97316",
    tag: "Share",
    title: "Sharing links everywhere?",
    seo: "Secure file sharing and content distribution system",
    desc: "Control how your content is shared — not just where.",
    cta: "Share content better",
  },
  {
    icon: Users,
    accent: "#10B981",
    tag: "Collaboration",
    title: "Feedback scattered across tools?",
    seo: "Collaborative digital asset management for teams",
    desc: "Comment and collaborate directly on your assets.",
    cta: "Start collaborating",
  },
  {
    icon: RefreshCw,
    accent: "#EC4899",
    tag: "Activate",
    title: "Content exists, but never reused?",
    seo: "Content reuse and asset activation platform",
    desc: "Turn your content into reusable assets instantly.",
    cta: "Reuse your content",
  },
  {
    icon: Sparkles,
    accent: "#F59E0B",
    tag: "AI",
    title: "Need design skills to edit content?",
    seo: "AI image editing and automation tools",
    desc: "Edit like a pro — with one click.",
    cta: "Edit content instantly",
  },
  {
    icon: Zap,
    accent: "#6366F1",
    tag: "Speed",
    title: "Is your website slow because of media?",
    seo: "Media CDN and image optimization platform",
    desc: "Deliver assets instantly with built-in CDN.",
    cta: "Improve loading speed",
  },
  {
    icon: Shield,
    accent: "#EF4444",
    tag: "Control",
    title: "Losing control over your content?",
    seo: "Content permissions and access control system",
    desc: "Set who can view, edit, and share your assets.",
    cta: "Control your content",
  },
  {
    icon: GitBranch,
    accent: "#14B8A6",
    tag: "Versions",
    title: "Not sure which file is the latest version?",
    seo: "Version control and asset tracking system",
    desc: "Track changes and always access the latest version.",
    cta: "Track your assets",
  },
];

export default function Guides() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════
          HERO — SEO + Conversion
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[140px] opacity-15 pointer-events-none"
          style={{ backgroundColor: ACCENT }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div variants={fade} initial="hidden" animate="show" custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold mb-6"
              style={{ borderColor: `${ACCENT}30`, backgroundColor: `${ACCENT}10`, color: ACCENT }}
            >
              <BookOpen className="w-3 h-3" /> Guides
            </span>
          </motion.div>

          <motion.h1
            variants={fade} initial="hidden" animate="show" custom={1}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight"
          >
            Find any file instantly — even across thousands of assets.
          </motion.h1>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={2}
            className="text-lg text-muted-foreground mb-3 max-w-xl mx-auto"
          >
            AI-powered digital asset management for teams, marketers, and creators.
          </motion.p>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={3}
            className="text-base text-foreground/60 mb-8 max-w-lg mx-auto"
          >
            Organize, search, share, and reuse your content faster with Yettey.
          </motion.p>

          <motion.div
            variants={fade} initial="hidden" animate="show" custom={4}
            className="flex flex-wrap justify-center gap-3"
          >
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Start organizing your content
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/product">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base text-foreground/80 border border-border bg-card hover:bg-card/80 transition-all duration-200">
                See how it works
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PROBLEM — Emotional hook
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-8 text-center">
            Still using Drive or Dropbox for content management?
          </h2>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 mb-8">
            <div className="flex flex-col gap-3">
              {[
                "Files are uploaded — but hard to find",
                "Links are shared — but hard to control",
                "Teams collaborate — but everything is fragmented",
                "Content exists — but rarely reused",
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
            className="rounded-2xl p-6 sm:p-8 text-center"
            style={{ background: `linear-gradient(135deg, ${ACCENT}12, ${ACCENT}04)`, border: `1px solid ${ACCENT}18` }}
          >
            <p className="font-display font-bold text-lg text-foreground mb-1">Yettey replaces Drive, Dropbox, and scattered tools</p>
            <p className="font-display font-bold text-lg" style={{ color: ACCENT }}>
              with one system built for content teams.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          GUIDE CARDS — Problem-driven
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3 text-center">
            Find the guide for your problem
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
            Each guide solves a specific content management challenge — pick yours.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map((guide, i) => {
            const Icon = guide.icon;
            return (
              <motion.div
                key={guide.tag}
                variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-200 group flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${guide.accent}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: guide.accent }} />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${guide.accent}15`, color: guide.accent }}
                  >
                    {guide.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>

                <p className="text-[11px] text-muted-foreground mb-2 italic">{guide.seo}</p>

                <p className="text-sm text-foreground/70 leading-relaxed mb-5 flex-1">{guide.desc}</p>

                <Link href="/pricing">
                  <button
                    className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: guide.accent, boxShadow: `0 4px 12px ${guide.accent}30` }}
                  >
                    {guide.cta}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          QUICK START — 5 minutes
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-4 mb-20">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3 text-center">
            Get started in 5 minutes
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            From zero to organized — faster than you think.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {[
            { step: "01", icon: Zap, title: "Create your workspace", desc: "Set up your Yettey workspace in seconds." },
            { step: "02", icon: Upload, title: "Upload files", desc: "Drag and drop any media — Yettey handles the rest." },
            { step: "03", icon: FolderOpen, title: "Organize with folders or collections", desc: "AI auto-tags and categorizes your content." },
            { step: "04", icon: UserPlus, title: "Invite your team", desc: "Add team members and assign permissions." },
            { step: "05", icon: Link2, title: "Share your first asset", desc: "Send a secure, branded link to anyone." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card"
              >
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-mono font-bold text-muted-foreground w-6">{item.step}</span>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${ACCENT}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mt-8">
          <Link href="/pricing">
            <button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white hover:-translate-y-0.5 transition-all duration-200"
              style={{ backgroundColor: ACCENT, boxShadow: `0 4px 16px ${ACCENT}40` }}
            >
              Start your workspace
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CORE VALUES — 3 pillars
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: FolderOpen,
                accent: "#8B5CF6",
                title: "Organize",
                desc: "Find everything instantly. AI-powered file organization tools that categorize and tag your media asset management automatically.",
              },
              {
                icon: Share2,
                accent: "#F97316",
                title: "Share",
                desc: "Control your content. Secure file sharing and image management software with branded links and permissions.",
              },
              {
                icon: RefreshCw,
                accent: "#10B981",
                title: "Activate",
                desc: "Reuse content faster. Turn existing assets into new campaigns without recreating from scratch.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                  className="rounded-2xl border border-border bg-card p-8 text-center"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: `${item.accent}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: item.accent }} />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-4 mb-20">
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl p-10 sm:p-14 text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${ACCENT}15, ${ACCENT}06)`, border: `1px solid ${ACCENT}30` }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[250px] rounded-full blur-[120px] opacity-25 pointer-events-none"
            style={{ backgroundColor: ACCENT }}
          />
          <div className="relative">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
              You don't need more tools.
            </h2>
            <p className="font-display font-bold text-xl mb-8" style={{ color: ACCENT }}>
              You need a system.
            </p>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Start using Yettey
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <p className="text-sm text-foreground/40 mt-5">No credit card required.</p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
