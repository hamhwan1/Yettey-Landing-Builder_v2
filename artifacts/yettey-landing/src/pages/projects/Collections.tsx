import { useState, useEffect, useCallback } from "react";
import {
  Search,
  Grid3X3,
  List,
  ChevronDown,
  Plus,
  SlidersHorizontal,
  X,
  FolderOpen,
  MoreVertical,
} from "lucide-react";
import Sidebar from "@/components/projects/Sidebar";
import SignInModal from "@/components/projects/SignInModal";

const BASE = import.meta.env.BASE_URL;

type Collection = {
  id: string;
  name: string;
  description: string;
  assetCount: number;
  createdAt: string;
};

export default function Collections() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [newCollectionName, setNewCollectionName] = useState("");
  const [newCollectionDesc, setNewCollectionDesc] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleProtectedAction = () => {
    setShowSignInModal(true);
  };

  const handleCreateCollection = useCallback(() => {
    if (!newCollectionName.trim()) return;
    const newCollection: Collection = {
      id: Date.now().toString(),
      name: newCollectionName.trim(),
      description: newCollectionDesc.trim(),
      assetCount: 0,
      createdAt: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
    setCollections((prev) => [...prev, newCollection]);
    setNewCollectionName("");
    setNewCollectionDesc("");
    setShowCreateModal(false);
  }, [newCollectionName, newCollectionDesc]);

  const filteredCollections = collections.filter((c) =>
    c.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const sortedCollections = [...filteredCollections].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "date") return b.id.localeCompare(a.id);
    return 0;
  });

  const isEmpty = collections.length === 0;
  const noResults = !isEmpty && sortedCollections.length === 0;

  return (
    <div className="h-screen flex bg-white overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <Sidebar onProtectedAction={handleProtectedAction} />

      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-[64px] border-b border-[#ededed] flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-1.5 text-[14px]">
            <span className="text-[#878787]">Assets</span>
            <span className="text-[#878787]">/</span>
            <span className="text-[#101010] font-medium">Collections</span>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="h-9 px-4 rounded-lg bg-[#6366F1] text-white text-[13px] font-medium flex items-center gap-2 hover:bg-[#5558E6] transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Create Collection
          </button>
        </header>

        <div className="px-6 pt-6 pb-4 shrink-0">
          <p className="text-[14px] text-[#878787] leading-relaxed">
            Organize your assets into collections for different use cases.
            <br />
            Editing files in a collection won't affect the original assets.
          </p>
        </div>

        {!isEmpty && (
          <div className="flex items-center justify-between px-6 h-[52px] border-b border-[#f5f5f5] shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                  className="h-9 px-3 rounded-lg border border-[#ededed] text-[13px] text-[#555] flex items-center gap-1.5 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {filterType === "all" ? "All" : filterType === "mine" ? "Created by me" : "Shared"}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {showFilterDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-[180px] bg-white border border-[#ededed] rounded-xl shadow-lg py-1 z-20">
                    {[
                      { value: "all", label: "All" },
                      { value: "mine", label: "Created by me" },
                      { value: "shared", label: "Shared" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { setFilterType(opt.value); setShowFilterDropdown(false); }}
                        className={`w-full px-3 py-2 text-left text-[13px] hover:bg-gray-50 cursor-pointer ${
                          filterType === opt.value ? "text-[#6366F1] font-medium" : "text-[#555]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="h-9 w-[260px] rounded-lg border border-[#ededed] bg-white flex items-center px-3 gap-2">
                <Search className="w-4 h-4 text-[#878787]" />
                <input
                  type="text"
                  placeholder="Search collections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-[13px] text-[#101010] placeholder:text-[#b0b0b0] outline-none bg-transparent"
                />
              </div>
              <button className="h-9 px-3 rounded-lg border border-[#ededed] text-[13px] text-[#555] flex items-center gap-1.5 hover:bg-gray-50 transition-colors cursor-pointer">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </button>
            </div>
            <div className="flex items-center gap-3">
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
              <div className="relative">
                <button
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="flex items-center gap-1 text-[13px] text-[#555] hover:text-[#101010] cursor-pointer"
                >
                  Sort
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {showSortDropdown && (
                  <div className="absolute top-full right-0 mt-1 w-[160px] bg-white border border-[#ededed] rounded-xl shadow-lg py-1 z-20">
                    {[
                      { value: "name", label: "Name" },
                      { value: "date", label: "Date created" },
                      { value: "updated", label: "Last updated" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { setSortBy(opt.value); setShowSortDropdown(false); }}
                        className={`w-full px-3 py-2 text-left text-[13px] hover:bg-gray-50 cursor-pointer ${
                          sortBy === opt.value ? "text-[#6366F1] font-medium" : "text-[#555]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          {isEmpty ? (
            <div className="flex-1 flex flex-col items-center justify-center h-full px-6">
              <img
                src={`${BASE}assets/empty-collection.png`}
                alt="No collections"
                className="w-[220px] h-auto mb-8 opacity-90"
              />
              <h3 className="text-[22px] font-semibold text-[#101010] mb-2">No collections yet</h3>
              <p className="text-[14px] text-[#878787] mb-8 text-center">
                Create your first collection to organize assets
              </p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="h-11 px-6 rounded-xl bg-[#6366F1] text-white text-[14px] font-medium flex items-center gap-2 hover:bg-[#5558E6] transition-all cursor-pointer shadow-lg shadow-[#6366F1]/20 hover:shadow-[#6366F1]/30"
              >
                <Plus className="w-5 h-5" />
                Create Collection
              </button>
            </div>
          ) : noResults ? (
            <div className="flex-1 flex flex-col items-center justify-center h-full px-6">
              <Search className="w-12 h-12 text-[#d5d5d5] mb-4" />
              <h3 className="text-[18px] font-semibold text-[#101010] mb-1">No results found</h3>
              <p className="text-[14px] text-[#878787]">
                Try a different search term
              </p>
            </div>
          ) : (
            <div className="p-6">
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {sortedCollections.map((collection) => (
                  <div
                    key={collection.id}
                    onClick={handleProtectedAction}
                    className="border border-[#ededed] rounded-xl bg-white p-4 hover:border-[#d5d5d5] hover:shadow-sm transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F5F4FF] flex items-center justify-center">
                        <FolderOpen className="w-5 h-5 text-[#6366F1]" />
                      </div>
                      <MoreVertical className="w-4 h-4 text-[#b0b0b0] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className="text-[14px] font-medium text-[#101010] mb-1 truncate">{collection.name}</h4>
                    {collection.description && (
                      <p className="text-[12px] text-[#878787] mb-2 line-clamp-2">{collection.description}</p>
                    )}
                    <div className="flex items-center gap-3 text-[12px] text-[#b0b0b0]">
                      <span>{collection.assetCount} assets</span>
                      <span>{collection.createdAt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <SignInModal open={showSignInModal} onClose={() => setShowSignInModal(false)} />

      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-[440px] p-0 relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <h3 className="text-[18px] font-semibold text-[#101010]">Create Collection</h3>
              <button
                onClick={() => { setShowCreateModal(false); setNewCollectionName(""); setNewCollectionDesc(""); }}
                className="text-[#b0b0b0] hover:text-[#555] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 pb-2 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-[#101010]">
                  Collection Name <span className="text-[#EF4444]">*</span>
                </label>
                <input
                  type="text"
                  value={newCollectionName}
                  onChange={(e) => setNewCollectionName(e.target.value)}
                  placeholder="e.g. Instagram Campaign"
                  className="h-10 px-3 rounded-lg border border-[#ededed] text-[14px] text-[#101010] placeholder:text-[#b0b0b0] outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/10 transition-all"
                  autoFocus
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-[#101010]">
                  Description <span className="text-[#b0b0b0] font-normal">(optional)</span>
                </label>
                <textarea
                  value={newCollectionDesc}
                  onChange={(e) => setNewCollectionDesc(e.target.value)}
                  placeholder="What is this collection for?"
                  rows={3}
                  className="px-3 py-2.5 rounded-lg border border-[#ededed] text-[14px] text-[#101010] placeholder:text-[#b0b0b0] outline-none resize-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/10 transition-all"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#f5f5f5] mt-4">
              <button
                onClick={() => { setShowCreateModal(false); setNewCollectionName(""); setNewCollectionDesc(""); }}
                className="h-9 px-4 rounded-lg border border-[#ededed] text-[13px] font-medium text-[#555] hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateCollection}
                disabled={!newCollectionName.trim()}
                className="h-9 px-4 rounded-lg bg-[#6366F1] text-white text-[13px] font-medium hover:bg-[#5558E6] transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {(showFilterDropdown || showSortDropdown) && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => { setShowFilterDropdown(false); setShowSortDropdown(false); }}
        />
      )}
    </div>
  );
}
