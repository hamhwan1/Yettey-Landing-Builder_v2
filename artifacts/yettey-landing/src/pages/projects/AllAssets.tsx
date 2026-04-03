import { useState } from "react";
import {
  FolderOpen,
  Search,
  Upload,
  Plus,
  MoreVertical,
  Grid3X3,
  List,
  ChevronDown,
  Image,
  Video,
} from "lucide-react";
import Sidebar from "@/components/projects/Sidebar";
import SignInModal from "@/components/projects/SignInModal";

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

export default function AllAssets() {
  const [showModal, setShowModal] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleProtectedAction = () => {
    setShowModal(true);
  };

  return (
    <div className="h-screen flex bg-white overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <Sidebar onProtectedAction={handleProtectedAction} />

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
            <span className="text-[14px] font-semibold text-[#101010]">All Assets</span>
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

      <SignInModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
