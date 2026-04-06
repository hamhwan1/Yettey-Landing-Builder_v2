import { useState, useEffect } from "react";
import {
  ChevronDown,
  Sparkles,
  Globe,
  ImageIcon,
  FileText,
  ShoppingBag,
  Megaphone,
  CalendarDays,
  MoreHorizontal,
} from "lucide-react";
import Sidebar from "@/components/projects/Sidebar";
import SignInModal from "@/components/projects/SignInModal";

const CATEGORIES = [
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Product photos, banners, and lifestyle shots",
    color: "#EDE9FE",
    iconColor: "#7C3AED",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    desc: "Ad creatives, social posts, and brand assets",
    color: "#DBEAFE",
    iconColor: "#3B82F6",
  },
  {
    icon: CalendarDays,
    title: "Events",
    desc: "Invitations, posters, and promotional graphics",
    color: "#FCE7F3",
    iconColor: "#EC4899",
  },
  {
    icon: MoreHorizontal,
    title: "Other",
    desc: "Custom images for any use case",
    color: "#F0FDF4",
    iconColor: "#22C55E",
  },
];

const EXPLORE_PROMPTS = [
  {
    prompt: "A sleek product shot of wireless earbuds on a marble surface with soft studio lighting",
    gradient: "from-[#667eea] to-[#764ba2]",
  },
  {
    prompt: "Minimalist e-commerce banner with pastel gradient background and floating sneakers",
    gradient: "from-[#f093fb] to-[#f5576c]",
  },
  {
    prompt: "Professional headshot portrait with blurred office background, natural warm lighting",
    gradient: "from-[#4facfe] to-[#00f2fe]",
  },
  {
    prompt: "Flat lay of cosmetics and beauty products arranged on pink background, top view",
    gradient: "from-[#43e97b] to-[#38f9d7]",
  },
  {
    prompt: "Modern interior design living room with large windows and minimalist furniture",
    gradient: "from-[#fa709a] to-[#fee140]",
  },
  {
    prompt: "Aerial view of a tropical beach with turquoise water and white sand",
    gradient: "from-[#a18cd1] to-[#fbc2eb]",
  },
];

export default function StudioImage() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [promptText, setPromptText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [webSearch, setWebSearch] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProtectedAction = () => {
    setShowSignInModal(true);
  };

  return (
    <div className="h-screen flex bg-white overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <Sidebar onProtectedAction={handleProtectedAction} />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 40%, #A78BFA 70%, #C4B5FD 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)",
            }}
          />
          <div className="relative px-8 pt-12 pb-10 text-center">
            <h1 className="text-[32px] font-bold text-white mb-2 tracking-[-0.5px]">
              Create your image
            </h1>
            <p className="text-[15px] text-white/70">
              Start by creating your first image above
            </p>
          </div>
        </div>

        <div className="px-8 -mt-5 relative z-10">
          <div className="bg-white rounded-2xl shadow-lg border border-[#ededed] p-5">
            <div className="relative mb-4">
              <textarea
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                placeholder="Type your idea or drop an image to start"
                rows={3}
                className="w-full px-4 py-3.5 rounded-xl border border-[#ededed] bg-[#FAFAFA] text-[14px] text-[#101010] placeholder:text-[#b0b0b0] outline-none resize-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/10 transition-all"
              />
            </div>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <button className="h-9 px-3 rounded-lg border border-[#ededed] bg-white text-[13px] text-[#555] flex items-center gap-1.5 hover:bg-gray-50 transition-colors cursor-pointer">
                  <Sparkles className="w-3.5 h-3.5 text-[#6366F1]" />
                  Flash
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <button className="h-9 px-3 rounded-lg border border-[#ededed] bg-white text-[13px] text-[#555] flex items-center gap-1.5 hover:bg-gray-50 transition-colors cursor-pointer">
                  <ImageIcon className="w-3.5 h-3.5 text-[#878787]" />
                  1K 1024×1024
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setWebSearch(!webSearch)}
                    className={`relative w-9 h-5 rounded-full transition-colors cursor-pointer ${
                      webSearch ? "bg-[#6366F1]" : "bg-[#E0E0E0]"
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
                        webSearch ? "translate-x-4" : "translate-x-0.5"
                      }`}
                    />
                  </button>
                  <span className="text-[13px] text-[#555] flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5" />
                    Web Search
                  </span>
                </div>
              </div>
              <button
                onClick={handleProtectedAction}
                className="h-10 px-6 rounded-xl bg-[#6366F1] text-white text-[14px] font-medium flex items-center gap-2 hover:bg-[#5558E6] transition-colors cursor-pointer shadow-md shadow-[#6366F1]/20"
              >
                <Sparkles className="w-4 h-4" />
                Generate
              </button>
            </div>
          </div>
        </div>

        <div className="px-8 mt-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(selectedCategory === cat.title ? null : cat.title)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedCategory === cat.title
                    ? "border-[#6366F1] bg-[#F5F4FF] shadow-sm"
                    : "border-[#ededed] bg-white hover:border-[#d5d5d5] hover:shadow-sm"
                }`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: cat.color }}
                >
                  <cat.icon className="w-5 h-5" style={{ color: cat.iconColor }} />
                </div>
                <h4 className="text-[14px] font-semibold text-[#101010] mb-1">{cat.title}</h4>
                <p className="text-[12px] text-[#878787] leading-relaxed">{cat.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="px-8 mt-10">
          <h3 className="text-[18px] font-semibold text-[#101010] mb-2">Recent items</h3>
          <div className="flex flex-col items-center justify-center py-14 border border-dashed border-[#ededed] rounded-xl bg-[#FAFAFA]">
            <div className="w-16 h-16 rounded-2xl bg-[#F0EEFF] flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-[#A5B4FC]" />
            </div>
            <p className="text-[16px] font-semibold text-[#101010] mb-1">No files yet</p>
            <p className="text-[13px] text-[#878787]">Start by creating your first image above</p>
          </div>
        </div>

        <div className="px-8 mt-10 pb-10">
          <h3 className="text-[18px] font-semibold text-[#101010] mb-1">Explore prompts</h3>
          <p className="text-[13px] text-[#878787] mb-5">
            Each generation may produce different results.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {EXPLORE_PROMPTS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setPromptText(item.prompt)}
                className="group relative h-[160px] rounded-xl overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform group-hover:scale-105`} />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-end p-4">
                  <p className="text-[12px] text-white/90 leading-relaxed line-clamp-3 text-left">
                    {item.prompt}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      <SignInModal open={showSignInModal} onClose={() => setShowSignInModal(false)} />
    </div>
  );
}
