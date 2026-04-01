import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  FileCheck,
  HardDrive,
  Wifi,
  RefreshCw,
  CircleCheck,
  MessageCircle,
  ExternalLink,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const ACCENT = "#8B5CF6";

const steps = [
  {
    icon: FileCheck,
    color: "#0EA5E9",
    title: "Check your file format",
    body: "Convert your file to a supported format, then try again.",
    cta: { label: "See supported formats", href: "/help/upload-errors", type: "info" as const },
  },
  {
    icon: HardDrive,
    color: "#8B5CF6",
    title: "Check your file size",
    body: "If your file is too large, compress it or upgrade your plan.",
    cta: { label: "Check plan limits", href: "/pricing", type: "info" as const },
  },
  {
    icon: Wifi,
    color: "#10B981",
    title: "Switch to a stable connection",
    body: "Use wired or strong Wi-Fi. Don't switch networks mid-upload.",
    cta: { label: "Retry upload", href: "/login?redirect=/dashboard/upload", type: "action" as const },
  },
  {
    icon: RefreshCw,
    color: "#F97316",
    title: "Refresh and re-upload",
    body: "Close the upload dialog, refresh the page, and try again.",
    cta: { label: "Go to upload", href: "/login?redirect=/dashboard/upload", type: "action" as const },
  },
];

const fallbacks = [
  "Compress your file and re-upload",
  "Switch to Chrome and retry",
  "Turn off VPN or firewall, then retry",
  "Upload a different file to test your connection",
];

const successChecks = [
  "File appears in your workspace",
  "No error message after uploading",
  "AI processing starts automatically",
];

const relatedProblems = [
  { label: "Can't find your file?", slug: "cant-find-file" },
  { label: "Video processing stuck?", slug: "video-processing-stuck" },
  { label: "Upload too slow?", slug: "slow-performance" },
  { label: "Out of credits?", slug: "out-of-credits" },
  { label: "Login not working?", slug: "login-issues" },
];

export default function UploadFailedPage() {
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
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-red-500/12">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-red-500/12 text-red-400">
              Troubleshooting
            </span>
          </div>
          <h1 className="text-3xl md:text-[44px] font-display font-bold text-white leading-[1.12] tracking-tight mb-5">
            Upload not working?{" "}
            <span className="bg-gradient-to-r from-white/50 to-white/30 bg-clip-text text-transparent">Fix it in minutes.</span>
          </h1>
          <p className="text-[17px] text-white/45 leading-[1.75] max-w-2xl">
            When a file upload fails in Yettey, your workflow stops.
            Here's how to fix it fast and get back to creating.
          </p>
        </motion.header>

        <motion.section variants={fadeUp} initial="hidden" animate="show" custom={2} className="mt-10">
          <div className="rounded-2xl border border-amber-500/15 bg-amber-500/[0.03] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-amber-400" />
              <h2 className="font-display font-bold text-[17px] text-white">Quick answer</h2>
            </div>
            <p className="text-sm text-white/40 mb-4">Upload usually fails because of one of these:</p>
            <div className="flex flex-col gap-3">
              {[
                { dot: "bg-red-400", text: "Wrong file format", action: "Check formats", href: "/help/upload-errors" },
                { dot: "bg-orange-400", text: "File too large", action: "Check limits", href: "/pricing" },
                { dot: "bg-yellow-400", text: "Connection dropped", action: "Retry upload", href: "/login?redirect=/dashboard/upload" },
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
              <p className="text-sm text-white/30">Most issues resolve in under 2 minutes.</p>
              <Link href="/login?redirect=/dashboard/upload" className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1">
                Start uploading <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </motion.section>

        <motion.section variants={fadeUp} initial="hidden" animate="show" custom={3} className="mt-16">
          <h2 className="font-display font-bold text-[22px] text-white tracking-tight mb-2">How to fix upload errors</h2>
          <p className="text-sm text-white/35 mb-8">Try each step in order. Most issues resolve at step 1 or 2.</p>

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
                        className={`inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-200 ${
                          step.cta.type === "action"
                            ? "px-4 py-2 rounded-lg hover:-translate-y-0.5"
                            : "hover:gap-2.5"
                        }`}
                        style={{
                          color: step.cta.type === "action" ? "#fff" : step.color,
                          ...(step.cta.type === "action"
                            ? { backgroundColor: step.color, boxShadow: `0 2px 12px ${step.color}30` }
                            : {}),
                        }}
                      >
                        {step.cta.label}
                        {step.cta.type === "action" ? <ArrowRight className="w-3.5 h-3.5" /> : <ExternalLink className="w-3 h-3" />}
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.section>

        <motion.section variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-16">
          <h2 className="font-display font-bold text-[22px] text-white tracking-tight mb-2">If it's still not working</h2>
          <p className="text-sm text-white/35 mb-6">Try these before contacting support:</p>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] divide-y divide-white/[0.04]">
            {fallbacks.map((text, i) => (
              <div key={text} className="flex items-center gap-3.5 px-6 py-4">
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${ACCENT}10` }}>
                  <span className="text-[11px] font-bold" style={{ color: ACCENT }}>{i + 1}</span>
                </div>
                <span className="text-[15px] text-white/65">{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/login?redirect=/dashboard/upload" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:text-primary/80 transition-colors">
              Start uploading <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.section>

        <motion.section variants={fadeUp} initial="hidden" animate="show" custom={5} className="mt-16">
          <h2 className="font-display font-bold text-[22px] text-white tracking-tight mb-2">You're good when</h2>
          <p className="text-sm text-white/35 mb-6">Your upload is fixed if all of these are true:</p>
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
            <h3 className="font-display font-bold text-white text-xl mb-2">Still not working?</h3>
            <p className="text-[15px] text-white/40 mb-6 max-w-md mx-auto leading-relaxed">
              Talk to our team — we'll help you fix this quickly so you can get back to work.
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
