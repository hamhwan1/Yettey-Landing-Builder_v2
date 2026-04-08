import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Plus, Minus } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

interface Plan {
  name: string;
  badge?: string;
  price: number;
  target: string;
  highlights: string[];
  cta: string;
  features: string[];
  highlighted: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: 49,
    target: "Create your first viral content fast",
    highlights: [
      "Up to 1,800 credits",
      "4 projects",
      "2 users",
    ],
    cta: "Start Free",
    highlighted: false,
    features: [
      "AI image generation: Unlimited",
      "Upload size: Up to 5GB",
      "Download size: Up to 1.5GB",
      "Storage: 8GB",
      "Short-form generation",
      "Video analysis (scene + person detection)",
    ],
  },
  {
    name: "Growth",
    badge: "Most Popular",
    price: 99,
    target: "Turn content into a scalable system",
    highlights: [
      "Up to 4,000 credits",
      "10 projects",
      "3 users",
    ],
    cta: "Start Creating",
    highlighted: true,
    features: [
      "AI image generation: Unlimited",
      "Upload size: Up to 5GB",
      "Download size: Up to 3GB",
      "Storage: 20GB",
      "Short-form generation",
      "Video analysis (scene + person detection)",
    ],
  },
  {
    name: "Pro",
    price: 249,
    target: "Run your entire content operation",
    highlights: [
      "Up to 11,000 credits",
      "Unlimited projects",
      "10 users",
    ],
    cta: "Scale Your Content",
    highlighted: false,
    features: [
      "AI image generation: Unlimited",
      "Upload size: Up to 5GB",
      "Download size: Up to 5GB",
      "Storage: 80GB",
      "Short-form generation",
      "Video analysis (scene + person detection)",
    ],
  },
];

const creditPacks = [
  { name: "Credits Pack", price: "$20", credits: "700 Credits" },
  { name: "Credits Mega Pack", price: "$40", credits: "1,400 Credits" },
];

const faqs = [
  {
    q: "Can I change my plan later?",
    a: "Yes. You can upgrade or downgrade at any time. Changes take effect at the start of the next billing cycle. Your content stays safe during the transition.",
  },
  {
    q: "What happens if I run out of credits?",
    a: "Content generation will pause until you top up. You can purchase additional credit packs at any time without changing your plan. Your existing content remains accessible.",
  },
  {
    q: "How does billing work?",
    a: "You're billed monthly or yearly depending on your plan. Yearly billing saves you 20%. You can cancel anytime — no long-term contracts.",
  },
  {
    q: "Do I need to understand credits to start?",
    a: "You're billed monthly or yearly depending on your plan. Yearly billing saves you 20%. You can cancel anytime — no long-term contracts.",
  },
  {
    q: "Do unused credits roll over?",
    a: "No. Just create content — credits are used automatically.",
  },
  {
    q: "How many team members can I add?",
    a: "Starter supports 2 users, Growth supports 3, and Pro supports up to 10. Need more? Contact us for a custom plan.",
  },
];

function PlanCard({ plan, billing, index }: { plan: Plan; billing: "monthly" | "yearly"; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const yearlyMultiplier = billing === "yearly" ? 0.8 : 1;
  const displayPrice = Math.round(plan.price * yearlyMultiplier);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      custom={index}
      viewport={{ once: true }}
      className={cn(
        "relative rounded-2xl border p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
        plan.highlighted
          ? "bg-gradient-to-b from-primary/20 to-primary/5 border-primary shadow-xl shadow-primary/20"
          : "bg-card border-border hover:border-primary/30"
      )}
    >
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-lg shadow-primary/30 whitespace-nowrap">
            {plan.badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <p className="text-sm font-medium text-muted-foreground mb-3">{plan.name}</p>
        <div className="flex items-end gap-1.5 mb-2">
          <span className="text-5xl font-display font-bold text-foreground">${displayPrice}</span>
          <span className="text-base text-muted-foreground mb-1.5">/mo</span>
        </div>
        {billing === "yearly" && (
          <p className="text-xs text-primary font-medium">Save 20% with yearly billing</p>
        )}
        <p className="text-[13px] text-muted-foreground mt-3 leading-relaxed">{plan.target}</p>
      </div>

      <div className="flex flex-col gap-2.5 mb-6">
        {plan.highlights.map((h) => (
          <div key={h} className="flex items-center gap-3">
            <div className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
              plan.highlighted ? "bg-primary/25 text-primary" : "bg-white/10 text-primary"
            )}>
              <Check className="w-3 h-3" />
            </div>
            <span className="text-sm font-semibold text-foreground">{h}</span>
          </div>
        ))}
      </div>

      <button
        className={cn(
          "w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-200",
          plan.highlighted
            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
            : "bg-white/5 text-foreground border border-border hover:bg-white/10 hover:border-primary/40"
        )}
      >
        {plan.cta}
      </button>

      <div className="mt-6 pt-6 border-t border-border/50">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors w-full"
        >
          {expanded ? "Hide features" : "View all features"}
          <span className="ml-auto">
            {expanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </span>
        </button>
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ overflow: "hidden" }}
        >
          <div className="flex flex-col gap-2.5 pt-4">
            {plan.features.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-white/[0.06] text-muted-foreground">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span className="text-[13px] text-muted-foreground">{f}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      custom={index * 0.5}
      viewport={{ once: true }}
      className="border-b border-border last:border-0"
    >
      <button
        className="w-full py-5 flex items-center justify-between gap-4 text-left group"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{q}</span>
        <span className="shrink-0 w-5 h-5 rounded-full border border-border flex items-center justify-center text-muted-foreground">
          {open ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ overflow: "hidden" }}
      >
        <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative pt-40 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="hidden" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-6">
              <Zap className="w-3 h-3" />
              Pricing
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-5 leading-tight"
          >
            Simple pricing.{" "}
            <span className="text-primary">
              Built for creators.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-lg text-muted-foreground mb-10"
          >
            Start free. Scale when you grow.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="inline-flex items-center gap-1 p-1 rounded-xl bg-card border border-border">
            <button
              onClick={() => setBilling("monthly")}
              className={cn(
                "px-5 py-2.5 rounded-lg text-sm font-semibold transition-all",
                billing === "monthly"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={cn(
                "px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2",
                billing === "yearly"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Yearly
              <span className={cn(
                "text-xs px-2 py-0.5 rounded-full font-bold",
                billing === "yearly"
                  ? "bg-white/20 text-white"
                  : "bg-green-500/20 text-green-400"
              )}>
                -20%
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} billing={billing} index={i} />
          ))}
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
            Need more credits?{" "}
            <span className="text-primary">
              Scale anytime.
            </span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-5">
          {creditPacks.map((pack, i) => (
            <motion.div
              key={pack.name}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
              className="rounded-2xl bg-card border border-border p-8 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-4"
            >
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{pack.name}</p>
                <p className="text-3xl font-display font-bold text-foreground">{pack.price}</p>
              </div>
              <p className="text-sm font-semibold text-foreground">{pack.credits}</p>
              <button className="w-full py-3 rounded-xl text-sm font-semibold bg-white/5 border border-border hover:bg-primary/10 hover:border-primary/40 text-foreground transition-all duration-200">
                Buy Credits
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 max-w-3xl mx-auto px-4">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground">Everything you need to know about pricing.</p>
        </motion.div>
        <div className="bg-card border border-border rounded-2xl px-6 divide-y-0">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="hidden" />
        </div>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="relative max-w-2xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Start creating content{" "}
            <span className="text-primary">
              in minutes
            </span>
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">Speed. Scale. Simplicity.</p>
          <Link href="/">
            <button className="px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base hover:-translate-y-0.5 transition-all duration-200">
              Start Free
            </button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
