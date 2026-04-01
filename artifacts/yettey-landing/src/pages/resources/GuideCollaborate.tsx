import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  X,
  Check,
  MessageSquare,
  Users,
  UserPlus,
  CheckCircle,
  Clock,
  Zap,
  Upload,
  Activity,
  GitBranch,
  ThumbsUp,
  AtSign,
  History,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const ACCENT = "#8B5CF6";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

export default function GuideCollaborate() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[140px] opacity-15 pointer-events-none"
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
              <Users className="w-6 h-6" style={{ color: ACCENT }} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: `${ACCENT}15`, color: ACCENT }}>
              Collaborate
            </span>
          </motion.div>

          <motion.h1
            variants={fade} initial="hidden" animate="show" custom={2}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight"
          >
            Stop losing time switching between tools.
          </motion.h1>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={3}
            className="text-xl text-foreground/70 mb-3 max-w-xl font-medium"
          >
            Collaborate directly on your content {"\u2014"} faster and clearer.
          </motion.p>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={4}
            className="text-sm text-muted-foreground mb-2 max-w-lg italic"
          >
            Collaborative digital asset management system for teams working on content and media
          </motion.p>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={5}
            className="text-xs text-foreground/40 mb-8"
          >
            Built for teams that need faster feedback and approvals
          </motion.p>

          <motion.div variants={fade} initial="hidden" animate="show" custom={6}>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Start collaborating now
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-6">
            Collaboration is broken across tools
          </h2>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-4">
              {[
                { text: "Feedback scattered across email, Slack, and spreadsheets", detail: "One comment in Slack, another in email, a third in a Google Doc. Nobody sees the full picture." },
                { text: "Version confusion when multiple people edit", detail: "'Is this the latest version?' \u2014 the question your team asks five times a day." },
                { text: "No single source of truth for approvals", detail: "Who approved what? When? Was it the right version? Nobody knows for sure." },
                { text: "Time wasted switching between tools", detail: "Open Slack, check email, find the file in Drive, paste feedback. Repeat all day." },
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
            <p className="font-display font-bold text-xl text-foreground mb-2">Traditional tools separate feedback and content.</p>
            <p className="font-display font-bold text-xl" style={{ color: ACCENT }}>
              Yettey puts collaboration directly on your assets.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">The solution</h2>
          <p className="text-foreground/70 text-base leading-relaxed mb-2">
            Yettey lets your team comment, review, and approve directly on the content itself.
          </p>
          <p className="text-foreground/60 text-sm leading-relaxed">
            No more switching between Slack, email, and your file system. Leave feedback right where it matters {"\u2014"} on the actual asset. Approve with one click. See every version, every comment, every decision in one place.
          </p>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-2">How it works</h2>
          <p className="text-muted-foreground text-sm mb-8">Simple workflow. Zero back-and-forth.</p>

          <div className="flex flex-col gap-3">
            {[
              { icon: Upload, title: "Upload your assets for review", desc: "Drop any image, video, or document into Yettey. Your content is ready for collaboration instantly." },
              { icon: UserPlus, title: "Invite your team with permissions", desc: "Add reviewers, editors, or approvers. Everyone gets exactly the access they need." },
              { icon: MessageSquare, title: "Comment directly on images, videos, or files", desc: "Pin comments to specific parts of your content. No more describing what you mean \u2014 point at it." },
              { icon: CheckCircle, title: "Approve and move forward \u2014 no back-and-forth", desc: "One-click approval. Clear status indicators. Everyone knows when content is ready to ship." },
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
              Try it now {"\u2014"} collaborate on content
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16 mt-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">What you'll see inside Yettey</h2>
          <p className="text-muted-foreground text-sm mb-8">Collaboration that happens on the content {"\u2014"} not around it.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: AtSign, title: "Inline comments on content", desc: "Pin comments directly on images, videos, or documents. Your team sees exactly what you mean." },
              { icon: ThumbsUp, title: "Approval workflows", desc: "Clear status indicators \u2014 pending, approved, needs changes. Everyone knows where things stand." },
              { icon: Activity, title: "Team activity feed", desc: "See every comment, approval, and upload in real time. Nothing falls through the cracks." },
              { icon: GitBranch, title: "Version comparison", desc: "Compare versions side by side. See what changed, when, and who made the update." },
              { icon: UserPlus, title: "Role-based permissions", desc: "Assign viewers, editors, and approvers. Everyone gets the right level of access." },
              { icon: History, title: "Full review history", desc: "Complete audit trail of every review, comment, and decision. Always know who said what." },
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
              { title: "Feedback directly on content", desc: "No more copying screenshots into Slack. Comment right on the asset." },
              { title: "Clear version history", desc: "Always know which version is current. No more 'final_v3_REAL.psd'." },
              { title: "Faster approvals with fewer steps", desc: "One-click approve. No email chains. No waiting." },
              { title: "One place for all collaboration", desc: "Every comment, approval, and decision in a single view." },
              { title: "Fewer meetings about content", desc: "When feedback is clear and visible, you don't need a meeting to discuss it." },
              { title: "Ship content faster", desc: "Less back-and-forth means faster turnaround on every project." },
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
                  "Feedback in emails and chat threads",
                  "Version confusion across the team",
                  "No clear approval process",
                  "Endless back-and-forth on every asset",
                  "Switching between 4+ tools to review content",
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
                  "Comments directly on assets",
                  "Clear version history for every file",
                  "One-click approvals with status tracking",
                  "Up to 80% less back-and-forth",
                  "One platform for review, feedback, and approval",
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
              { icon: Zap, title: "Cut review cycles by up to 80%", desc: "On-content feedback eliminates misunderstandings. Fewer rounds, faster results." },
              { icon: GitBranch, title: "Eliminate version confusion", desc: "One source of truth. Everyone always sees the latest version." },
              { icon: Clock, title: "Speed up team workflows", desc: "No more switching between Slack, email, and Drive. Everything happens in one place." },
              { icon: CheckCircle, title: "Ship content faster", desc: "Faster approvals mean faster launches. Get content to market sooner." },
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
              Yettey is an AI-powered digital asset management (DAM) system designed to improve collaboration for teams working with content. It allows teams to review, comment, and approve assets directly, reducing inefficiencies and making it a powerful content collaboration platform and alternative to traditional collaboration workflows. Whether you need team collaboration tools for creative review, a media asset management system with built-in feedback, or a centralized platform that replaces scattered Slack and email threads, Yettey brings your entire review process into one place.
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
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[250px] rounded-full blur-[120px] opacity-25 pointer-events-none"
            style={{ backgroundColor: ACCENT }}
          />
          <div className="relative">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3">
              Stop switching tools. Start collaborating.
            </h2>
            <p className="text-foreground/60 mb-8 max-w-md mx-auto">
              Work together directly on your content.
            </p>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Start collaborating now
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
