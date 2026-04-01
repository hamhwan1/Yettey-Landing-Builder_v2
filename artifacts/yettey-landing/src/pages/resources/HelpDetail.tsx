import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link, useParams, useLocation } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const ACCENT = "#8B5CF6";

interface HelpArticle {
  title: string;
  explanation: string;
  steps: { title: string; desc: string }[];
  alternatives: string[];
  related: { label: string; slug: string }[];
}

const helpArticles: Record<string, HelpArticle> = {
  "cant-find-file": {
    title: "I can't find my file",
    explanation: "Files may be hard to locate if they were uploaded without tags or placed in a different project. Yettey's AI search can help you find any file instantly.",
    steps: [
      { title: "Use the search bar", desc: "Type any keyword, file name, or description. Yettey searches across all your content automatically." },
      { title: "Try visual search", desc: "Describe what the file looks like \u2014 'red background product photo' \u2014 and AI will find matching results." },
      { title: "Check filters", desc: "Use file type, upload date, or team member filters to narrow down results." },
      { title: "Browse recent uploads", desc: "Check the 'Recent' section on your dashboard for recently added files." },
    ],
    alternatives: ["Check if the file was uploaded to a different project", "Ask a team member if they moved or renamed the file", "Clear your search filters and try again"],
    related: [
      { label: "Upload failed", slug: "upload-failed" },
      { label: "Video processing stuck", slug: "video-processing-stuck" },
      { label: "Slow performance", slug: "slow-performance" },
    ],
  },
  "upload-failed": {
    title: "Upload failed",
    explanation: "Upload failures usually happen due to unsupported file formats, files exceeding size limits, or unstable internet connections.",
    steps: [
      { title: "Check your file format", desc: "Supported formats: MP4, MOV, JPG, PNG, GIF, PDF, PSD, AI, SVG. Other formats may not be accepted." },
      { title: "Check file size", desc: "Free plan: up to 500MB per file. Pro plan: up to 2GB per file. Ensure your file is within the limit." },
      { title: "Check your connection", desc: "A stable internet connection is required for uploads. Try switching to a wired connection if possible." },
      { title: "Retry the upload", desc: "Close the upload dialog, refresh the page, and try uploading again." },
    ],
    alternatives: ["Try compressing the file before uploading", "Use a different browser (Chrome recommended)", "Disable any VPN or firewall that may block uploads"],
    related: [
      { label: "I can't find my file", slug: "cant-find-file" },
      { label: "Video processing stuck", slug: "video-processing-stuck" },
      { label: "Slow performance", slug: "slow-performance" },
    ],
  },
  "video-processing-stuck": {
    title: "Video processing stuck",
    explanation: "Video processing depends on file size, length, and server load. Most videos process within 5 minutes, but larger files may take longer.",
    steps: [
      { title: "Wait a few minutes", desc: "Processing can take up to 10 minutes for large files. Check the progress indicator on your dashboard." },
      { title: "Check video format", desc: "Supported formats: MP4, MOV, AVI, WebM. Other formats may cause processing issues." },
      { title: "Check video length", desc: "Videos longer than 60 minutes may take significantly longer. Consider splitting into shorter segments." },
      { title: "Re-upload if stuck", desc: "If processing hasn't started after 15 minutes, delete the file and upload again." },
    ],
    alternatives: ["Convert the video to MP4 before uploading", "Reduce video resolution to 1080p for faster processing", "Try uploading during off-peak hours"],
    related: [
      { label: "Upload failed", slug: "upload-failed" },
      { label: "Slow performance", slug: "slow-performance" },
      { label: "I can't find my file", slug: "cant-find-file" },
    ],
  },
  "out-of-credits": {
    title: "I ran out of credits",
    explanation: "When credits reach zero, content generation features (video clips, AI images, etc.) are paused. Your existing content remains accessible.",
    steps: [
      { title: "Check your credit balance", desc: "Go to Settings \u2192 Billing to see your current credit balance and usage history." },
      { title: "Purchase additional credits", desc: "Buy a Credits Pack or Credits Mega Pack from the Billing page. Credits are added instantly." },
      { title: "Upgrade your plan", desc: "Higher plans include more monthly credits. Consider upgrading if you consistently run out." },
      { title: "Wait for monthly reset", desc: "Credits reset automatically at the start of each billing cycle." },
    ],
    alternatives: ["Check if unused credits rolled over from the previous month", "Contact support for enterprise credit options", "Review which features consume the most credits"],
    related: [
      { label: "Billing issue", slug: "billing-issue" },
      { label: "Upload failed", slug: "upload-failed" },
    ],
  },
  "invite-team": {
    title: "Invite team members",
    explanation: "You can invite team members to collaborate on your workspace. Each member can be assigned a role that controls their level of access.",
    steps: [
      { title: "Go to Settings \u2192 Team", desc: "Navigate to your workspace settings and click on the Team tab." },
      { title: "Click 'Invite Members'", desc: "Enter the email address of the person you want to invite." },
      { title: "Select a role", desc: "Choose Admin (full access), Editor (create and edit), or Viewer (view only)." },
      { title: "Send the invitation", desc: "The invited person will receive an email with a link to join your workspace." },
    ],
    alternatives: ["Check if the person already has an account", "Resend the invitation if they didn't receive it", "Contact support if you've reached your team member limit"],
    related: [
      { label: "Billing issue", slug: "billing-issue" },
      { label: "I can't find my file", slug: "cant-find-file" },
    ],
  },
  "billing-issue": {
    title: "Billing issue",
    explanation: "Billing issues can include failed payments, incorrect charges, or problems with plan changes. Most issues can be resolved from your account settings.",
    steps: [
      { title: "Check your payment method", desc: "Go to Settings \u2192 Billing \u2192 Payment Method. Ensure your card is valid and has sufficient funds." },
      { title: "Review your invoice", desc: "Download your latest invoice to verify charges. All invoices are available in the Billing section." },
      { title: "Update your plan", desc: "If you need to change your plan, go to Settings \u2192 Billing \u2192 Change Plan." },
      { title: "Contact support", desc: "If the issue persists, reach out to our support team with your account email and invoice details." },
    ],
    alternatives: ["Try a different payment method", "Check if your bank is blocking the transaction", "Clear your browser cache and try again"],
    related: [
      { label: "I ran out of credits", slug: "out-of-credits" },
      { label: "Invite team members", slug: "invite-team" },
    ],
  },
  "upload-errors": {
    title: "Upload errors",
    explanation: "Upload errors can occur due to file format restrictions, size limits, or network issues. Follow these steps to resolve the problem.",
    steps: [
      { title: "Verify the file format", desc: "Ensure your file is in a supported format: MP4, MOV, JPG, PNG, GIF, PDF, PSD, AI, or SVG." },
      { title: "Check the file size", desc: "Free plans support up to 500MB per file, Pro plans up to 2GB." },
      { title: "Test your internet connection", desc: "A stable connection is required. Try switching from Wi-Fi to a wired connection." },
      { title: "Clear browser cache and retry", desc: "Sometimes cached data causes conflicts. Clear your cache and attempt the upload again." },
    ],
    alternatives: ["Compress the file using an online tool before uploading", "Try a different browser", "Disable browser extensions that might interfere"],
    related: [
      { label: "Upload failed", slug: "upload-failed" },
      { label: "Video processing stuck", slug: "video-processing-stuck" },
    ],
  },
  "missing-files": {
    title: "Missing files",
    explanation: "If you can't locate a file in your workspace, it may have been moved, renamed, or uploaded to a different project.",
    steps: [
      { title: "Search by keyword", desc: "Use the workspace search bar and try different keywords related to the file content or name." },
      { title: "Check all projects", desc: "Switch between projects in the sidebar to see if the file was uploaded elsewhere." },
      { title: "Use date filters", desc: "Filter by upload date to narrow down when the file was added." },
      { title: "Check the trash", desc: "Deleted files may be recoverable from the trash bin within 30 days." },
    ],
    alternatives: ["Ask a team member if they moved or deleted the file", "Check your browser download history for the original file", "Contact support if you believe files were lost"],
    related: [
      { label: "I can't find my file", slug: "cant-find-file" },
      { label: "Slow performance", slug: "slow-performance" },
    ],
  },
  "slow-performance": {
    title: "Slow performance",
    explanation: "Slow performance can be caused by browser cache buildup, too many open tabs, or large workspace sizes. Try these optimization steps.",
    steps: [
      { title: "Clear your browser cache", desc: "Go to browser settings and clear cached images and files. This often resolves performance issues." },
      { title: "Close unused tabs", desc: "Having many tabs open consumes memory. Close tabs you're not actively using." },
      { title: "Try a different browser", desc: "Chrome is recommended for the best performance with Yettey." },
      { title: "Check your internet speed", desc: "Slow connections can affect load times. Try speed-testing your connection." },
    ],
    alternatives: ["Disable browser extensions temporarily", "Restart your browser or device", "Try accessing from a different network"],
    related: [
      { label: "Video processing stuck", slug: "video-processing-stuck" },
      { label: "Upload failed", slug: "upload-failed" },
    ],
  },
  "login-issues": {
    title: "Login issues",
    explanation: "Login problems can be caused by incorrect credentials, expired sessions, or browser cookie settings.",
    steps: [
      { title: "Check your email and password", desc: "Make sure you're using the correct email address and that Caps Lock is off." },
      { title: "Reset your password", desc: "Click 'Forgot password?' on the login page to receive a reset link via email." },
      { title: "Clear cookies and cache", desc: "Expired cookies can prevent login. Clear your browser data and try again." },
      { title: "Check for service status", desc: "Visit our status page to confirm there are no ongoing outages." },
    ],
    alternatives: ["Try logging in from a different browser or device", "Check your spam folder for the password reset email", "Disable any ad blockers or privacy extensions"],
    related: [
      { label: "Slow performance", slug: "slow-performance" },
      { label: "Billing issue", slug: "billing-issue" },
    ],
  },
};

export default function HelpDetailPage() {
  const params = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const slug = params.slug || "";
  const detail = helpArticles[slug];

  if (!detail) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 pt-40 pb-20 text-center">
          <h1 className="text-2xl font-display font-bold text-foreground mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-6">The help article you're looking for doesn't exist.</p>
          <Link href="/help" className="text-sm font-medium text-primary hover:underline">
            Back to Help Center
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
          <Link href="/help" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Help Center
          </Link>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-red-500/15">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-red-500/15 text-red-400">
              Troubleshooting
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{detail.title}</h1>
          <p className="text-foreground/70 text-base mb-8">{detail.explanation}</p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2}>
          <h2 className="font-display font-bold text-xl text-foreground mb-4">Step-by-step solution</h2>
          <div className="flex flex-col gap-3 mb-10">
            {detail.steps.map((step, i) => (
              <div key={step.title} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-mono font-bold text-muted-foreground w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${ACCENT}15` }}>
                    <CheckCircle className="w-5 h-5" style={{ color: ACCENT }} />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{step.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}>
          <h2 className="font-display font-bold text-xl text-foreground mb-4">If the issue continues</h2>
          <div className="rounded-2xl border border-border bg-card p-6 mb-10">
            <div className="flex flex-col gap-3">
              {detail.alternatives.map((alt) => (
                <div key={alt} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${ACCENT}20` }}>
                    <ArrowRight className="w-3 h-3" style={{ color: ACCENT }} />
                  </div>
                  <span className="text-sm text-foreground/80">{alt}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4}>
          <h2 className="font-display font-bold text-xl text-foreground mb-4">Related articles</h2>
          <div className="flex flex-wrap gap-2 mb-10">
            {detail.related.map((r) => (
              <Link
                key={r.slug}
                href={`/help/${r.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-medium text-foreground/70 hover:text-foreground hover:border-primary/30 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                {r.label}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5}>
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <h3 className="font-display font-bold text-foreground text-lg mb-2">Still not working?</h3>
            <p className="text-sm text-muted-foreground mb-5">Our team typically responds within a few hours.</p>
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
