import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

export interface RelatedPost {
  title: string;
  slug: string;
  readTime: string;
  emoji: string;
}

export interface BlogPostData {
  title: string;
  summary: string;
  date: string;
  readTime: string;
  category: string;
  accent: string;
  emoji: string;
  tags: string[];
  tldr: string[];
  content: React.ReactNode;
  related: RelatedPost[];
}

interface Props {
  data: BlogPostData;
}

export function BlogPostLayout({ data }: Props) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[130px] opacity-20"
            style={{ backgroundColor: data.accent }}
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
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-6"
              style={{ backgroundColor: `${data.accent}20`, color: data.accent }}
            >
              {data.category}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-5"
          >
            {data.title}
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
          >
            {data.summary}
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-8 border-b border-border"
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {data.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {data.readTime}
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4" />
              {data.tags.map((tag) => (
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

      {/* ── TL;DR ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-12">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-7"
        >
          <p className="font-semibold text-sm mb-4" style={{ color: data.accent }}>
            TL;DR — Key Takeaways
          </p>
          <ul className="flex flex-col gap-2.5">
            {data.tldr.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: data.accent }} />
                <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ── Article Content ────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-5
            prose-li:text-muted-foreground prose-li:leading-relaxed
            prose-strong:text-foreground
            prose-ul:my-4 prose-ol:my-4"
        >
          {data.content}
        </motion.div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl p-10 text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${data.accent}18, ${data.accent}08)`, borderColor: `${data.accent}30`, border: "1px solid" }}
        >
          <div
            className="absolute top-0 right-0 w-[300px] h-[200px] rounded-full blur-[100px] opacity-20 pointer-events-none"
            style={{ backgroundColor: data.accent }}
          />
          <div className="relative">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
              Start creating content with Yettey
            </h2>
            <p className="text-muted-foreground mb-8">
              Turn what you just learned into real content — faster.
            </p>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: data.accent, boxShadow: `0 8px 24px ${data.accent}40` }}
              >
                Start for free
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── Related Articles ───────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-xl text-foreground mb-6">Related Articles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.related.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex items-start gap-4">
                  <span className="text-3xl shrink-0">{post.emoji}</span>
                  <div>
                    <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug mb-1">
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
