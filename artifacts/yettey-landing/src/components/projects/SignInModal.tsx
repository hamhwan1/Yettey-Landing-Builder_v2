import { Link } from "wouter";
import { X, LogIn } from "lucide-react";

type SignInModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function SignInModal({ open, onClose }: SignInModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-[400px] p-8 relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
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
              onClick={onClose}
              className="flex-1 h-11 rounded-lg border border-[#ededed] text-[14px] font-medium text-[#555] hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
