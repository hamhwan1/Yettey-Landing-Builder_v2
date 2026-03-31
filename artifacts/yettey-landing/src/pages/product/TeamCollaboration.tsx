import { ProductPageLayout, ProductPageData } from "@/components/product/ProductPageLayout";

const data: ProductPageData = {
  badge: "Team Collaboration",
  badgeColor: "#10B981",
  heroTitle: "Manage, find, and reuse your content",
  heroHighlight: "— instantly with AI.",
  heroDesc: "Bring your team together, manage content in one place, and instantly turn it into usable assets.",
  ctaText: "Start collaborating",
  ctaHref: "/pricing",
  whatItDoes:
    "Store everything in one place. Find anything instantly. Turn content into new assets — without the chaos.",
  accentColor: "#10B981",
  features: [
    {
      icon: "👥",
      title: "Work Together Seamlessly",
      desc: "Collaborate with your team in real time — with clear roles, feedback, and shared access.",
    },
    {
      icon: "⚡",
      title: "Turn Content into New Assets",
      desc: "Instantly reuse and transform your content with AI — no extra tools needed.",
    },
    {
      icon: "📁",
      title: "All Content in One Place",
      desc: "Store, organize, and access everything in a single workspace — always up to date.",
    },
    {
      icon: "💬",
      title: "Feedback Where Work Happens",
      desc: "Leave comments directly on assets — no more back-and-forth in Slack or email.",
    },
  ],
  steps: [
    { step: "📧", label: "Upload", desc: "Bring all your content into one place." },
    { step: "🔗", label: "Organize", desc: "Structure your assets and projects clearly." },
    { step: "✏️", label: "Collaborate", desc: "Work with your team and leave feedback directly." },
    { step: "📢", label: "Use & Deliver", desc: "Access, share, and reuse content anytime." },
  ],
  previewLabel: "Team Workspace Dashboard",
  previewImage: "/images/team-collaboration-ui.png",
};

export default function TeamCollaboration() {
  return <ProductPageLayout data={data} />;
}
