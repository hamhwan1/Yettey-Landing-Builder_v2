import { ProductPageLayout, ProductPageData } from "@/components/product/ProductPageLayout";

const data: ProductPageData = {
  badge: "Asset Management",
  badgeColor: "#6366F1",
  heroTitle: "Work with all your media",
  heroHighlight: "in one place.",
  heroDesc: "Organize, find, and use your content — all in one system.",
  ctaText: "Start managing your assets",
  ctaHref: "/pricing",
  whatItDoes: (
    <>
      All your media — organized and ready to use.
      <br />
      Find anything in seconds.
    </>
  ),
  accentColor: "#6366F1",
  features: [
    {
      icon: "🔍",
      title: "Smart Search",
      desc:
        <>
          Find anything instantly. 
          <br />
          Search your media by content, context, or keywords — not just filenames.
        </>,
      image: "/images/feature-smart-search.png",
    },
    {
      icon: "📂",
      title: "Organize your media",
      desc: "Organize your media your way Group files into projects, campaigns, or collections that fit your workflow.",
      image: "/images/feature-organize.png",
    },
    {
      icon: "🔄",
      title: "Duplicate",
      desc:
        <>
          Keep your library clean.
          <br />
          Detect duplicates automatically and reduce clutter.
        </>,
      image: "/images/feature-duplicate.png",
    },
    {
      icon: "⚡",
      title: "Preview",
      desc:
        <>
          Preview instantly.
          <br />
          View images, videos, and files without downloading anything.
        </>,
      image: "/images/feature-preview.png",
    },
  ],
  steps: [
    { step: "📤", label: "Upload", desc: "Bring all your media into one place.", image: "/images/step-upload.png" },
    { step: "🗂️", label: "Organize", desc: "Keep everything structured and easy to manage.", image: "/images/step-organize.png" },
    { step: "🔎", label: "Search", desc: "Find anything instantly when you need it.", image: "/images/step-search.png" },
    { step: "✅", label: "Use", desc: "Share, download, or use your media anywhere.", image: "/images/step-use.png" },
  ],
  previewLabel: "Asset Library Dashboard",
  previewImage: "/images/asset-management-ui.png",
};

export default function AssetManagement() {
  return <ProductPageLayout data={data} />;
}
