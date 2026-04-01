import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  ArrowLeft,
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
  X,
  TrendingUp,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const ACCENT = "#8B5CF6";

const allArticles = [
  { title: "Upload not working?", desc: "Fix file format, size, and connection issues", slug: "upload-failed", icon: Upload, color: "#EF4444", category: "troubleshooting", tags: ["upload", "error", "file", "format", "size"] },
  { title: "Video processing stuck?", desc: "Check status, optimize, or re-upload your video", slug: "video-processing-stuck", icon: Video, color: "#F97316", category: "video", tags: ["video", "processing", "stuck", "slow", "encoding"] },
  { title: "Can't find your file?", desc: "Search, filter, and locate files in your workspace", slug: "cant-find-file", icon: FileSearch, color: "#0EA5E9", category: "files", tags: ["file", "missing", "search", "find", "lost"] },
  { title: "Out of credits?", desc: "Buy more, upgrade, or wait for monthly reset", slug: "out-of-credits", icon: CreditCard, color: "#8B5CF6", category: "billing", tags: ["credits", "out", "billing", "buy", "plan"] },
  { title: "Billing issue?", desc: "Fix payment problems and manage your subscription", slug: "billing-issue", icon: CreditCard, color: "#EC4899", category: "billing", tags: ["billing", "payment", "invoice", "charge", "subscription"] },
  { title: "Invite your team", desc: "Add team members and start collaborating", slug: "invite-team", icon: Users, color: "#10B981", category: "team", tags: ["team", "invite", "collaboration", "members", "share"] },
  { title: "Upload errors", desc: "Troubleshoot format, size, and network upload failures", slug: "upload-errors", icon: Upload, color: "#EF4444", category: "troubleshooting", tags: ["upload", "error", "format", "network"] },
  { title: "Missing files", desc: "Recover and locate files across projects", slug: "missing-files", icon: FileSearch, color: "#0EA5E9", category: "files", tags: ["missing", "file", "recover", "trash", "deleted"] },
  { title: "Slow performance", desc: "Speed up your workspace and browser", slug: "slow-performance", icon: Gauge, color: "#8B5CF6", category: "troubleshooting", tags: ["slow", "performance", "speed", "browser", "cache"] },
  { title: "Login issues", desc: "Fix password, session, and access problems", slug: "login-issues", icon: LogIn, color: "#10B981", category: "troubleshooting", tags: ["login", "password", "access", "session", "account"] },
];

const popularSlugs = ["upload-failed", "video-processing-stuck", "cant-find-file", "out-of-credits", "billing-issue"];

const searchTags = [
  { label: "Upload failed", filter: "upload" },
  { label: "Video stuck", filter: "video" },
  { label: "Billing", filter: "billing" },
  { label: "Credits", filter: "credits" },
];

const quickActions = [
  { icon: Upload, label: "Upload not working?", color: "#EF4444", slug: "upload-failed" },
  { icon: Video, label: "Video stuck?", color: "#F97316", slug: "video-processing-stuck" },
  { icon: FileSearch, label: "Can't find your file?", color: "#0EA5E9", slug: "cant-find-file" },
  { icon: CreditCard, label: "Out of credits?", color: "#8B5CF6", slug: "out-of-credits" },
  { icon: CreditCard, label: "Billing problem?", color: "#EC4899", slug: "billing-issue" },
  { icon: Users, label: "Invite your team", color: "#10B981", slug: "invite-team" },
];

const helpCategories = [
  { icon: Zap, label: "Getting Started", color: "#7C3AED", desc: "Set up your workspace and upload your first files", filter: "getting-started" },
  { icon: CreditCard, label: "Pricing & Billing", color: "#0EA5E9", desc: "Plans, payments, invoices, and subscription management", filter: "billing" },
  { icon: Sparkles, label: "Credits", color: "#F97316", desc: "How credits work, usage tracking, and purchasing", filter: "credits" },
  { icon: Video, label: "Create & Edit Videos", color: "#EC4899", desc: "Video upload, AI editing, and export options", filter: "video" },
  { icon: Wand2, label: "AI Features", color: "#8B5CF6", desc: "Background removal, image generation, and smart tagging", filter: "ai" },
  { icon: Users, label: "Team & Sharing", color: "#10B981", desc: "Invitations, permissions, and shared workspaces", filter: "team" },
];

const categoryArticleMap: Record<string, string[]> = {
  "getting-started": ["upload-failed", "cant-find-file", "invite-team"],
  "billing": ["billing-issue", "out-of-credits"],
  "credits": ["out-of-credits", "billing-issue"],
  "video": ["video-processing-stuck", "upload-failed", "slow-performance"],
  "ai": ["video-processing-stuck", "cant-find-file"],
  "team": ["invite-team", "billing-issue"],
};

const faqs = [
  { q: "What happens if I run out of credits?", a: "Content generation will pause until you top up. You can purchase credits anytime without changing your plan. Your existing content remains accessible.", link: "/help/out-of-credits" },
  { q: "Why is my video not processing?", a: "Video processing can take a few minutes depending on file size and length. If it seems stuck, check your dashboard for a progress indicator.", link: "/help/video-processing-stuck" },
  { q: "How do I find a file quickly?", a: "Use the search bar at the top of your workspace. You can search by file name, tag, or even describe what the file looks like — Yettey's AI will find it.", link: "/help/cant-find-file" },
  { q: "Why can't I upload a file?", a: "Check that your file format is supported and the file size is within your plan's limit. If the issue persists, try refreshing the page.", link: "/help/upload-failed" },
  { q: "How do I invite team members?", a: "Go to your workspace settings, click Invite Members, enter their email, and choose their role. They'll get an invite link via email.", link: "/help/invite-team" },
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
      className="border-b border-white/[0.06] last:border-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={contentId}
        className="w-full py-5 flex items-start justify-between gap-4 text-left group"
      >
        <span className="text-[15px] font-medium text-white/90 group-hover:text-primary transition-colors leading-relaxed">
          {item.q}
        </span>
        <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:border-primary/40 group-hover:text-primary transition-colors">
          {open ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
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
        <div className="pb-6">
          <p className="text-sm text-white/50 leading-[1.7] mb-3">{item.a}</p>
          <Link href={item.link} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
            Read full guide <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ArticleCard({ article, index }: { article: typeof allArticles[0]; index: number }) {
  const Icon = article.icon;
  return (
    <motion.div
      variants={fadeUp} initial="hidden" animate="show" custom={index}
    >
      <Link
        href={`/help/${article.slug}`}
        className="flex items-center gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-200 text-left group block"
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${article.color}12` }}
        >
          <Icon className="w-5 h-5" style={{ color: article.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[15px] font-semibold text-white/85 group-hover:text-white transition-colors">{article.title}</p>
          <p className="text-[13px] text-white/35 mt-0.5">{article.desc}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-white/15 group-hover:text-white/50 transition-colors shrink-0" />
      </Link>
    </motion.div>
  );
}

export default function HelpCenter() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.desc.toLowerCase().includes(q) ||
        a.tags.some((t) => t.includes(q))
    );
  }, [query]);

  const categoryPopularArticles = useMemo(() => {
    if (!activeCategory) return [];
    const slugs = categoryArticleMap[activeCategory] || [];
    return allArticles.filter((a) => slugs.includes(a.slug));
  }, [activeCategory]);

  const categoryAllArticles = useMemo(() => {
    if (!activeCategory) return [];
    const slugs = categoryArticleMap[activeCategory] || [];
    const popular = allArticles.filter((a) => slugs.includes(a.slug));
    const rest = allArticles.filter((a) => !slugs.includes(a.slug));
    return [...popular, ...rest];
  }, [activeCategory]);

  const activeCategoryData = helpCategories.find((c) => c.filter === activeCategory);

  const isSearching = query.trim().length > 0;
  const isBrowsingCategory = !isSearching && activeCategory !== null;
  const isHome = !isSearching && !isBrowsingCategory;

  const filteredFaqs = isSearching
    ? faqs.filter(
        (f) =>
          f.q.toLowerCase().includes(query.toLowerCase()) ||
          f.a.toLowerCase().includes(query.toLowerCase())
      )
    : faqs;

  const handleTagClick = (filter: string) => {
    setActiveCategory(null);
    setQuery(filter);
  };

  const handleCategoryClick = (filter: string) => {
    setQuery("");
    setActiveCategory(activeCategory === filter ? null : filter);
  };

  const handleClearAll = () => {
    setQuery("");
    setActiveCategory(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          {isBrowsingCategory ? (
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="mb-6">
              <nav aria-label="Breadcrumb">
                <button onClick={handleClearAll} className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Help Center <span className="text-white/20">/</span> <span className="text-white/70 font-medium">{activeCategoryData?.label}</span>
                </button>
              </nav>
            </motion.div>
          ) : (
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-6">
                <MessageCircle className="w-3 h-3" />
                Help Center
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-4xl md:text-[52px] font-display font-bold text-white mb-4 leading-[1.15] tracking-tight"
          >
            {isBrowsingCategory && activeCategoryData
              ? activeCategoryData.label
              : "How can we help you today?"}
          </motion.h1>
          {isBrowsingCategory && activeCategoryData ? (
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={1.5} className="text-base text-white/40 mb-8">
              {activeCategoryData.desc}
            </motion.p>
          ) : (
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={1.5} className="text-base text-white/40 mb-8">
              Search or browse below to find answers fast.
            </motion.p>
          )}

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="relative max-w-xl mx-auto mb-5"
          >
            <label htmlFor="help-search" className="sr-only">Search help articles</label>
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
            <input
              id="help-search"
              type="text"
              placeholder="Search for answers, features, or issues..."
              value={query}
              onChange={(e) => { setQuery(e.target.value); setActiveCategory(null); }}
              className="w-full pl-13 pr-12 py-4.5 rounded-2xl bg-white/[0.06] border border-white/[0.08] text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:bg-white/[0.08] transition-all shadow-lg shadow-black/10"
            />
            {(isSearching || isBrowsingCategory) && (
              <button
                onClick={handleClearAll}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/[0.08] hover:bg-white/[0.15] flex items-center justify-center transition-colors"
              >
                <X className="w-3.5 h-3.5 text-white/50" />
              </button>
            )}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="flex flex-wrap justify-center gap-2">
            {searchTags.map((tag) => (
              <button
                key={tag.filter}
                onClick={() => handleTagClick(tag.filter)}
                className={`px-3.5 py-1.5 rounded-full border text-xs transition-all duration-200 ${
                  query.toLowerCase() === tag.filter
                    ? "border-primary/50 bg-primary/15 text-primary"
                    : "border-white/[0.08] bg-white/[0.04] text-white/40 hover:text-white/80 hover:bg-white/[0.08] hover:border-white/[0.15]"
                }`}
              >
                {tag.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {isSearching && (
          <motion.section
            key="search-results"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="max-w-4xl mx-auto px-4 mb-20"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <Search className="w-4 h-4" style={{ color: ACCENT }} />
                <h2 className="font-display font-bold text-[22px] text-white tracking-tight">
                  {searchResults.length > 0
                    ? `${searchResults.length} result${searchResults.length > 1 ? "s" : ""} for "${query}"`
                    : `No results for "${query}"`}
                </h2>
              </div>
              <button onClick={handleClearAll} className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Clear
              </button>
            </div>
            <p className="text-sm text-white/35 mb-7">
              {searchResults.length > 0 ? "Click any article to get help instantly." : "Try a different keyword or browse categories below."}
            </p>

            {searchResults.length > 0 ? (
              <div className="flex flex-col gap-3">
                {searchResults.map((article, i) => (
                  <ArticleCard key={article.slug} article={article} index={i} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-12 text-center">
                <p className="text-white/40 text-sm mb-4">Try searching for "upload", "video", "billing", or "credits"</p>
                <button onClick={handleClearAll} className="text-sm font-medium text-primary hover:underline">
                  Browse all topics →
                </button>
              </div>
            )}

            {searchResults.length > 0 && filteredFaqs.length > 0 && (
              <div className="mt-10">
                <h3 className="font-display font-bold text-lg text-white mb-4">Related FAQ</h3>
                <div className="bg-white/[0.025] border border-white/[0.06] rounded-2xl px-6">
                  {filteredFaqs.map((faq, i) => (
                    <FaqItem key={faq.q} item={faq} index={i} />
                  ))}
                </div>
              </div>
            )}
          </motion.section>
        )}

        {isBrowsingCategory && (
          <motion.section
            key="category-view"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="max-w-4xl mx-auto px-4 mb-20"
          >
            <div className="flex flex-wrap gap-2 mb-8">
              {helpCategories.map((cat) => (
                <button
                  key={cat.filter}
                  onClick={() => handleCategoryClick(cat.filter)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 ${
                    activeCategory === cat.filter
                      ? "bg-white/[0.12] text-white border border-white/[0.15]"
                      : "bg-white/[0.04] text-white/40 border border-white/[0.06] hover:bg-white/[0.08] hover:text-white/70"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {categoryPopularArticles.length > 0 && (
              <>
                <div className="flex items-center gap-2.5 mb-2">
                  <TrendingUp className="w-4 h-4" style={{ color: activeCategoryData?.color || ACCENT }} />
                  <h2 className="font-display font-bold text-[22px] text-white tracking-tight">
                    Popular in {activeCategoryData?.label}
                  </h2>
                </div>
                <p className="text-sm text-white/35 mb-7">Most viewed articles in this category</p>
                <div className="flex flex-col gap-3">
                  {categoryPopularArticles.map((article, i) => (
                    <ArticleCard key={article.slug} article={article} index={i} />
                  ))}
                </div>
              </>
            )}

            <div className="mt-14">
              <div className="flex items-center gap-2.5 mb-2">
                <FolderOpen className="w-4 h-4" style={{ color: activeCategoryData?.color || ACCENT }} />
                <h2 className="font-display font-bold text-[22px] text-white tracking-tight">All articles</h2>
              </div>
              <p className="text-sm text-white/35 mb-7">Browse everything in this topic and beyond</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categoryAllArticles.map((article, i) => {
                  const Icon = article.icon;
                  return (
                    <Link
                      key={article.slug}
                      href={`/help/${article.slug}`}
                      className="flex items-center gap-3.5 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-200 text-left group block"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: `${article.color}12` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: article.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[14px] font-semibold text-white/80 group-hover:text-white transition-colors truncate">{article.title}</p>
                        <p className="text-[12px] text-white/30 mt-0.5 truncate">{article.desc}</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-white/10 group-hover:text-white/40 transition-colors shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center">
              <p className="text-sm text-white/40 mb-3">Related topics</p>
              <div className="flex flex-wrap justify-center gap-2">
                {helpCategories
                  .filter((c) => c.filter !== activeCategory)
                  .slice(0, 3)
                  .map((cat) => (
                    <button
                      key={cat.filter}
                      onClick={() => handleCategoryClick(cat.filter)}
                      className="px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] text-xs text-white/50 hover:text-white/80 hover:bg-white/[0.08] transition-all"
                    >
                      {cat.label}
                    </button>
                  ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {isHome && (
        <>
          <section className="max-w-4xl mx-auto px-4 mb-20">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="flex items-center gap-2.5 mb-2">
                <Zap className="w-4 h-4" style={{ color: ACCENT }} />
                <h2 className="font-display font-bold text-[22px] text-white tracking-tight">Quick fixes</h2>
              </div>
              <p className="text-sm text-white/35 mb-7">Solve common problems instantly</p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {quickActions.map((action, i) => {
                const Icon = action.icon;
                return (
                  <motion.div
                    key={action.slug}
                    variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
                  >
                    <Link
                      href={`/help/${action.slug}`}
                      className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-5 flex items-center gap-4 hover:border-primary/40 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-primary/[0.06] hover:-translate-y-1 transition-all duration-250 text-left group block cursor-pointer"
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                        style={{ background: `${action.color}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: action.color }} />
                      </div>
                      <p className="text-[15px] font-semibold text-white/90 group-hover:text-white transition-colors leading-snug">
                        {action.label}
                      </p>
                      <ArrowRight className="w-4 h-4 text-white/0 group-hover:text-white/50 ml-auto shrink-0 transition-all duration-200 -translate-x-1 group-hover:translate-x-0" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section className="max-w-4xl mx-auto px-4 mb-20">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="flex items-center gap-2.5 mb-2">
                <FolderOpen className="w-4 h-4" style={{ color: ACCENT }} />
                <h2 className="font-display font-bold text-[22px] text-white tracking-tight">Browse by category</h2>
              </div>
              <p className="text-sm text-white/35 mb-7">Explore features and workflows</p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {helpCategories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <motion.button
                    key={cat.label}
                    variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
                    className="rounded-2xl bg-white/[0.025] border border-white/[0.06] p-5 flex flex-col items-start gap-3.5 hover:border-white/[0.12] hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-200 text-left group cursor-pointer"
                    onClick={() => handleCategoryClick(cat.filter)}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${cat.color}12` }}
                    >
                      <Icon className="w-[18px] h-[18px]" style={{ color: cat.color }} />
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-white/85 group-hover:text-white transition-colors">
                        {cat.label}
                      </p>
                      <p className="text-[13px] text-white/35 mt-1 leading-relaxed">{cat.desc}</p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </section>

          <section className="max-w-4xl mx-auto px-4 mb-20">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="flex items-center gap-2.5 mb-2">
                <TrendingUp className="w-4 h-4" style={{ color: ACCENT }} />
                <h2 className="font-display font-bold text-[22px] text-white tracking-tight">Popular articles</h2>
              </div>
              <p className="text-sm text-white/35 mb-7">Most viewed by Yettey users</p>
            </motion.div>
            <div className="flex flex-col gap-3">
              {allArticles
                .filter((a) => popularSlugs.includes(a.slug))
                .map((article, i) => {
                  const Icon = article.icon;
                  return (
                    <motion.div
                      key={article.slug}
                      variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
                    >
                      <Link
                        href={`/help/${article.slug}`}
                        className="flex items-center gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-200 text-left group block"
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: `${article.color}12` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: article.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[15px] font-semibold text-white/85 group-hover:text-white transition-colors">{article.title}</p>
                          <p className="text-[13px] text-white/35 mt-0.5">{article.desc}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/15 group-hover:text-white/50 transition-colors shrink-0" />
                      </Link>
                    </motion.div>
                  );
                })}
            </div>
          </section>
        </>
      )}

      {(isHome || isSearching) && (
        <section className="max-w-3xl mx-auto px-4 mb-20">
          {!isSearching && (
            <>
              <div className="flex items-center gap-2.5 mb-2">
                <HelpCircle className="w-4 h-4" style={{ color: ACCENT }} />
                <h2 className="font-display font-bold text-[22px] text-white tracking-tight">Frequently asked</h2>
              </div>
              <p className="text-sm text-white/35 mb-7">Quick answers to common questions</p>
            </>
          )}
          <div className="bg-white/[0.025] border border-white/[0.06] rounded-2xl px-6">
            {(isSearching ? filteredFaqs : faqs).map((faq, i) => (
              <FaqItem key={faq.q} item={faq} index={i} />
            ))}
          </div>
        </section>
      )}

      {isHome && (
        <section className="max-w-4xl mx-auto px-4 mb-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="flex items-center gap-2.5 mb-2">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <h2 className="font-display font-bold text-[22px] text-white tracking-tight">Having issues?</h2>
            </div>
            <p className="text-sm text-white/35 mb-7">Fix common problems step by step</p>
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
                    className="flex items-center gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-200 text-left group block"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${item.color}12` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[15px] font-semibold text-white/85 group-hover:text-white transition-colors">{item.label}</p>
                      <p className="text-[13px] text-white/35 mt-0.5">{item.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors shrink-0" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-lg">Still need help?</h3>
              <p className="text-sm text-white/40">Our team typically responds within a few hours.</p>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap">
            Contact Support
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>

      {isHome && (
        <section className="max-w-4xl mx-auto px-4 mb-24">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="rounded-2xl p-10 text-center relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${ACCENT}12, ${ACCENT}05)`, border: `1px solid ${ACCENT}25` }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full blur-[100px] opacity-15 pointer-events-none"
              style={{ backgroundColor: ACCENT }}
            />
            <div className="relative">
              <h3 className="font-display font-bold text-white text-xl mb-2">New to Yettey?</h3>
              <p className="text-sm text-white/40 mb-6">Start organizing your content in minutes.</p>
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
      )}

      <Footer />
    </div>
  );
}
