import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  X,
  Check,
  Repeat,
  Sparkles,
  TrendingUp,
  DollarSign,
  Upload,
  BarChart3,
  Eye,
  Layers,
  Wand2,
  RefreshCw,
  PieChart,
  Lightbulb,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const ACCENT = "#F59E0B";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

export default function GuideActivate() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="hidden"
          style={{ backgroundColor: ACCENT }}
        />
        <div className="relative max-w-3xl mx-auto px-4">
          <motion.div variants={fade} initial="hidden" animate="show" custom={0}>
            <Link href="/guides">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer mb-6">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to guides
              </span>
            </Link>
          </motion.div>

          <motion.div variants={fade} initial="hidden" animate="show" custom={1} className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${ACCENT}15` }}>
              <Repeat className="w-6 h-6" style={{ color: ACCENT }} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: `${ACCENT}15`, color: ACCENT }}>
              Activate
            </span>
          </motion.div>

          <motion.h1
            variants={fade} initial="hidden" animate="show" custom={2}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight"
          >
            Stop wasting content you already have.
          </motion.h1>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={3}
            className="text-xl text-foreground/70 mb-3 max-w-xl font-medium"
          >
            Turn existing content into reusable assets {"\u2014"} instantly.
          </motion.p>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={4}
            className="text-sm text-muted-foreground mb-2 max-w-lg italic"
          >
            AI-powered digital asset management system for content reuse and asset activation
          </motion.p>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={5}
            className="text-xs text-foreground/40 mb-8"
          >
            Built for teams that want to reduce content production costs
          </motion.p>

          <motion.div variants={fade} initial="hidden" animate="show" custom={6}>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Reuse your content now
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-6">
            Content is created, then forgotten
          </h2>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-4">
              {[
                { text: "Creating new content from scratch every time", detail: "Your team spends hours producing assets that already exist somewhere in your library." },
                { text: "Existing content buried and never reused", detail: "Hundreds of images, videos, and documents sitting unused. Invisible and forgotten." },
                { text: "No way to repurpose assets across campaigns", detail: "That perfect photo from last quarter? Nobody can find it, so someone shoots a new one." },
                { text: "Wasting budget recreating what already exists", detail: "Every duplicate production costs real money. Multiply that across your team, every month." },
              ].map((p) => (
                <div key={p.text} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-red-500/20">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <div>
                    <span className="text-foreground/80 text-sm font-medium">{p.text}</span>
                    <p className="text-xs text-muted-foreground mt-0.5">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div
            className="rounded-2xl p-8 sm:p-10 text-center"
            style={{ background: `linear-gradient(135deg, ${ACCENT}12, ${ACCENT}04)`, border: `1px solid ${ACCENT}20` }}
          >
            <p className="font-display font-bold text-xl text-foreground mb-2">You don't need more content.</p>
            <p className="font-display font-bold text-xl" style={{ color: ACCENT }}>
              You need to use what you already have.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">The solution</h2>
          <p className="text-foreground/70 text-base leading-relaxed mb-2">
            Yettey helps you discover, reuse, and repurpose existing content instantly.
          </p>
          <p className="text-foreground/60 text-sm leading-relaxed">
            Stop paying to create content that already exists. Yettey's AI surfaces reusable assets from your library, suggests content you can repurpose, and tracks which assets perform best {"\u2014"} so every piece of content works harder for you.
          </p>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-2">How it works</h2>
          <p className="text-muted-foreground text-sm mb-8">Maximum leverage from every asset.</p>

          <div className="flex flex-col gap-3">
            {[
              { icon: Upload, title: "Upload your entire content library", desc: "Bring all your images, videos, and documents into one place. Past campaigns, archived content, everything." },
              { icon: Sparkles, title: "Yettey surfaces reusable assets automatically", desc: "AI identifies content that can be reused or repurposed. Forgotten assets become visible again." },
              { icon: RefreshCw, title: "Repurpose content for new campaigns", desc: "Adapt existing assets for new channels, audiences, or campaigns. Quick edit tools make it instant." },
              { icon: BarChart3, title: "Track which content performs best", desc: "See usage analytics for every asset. Know what works and double down on high-performing content." },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-mono font-bold text-muted-foreground w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${ACCENT}15` }}>
                      <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{step.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-4">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
          <Link href="/pricing">
            <button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white hover:-translate-y-0.5 transition-all duration-200"
              style={{ backgroundColor: ACCENT, boxShadow: `0 4px 16px ${ACCENT}40` }}
            >
              Try it now {"\u2014"} activate your content
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16 mt-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">What you'll see inside Yettey</h2>
          <p className="text-muted-foreground text-sm mb-8">Your content library, working for you {"\u2014"} not sitting idle.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Sparkles, title: "AI reuse suggestions", desc: "Yettey suggests similar or reusable assets when you start a new project. No more starting from zero." },
              { icon: PieChart, title: "Content usage analytics", desc: "See which assets are used most, which are underutilized, and where the hidden value is." },
              { icon: Wand2, title: "Quick repurpose tools", desc: "Resize, crop, and adapt existing content for new channels in seconds. No design skills needed." },
              { icon: Layers, title: "Campaign content library", desc: "Browse all content organized by campaign, project, or date. Find what you need in one click." },
              { icon: Eye, title: "Asset performance view", desc: "Track downloads, shares, and reuse frequency for every asset. Know what's working." },
              { icon: Lightbulb, title: "Forgotten content surfacing", desc: "AI highlights assets you haven't used in months. Rediscover content you forgot you had." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl border border-border bg-card p-5">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${ACCENT}15` }}>
                    <Icon className="w-4 h-4" style={{ color: ACCENT }} />
                  </div>
                  <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">What you'll experience</h2>
          <p className="text-muted-foreground text-sm mb-8">Not features. Results.</p>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "Discover content you forgot you had", desc: "AI surfaces forgotten assets that are perfect for your next campaign." },
              { title: "Reuse assets instantly", desc: "Find and repurpose existing content in seconds, not hours." },
              { title: "Adapt content for new campaigns", desc: "Quick tools to resize, adjust, and redistribute across channels." },
              { title: "Maximize value from every asset", desc: "Every piece of content works harder when it's visible and accessible." },
              { title: "Reduce production costs", desc: "Stop paying for content that already exists. Save budget for what's truly new." },
              { title: "Know what performs best", desc: "Data-driven decisions on which content to reuse and which to retire." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${ACCENT}20` }}>
                  <Check className="w-3 h-3" style={{ color: ACCENT }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-6">The transformation</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-4">Before Yettey</p>
              <div className="flex flex-col gap-3">
                {[
                  "Creating from scratch every time",
                  "Content used once then forgotten",
                  "No visibility into what exists",
                  "Wasted creative budget on duplicates",
                  "No data on content performance",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/70">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-6" style={{ border: `1px solid ${ACCENT}30`, backgroundColor: `${ACCENT}08` }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: ACCENT }}>With Yettey</p>
              <div className="flex flex-col gap-3">
                {[
                  "Reuse content instantly across campaigns",
                  "AI finds reusable assets automatically",
                  "Full visibility into your entire library",
                  "Save thousands on content creation",
                  "Data-driven content decisions",
                ].map((a) => (
                  <div key={a} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: ACCENT }} />
                    <span className="text-sm text-foreground/70">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-6">Why this matters</h2>
          <div className="flex flex-col gap-3">
            {[
              { icon: DollarSign, title: "Reduce content production costs by up to 60%", desc: "Stop paying to create what already exists. Reuse is the fastest way to cut costs." },
              { icon: RefreshCw, title: "Reuse assets across campaigns", desc: "One great asset can power multiple campaigns. Yettey makes that effortless." },
              { icon: Lightbulb, title: "Discover hidden value in your content", desc: "Your library is full of underused assets. AI brings them back to life." },
              { icon: TrendingUp, title: "Increase ROI on existing assets", desc: "Every reuse multiplies the return on your original investment." },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${ACCENT}15` }}>
                    <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{v.title}</p>
                    <p className="text-xs text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="text-foreground/70 text-sm leading-relaxed">
              Yettey is an AI-powered digital asset management (DAM) system designed to help teams reuse and activate existing content efficiently. It enables organizations to discover reusable assets, optimize content usage, and reduce production costs, making it a powerful content reuse platform and alternative to traditional content management systems. Whether you need an asset management system that surfaces forgotten content, a media asset management tool with usage analytics, or a platform that turns your existing library into a competitive advantage, Yettey makes every asset work harder.
            </p>
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
              Stop creating more. Start using what you have.
            </h2>
            <p className="text-foreground/60 mb-8 max-w-md mx-auto">
              Unlock the value of your existing content.
            </p>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Reuse your content now
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
