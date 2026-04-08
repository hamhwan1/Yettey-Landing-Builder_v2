import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  X,
  Check,
  Wand2,
  Sparkles,
  Zap,
  Clock,
  Users,
  Image,
  Scissors,
  Maximize,
  Layers,
  Download,
  MousePointerClick,
  PenTool,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const ACCENT = "#EC4899";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

export default function GuideAiEditing() {
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
              <Wand2 className="w-6 h-6" style={{ color: ACCENT }} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: `${ACCENT}15`, color: ACCENT }}>
              AI Editing
            </span>
          </motion.div>

          <motion.h1
            variants={fade} initial="hidden" animate="show" custom={2}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight"
          >
            Stop waiting for designers.
          </motion.h1>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={3}
            className="text-xl text-foreground/70 mb-3 max-w-xl font-medium"
          >
            Edit content instantly {"\u2014"} without design skills.
          </motion.p>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={4}
            className="text-sm text-muted-foreground mb-2 max-w-lg italic"
          >
            AI image editing and digital asset management system for fast content editing and automation
          </motion.p>

          <motion.p
            variants={fade} initial="hidden" animate="show" custom={5}
            className="text-xs text-foreground/40 mb-8"
          >
            Built for teams that need faster content production
          </motion.p>

          <motion.div variants={fade} initial="hidden" animate="show" custom={6}>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Edit content instantly
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-6">
            Editing content shouldn't be this hard
          </h2>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-4">
              {[
                { text: "Waiting for designers to make simple edits", detail: "A 30-second background removal takes 2 days because the design queue is full." },
                { text: "Can't remove backgrounds or resize without Photoshop", detail: "You need a $600/year tool and years of training just to crop an image properly." },
                { text: "Simple changes take hours instead of minutes", detail: "Resize for Instagram, remove a background, adjust colors \u2014 each one becomes a separate task." },
                { text: "Design bottlenecks slow down content production", detail: "Your campaign is ready. Your copy is ready. But you're waiting on design. Again." },
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
            <p className="font-display font-bold text-xl text-foreground mb-2">You don't need a designer for every small change.</p>
            <p className="font-display font-bold text-xl" style={{ color: ACCENT }}>
              You need faster tools.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">The solution</h2>
          <p className="text-foreground/70 text-base leading-relaxed mb-2">
            Yettey lets anyone edit content instantly using AI.
          </p>
          <p className="text-foreground/60 text-sm leading-relaxed">
            Remove backgrounds, enhance images, resize for any platform, and batch-process assets {"\u2014"} all with one click. No Photoshop. No design skills. No waiting. Your team edits content directly, and designers focus on what actually needs them.
          </p>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-2">How it works</h2>
          <p className="text-muted-foreground text-sm mb-8">One click. Instant result. No skills needed.</p>

          <div className="flex flex-col gap-3">
            {[
              { icon: Image, title: "Select your asset \u2014 image, video, or file", desc: "Pick any content from your library. Images, videos, documents \u2014 anything you need to edit." },
              { icon: Sparkles, title: "Choose an AI action \u2014 remove background, enhance, resize", desc: "One menu with every edit you need. Background removal, color enhancement, format conversion, and more." },
              { icon: MousePointerClick, title: "One-click edit \u2014 AI processes instantly", desc: "Click once. AI handles the rest. No layers, no masks, no export settings. Just results." },
              { icon: Download, title: "Download or share immediately", desc: "Your edited content is ready in seconds. Download, share, or publish directly from Yettey." },
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
              Try it now {"\u2014"} edit with AI
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-16 mt-16">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">What you'll see inside Yettey</h2>
          <p className="text-muted-foreground text-sm mb-8">Professional editing {"\u2014"} without professional tools.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Scissors, title: "One-click background removal", desc: "Select any image, click remove. Clean, transparent background in under 2 seconds." },
              { icon: Sparkles, title: "AI-powered image enhancement", desc: "Auto-adjust brightness, contrast, and color. Make any photo look professional instantly." },
              { icon: Layers, title: "Batch editing for multiple assets", desc: "Resize 50 images at once. Remove backgrounds from an entire folder. One action, all done." },
              { icon: Maximize, title: "Smart resize for any platform", desc: "Instagram, LinkedIn, web banner \u2014 select the format and Yettey resizes intelligently." },
              { icon: PenTool, title: "Quick crop and adjust", desc: "Crop, rotate, and adjust without opening a separate tool. Everything happens inline." },
              { icon: Wand2, title: "AI object removal", desc: "Remove unwanted objects from images. AI fills the gap naturally. No manual work needed." },
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
              { title: "Edit content in seconds", desc: "What used to take hours now takes one click." },
              { title: "No design skills required", desc: "Anyone on your team can edit like a pro." },
              { title: "Handle multiple assets at once", desc: "Batch process dozens of files simultaneously." },
              { title: "Remove repetitive editing tasks", desc: "AI handles the boring work. You focus on creative decisions." },
              { title: "No more design bottlenecks", desc: "Marketing edits content directly. Designers work on what matters." },
              { title: "Consistent quality every time", desc: "AI produces professional results, no matter who clicks the button." },
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
                  "Waiting days for design edits",
                  "Complex tools for simple changes",
                  "Slow workflow blocked by designers",
                  "High cost per edit",
                  "Only designers can edit content",
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
                  "One-click AI edits in seconds",
                  "Anyone can edit content instantly",
                  "Instant results, no queue",
                  "No design dependency",
                  "Professional quality from every team member",
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
              { icon: Zap, title: "Eliminate design bottlenecks", desc: "Your team edits content directly. No more waiting in the design queue." },
              { icon: Clock, title: "Edit content in seconds, not days", desc: "What took hours now takes one click. AI handles the complexity." },
              { icon: Users, title: "Empower every team member", desc: "Marketing, sales, ops \u2014 anyone can edit content without design skills." },
              { icon: Sparkles, title: "Reduce production delays", desc: "Faster edits mean faster campaigns. Ship content when it's ready, not when design is free." },
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
              Yettey is an AI-powered digital asset management (DAM) system that enables fast and simple content editing. It allows teams to remove backgrounds, enhance images, and automate editing workflows, making it a powerful alternative to traditional design tools. Whether you need AI image editing for marketing assets, content editing tools that anyone can use, or a media asset management platform with built-in editing capabilities, Yettey eliminates the gap between having content and being able to use it.
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
              Stop waiting. Start creating.
            </h2>
            <p className="text-foreground/60 mb-8 max-w-md mx-auto">
              Edit content instantly {"\u2014"} no design skills needed.
            </p>
            <Link href="/pricing">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white hover:-translate-y-1 transition-all duration-200 shadow-xl"
                style={{ backgroundColor: ACCENT, boxShadow: `0 8px 24px ${ACCENT}40` }}
              >
                Edit your content now
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
