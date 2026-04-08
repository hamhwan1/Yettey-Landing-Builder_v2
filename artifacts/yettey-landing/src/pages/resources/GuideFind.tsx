import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  X,
  Check,
  Upload,
  Search,
  FolderOpen,
  Globe,
  Zap,
  Clock,
  Users,
  ScanSearch,
  Filter,
  Image,
  FileText,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const ACCENT = "#0EA5E9";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

export default function GuideFind() {
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
              <Search className="w-6 h-6" style={{ color: ACCENT }} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: `${ACCENT}15`, color: ACCENT }}>
              Find
            </span>
          </motion.div>

          <motion.h1
            variants={fade} initial="hidden" animate="show" custom={2}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight"
          >
            Stop digging through folders.
          </motion.h1>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={3}
            className="text-xl text-foreground/70 mb-3 max-w-xl font-medium"
          >
            Find any file instantly {"\u2014"} across all your content in seconds.
          </motion.p>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={4}
            className="text-sm text-muted-foreground mb-2 max-w-lg italic"
          >
            AI-powered file search and digital asset management system for fast content discovery
          </motion.p>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={5}
            className="text-xs text-foreground/40 mb-8"
          >
            Used by teams managing thousands of assets daily
          </motion.p>

          <motion.div variants={fade} initial="hidden" animate="show" custom={6}>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Find any file now
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-6">
            File search is broken in traditional tools
          </h2>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-4">
              {[
                { text: "Browsing through endless folders to find one file", detail: "You click open folder after folder, hoping you'll recognize the thumbnail." },
                { text: "Remembering file names instead of searching by content", detail: "Was it 'banner_v3_final.png' or 'hero-image-revised.jpg'?" },
                { text: "Asking teammates where files are stored", detail: "'Hey, where did you save that video from last week?' \u2014 every single day." },
                { text: "Recreating content because it's faster than finding it", detail: "The file exists somewhere. But starting over feels quicker." },
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
            <p className="font-display font-bold text-xl text-foreground mb-2">Traditional tools help you store files.</p>
            <p className="font-display font-bold text-xl" style={{ color: ACCENT }}>
              Yettey helps you find them instantly.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">The solution</h2>
          <p className="text-foreground/70 text-base leading-relaxed mb-2">
            Yettey gives you Google-like search for your content.
          </p>
          <p className="text-foreground/60 text-sm leading-relaxed">
            Search by keyword, object, tag, or even visual content. Yettey's AI indexes every file automatically {"\u2014"} so you can find anything in seconds, not minutes. No folder navigation. No file name memorization. Just search and find.
          </p>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-2">How it works</h2>
          <p className="text-muted-foreground text-sm mb-8">No folders. No guessing. Just results.</p>

          <div className="flex flex-col gap-3">
            {[
              { icon: Upload, title: "Upload your entire content library", desc: "Drag and drop everything \u2014 images, videos, documents. No organization needed." },
              { icon: ScanSearch, title: "Yettey automatically indexes everything", desc: "AI analyzes every file \u2014 visual content, text, metadata. Every asset becomes instantly searchable." },
              { icon: Sparkles, title: "Search by anything \u2014 keyword, object, tag, or visual content", desc: "Type 'red background product photo' and get exactly what you need. AI understands context, not just file names." },
              { icon: Zap, title: "Get results instantly \u2014 no folders, no guessing", desc: "Results appear in under 3 seconds. Preview, download, or share directly from search results." },
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
              Try it now {"\u2014"} find any file
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16 mt-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">What you'll see inside Yettey</h2>
          <p className="text-muted-foreground text-sm mb-8">Search that actually works {"\u2014"} designed for content teams.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Search, title: "Instant search bar", desc: "Start typing and see suggestions appear instantly. AI predicts what you're looking for." },
              { icon: Image, title: "Visual preview results", desc: "See rich thumbnails for every result. No more clicking files to check if it's the right one." },
              { icon: Filter, title: "Smart filters", desc: "Filter by file type, upload date, tag, team member, or project. Narrow down in one click." },
              { icon: ScanSearch, title: "Visual content search", desc: "Search by what's inside images \u2014 objects, colors, text on screen. AI understands visual content." },
              { icon: FileText, title: "Full-text search", desc: "Search inside documents, presentations, and PDFs. Find content by what it says, not what it's named." },
              { icon: Clock, title: "Recent & frequent", desc: "Quick access to recently viewed and most-used files. Your top assets are always one click away." },
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
              { title: "Instant search results", desc: "No waiting. Results appear as you type." },
              { title: "Find files by content, not names", desc: "Search by what's in the file, not what it's called." },
              { title: "Visual search across images and videos", desc: "AI understands objects, colors, and scenes." },
              { title: "Everything searchable automatically", desc: "Every file is indexed the moment you upload it." },
              { title: "No more 'where is that file?'", desc: "Your team finds what they need without asking anyone." },
              { title: "Search across your entire library", desc: "Thousands of files, one search bar, instant results." },
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
                  "Browsing folders for 20+ minutes",
                  "Asking team 'where is that file?'",
                  "Recreating content that already exists",
                  "No way to search inside files",
                  "Remembering file names to find anything",
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
                  "Find any file in under 3 seconds",
                  "Search by content, not file name",
                  "Never lose a file again",
                  "AI-powered visual and text search",
                  "Every file searchable the moment it's uploaded",
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
              { icon: Zap, title: "Find any asset in under 3 seconds", desc: "Stop wasting time navigating folders. Search and find, instantly." },
              { icon: Users, title: "Eliminate 'where is that file?' questions", desc: "Everyone on your team can find what they need without asking." },
              { icon: Clock, title: "Reduce wasted time searching", desc: "Teams waste 2+ hours per week searching for files. Yettey gives that time back." },
              { icon: Globe, title: "Improve team efficiency instantly", desc: "Faster search means faster content production. Every search counts." },
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
              Yettey is an AI-powered digital asset management (DAM) system designed to help teams search and manage content efficiently. Unlike traditional file storage tools, Yettey allows you to find images, videos, and files instantly using AI-powered search across your entire content library. Whether you need an AI file search solution, a content search system for your marketing team, or a media asset management platform that makes every file findable, Yettey replaces folder navigation with intelligent, instant search.
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
              Stop searching. Start finding.
            </h2>
            <p className="text-foreground/60 mb-8 max-w-md mx-auto">
              Find any file instantly {"\u2014"} no more folders.
            </p>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Find any file now
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
