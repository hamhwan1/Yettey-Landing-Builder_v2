import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  FileType,
  HardDrive,
  Wifi,
  RefreshCw,
  CircleCheck,
  MessageCircle,
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
    icon: FileType,
    color: "#0EA5E9",
    title: "Check your file format",
    body: "Supported formats: MP4, MOV, JPG, PNG, GIF, PDF.",
    hint: "If your file is not in a supported format, convert it before uploading.",
    cta: { label: "See supported formats", href: "/help/upload-errors", type: "info" as const },
  },
  {
    icon: HardDrive,
    color: "#8B5CF6",
    title: "Check file size limit",
    body: "Free plan: up to 500 MB per file. Pro plan: up to 2 GB per file.",
    hint: "If your file is too large, compress it or upgrade your plan.",
    cta: { label: "View plan limits", href: "/pricing", type: "info" as const },
  },
  {
    icon: Wifi,
    color: "#10B981",
    title: "Check your connection",
    body: "Use stable Wi-Fi or a wired connection. Avoid switching networks during upload.",
    hint: "If upload fails, try again on a more stable connection.",
    cta: { label: "Retry upload", href: "/login?redirect=/dashboard/upload", type: "action" as const },
  },
  {
    icon: RefreshCw,
    color: "#F97316",
    title: "Retry the upload",
    body: "Refresh the page and re-upload the file.",
    hint: "A fresh page load clears cached errors that can block uploads.",
    cta: { label: "Go to dashboard", href: "/login?redirect=/dashboard", type: "action" as const },
  },
];

const alternatives = [
  "Compress the file before uploading",
  "Use Chrome browser (recommended)",
  "Disable VPN or firewall that may block uploads",
];

const successChecks = [
  "File uploads successfully",
  "No error message appears",
  "Processing starts normally",
];

const relatedProblems = [
  { label: "Can't find your file?", slug: "cant-find-file" },
  { label: "Video processing stuck?", slug: "video-processing-stuck" },
  { label: "Upload is too slow?", slug: "slow-performance" },
  { label: "Credits not working?", slug: "out-of-credits" },
];

export default function UploadFailedPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 pt-32 pb-24">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
          <Link href="/help" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-10">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Help Center
          </Link>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-red-500/15">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-red-500/15 text-red-400">
              Troubleshooting
            </span>
          </div>
          <h1 className="text-3xl md:text-[44px] font-display font-bold text-white leading-[1.15] tracking-tight mb-4">
            Upload not working?{" "}
            <span className="text-white/50">Fix it in minutes.</span>
          </h1>
          <p className="text-base text-white/50 leading-relaxed mb-0">
            When a file upload fails or gets stuck, it usually means one of three things:
            an unsupported file format, a file that exceeds the upload size limit, or an unstable internet connection.
            Most upload issues can be fixed in under 2 minutes.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2} className="mt-10">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8">
            <h2 className="font-display font-bold text-lg text-white mb-1">Quick answer</h2>
            <p className="text-sm text-white/40 mb-5">Upload usually fails because of:</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                <span className="text-[15px] text-white/80">Unsupported file format</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                <span className="text-[15px] text-white/80">File size exceeds limit</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                <span className="text-[15px] text-white/80">Unstable internet connection</span>
              </div>
            </div>
            <p className="text-sm text-white/35 mt-5">Most upload issues can be fixed in under 2 minutes.</p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="mt-14">
          <h2 className="font-display font-bold text-[22px] text-white tracking-tight mb-2">Step-by-step fix</h2>
          <p className="text-sm text-white/35 mb-7">Follow each step until your upload works.</p>

          <div className="flex flex-col gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-6 group">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-mono font-bold text-white/25 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${step.color}15` }}>
                        <Icon className="w-5 h-5" style={{ color: step.color }} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-[15px] mb-1">{step.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed mb-2">{step.body}</p>
                      <p className="text-sm text-white/35 leading-relaxed">{step.hint}</p>
                      {step.cta && (
                        <Link
                          href={step.cta.href}
                          className={`inline-flex items-center gap-1.5 text-xs font-medium mt-3 transition-colors ${step.cta.type === "action" ? "px-3 py-1.5 rounded-lg border" : ""}`}
                          style={{
                            color: step.cta.type === "action" ? "#fff" : step.color,
                            ...(step.cta.type === "action" ? { backgroundColor: `${step.color}20`, borderColor: `${step.color}30` } : {}),
                          }}
                        >
                          {step.cta.label} <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-14">
          <h2 className="font-display font-bold text-[22px] text-white tracking-tight mb-2">If still not working</h2>
          <p className="text-sm text-white/35 mb-6">Try these alternatives:</p>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-6">
            <div className="flex flex-col gap-3.5">
              {alternatives.map((alt) => (
                <div key={alt} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${ACCENT}15` }}>
                    <ArrowRight className="w-3 h-3" style={{ color: ACCENT }} />
                  </div>
                  <span className="text-[15px] text-white/70">{alt}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5} className="mt-14">
          <h2 className="font-display font-bold text-[22px] text-white tracking-tight mb-2">You're good if</h2>
          <p className="text-sm text-white/35 mb-6">Your upload is working when:</p>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6">
            <div className="flex flex-col gap-3.5">
              {successChecks.map((check) => (
                <div key={check} className="flex items-center gap-3">
                  <CircleCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-[15px] text-white/80">{check}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={6} className="mt-14">
          <h2 className="font-display font-bold text-[22px] text-white tracking-tight mb-2">Related problems</h2>
          <p className="text-sm text-white/35 mb-6">Having other issues? These might help:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedProblems.map((r) => (
              <Link
                key={r.slug}
                href={`/help/${r.slug}`}
                className="flex items-center justify-between gap-3 px-5 py-4 rounded-xl border border-white/[0.06] bg-white/[0.025] hover:border-primary/30 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span className="text-[15px] font-medium text-white/80 group-hover:text-white transition-colors">{r.label}</span>
                <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={7} className="mt-14">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 md:p-10 text-center">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-bold text-white text-xl mb-2">Still not working?</h3>
            <p className="text-sm text-white/40 mb-6 max-w-md mx-auto">Talk to our team — we'll help you fix this quickly so you can get back to work.</p>
            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-200">
              Contact Support
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
