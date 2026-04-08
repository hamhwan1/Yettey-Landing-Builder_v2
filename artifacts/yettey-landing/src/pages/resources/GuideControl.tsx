import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  X,
  Check,
  Shield,
  Lock,
  Eye,
  Users,
  UserCheck,
  KeyRound,
  Activity,
  FileCheck,
  ShieldCheck,
  Ban,
  ClipboardList,
  Settings,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const ACCENT = "#6366F1";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

export default function GuideControl() {
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
              <Shield className="w-6 h-6" style={{ color: ACCENT }} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: `${ACCENT}15`, color: ACCENT }}>
              Control
            </span>
          </motion.div>

          <motion.h1
            variants={fade} initial="hidden" animate="show" custom={2}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight"
          >
            Stop losing control over your content.
          </motion.h1>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={3}
            className="text-xl text-foreground/70 mb-3 max-w-xl font-medium"
          >
            Decide exactly who can view, edit, and share your assets.
          </motion.p>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={4}
            className="text-sm text-muted-foreground mb-2 max-w-lg italic"
          >
            Content access control and digital asset management system with permissions, security, and audit tracking
          </motion.p>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={5}
            className="text-xs text-foreground/40 mb-8"
          >
            Built for teams that need security, visibility, and control
          </motion.p>

          <motion.div variants={fade} initial="hidden" animate="show" custom={6}>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Control your content now
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-6">
            Content access is out of control
          </h2>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-4">
              {[
                { text: "Anyone with a link can access sensitive files", detail: "One forwarded link and your confidential assets are exposed to anyone on the internet." },
                { text: "No control over downloads or sharing", detail: "Once someone has access, they can download, copy, and redistribute without your knowledge." },
                { text: "Ex-team members still have access", detail: "People leave the team, but their access remains. Nobody remembers to revoke it." },
                { text: "No clear permission structure across teams", detail: "Marketing sees engineering files. Interns see client contracts. There's no logic to who sees what." },
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
            <p className="font-display font-bold text-xl text-foreground mb-2">Open access is not freedom.</p>
            <p className="font-display font-bold text-xl" style={{ color: ACCENT }}>
              It's risk.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">The solution</h2>
          <p className="text-foreground/70 text-base leading-relaxed mb-2">
            Yettey gives you full control over who can access, edit, and share your content.
          </p>
          <p className="text-foreground/60 text-sm leading-relaxed">
            Set granular permissions for every file and folder. Assign roles to team members. Track every access, download, and share with a complete audit trail. Know exactly who touched your content {"\u2014"} and revoke access instantly when needed.
          </p>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-2">How it works</h2>
          <p className="text-muted-foreground text-sm mb-8">Full visibility. Full control. Zero guessing.</p>

          <div className="flex flex-col gap-3">
            {[
              { icon: Settings, title: "Set up your workspace and content structure", desc: "Organize your assets into projects, folders, and collections. Define your team's content hierarchy." },
              { icon: Lock, title: "Define permissions \u2014 view, edit, share", desc: "Set exactly what each person can do with each file. View only? Edit access? Share rights? You decide." },
              { icon: UserCheck, title: "Assign roles to team members", desc: "Create roles like Admin, Editor, Viewer, or Guest. Assign them once \u2014 permissions apply everywhere." },
              { icon: Activity, title: "Monitor and track access activity", desc: "See who accessed what, when, and what they did. Complete audit trail for every file in your system." },
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
              Try it now {"\u2014"} take control
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16 mt-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">What you'll see inside Yettey</h2>
          <p className="text-muted-foreground text-sm mb-8">Security that's visible {"\u2014"} not hidden behind complexity.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: KeyRound, title: "Permission matrix", desc: "See exactly who has access to what. A clear grid showing every user, every file, every permission level." },
              { icon: ClipboardList, title: "Audit logs", desc: "Complete history of every access, download, edit, and share. Know who did what, and when." },
              { icon: Users, title: "Role-based access control", desc: "Assign roles like Admin, Editor, Viewer. Permissions cascade automatically across all content." },
              { icon: Ban, title: "Instant access revoke", desc: "Remove access to any file or folder in one click. No delays. No lingering permissions." },
              { icon: ShieldCheck, title: "Security dashboard", desc: "Overview of your content security posture. See open shares, pending permissions, and access alerts." },
              { icon: FileCheck, title: "Compliance tracking", desc: "Track who accessed sensitive content. Generate reports for compliance reviews and audits." },
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
              { title: "Full visibility into who accesses content", desc: "Every view, download, and share is tracked. Nothing happens without your knowledge." },
              { title: "Clear control over permissions", desc: "Set it once. Permissions apply everywhere. No ambiguity." },
              { title: "Secure content sharing", desc: "Share files without losing control. Permissions travel with the content." },
              { title: "No unauthorized access", desc: "Only the right people see the right content. Always." },
              { title: "Instant offboarding", desc: "When someone leaves, revoke all access in one click. No loose ends." },
              { title: "Compliance-ready audit trails", desc: "Every access event is logged. Generate reports when you need them." },
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
                  "Open access to everything by default",
                  "No visibility into who accessed files",
                  "Manual permission management",
                  "High security risk from uncontrolled sharing",
                  "Ex-employees retaining access for months",
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
                  "Granular permission controls for every file",
                  "Complete audit trail of all access events",
                  "Role-based access system across the team",
                  "Enterprise-grade security by default",
                  "One-click access revocation",
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
              { icon: Shield, title: "Protect sensitive content automatically", desc: "Permissions are enforced at every level. Sensitive files stay protected without manual effort." },
              { icon: FileCheck, title: "Ensure compliance and governance", desc: "Full audit trails and access logs. Be ready for any compliance review." },
              { icon: Eye, title: "Gain full visibility into access", desc: "Know exactly who sees your content, when they access it, and what they do with it." },
              { icon: Lock, title: "Reduce security risks", desc: "No more open links, uncontrolled downloads, or forgotten access. Every file is secured." },
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
              Yettey is an AI-powered digital asset management (DAM) system designed to provide secure content access control. It allows teams to manage permissions, track access, and ensure content security through a robust file permissions system, making it a powerful alternative to traditional file sharing and storage tools. Whether you need a secure file sharing solution with granular access control or a media asset management platform with built-in audit tracking, Yettey gives your team full control over every asset.
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
              Stop risking your content.
            </h2>
            <p className="text-foreground/60 mb-8 max-w-md mx-auto">
              Take full control over access and permissions.
            </p>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Control your content now
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
