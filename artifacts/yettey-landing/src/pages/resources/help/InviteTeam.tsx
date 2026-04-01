import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Settings,
  UserPlus,
  Shield,
  Send,
  CircleCheck,
  MessageCircle,
  Zap,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const steps = [
  {
    icon: Settings,
    color: "#0EA5E9",
    title: "Open team settings",
    body: "Go to your workspace settings to manage your team.",
    cta: { label: "Open team settings", href: "/login?redirect=/dashboard/settings/team", type: "action" as const },
  },
  {
    icon: UserPlus,
    color: "#8B5CF6",
    title: "Add their email",
    body: "Click \"Invite members\" and enter their email address.",
    cta: { label: "Invite now", href: "/login?redirect=/dashboard/settings/team", type: "action" as const },
  },
  {
    icon: Shield,
    color: "#10B981",
    title: "Choose a role",
    body: "Select the right permission level for each team member.",
    cta: null,
  },
  {
    icon: Send,
    color: "#F97316",
    title: "Send the invitation",
    body: "They'll receive an invite link via email to join your workspace.",
    cta: null,
  },
];

const fallbacks = [
  "Double-check the email address is correct",
  "Ask them to check their spam folder",
  "Resend the invitation from team settings",
  "Check if you've reached your team member limit",
];

const successChecks = [
  "Invitation email is sent",
  "Team member appears in your workspace",
  "They can access your shared content",
];

const relatedProblems = [
  { label: "Billing issue?", slug: "billing-issue" },
  { label: "Can't find your file?", slug: "cant-find-file" },
  { label: "Out of credits?", slug: "out-of-credits" },
  { label: "Upload not working?", slug: "upload-failed" },
  { label: "Login not working?", slug: "login-issues" },
];

export default function InviteTeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <article className="max-w-3xl mx-auto px-4 pt-32 pb-24">

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
          <Link href="/help" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-10">
            <ArrowLeft className="w-3.5 h-3.5" /> Help Center
          </Link>
        </motion.div>

        <motion.header variants={fadeUp} initial="hidden" animate="show" custom={1}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-500/12">
              <Users className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/12 text-emerald-400">
              Team &amp; Collaboration
            </span>
          </div>
          <h1 className="text-3xl md:text-[44px] font-display font-bold text-white leading-[1.12] tracking-tight mb-5">
            Invite your team{" "}
            <span className="bg-gradient-to-r from-white/50 to-white/30 bg-clip-text text-transparent">in seconds.</span>
          </h1>
          <p className="text-[17px] text-white/45 leading-[1.75] max-w-2xl">
            Add team members to your Yettey workspace and start collaborating instantly.
            The whole process takes less than a minute.
          </p>
        </motion.header>

        <motion.section variants={fadeUp} initial="hidden" animate="show" custom={2} className="mt-10">
          <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.03] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-emerald-400" />
              <h2 className="font-display font-bold text-[17px] text-white">Quick answer</h2>
            </div>
            <p className="text-sm text-white/40 mb-4">To invite team members:</p>
            <div className="flex flex-col gap-3">
              {[
                { dot: "bg-sky-400", text: "Go to your workspace settings", action: "Open settings", href: "/login?redirect=/dashboard/settings/team" },
                { dot: "bg-violet-400", text: "Enter their email address", action: "Invite now", href: "/login?redirect=/dashboard/settings/team" },
                { dot: "bg-emerald-400", text: "Assign a role and send", action: "Start inviting", href: "/login?redirect=/dashboard/settings/team" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${item.dot} shrink-0`} />
                  <span className="text-[15px] text-white/75 flex-1">{item.text}</span>
                  <Link href={item.href} className="text-xs font-semibold text-emerald-400/80 hover:text-emerald-300 transition-colors shrink-0 flex items-center gap-1">
                    {item.action} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center justify-between">
              <p className="text-sm text-white/30">Takes less than 1 minute. Invite as many people as your plan allows.</p>
              <Link href="/login?redirect=/dashboard/settings/team" className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 shrink-0 ml-4">
                Open team settings <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </motion.section>

        <motion.section variants={fadeUp} initial="hidden" animate="show" custom={3} className="mt-16">
          <h2 className="font-display font-bold text-[22px] text-white tracking-tight mb-2">How to invite your team</h2>
          <p className="text-sm text-white/35 mb-8">Follow these steps to add members to your workspace.</p>

          <div className="flex flex-col gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-3 shrink-0 mt-0.5">
                        <span className="text-[11px] font-mono font-bold text-white/20 w-5 text-right">
                          {i + 1}
                        </span>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${step.color}12` }}>
                          <Icon className="w-5 h-5" style={{ color: step.color }} />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white text-[15px] mb-1.5">{step.title}</h3>
                        <p className="text-[14px] text-white/45 leading-[1.7]">{step.body}</p>
                      </div>
                    </div>
                  </div>
                  {step.cta && (
                    <div className="px-6 pb-5 pl-[4.75rem]">
                      <Link
                        href={step.cta.href}
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-200 px-4 py-2 rounded-lg hover:-translate-y-0.5"
                        style={{
                          color: "#fff",
                          backgroundColor: step.color,
                          boxShadow: `0 2px 12px ${step.color}30`,
                        }}
                      >
                        {step.cta.label}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.section>

        <motion.section variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-16">
          <h2 className="font-display font-bold text-[22px] text-white tracking-tight mb-2">If it doesn't work</h2>
          <p className="text-sm text-white/35 mb-6">Try these if the invitation didn't go through:</p>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] divide-y divide-white/[0.04]">
            {fallbacks.map((text, i) => (
              <div key={text} className="flex items-center gap-3.5 px-6 py-4">
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-violet-500/10">
                  <span className="text-[11px] font-bold text-violet-400">{i + 1}</span>
                </div>
                <span className="text-[15px] text-white/65">{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/login?redirect=/dashboard/settings/team" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:text-primary/80 transition-colors">
              Open team settings <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        <motion.section variants={fadeUp} initial="hidden" animate="show" custom={5} className="mt-16">
          <h2 className="font-display font-bold text-[22px] text-white tracking-tight mb-2">You're good when</h2>
          <p className="text-sm text-white/35 mb-6">Your invitation worked if:</p>
          <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.03] p-6">
            <div className="flex flex-col gap-4">
              {successChecks.map((check) => (
                <div key={check} className="flex items-center gap-3">
                  <CircleCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-[15px] text-white/80">{check}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section variants={fadeUp} initial="hidden" animate="show" custom={6} className="mt-16">
          <h2 className="font-display font-bold text-[22px] text-white tracking-tight mb-2">Related problems</h2>
          <p className="text-sm text-white/35 mb-6">Experiencing something else? These guides might help:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedProblems.map((r) => (
              <Link
                key={r.slug}
                href={`/help/${r.slug}`}
                className="flex items-center justify-between gap-3 px-5 py-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span className="text-[15px] font-medium text-white/75 group-hover:text-white transition-colors">{r.label}</span>
                <ArrowRight className="w-4 h-4 text-white/15 group-hover:text-white/50 transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section variants={fadeUp} initial="hidden" animate="show" custom={7} className="mt-16">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 md:p-10 text-center">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-bold text-white text-xl mb-2">Need help setting up your team?</h3>
            <p className="text-[15px] text-white/40 mb-6 max-w-md mx-auto leading-relaxed">
              Talk to our team — we'll help you get everyone onboard quickly.
            </p>
            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-200">
              Contact Support
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.section>

      </article>

      <Footer />
    </div>
  );
}
