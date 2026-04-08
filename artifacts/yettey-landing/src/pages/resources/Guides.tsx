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

export const guides = [
  {
    slug: "organize",
    icon: FolderOpen,
    accent: "#8B5CF6",
    tag: "Organize",
    title: "Can't find your files?",
    seo: "AI digital asset management system for file organization",
    desc: "Upload once. Everything organizes itself \u2014 no folders needed.",
    sub: "No more messy folders. Everything is structured automatically.",
    cta: "Organize your files now",
  },
  {
    slug: "find",
    icon: Search,
    accent: "#0EA5E9",
    tag: "Find",
    title: "Still digging through folders?",
    seo: "Search files instantly with AI asset search",
    desc: "Search across images, videos, and files instantly \u2014 like Google for your content.",
    sub: "Find anything in seconds, no matter where it lives.",
    cta: "Find any file now",
  },
  {
    slug: "share",
    icon: Share2,
    accent: "#F97316",
    tag: "Share",
    title: "Sharing links everywhere?",
    seo: "Secure file sharing and content distribution system",
    desc: "Share content with control \u2014 not just links.",
    sub: "Manage access, permissions, and visibility in one place.",
    cta: "Share with control",
  },
  {
    slug: "collaborate",
    icon: Users,
    accent: "#10B981",
    tag: "Collaboration",
    title: "Feedback scattered across tools?",
    seo: "Collaborative digital asset management for teams",
    desc: "Stop switching tools. Collaborate directly on your content.",
    sub: "Comment, review, and align \u2014 all on the asset itself.",
    cta: "Collaborate on assets now",
  },
  {
    slug: "activate",
    icon: RefreshCw,
    accent: "#EC4899",
    tag: "Activate",
    title: "Content exists, but never reused?",
    seo: "Content reuse and asset activation platform",
    desc: "Turn unused content into reusable assets \u2014 instantly.",
    sub: "Reuse what you already have instead of creating from scratch.",
    cta: "Reuse content instantly",
  },
  {
    slug: "ai-editing",
    icon: Sparkles,
    accent: "#F59E0B",
    tag: "AI",
    title: "Need design skills to edit content?",
    seo: "AI image editing and automation tools",
    desc: "Edit like a pro \u2014 without design skills.",
    sub: "Remove backgrounds, enhance quality, and fix images in one click.",
    cta: "Edit content instantly",
  },
  {
    slug: "speed",
    icon: Zap,
    accent: "#6366F1",
    tag: "Speed",
    title: "Is your website slow because of media?",
    seo: "Media CDN and image optimization platform",
    desc: "Make your content load instantly \u2014 no more slow pages.",
    sub: "Built-in CDN ensures fast delivery everywhere.",
    cta: "Speed up your content now",
  },
  {
    slug: "control",
    icon: Shield,
    accent: "#EF4444",
    tag: "Control",
    title: "Losing control over your content?",
    seo: "Content permissions and access control system",
    desc: "Decide exactly who can access your content.",
    sub: "Set permissions for viewing, editing, and sharing.",
    cta: "Control your content now",
  },
  {
    slug: "versions",
    icon: GitBranch,
    accent: "#14B8A6",
    tag: "Versions",
    title: "Not sure which file is the latest version?",
    seo: "Version control and asset tracking system",
    desc: "Always know which version is the right one.",
    sub: "Track changes and avoid file confusion.",
    cta: "Track versions now",
  },
];

export default function Guides() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="hidden"
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
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3 leading-tight"
          >
            Stop losing your content.
          </motion.h1>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={2}
            className="text-xl text-foreground/70 mb-3 max-w-xl mx-auto font-medium"
          >
            Find anything in seconds.
          </motion.p>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={3}
            className="text-base text-muted-foreground mb-2 max-w-xl mx-auto"
          >Reuse it instantly.</motion.p>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={4}
            className="text-sm text-foreground/50 mb-8 max-w-lg mx-auto"
          >
            Built for teams, marketers, and creators managing content at scale.
          </motion.p>

          <motion.div
            variants={fade} initial="hidden" animate="show" custom={5}
            className="flex flex-wrap justify-center gap-3"
          >
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Start organizing your content now
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
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-8 text-center">
            Still using Drive or Dropbox for content management?
          </h2>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 mb-8">
            <div className="flex flex-col gap-3">
              {[
                "Files are uploaded \u2014 but hard to find",
                "Links are shared \u2014 but hard to control",
                "Teams collaborate \u2014 but everything is fragmented",
                "Content exists \u2014 but rarely reused",
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
            <p className="font-display font-bold text-lg text-foreground mb-1">Drive stores files.</p>
            <p className="font-display font-bold text-lg" style={{ color: ACCENT }}>
              Yettey makes them usable.
            </p>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Built for teams that outgrow Drive and Dropbox
          </p>
        </motion.div>
      </section>
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3 text-center">
            Find the guide for your problem
          </h2>
          <p className="text-muted-foreground text-center mb-3 max-w-lg mx-auto">
            Each guide solves a specific content management challenge {"\u2014"} pick yours.
          </p>
          <p className="text-center text-sm font-medium mb-10" style={{ color: ACCENT }}>
            Choose your biggest challenge {"\u2014"} and fix it in minutes
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map((guide, i) => {
            const Icon = guide.icon;
            return (
              <motion.div
                key={guide.slug}
                variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              >
                <Link href={`/guides/${guide.slug}`}>
                  <div
                    className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 group flex flex-col h-full cursor-pointer"
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

                    <span
                      className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-200 group-hover:-translate-y-0.5"
                      style={{ background: guide.accent, boxShadow: `0 4px 12px ${guide.accent}30` }}
                    >
                      {guide.cta}
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 mb-20">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3 text-center">
            From messy files {"\u2192"} structured system in 5 minutes
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            No setup required. Just start.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {[
            { step: "01", icon: Zap, title: "Create your workspace", desc: "Set up your Yettey workspace in seconds." },
            { step: "02", icon: Upload, title: "Upload your files", desc: "Drag and drop any media \u2014 Yettey handles the rest." },
            { step: "03", icon: FolderOpen, title: "Everything organizes automatically", desc: "AI auto-tags, categorizes, and structures your content." },
            { step: "04", icon: UserPlus, title: "Invite your team", desc: "Add team members and assign permissions." },
            { step: "05", icon: Link2, title: "Share instantly", desc: "Send a secure, branded link to anyone." },
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
      <section className="max-w-3xl mx-auto px-4 mb-20">
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl p-10 sm:p-14 text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${ACCENT}15, ${ACCENT}06)`, border: `1px solid ${ACCENT}30` }}
        >
          <div
            className="hidden"
            style={{ backgroundColor: ACCENT }}
          />
          <div className="relative">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
              You don't need more tools.
            </h2>
            <p className="font-display font-bold text-xl mb-8" style={{ color: ACCENT }}>
              You need one system that actually works.
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
