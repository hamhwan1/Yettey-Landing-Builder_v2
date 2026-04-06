import { Link, useLocation } from "wouter";
import {
  FolderOpen,
  Plus,
  ChevronDown,
  ChevronRight,
  Settings,
  Wand2,
  ExternalLink,
} from "lucide-react";

type SidebarProps = {
  onProtectedAction: () => void;
};

const ASSET_SUBITEMS = [
  { label: "All Assets", href: "/projects/assets/all-assets" },
  { label: "Collections", href: "/projects/assets/collections" },
  { label: "Trash", href: "/projects/assets/trash" },
];

const STUDIO_SUBITEMS = [
  { label: "Image", href: "/projects/yetteystudio/image" },
  { label: "Shortform (Vpick)", href: "https://app.vpick.ai/project", external: true },
];

export default function Sidebar({ onProtectedAction }: SidebarProps) {
  const [location] = useLocation();

  return (
    <aside className="w-[248px] border-r border-[#ededed] flex flex-col bg-white shrink-0">
      <div className="px-3 pt-6">
        <div className="flex items-center justify-between px-3 h-12">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#6366F1] flex items-center justify-center">
              <span className="text-white text-[11px] font-bold">Y</span>
            </div>
            <span className="text-[16px] font-bold text-[#101010]">Yettey</span>
          </Link>
        </div>
      </div>

      <div className="px-3 mt-4">
        <button
          onClick={onProtectedAction}
          className="w-full h-9 rounded-lg bg-[#F5F4FF] border border-[#E5E7EB] flex items-center justify-center gap-2 text-[14px] font-medium text-[#6366F1] hover:bg-[#EEEDFF] transition-colors cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          New Project
        </button>
      </div>

      <nav className="px-3 mt-8 flex-1">
        <div>
          <div className="flex items-center gap-1 px-3 h-12 rounded cursor-pointer hover:bg-gray-50">
            <FolderOpen className="w-6 h-6 text-[#1a1d1f] stroke-[1.5]" />
            <span className="flex-1 text-[15px] font-semibold text-[#1a1d1f] tracking-[-0.15px]">
              Assets
            </span>
            <ChevronDown className="w-5 h-5 text-[#1a1d1f]" />
          </div>
          <div className="ml-10 mt-1 space-y-0.5">
            {ASSET_SUBITEMS.map((sub) => {
              const isActive = location === sub.href;
              return (
                <Link
                  key={sub.label}
                  href={sub.href}
                  className={`block px-3 py-2.5 rounded-xl text-[15px] font-semibold tracking-[-0.15px] cursor-pointer transition-colors ${
                    isActive
                      ? "bg-[#F5F4FF] text-[#6366F1] shadow-[inset_0px_-2px_1px_0px_rgba(99,102,241,0.08),inset_0px_1px_1px_0px_rgba(255,255,255,0.8)]"
                      : "text-[#1a1d1f] hover:bg-gray-50"
                  }`}
                >
                  {sub.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-1 px-3 h-12 rounded cursor-pointer hover:bg-gray-50">
            <Wand2 className="w-6 h-6 text-[#1a1d1f] stroke-[1.5]" />
            <span className="flex-1 text-[15px] font-semibold text-[#1a1d1f] tracking-[-0.15px]">
              Yettey Studio
            </span>
            <ChevronDown className="w-5 h-5 text-[#1a1d1f]" />
          </div>
          <div className="ml-10 mt-1 space-y-0.5">
            {STUDIO_SUBITEMS.map((sub) => {
              if (sub.external) {
                return (
                  <a
                    key={sub.label}
                    href={sub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-[15px] font-semibold tracking-[-0.15px] cursor-pointer transition-colors text-[#1a1d1f] hover:bg-gray-50"
                  >
                    {sub.label}
                    <ExternalLink className="w-3.5 h-3.5 text-[#b0b0b0]" />
                  </a>
                );
              }
              const isActive = location === sub.href;
              return (
                <Link
                  key={sub.label}
                  href={sub.href}
                  className={`block px-3 py-2.5 rounded-xl text-[15px] font-semibold tracking-[-0.15px] cursor-pointer transition-colors ${
                    isActive
                      ? "bg-[#F5F4FF] text-[#6366F1] shadow-[inset_0px_-2px_1px_0px_rgba(99,102,241,0.08),inset_0px_1px_1px_0px_rgba(255,255,255,0.8)]"
                      : "text-[#1a1d1f] hover:bg-gray-50"
                  }`}
                >
                  {sub.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-2">
          <div className="flex items-center gap-1 px-3 h-[45px] rounded cursor-pointer hover:bg-gray-50">
            <Settings className="w-6 h-6 text-[#101010] stroke-[1.5]" />
            <span className="flex-1 text-[14px] font-medium text-[#101010]">
              Settings
            </span>
          </div>
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
            <p className="text-[12px] text-[#101010]">Upgrade your plan to access advanced features</p>
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
            onClick={onProtectedAction}
            className="w-full h-9 rounded border border-[#6366F1] flex items-center justify-center text-[12px] font-medium text-white cursor-pointer"
            style={{
              backgroundImage:
                "linear-gradient(176deg, rgba(255,255,255,0.64) 0%, rgba(62,72,230,0.64) 100%), linear-gradient(90deg, #3E01FF, #3E01FF)",
            }}
          >
            Upgrade Plan
          </button>
        </div>

        <div className="flex items-center gap-2 mt-4 px-2 py-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
          <div className="w-8 h-8 rounded-full bg-[#E0E0E0] flex items-center justify-center text-[12px] font-semibold text-[#555]">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium text-[#101010] truncate">John Doe</p>
            <p className="text-[11px] text-[#878787] truncate">john@example.com</p>
          </div>
          <ChevronRight className="w-4 h-4 text-[#b0b0b0]" />
        </div>
      </div>
    </aside>
  );
}
