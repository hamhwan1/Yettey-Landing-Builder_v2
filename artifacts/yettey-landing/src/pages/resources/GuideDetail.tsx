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
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link, useRoute } from "wouter";
import { guides } from "./Guides";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

const guideContent: Record<string, {
  heroSub: string;
  problems: string[];
  shift: string;
  solution: string;
  solutionDesc: string;
  steps: { title: string; desc: string }[];
  uiHints: string[];
  before: string[];
  after: string[];
  values: string[];
  ctaText: string;
}> = {
  organize: {
    heroSub: "Find any file instantly \u2014 even across thousands of assets",
    problems: [
      "Searching through dozens of folders just to find one image",
      "Duplicating files because nobody knows where the original is",
      "Wasting hours organizing manually every week",
      "New team members can't find anything without asking someone",
    ],
    shift: "Drive stores files, but doesn't help you find or use them. Your content deserves better than folder chaos.",
    solution: "Yettey organizes your content automatically",
    solutionDesc: "Upload your files once. Yettey's AI tags, categorizes, and structures everything \u2014 so you never lose a file again.",
    steps: [
      { title: "Upload files", desc: "Drag and drop any media \u2014 images, videos, documents, anything." },
      { title: "AI organizes automatically", desc: "Smart tagging and categorization happens instantly." },
      { title: "Search instantly", desc: "Find any file in seconds with AI-powered search." },
      { title: "Access anytime", desc: "Your organized library is always available, anywhere." },
    ],
    uiHints: [
      "Auto-generated smart folders based on content type",
      "AI tags visible on every asset thumbnail",
      "Instant search results as you type",
    ],
    before: ["Folders everywhere", "Hours searching for files", "Manual tagging and organizing", "Lost files and duplicates"],
    after: ["Instant search results", "Everything organized automatically", "AI-powered tags and categories", "Zero duplicates, zero confusion"],
    values: ["Save 5+ hours per week on file management", "Eliminate file duplication and chaos", "Onboard new team members in minutes, not days"],
    ctaText: "Start organizing your files now",
  },
  find: {
    heroSub: "Search across all your content in seconds \u2014 not hours",
    problems: [
      "Browsing through endless subfolders to find one asset",
      "Remembering file names instead of searching by content",
      "Asking teammates where they saved something",
      "Recreating content because it's faster than finding the original",
    ],
    shift: "Traditional search only works if you remember the exact file name. Your content needs smarter search.",
    solution: "Yettey gives you Google-like search for your own content",
    solutionDesc: "Search by content, color, type, tag, or even what's inside an image. Find anything in seconds.",
    steps: [
      { title: "Upload files", desc: "Add your media library to Yettey." },
      { title: "AI indexes everything", desc: "Every file is analyzed, tagged, and made searchable." },
      { title: "Search by anything", desc: "Type keywords, descriptions, or visual attributes." },
      { title: "Get results instantly", desc: "Find the exact file you need in under 3 seconds." },
    ],
    uiHints: [
      "Search bar with autocomplete suggestions",
      "Visual search results with preview thumbnails",
      "Filter by type, date, tag, or team member",
    ],
    before: ["Browsing folders for 20 minutes", "Asking team 'where is that file?'", "Recreating lost content", "No way to search by content"],
    after: ["Find files in under 3 seconds", "Search by content, not file name", "Never lose a file again", "AI-powered visual search"],
    values: ["Find any asset in under 3 seconds", "Eliminate 'where is that file?' messages", "Search by what's in the content, not just the name"],
    ctaText: "Find any file now",
  },
  share: {
    heroSub: "Control how your content is shared \u2014 not just where",
    problems: [
      "Sharing files through email, Slack, and Drive links",
      "No control over who downloads or forwards your content",
      "Broken links when files are moved or renamed",
      "No visibility into who accessed what",
    ],
    shift: "Sharing a link isn't sharing with control. You need to know who accesses your content and what they do with it.",
    solution: "Yettey gives you branded, controlled content sharing",
    solutionDesc: "Share any asset with a secure, branded link. Set permissions, track views, and control access from one place.",
    steps: [
      { title: "Select your asset", desc: "Pick any file or collection to share." },
      { title: "Set permissions", desc: "Choose who can view, download, or edit." },
      { title: "Share a branded link", desc: "Send a clean, professional link to anyone." },
      { title: "Track engagement", desc: "See who viewed, downloaded, or shared your content." },
    ],
    uiHints: [
      "Branded share pages with your logo",
      "Permission controls for view, download, and edit",
      "Analytics dashboard showing views and downloads",
    ],
    before: ["Scattered links across tools", "No control after sharing", "Broken links when files move", "No visibility into access"],
    after: ["One secure, branded link", "Full control over permissions", "Links that always work", "Complete access analytics"],
    values: ["Share with confidence and control", "Build a professional brand image", "Know exactly who accessed your content"],
    ctaText: "Share content better",
  },
  collaborate: {
    heroSub: "Stop switching tools. Collaborate directly on your content.",
    problems: [
      "Feedback scattered across email, Slack, and spreadsheets",
      "Version confusion when multiple people edit",
      "No single source of truth for approvals",
      "Time wasted switching between review tools",
    ],
    shift: "Collaboration breaks when feedback lives in one tool and content lives in another. They need to be together.",
    solution: "Yettey puts collaboration directly on your assets",
    solutionDesc: "Comment, review, and approve directly on any asset. No more switching between tools.",
    steps: [
      { title: "Upload your assets", desc: "Add content your team needs to review." },
      { title: "Invite your team", desc: "Add teammates with the right permissions." },
      { title: "Comment on assets", desc: "Leave feedback directly on images, videos, and files." },
      { title: "Approve and ship", desc: "Mark assets as approved and move to publish." },
    ],
    uiHints: [
      "Inline comments pinned to specific parts of an asset",
      "Approval workflows with status indicators",
      "Activity feed showing all team actions",
    ],
    before: ["Feedback in email threads", "Version confusion", "No clear approval process", "Hours of back-and-forth"],
    after: ["Comments directly on assets", "Clear version history", "One-click approvals", "80% less back-and-forth"],
    values: ["Cut review cycles by 80%", "Eliminate version confusion", "Ship content twice as fast"],
    ctaText: "Start collaborating now",
  },
  activate: {
    heroSub: "Turn your existing content into reusable assets \u2014 instantly",
    problems: [
      "Creating new content from scratch every time",
      "Existing content buried and never reused",
      "No way to repurpose assets across campaigns",
      "Wasting budget recreating what already exists",
    ],
    shift: "Most content is used once and forgotten. Your existing library is an untapped goldmine.",
    solution: "Yettey helps you reuse and repurpose content instantly",
    solutionDesc: "Find existing assets, remix them for new campaigns, and stop creating from scratch.",
    steps: [
      { title: "Upload your content library", desc: "Add everything your team has created." },
      { title: "AI surfaces reusable assets", desc: "Discover content you forgot you had." },
      { title: "Repurpose for new campaigns", desc: "Adapt existing assets instead of recreating." },
      { title: "Track content usage", desc: "See which assets get the most reuse." },
    ],
    uiHints: [
      "AI-suggested similar assets for reuse",
      "Content usage analytics dashboard",
      "Quick-edit tools for fast repurposing",
    ],
    before: ["Creating from scratch every time", "Content used once then forgotten", "No visibility into what exists", "Wasted creative budget"],
    after: ["Reuse existing content instantly", "AI finds similar assets automatically", "Full visibility into your library", "Save thousands on content creation"],
    values: ["Save 60% on content creation costs", "Reuse existing assets across campaigns", "Discover content you forgot you had"],
    ctaText: "Reuse your content now",
  },
  "ai-editing": {
    heroSub: "Edit like a pro \u2014 without design skills",
    problems: [
      "Waiting for a designer to make simple edits",
      "Can't remove backgrounds or resize without Photoshop",
      "Simple changes take hours instead of minutes",
      "Design bottleneck slowing down content production",
    ],
    shift: "You shouldn't need a designer for every small edit. AI can handle 90% of routine edits instantly.",
    solution: "Yettey's AI editing tools let anyone edit content",
    solutionDesc: "Remove backgrounds, enhance quality, resize, and fix images \u2014 all with one click. No design skills needed.",
    steps: [
      { title: "Select your asset", desc: "Pick any image or visual to edit." },
      { title: "Choose an AI action", desc: "Remove background, enhance, resize, or more." },
      { title: "One-click edit", desc: "AI processes your edit instantly." },
      { title: "Download or share", desc: "Export the result or share it directly." },
    ],
    uiHints: [
      "One-click background removal",
      "AI-powered image enhancement",
      "Batch editing for multiple assets at once",
    ],
    before: ["Waiting days for designer edits", "Complex software for simple changes", "Design bottleneck", "High cost per edit"],
    after: ["One-click AI edits", "Anyone can edit content", "Instant results", "Zero design dependency"],
    values: ["Eliminate design bottlenecks", "Edit content in seconds, not days", "Empower every team member to create"],
    ctaText: "Edit content instantly",
  },
  speed: {
    heroSub: "Make your content load instantly \u2014 no more slow pages",
    problems: [
      "Website loading slowly because of unoptimized images",
      "Users bouncing because media takes too long to load",
      "Manually compressing images before uploading",
      "No CDN setup for global content delivery",
    ],
    shift: "Slow media kills your SEO and user experience. Optimization shouldn't be manual work.",
    solution: "Yettey optimizes and delivers your media instantly",
    solutionDesc: "Built-in CDN and automatic image optimization ensure your content loads fast everywhere.",
    steps: [
      { title: "Upload your media", desc: "Add images, videos, and files." },
      { title: "Automatic optimization", desc: "Yettey compresses and formats automatically." },
      { title: "Global CDN delivery", desc: "Content is served from the nearest edge server." },
      { title: "Instant loading", desc: "Your media loads fast for every visitor." },
    ],
    uiHints: [
      "Performance dashboard showing load time savings",
      "Automatic format conversion (WebP, AVIF)",
      "Global CDN coverage map",
    ],
    before: ["Slow page load times", "Manual image compression", "No CDN setup", "Poor SEO scores"],
    after: ["Lightning-fast media delivery", "Automatic optimization", "Global CDN coverage", "Improved SEO scores"],
    values: ["Improve page load speed by 70%+", "Boost SEO rankings with faster media", "Zero manual optimization work"],
    ctaText: "Speed up your content now",
  },
  control: {
    heroSub: "Set exactly who can view, edit, and share your assets",
    problems: [
      "Anyone with a link can access sensitive files",
      "No control over who downloads or shares content",
      "Ex-team members still have access to assets",
      "Can't set different permissions for different teams",
    ],
    shift: "Open access is a risk, not a feature. You need granular control over every asset.",
    solution: "Yettey gives you complete content access control",
    solutionDesc: "Set permissions at the file, folder, or team level. Know exactly who can do what with your content.",
    steps: [
      { title: "Set up your workspace", desc: "Create your organized content library." },
      { title: "Define permissions", desc: "Set view, edit, and share access for each level." },
      { title: "Invite team members", desc: "Add people with the right access level." },
      { title: "Monitor access", desc: "Track who accessed what and when." },
    ],
    uiHints: [
      "Permission matrix showing access levels",
      "Audit log of all content access",
      "Role-based access controls",
    ],
    before: ["Open access to everything", "No visibility into who accessed files", "Manual permission management", "Security risks"],
    after: ["Granular permission controls", "Complete audit trail", "Role-based access", "Enterprise-grade security"],
    values: ["Protect sensitive content automatically", "Meet compliance requirements", "Full visibility into content access"],
    ctaText: "Control your content now",
  },
  versions: {
    heroSub: "Always know which version is the right one",
    problems: [
      "Files named 'final_v2_FINAL_revised.psd'",
      "No idea which version was approved",
      "Accidentally using outdated content in campaigns",
      "No way to roll back to previous versions",
    ],
    shift: "File naming conventions don't scale. You need real version control for your content.",
    solution: "Yettey tracks every version of every asset",
    solutionDesc: "Automatic version history, visual comparison, and one-click rollback. Never use the wrong version again.",
    steps: [
      { title: "Upload your content", desc: "Add files to your Yettey library." },
      { title: "Make changes anytime", desc: "Upload new versions of any asset." },
      { title: "Compare versions", desc: "See exactly what changed between versions." },
      { title: "Roll back instantly", desc: "Restore any previous version with one click." },
    ],
    uiHints: [
      "Visual version timeline for each asset",
      "Side-by-side version comparison",
      "One-click version restore",
    ],
    before: ["'final_v2_FINAL' file names", "No idea which version is current", "Accidentally using old content", "Can't undo changes"],
    after: ["Clear version history", "Always know the latest version", "Visual comparison tool", "One-click rollback"],
    values: ["Eliminate version confusion forever", "Never publish outdated content", "Full change history for compliance"],
    ctaText: "Track your assets now",
  },
};

export default function GuideDetail() {
  const [, params] = useRoute("/guides/:slug");
  const slug = params?.slug || "";
  const guide = guides.find((g) => g.slug === slug);
  const content = guideContent[slug];

  if (!guide || !content) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="max-w-2xl mx-auto px-4 pt-40 pb-20 text-center">
          <h1 className="text-3xl font-display font-bold mb-4">Guide not found</h1>
          <Link href="/guides">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold">
              <ArrowLeft className="w-4 h-4" /> Back to guides
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = guide.icon;
  const accent = guide.accent;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="hidden"
          style={{ backgroundColor: accent }}
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
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${accent}15` }}
            >
              <Icon className="w-6 h-6" style={{ color: accent }} />
            </div>
            <span
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
              style={{ backgroundColor: `${accent}15`, color: accent }}
            >
              {guide.tag}
            </span>
          </motion.div>

          <motion.h1
            variants={fade} initial="hidden" animate="show" custom={2}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight"
          >
            {guide.title}
          </motion.h1>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={3}
            className="text-xl text-foreground/70 mb-8 max-w-xl font-medium"
          >
            {content.heroSub}
          </motion.p>

          <motion.div variants={fade} initial="hidden" animate="show" custom={4}>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: accent, boxShadow: `0 8px 24px ${accent}40` }}
              >
                {content.ctaText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-6">The problem</h2>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-3">
              {content.problems.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-red-500/20">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-foreground/80 text-sm leading-relaxed">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div
            className="rounded-2xl p-6 sm:p-8 text-center"
            style={{ background: `linear-gradient(135deg, ${accent}12, ${accent}04)`, border: `1px solid ${accent}18` }}
          >
            <p className="text-foreground/70 text-sm leading-relaxed mb-4">{content.shift}</p>
            <p className="font-display font-bold text-lg" style={{ color: accent }}>
              {content.solution}
            </p>
          </div>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="text-foreground/70 text-sm leading-relaxed mb-8 max-w-xl">{content.solutionDesc}</p>

          <h2 className="font-display font-bold text-2xl text-foreground mb-6">How it works</h2>
          <div className="flex flex-col gap-3">
            {content.steps.map((step, i) => (
              <div key={step.title} className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card">
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-mono font-bold text-muted-foreground w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${accent}15` }}
                  >
                    <span className="text-lg font-bold" style={{ color: accent }}>{i + 1}</span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{step.title}</p>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-6">What you'll see</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {content.uiHints.map((hint) => (
              <div key={hint} className="rounded-xl border border-border bg-card p-5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${accent}15` }}>
                  <Check className="w-4 h-4" style={{ color: accent }} />
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">{hint}</p>
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
              <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-4">Before</p>
              <div className="flex flex-col gap-2">
                {content.before.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/70">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-6" style={{ border: `1px solid ${accent}30`, backgroundColor: `${accent}08` }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: accent }}>After</p>
              <div className="flex flex-col gap-2">
                {content.after.map((a) => (
                  <div key={a} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: accent }} />
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
            {content.values.map((v) => (
              <div key={v} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${accent}20` }}>
                  <Check className="w-3.5 h-3.5" style={{ color: accent }} />
                </div>
                <span className="text-foreground/80 text-sm font-medium">{v}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-20">
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl p-10 sm:p-14 text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${accent}15, ${accent}06)`, border: `1px solid ${accent}30` }}
        >
          <div
            className="hidden"
            style={{ backgroundColor: accent }}
          />
          <div className="relative">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
              Ready to fix this?
            </h2>
            <p className="text-foreground/60 mb-8 max-w-md mx-auto">
              Start using Yettey for free. No credit card required.
            </p>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: accent, boxShadow: `0 8px 24px ${accent}40` }}
              >
                {content.ctaText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
