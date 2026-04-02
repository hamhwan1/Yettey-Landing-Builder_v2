import { useState } from "react";
import { Link } from "wouter";
import {
  FolderOpen,
  Search,
  Upload,
  Plus,
  MoreVertical,
  Grid3X3,
  List,
  ChevronDown,
  ChevronRight,
  Settings,
  Wand2,
  Image,
  Video,
  X,
  LogIn,
} from "lucide-react";

const FOLDERS = [
  { name: "Coupang", count: 24 },
  { name: "Instagram", count: 18 },
  { name: "Naver", count: 32 },
  { name: "Shopify", count: 15 },
];

const FILES = [
  { name: "ProjectPlan_v1.0.jpg", type: "image" as const, color: "#E8DEF8" },
  { name: "ProjectPlan_v1.0.mp4", type: "video" as const, color: "#D1E4FF" },
  { name: "Brand_Guide_Final.jpg", type: "image" as const, color: "#FFE0B2" },
  { name: "Product_Demo.mp4", type: "video" as const, color: "#C8E6C9" },
  { name: "Campaign_Assets.jpg", type: "image" as const, color: "#F8BBD0" },
  { name: "Social_Reel_v2.mp4", type: "video" as const, color: "#B3E5FC" },
];

const SIDEBAR_ITEMS = [
  { icon: FolderOpen, label: "Asset", active: true, expandable: true },
];

const SIDEBAR_SUBITEMS = [
  { label: "Sub menu", active: true },
  { label: "Collections", active: false },
  { label: "Trash", active: false },
];

const SIDEBAR_BOTTOM = [
  { icon: Wand2, label: "Yettey Studio", expandable: true },
  { icon: Settings, label: "Settings", expandable: false },
];

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleProtectedAction = () => {
    setShowModal(true);
  };

  return (
    <div className="h-screen flex bg-white overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <aside className="w-[248px] border-r border-[#ededed] flex flex-col bg-white shrink-0">
        <div className="px-3 pt-6">
          <div className="flex items-center justify-between px-3 h-12">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#6366F1] flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">Y</span>
              </div>
              <span className="text-[16px] font-bold text-[#101010]">Yettey</span>
            </div>
          </div>
        </div>

        <div className="px-3 mt-4">
          <button
            onClick={handleProtectedAction}
            className="w-full h-9 rounded-lg bg-[#F5F4FF] border border-[#E5E7EB] flex items-center justify-center gap-2 text-[14px] font-medium text-[#6366F1] hover:bg-[#EEEDFF] transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            New Project
          </button>
        </div>

        <nav className="px-3 mt-8 flex-1">
          {SIDEBAR_ITEMS.map((item) => (
            <div key={item.label}>
              <div className="flex items-center gap-1 px-3 h-12 rounded cursor-pointer hover:bg-gray-50">
                <item.icon className="w-6 h-6 text-[#1a1d1f] stroke-[1.5]" />
                <span className="flex-1 text-[15px] font-semibold text-[#1a1d1f] tracking-[-0.15px]">
                  {item.label}
                </span>
                {item.expandable && <ChevronDown className="w-5 h-5 text-[#1a1d1f]" />}
              </div>
              <div className="ml-10 mt-1 space-y-0.5">
                {SIDEBAR_SUBITEMS.map((sub) => (
                  <div
                    key={sub.label}
                    className={`px-3 py-2.5 rounded-xl text-[15px] font-semibold tracking-[-0.15px] cursor-pointer ${
                      sub.active
                        ? "bg-[#EFEFEF] text-[#1a1d1f] shadow-[inset_0px_-2px_1px_0px_rgba(0,0,0,0.05),inset_0px_1px_1px_0px_white]"
                        : "text-[#1a1d1f] hover:bg-gray-50"
                    }`}
                  >
                    {sub.label}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-4 space-y-0.5">
            {SIDEBAR_BOTTOM.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-1 px-3 h-[45px] rounded cursor-pointer hover:bg-gray-50"
              >
                <item.icon className="w-6 h-6 text-[#101010] stroke-[1.5]" />
                <span className="flex-1 text-[14px] font-medium text-[#101010]">
                  {item.label}
                </span>
                {item.expandable && <ChevronRight className="w-5 h-5 text-[#101010] rotate-90" />}
              </div>
            ))}
          </div>
        </nav>

        <div className="px-3 pb-4 mt-auto">
          <div
            className="rounded-lg border border-[rgba(105,164,255,0.24)] p-3 flex flex-col gap-3"
            style={{
              backgroundImage:
                "linear-gradient(161deg, rgba(255,255,255,0.64) 0%, rgba(242,240,254,0.64) 100%), linear-gradient(90deg, #F2F0FE 0%, #F2F0FE 100%)",
            }}
          >
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-semibold text-[#101010]">⚡ Unlock More with Yettey</p>
              <p className="text-[12px] text-[#101010]">Upgrade your plan to access advanced tools</p>
            </div>
            <div className="flex flex-col gap-2">
              <div
                className="h-[10px] rounded overflow-hidden"
                style={{
                  backgroundImage:
                    "linear-gradient(179deg, rgba(255,255,255,0.64) 0%, rgba(201,195,251,0.64) 100%), linear-gradient(90deg, #C9C3FB, #C9C3FB)",
                }}
              >
                <div
                  className="h-full w-[96px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(178deg, rgba(255,255,255,0.64) 0%, rgba(62,72,230,0.64) 100%), linear-gradient(90deg, #3E01FF, #3E01FF)",
                  }}
                />
              </div>
              <p className="text-[12px] text-[#878787]">2,000/4,000</p>
            </div>
            <button
              onClick={handleProtectedAction}
              className="w-full h-9 rounded border border-[#6366F1] flex items-center justify-center text-[12px] font-medium text-white cursor-pointer"
              style={{
                backgroundImage:
                  "linear-gradient(176deg, rgba(255,255,255,0.64) 0%, rgba(62,72,230,0.64) 100%), linear-gradient(90deg, #3E01FF, #3E01FF)",
              }}
            >
              Upgrade Plan
            </button>
          </div>

          <div className="flex items-center gap-2 mt-4 px-2 py-2">
            <div className="w-8 h-8 rounded-full bg-[#E0E0E0] flex items-center justify-center text-[12px] font-semibold text-[#555]">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-[#101010] truncate">John Doe</p>
              <p className="text-[11px] text-[#878787] truncate">john@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-[64px] border-b border-[#ededed] flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-3 flex-1 max-w-[480px]">
            <div className="flex-1 h-10 rounded-lg border border-[#ededed] bg-white flex items-center px-3 gap-2">
              <Search className="w-4 h-4 text-[#878787]" />
              <input
                type="text"
                placeholder="Search assets..."
                className="flex-1 text-[14px] text-[#101010] placeholder:text-[#b0b0b0] outline-none bg-transparent"
                onClick={handleProtectedAction}
                readOnly
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleProtectedAction}
              className="h-9 px-4 rounded-lg bg-[#6366F1] text-white text-[13px] font-medium flex items-center gap-2 hover:bg-[#5558E6] transition-colors cursor-pointer"
            >
              <Upload className="w-4 h-4" />
              Upload
            </button>
            <button
              onClick={handleProtectedAction}
              className="h-9 px-4 rounded-lg border border-[#ededed] text-[13px] font-medium text-[#101010] flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              New Folder
            </button>
          </div>
        </header>

        <div className="flex items-center justify-between px-6 h-[52px] border-b border-[#f5f5f5] shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-semibold text-[#101010]">Assets</span>
            <span className="text-[12px] text-[#878787]">({FOLDERS.length} folders, {FILES.length} files)</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-[13px] text-[#555] hover:text-[#101010] cursor-pointer">
              Sort
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button className="flex items-center gap-1 text-[13px] text-[#555] hover:text-[#101010] cursor-pointer">
              Filter
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div className="flex border border-[#ededed] rounded-md overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 cursor-pointer ${viewMode === "grid" ? "bg-[#F5F4FF] text-[#6366F1]" : "text-[#878787] hover:bg-gray-50"}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 cursor-pointer ${viewMode === "list" ? "bg-[#F5F4FF] text-[#6366F1]" : "text-[#878787] hover:bg-gray-50"}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h3 className="text-[13px] font-medium text-[#878787] mb-3 uppercase tracking-wider">Folders</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {FOLDERS.map((folder) => (
                <div
                  key={folder.name}
                  onClick={handleProtectedAction}
                  className="border border-[#ededed] rounded-lg bg-white px-4 py-3 flex items-center gap-2 hover:border-[#d5d5d5] transition-colors cursor-pointer group"
                >
                  <FolderOpen className="w-6 h-6 text-[#6366F1] stroke-[1.5]" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-normal text-[#101010] truncate">{folder.name}</p>
                  </div>
                  <span className="text-[12px] text-[#b0b0b0]">{folder.count}</span>
                  <MoreVertical className="w-4 h-4 text-[#b0b0b0] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[13px] font-medium text-[#878787] mb-3 uppercase tracking-wider">Recent Files</h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {FILES.map((file) => (
                <div
                  key={file.name}
                  onClick={handleProtectedAction}
                  className="border border-[#ededed] rounded-lg bg-white overflow-hidden hover:border-[#d5d5d5] transition-colors cursor-pointer group"
                >
                  <div
                    className="h-[160px] relative flex items-center justify-center"
                    style={{ backgroundColor: file.color }}
                  >
                    {file.type === "video" && (
                      <div className="w-[50px] h-[50px] rounded-full bg-white/80 flex items-center justify-center shadow-lg">
                        <div className="w-0 h-0 border-l-[18px] border-l-[#6366F1] border-y-[11px] border-y-transparent ml-1.5" />
                      </div>
                    )}
                    {file.type === "image" && (
                      <Image className="w-10 h-10 text-white/60" />
                    )}
                  </div>
                  <div className="px-4 py-3 flex items-center gap-2">
                    {file.type === "image" ? (
                      <Image className="w-5 h-5 text-[#878787] shrink-0" />
                    ) : (
                      <Video className="w-5 h-5 text-[#878787] shrink-0" />
                    )}
                    <p className="flex-1 text-[14px] text-[#101010] truncate">{file.name}</p>
                    <MoreVertical className="w-4 h-4 text-[#b0b0b0] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-[400px] p-8 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-[#b0b0b0] hover:text-[#555] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#F5F4FF] flex items-center justify-center">
                <LogIn className="w-7 h-7 text-[#6366F1]" />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-[#101010] mb-1">Sign in to continue</h3>
                <p className="text-[14px] text-[#878787] leading-relaxed">
                  Create an account or log in to start<br />managing your assets with Yettey.
                </p>
              </div>
              <div className="flex gap-3 w-full mt-2">
                <Link
                  href="/login"
                  className="flex-1 h-11 rounded-lg bg-[#6366F1] text-white text-[14px] font-medium flex items-center justify-center hover:bg-[#5558E6] transition-colors"
                >
                  Login
                </Link>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 h-11 rounded-lg border border-[#ededed] text-[14px] font-medium text-[#555] hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
