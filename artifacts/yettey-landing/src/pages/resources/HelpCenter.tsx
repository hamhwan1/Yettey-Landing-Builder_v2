import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Zap,
  CreditCard,
  Video,
  Sparkles,
  Users,
  Upload,
  FileSearch,
  AlertTriangle,
  LogIn,
  HelpCircle,
  Gauge,
  FolderOpen,
  Wand2,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const ACCENT = "#8B5CF6";

const popularSearches = ["Upload failed", "Can't find my file", "Credits not working", "Video processing stuck"];

const quickActions = [
  { icon: FileSearch, label: "I can't find my file", color: "#0EA5E9", slug: "cant-find-file" },
  { icon: Upload, label: "Upload failed", color: "#EF4444", slug: "upload-failed" },
  { icon: Video, label: "Video processing stuck", color: "#F97316", slug: "video-processing-stuck" },
  { icon: CreditCard, label: "I ran out of credits", color: "#8B5CF6", slug: "out-of-credits" },
  { icon: Users, label: "Invite team members", color: "#10B981", slug: "invite-team" },
  { icon: CreditCard, label: "Billing issue", color: "#EC4899", slug: "billing-issue" },
];

const helpCategories = [
  { icon: Zap, label: "Getting Started", color: "#7C3AED", desc: "Set up your workspace and upload your first files" },
  { icon: CreditCard, label: "Pricing & Billing", color: "#0EA5E9", desc: "Plans, payments, invoices, and subscription management" },
  { icon: Sparkles, label: "Credits", color: "#F97316", desc: "How credits work, usage tracking, and purchasing" },
  { icon: Video, label: "Create & Edit Videos", color: "#EC4899", desc: "Video upload, AI editing, and export options" },
  { icon: Wand2, label: "AI Features", color: "#8B5CF6", desc: "Background removal, image generation, and smart tagging" },
  { icon: Users, label: "Team & Sharing", color: "#10B981", desc: "Invitations, permissions, and shared workspaces" },
];

const faqs = [
  {
    q: "What happens if I run out of credits?",
    a: "Content generation will pause until you top up. You can purchase a Credits Pack or Credits Mega Pack anytime without changing your plan. Your existing content remains accessible.",
  },
  {
    q: "Why is my video not processing?",
    a: "Video processing can take a few minutes depending on file size and length. If it's stuck for more than 10 minutes, try re-uploading the file. Make sure your video is in MP4 or MOV format and under the size limit.",
  },
  {
    q: "How do I find a file quickly?",
    a: "Use the search bar at the top of your workspace. You can search by file name, tag, content type, or even visual content. Yettey's AI indexes everything automatically, so just type what you're looking for.",
  },
  {
    q: "Why can't I upload a file?",
    a: "Check that your file format is supported (MP4, MOV, JPG, PNG, PDF, etc.) and that the file size is within your plan's limit. If the issue persists, try refreshing the page or using a different browser.",
  },
  {
    q: "How do I invite team members?",
    a: "Go to Settings \u2192 Team \u2192 Invite Members. Enter your teammate's email and select their role (Admin, Editor, or Viewer). They'll receive an invitation email to join your workspace.",
  },
];

const troubleshootingItems = [
  { icon: Upload, label: "Upload errors", desc: "File format, size limits, and connection issues", color: "#EF4444", slug: "upload-errors" },
  { icon: Video, label: "Video processing failed", desc: "Format support, duration limits, and retry steps", color: "#F97316", slug: "video-processing-stuck" },
  { icon: FileSearch, label: "Missing files", desc: "Search tips, filters, and recovery options", color: "#0EA5E9", slug: "missing-files" },
  { icon: Gauge, label: "Slow performance", desc: "Browser optimization and cache clearing", color: "#8B5CF6", slug: "slow-performance" },
  { icon: LogIn, label: "Login issues", desc: "Password reset, session errors, and account access", color: "#10B981", slug: "login-issues" },
];

function FaqItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const contentId = `faq-content-${index}`;
  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="show" custom={index * 0.4} viewport={{ once: true }}
      className="border-b border-border last:border-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={contentId}
        className="w-full py-5 flex items-start justify-between gap-4 text-left group"
      >
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {item.q}
        </span>
        <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full border border-border flex items-center justify-center text-muted-foreground">
          {open ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </span>
      </button>
      <motion.div
        id={contentId}
        role="region"
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ overflow: "hidden" }}
      >
        <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
      </motion.div>
    </motion.div>
  );
}

export default function HelpCenter() {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? faqs.filter(
        (f) =>
          f.q.toLowerCase().includes(query.toLowerCase()) ||
          f.a.toLowerCase().includes(query.toLowerCase())
      )
    : faqs;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/8 rounded-full blur-[130px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-6">
              <MessageCircle className="w-3 h-3" />
              Help Center
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-5 leading-tight"
          >
            How can we help you today?
          </motion.h1>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="relative max-w-xl mx-auto mb-5"
          >
            <label htmlFor="help-search" className="sr-only">Search help articles</label>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              id="help-search"
              type="text"
              placeholder="Search for answers, features, or issues..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-4 rounded-2xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="flex flex-wrap justify-center gap-2">
            {popularSearches.map((ps) => (
              <button
                key={ps}
                onClick={() => setQuery(ps)}
                className="px-3 py-1.5 rounded-lg border border-border bg-card text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              >
                {ps}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {!query && (
        <>
          <section className="max-w-4xl mx-auto px-4 mb-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-4 h-4" style={{ color: ACCENT }} />
                <h2 className="font-display font-bold text-xl text-foreground">Quick help</h2>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {quickActions.map((action, i) => {
                const Icon = action.icon;
                return (
                  <motion.div
                    key={action.slug}
                    variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
                  >
                    <Link
                      href={`/help/${action.slug}`}
                      className="rounded-xl bg-card border border-border p-5 flex items-start gap-3 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 text-left group block"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: `${action.color}18` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: action.color }} />
                      </div>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug mt-1">
                        {action.label}
                      </p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section className="max-w-4xl mx-auto px-4 mb-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="flex items-center gap-2 mb-6">
                <FolderOpen className="w-4 h-4" style={{ color: ACCENT }} />
                <h2 className="font-display font-bold text-xl text-foreground">Browse by category</h2>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {helpCategories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <motion.button
                    key={cat.label}
                    variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
                    className="rounded-xl bg-card border border-border p-5 flex flex-col items-start gap-3 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 text-left group"
                    onClick={() => setQuery(cat.label)}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: `${cat.color}18` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: cat.color }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cat.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{cat.desc}</p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </section>
        </>
      )}

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4" style={{ color: ACCENT }} />
            <h2 className="font-display font-bold text-xl text-foreground">
              {query ? `Results for "${query}"` : "Frequently asked"}
            </h2>
          </div>
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Clear search
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl bg-card border border-border p-12 text-center">
            <p className="text-muted-foreground text-sm mb-4">No results found for "{query}"</p>
            <button
              onClick={() => setQuery("")}
              className="text-sm font-medium text-primary hover:underline"
            >
              Browse all questions →
            </button>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-2xl px-6">
            {filtered.map((faq, i) => (
              <FaqItem key={faq.q} item={faq} index={i} />
            ))}
          </div>
        )}
      </section>

      {!query && (
        <section className="max-w-4xl mx-auto px-4 mb-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <h2 className="font-display font-bold text-xl text-foreground">Having issues?</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Fix common problems fast:</p>
          </motion.div>
          <div className="flex flex-col gap-3">
            {troubleshootingItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.slug}
                  variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
                >
                  <Link
                    href={`/help/${item.slug}`}
                    className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 text-left group block"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${item.color}18` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      <section className="max-w-4xl mx-auto px-4 mb-10">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl bg-card border border-border p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground text-lg">Still need help?</h3>
              <p className="text-sm text-muted-foreground">Our team typically responds within a few hours.</p>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap">
            Contact Support
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mb-20">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl p-10 text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${ACCENT}15, ${ACCENT}06)`, border: `1px solid ${ACCENT}30` }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full blur-[100px] opacity-20 pointer-events-none"
            style={{ backgroundColor: ACCENT }}
          />
          <div className="relative">
            <h3 className="font-display font-bold text-foreground text-xl mb-2">New to Yettey?</h3>
            <p className="text-sm text-foreground/60 mb-6">Start organizing your content in minutes.</p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white hover:-translate-y-0.5 transition-all duration-200"
              style={{ backgroundColor: ACCENT, boxShadow: `0 4px 16px ${ACCENT}40` }}
            >
              Get started for free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
