import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import Sidebar from "@/components/projects/Sidebar";
import SignInModal from "@/components/projects/SignInModal";

export default function TrashPage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-screen flex bg-white overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <Sidebar onProtectedAction={() => setShowModal(true)} />

      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-[64px] border-b border-[#ededed] flex items-center px-6 shrink-0">
          <div className="flex items-center gap-1.5 text-[14px]">
            <span className="text-[#878787]">Assets</span>
            <span className="text-[#878787]">/</span>
            <span className="text-[#101010] font-medium">Trash</span>
          </div>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="w-16 h-16 rounded-2xl bg-[#F5F5F5] flex items-center justify-center mb-6">
            <Trash2 className="w-8 h-8 text-[#b0b0b0]" />
          </div>
          <h3 className="text-[22px] font-semibold text-[#101010] mb-2">Trash is empty</h3>
          <p className="text-[14px] text-[#878787] text-center">
            Deleted assets will appear here for 30 days before being permanently removed.
          </p>
        </div>
      </main>

      <SignInModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
