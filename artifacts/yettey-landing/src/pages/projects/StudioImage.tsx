import { useState, useEffect } from "react";
import {
  ChevronDown,
  Sparkles,
  Globe,
} from "lucide-react";
import Sidebar from "@/components/projects/Sidebar";
import SignInModal from "@/components/projects/SignInModal";

const BASE = import.meta.env.BASE_URL;

const CATEGORIES = [
  {
    title: "E-commerce",
    bg: "#F9A8D4",
    pattern: "🛍️ 📦 🏷️ 💳 🎁 ✨",
  },
  {
    title: "Marketing",
    bg: "#FDE68A",
    pattern: "💡 🎯 📊 ❤️ 🎨 🚀",
  },
  {
    title: "Events",
    bg: "#D8B4FE",
    pattern: "🎈 🎊 🎁 🎵 🎪 ⭐",
  },
  {
    title: "Other",
    bg: "#A7F3D0",
    pattern: "📐 🖼️ ▶️ 📷 🎞️ 🔧",
  },
];

const EXPLORE_PROMPTS = [
  {
    prompt: "A majestic castle on a cliff overlooking a misty valley at sunrise",
    gradient: "from-[#94a3b8] to-[#64748b]",
    emoji: "🏰",
  },
  {
    prompt: "A curious cat sitting in a sunlit garden surrounded by wildflowers",
    gradient: "from-[#f59e0b] to-[#d97706]",
    emoji: "🐱",
  },
  {
    prompt: "Professional headshot portrait with blurred office background, warm lighting",
    gradient: "from-[#6366f1] to-[#4f46e5]",
    emoji: "👤",
  },
  {
    prompt: "A vibrant sunflower field stretching to the horizon under golden light",
    gradient: "from-[#eab308] to-[#ca8a04]",
    emoji: "🌻",
  },
  {
    prompt: "A sleek product shot of wireless earbuds on a marble surface",
    gradient: "from-[#8b5cf6] to-[#7c3aed]",
    emoji: "🎧",
  },
  {
    prompt: "Minimalist e-commerce banner with pastel gradient and floating sneakers",
    gradient: "from-[#f472b6] to-[#ec4899]",
    emoji: "👟",
  },
  {
    prompt: "Aerial view of a tropical beach with turquoise water and white sand",
    gradient: "from-[#06b6d4] to-[#0891b2]",
    emoji: "🏖️",
  },
  {
    prompt: "Modern interior design living room with large windows and minimal furniture",
    gradient: "from-[#a78bfa] to-[#8b5cf6]",
    emoji: "🏠",
  },
];

export default function StudioImage() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [promptText, setPromptText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [webSearch, setWebSearch] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProtectedAction = () => {
    setShowSignInModal(true);
  };

  return (
    <div className="h-screen flex bg-[#F5F3FF] overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <Sidebar onProtectedAction={handleProtectedAction} />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <div className="relative">
          <div
            className="absolute inset-0 h-[220px]"
            style={{
              background: "linear-gradient(135deg, #6366F1 0%, #7C3AED 30%, #8B5CF6 50%, #A78BFA 70%, #93C5FD 100%)",
            }}
          />
          <div
            className="absolute inset-0 h-[220px]"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 15% 30%, rgba(255,255,255,0.15) 0%, transparent 50%),
                radial-gradient(ellipse at 85% 60%, rgba(255,255,255,0.1) 0%, transparent 40%),
                radial-gradient(ellipse at 50% 80%, rgba(99,102,241,0.3) 0%, transparent 60%),
                url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
              `,
            }}
          />

          <div className="relative pt-12 pb-28 text-center">
            <h1 className="text-[36px] font-bold text-white mb-3 tracking-[-0.5px]">
              Create your image
            </h1>
            <p className="text-[16px] text-white/70">
              Start by creating your first image above
            </p>
          </div>

          <div className="relative -mt-16 z-10 mx-auto w-full max-w-[1200px] px-10">
            <div
              className="bg-white rounded-2xl border border-[#e5e5e5] overflow-hidden"
              style={{ boxShadow: "0 8px 32px rgba(99, 102, 241, 0.10), 0 2px 8px rgba(0,0,0,0.06)" }}
            >
              <div className="px-6 pt-5 pb-4">
                <textarea
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  placeholder="Type your idea or drop an image to start"
                  rows={2}
                  className="w-full text-[15px] text-[#101010] placeholder:text-[#b0b0b0] outline-none bg-transparent resize-none leading-relaxed"
                />
              </div>
              <div className="flex items-center justify-between px-6 py-3 border-t border-[#f0f0f0]">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#878787]" />
                    <span className="text-[13px] text-[#555] font-medium">Model:</span>
                    <button className="h-8 px-3 rounded-md border border-[#e5e5e5] bg-white text-[13px] text-[#101010] flex items-center gap-1.5 hover:bg-gray-50 cursor-pointer transition-colors">
                      Flash
                      <ChevronDown className="w-3 h-3 text-[#878787]" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] text-[#555] font-medium">Resolution:</span>
                    <button className="h-8 px-3 rounded-md border border-[#e5e5e5] bg-white text-[13px] text-[#101010] flex items-center gap-1.5 hover:bg-gray-50 cursor-pointer transition-colors">
                      1K (1024×1024)
                      <ChevronDown className="w-3 h-3 text-[#878787]" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setWebSearch(!webSearch)}
                      className={`relative w-10 h-[22px] rounded-full transition-colors cursor-pointer ${
                        webSearch ? "bg-[#6366F1]" : "bg-[#D1D5DB]"
                      }`}
                    >
                      <div
                        className={`absolute top-[3px] w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
                          webSearch ? "translate-x-[22px]" : "translate-x-[3px]"
                        }`}
                      />
                    </button>
                    <span className="text-[13px] text-[#555] flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" />
                      Web Search
                    </span>
                  </div>
                  <button
                    onClick={handleProtectedAction}
                    className="h-9 px-6 rounded-lg bg-[#6366F1] text-white text-[13px] font-semibold flex items-center gap-2 hover:bg-[#5558E6] transition-colors cursor-pointer shadow-md shadow-[#6366F1]/20"
                  >
                    <Sparkles className="w-4 h-4" />
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1200px] px-10 mt-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(selectedCategory === cat.title ? null : cat.title)}
                className={`relative h-[110px] rounded-2xl overflow-hidden text-left transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.title
                    ? "ring-2 ring-[#6366F1] ring-offset-2 scale-[0.98]"
                    : "hover:shadow-lg hover:scale-[1.02]"
                }`}
                style={{ backgroundColor: cat.bg }}
              >
                <div className="absolute inset-0 flex items-center justify-end pr-3 text-[28px] opacity-25 select-none leading-none tracking-widest">
                  {cat.pattern}
                </div>
                <div className="relative p-4">
                  <h4 className="text-[15px] font-bold text-[#1a1d1f]">{cat.title}</h4>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1200px] px-10 mt-12">
          <h3 className="text-[20px] font-bold text-[#101010] mb-2">Recent items</h3>
          <div className="flex flex-col items-center justify-center py-14">
            <img
              src={`${BASE}assets/empty-collection.png`}
              alt="No files"
              className="w-[200px] h-auto mb-4 opacity-90"
            />
            <p className="text-[16px] text-[#555]">No files to display yet.</p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1200px] px-10 mt-8 pb-12">
          <h3 className="text-[20px] font-bold text-[#101010] mb-1">Explore prompts</h3>
          <p className="text-[13px] text-[#878787] mb-6">
            Each generation may produce different results.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {EXPLORE_PROMPTS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setPromptText(item.prompt)}
                className="group relative h-[140px] rounded-xl overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors" />
                <div className="absolute top-3 right-3 text-[28px] opacity-60 select-none">
                  {item.emoji}
                </div>
                <div className="absolute inset-0 flex items-end p-3.5">
                  <p className="text-[11px] text-white/90 leading-relaxed line-clamp-2 text-left font-medium">
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
