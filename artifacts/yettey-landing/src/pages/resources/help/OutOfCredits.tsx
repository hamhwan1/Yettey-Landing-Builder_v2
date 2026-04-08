import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CreditCard,
  TrendingUp,
  Clock,
  CircleCheck,
  MessageCircle,
  Zap,
  Coins,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const options = [
  {
    icon: CreditCard,
    color: "#0EA5E9",
    badge: "Fastest",
    title: "Buy more credits",
    body: "Add credits instantly and continue where you left off.",
    cta: { label: "Buy credits", href: "/login?redirect=/dashboard/billing", type: "action" as const },
  },
  {
    icon: TrendingUp,
    color: "#8B5CF6",
    badge: "Best value",
    title: "Upgrade your plan",
    body: "Get more monthly credits and unlock higher limits.",
    cta: { label: "View plans", href: "/pricing", type: "action" as const },
  },
  {
    icon: Clock,
    color: "#10B981",
    badge: null,
    title: "Wait for monthly reset",
    body: "Credits renew automatically at the start of each billing cycle.",
    cta: { label: "Check billing", href: "/login?redirect=/dashboard/billing", type: "action" as const },
  },
];

const fallbacks = [
  "Check your current credit balance and usage",
  "Review which features consume the most credits",
  "Decide: buy now, upgrade, or wait for reset",
];

const successChecks = [
  "Credits are available again",
  "You can generate content (AI, video, clips)",
  "Features are no longer paused",
];

const relatedProblems = [
  { label: "Billing issue?", slug: "billing-issue" },
  { label: "Upload not working?", slug: "upload-failed" },
  { label: "Video processing stuck?", slug: "video-processing-stuck" },
  { label: "Can't find your file?", slug: "cant-find-file" },
  { label: "Login not working?", slug: "login-issues" },
];

export default function OutOfCreditsPage() {
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
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-amber-500/12">
              <Coins className="w-5 h-5 text-amber-400" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/12 text-amber-400">
              Credits &amp; Billing
            </span>
          </div>
          <h1 className="text-3xl md:text-[44px] font-display font-bold text-white leading-[1.12] tracking-tight mb-5">
            Out of credits?{" "}
            <span className="text-white/50">Here's what to do next.</span>
          </h1>
          <p className="text-[17px] text-white/45 leading-[1.75] max-w-2xl">
            When credits run out in Yettey, content generation pauses — but your files are safe.
            Choose the best way to continue.
          </p>
        </motion.header>

        <motion.section variants={fadeUp} initial="hidden" animate="show" custom={2} className="mt-10">
          <div className="rounded-2xl border border-amber-500/15 bg-amber-500/[0.03] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-amber-400" />
              <h2 className="font-display font-bold text-[17px] text-white">Quick answer</h2>
            </div>
            <p className="text-sm text-white/40 mb-4">When your credits run out:</p>
            <div className="flex flex-col gap-3">
              {[
                { dot: "bg-red-400", text: "Content generation stops (AI, video, clips)", action: "Buy credits", href: "/login?redirect=/dashboard/billing" },
                { dot: "bg-emerald-400", text: "Your existing files are safe and accessible", action: "View files", href: "/login?redirect=/dashboard" },
                { dot: "bg-sky-400", text: "You can resume instantly by adding credits", action: "Get credits", href: "/login?redirect=/dashboard/billing" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${item.dot} shrink-0`} />
                  <span className="text-[15px] text-white/75 flex-1">{item.text}</span>
                  <Link href={item.href} className="text-xs font-semibold text-amber-400/80 hover:text-amber-300 transition-colors shrink-0 flex items-center gap-1">
                    {item.action} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center justify-between">
              <p className="text-sm text-white/30">Your work is safe. You just need more credits to continue.</p>
              <Link href="/login?redirect=/dashboard/billing" className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 shrink-0 ml-4">
                Get more credits <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </motion.section>

        <motion.section variants={fadeUp} initial="hidden" animate="show" custom={3} className="mt-16">
          <h2 className="font-display font-bold text-[22px] text-white tracking-tight mb-2">What you can do</h2>
          <p className="text-sm text-white/35 mb-8">Pick the option that works best for you.</p>

          <div className="flex flex-col gap-4">
            {options.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <div key={opt.title} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-3 shrink-0 mt-0.5">
                        <span className="text-[11px] font-mono font-bold text-white/20 w-5 text-right">
                          {i + 1}
                        </span>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${opt.color}12` }}>
                          <Icon className="w-5 h-5" style={{ color: opt.color }} />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <h3 className="font-semibold text-white text-[15px]">{opt.title}</h3>
                          {opt.badge && (
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ backgroundColor: `${opt.color}18`, color: opt.color }}>
                              {opt.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[14px] text-white/45 leading-[1.7]">{opt.body}</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-5 pl-[4.75rem]">
                    <Link
                      href={opt.cta.href}
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-200 px-4 py-2 rounded-lg hover:-translate-y-0.5"
                      style={{
                        color: "#fff",
                        backgroundColor: opt.color,
                        boxShadow: `0 2px 12px ${opt.color}30`,
                      }}
                    >
                      {opt.cta.label}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        <motion.section variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-16">
          <h2 className="font-display font-bold text-[22px] text-white tracking-tight mb-2">If you're unsure</h2>
          <p className="text-sm text-white/35 mb-6">Not sure which option to pick? Start here:</p>
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
            <Link href="/login?redirect=/dashboard/billing" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:text-primary/80 transition-colors">
              Check your usage <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        <motion.section variants={fadeUp} initial="hidden" animate="show" custom={5} className="mt-16">
          <h2 className="font-display font-bold text-[22px] text-white tracking-tight mb-2">You're good when</h2>
          <p className="text-sm text-white/35 mb-6">Your credits are restored if:</p>
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
            <h3 className="font-display font-bold text-white text-xl mb-2">Need help choosing?</h3>
            <p className="text-[15px] text-white/40 mb-6 max-w-md mx-auto leading-relaxed">
              Talk to our team — we'll help you pick the best option for your workflow.
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
