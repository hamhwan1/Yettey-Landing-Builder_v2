import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, navigate] = useLocation();

  const handleLogin = () => {
    navigate("/projects");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      <div className="flex-1 flex items-center justify-center px-6 py-12 lg:py-0 bg-[#F8F9FB]">
        <div className="w-full max-w-[448px] flex flex-col gap-[48px]">
          <div className="flex flex-col gap-[10px] items-center">
            <div className="w-[40px] h-[40px] rounded-full bg-[#6155f5] flex items-center justify-center">
              <span className="text-white text-[20px] font-bold leading-none tracking-[-0.5px]" style={{ fontFamily: "Inter, sans-serif" }}>Y</span>
            </div>
            <div className="flex flex-col gap-[10px] items-center w-full">
              <h1 className="text-[37px] font-semibold text-[#171717] tracking-[-0.4px] leading-[48px] text-center" style={{ fontFamily: "Inter, sans-serif" }}>
                Welcome back.
              </h1>
              <div className="flex items-center justify-center gap-[3px]">
                <span className="text-[14px] text-[#171717] leading-[20px] tracking-[-0.024px]" style={{ fontFamily: "Inter, sans-serif" }}>
                  You're new here?
                </span>
                <Link href="/signup" className="text-[14px] font-medium leading-[20px] bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent" style={{ fontFamily: "Inter, sans-serif" }}>
                  Create an account.
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[24px] w-full">
            <div className="flex flex-col gap-[16px] w-full">
              <button onClick={handleLogin} className="w-full h-[48px] rounded-[8px] border border-[#e5e5ea] bg-white flex items-center px-[18px] gap-[12px] hover:bg-gray-50 transition-colors cursor-pointer">
                <img src={`${import.meta.env.BASE_URL}assets/login/google-icon.svg`} alt="Google" className="w-[24px] h-[24px] shrink-0" />
                <span className="flex-1 text-[16px] font-semibold text-[#5c5f6e] tracking-[-0.48px] leading-[1.5] text-center" style={{ fontFamily: "Lexend, sans-serif" }}>
                  Continue with Google
                </span>
                <div className="w-[24px]" />
              </button>
              <button onClick={handleLogin} className="w-full h-[48px] rounded-[8px] border border-[#e5e5ea] bg-white flex items-center px-[14px] gap-[8px] hover:bg-gray-50 transition-colors cursor-pointer">
                <img src={`${import.meta.env.BASE_URL}assets/login/naver-icon.svg`} alt="NAVER" className="w-[33px] h-[32px] shrink-0" />
                <span className="flex-1 text-[16px] font-semibold text-[#5c5f6e] tracking-[-0.48px] leading-[1.5] text-center" style={{ fontFamily: "Lexend, sans-serif" }}>
                  Continue with NAVER
                </span>
                <div className="w-[33px]" />
              </button>
              <button onClick={handleLogin} className="w-full h-[48px] rounded-[8px] border border-[#e5e5ea] bg-white flex items-center px-[17px] gap-[12px] hover:bg-gray-50 transition-colors cursor-pointer">
                <img src={`${import.meta.env.BASE_URL}assets/login/kakao-icon.svg`} alt="Kakao" className="w-[24px] h-[24px] shrink-0" />
                <span className="flex-1 text-[16px] font-bold text-[#5c5f6e] leading-normal text-center" style={{ fontFamily: "Lexend, sans-serif" }}>
                  Continue with Kakao
                </span>
                <div className="w-[24px]" />
              </button>
            </div>

            <div className="flex items-center gap-[12px] py-[4px] w-full">
              <div className="flex-1 h-px bg-[#e5e5ea]" />
              <span className="text-[12px] font-medium text-[#4a4c4f] leading-[18px] text-center whitespace-nowrap" style={{ fontFamily: "Manrope, sans-serif" }}>
                or continue with email
              </span>
              <div className="flex-1 h-px bg-[#e5e5ea]" />
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="flex flex-col gap-[16px] w-full">
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-col gap-[4px] pt-[3px]">
                  <label className="text-[14px] font-medium text-[#171717] leading-[20px]" style={{ fontFamily: "Inter, sans-serif" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full h-[38px] px-[11px] rounded-[6px] bg-white text-[14px] text-[#171717] placeholder:text-[#a3a3a3] leading-[17px] outline-none shadow-[0px_0px_0px_1px_rgba(163,163,163,0.3)] focus:shadow-[0px_0px_0px_2px_#6155f5] transition-shadow"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>
                <div className="flex flex-col gap-[4px] pt-[3px]">
                  <label className="text-[14px] font-medium text-[#171717] leading-[20px]" style={{ fontFamily: "Inter, sans-serif" }}>
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full h-[38px] px-[11px] rounded-[6px] bg-white text-[14px] text-[#171717] placeholder:text-[#a3a3a3] leading-[17px] outline-none shadow-[0px_0px_0px_1px_rgba(163,163,163,0.3)] focus:shadow-[0px_0px_0px_2px_#6155f5] transition-shadow"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>
                <div className="flex items-center justify-center h-[20px] gap-[2px]">
                  <span className="text-[12px] text-[#171717] leading-[20px] text-center" style={{ fontFamily: "Inter, sans-serif" }}>
                    Forgot your password?
                  </span>
                  <Link href="/reset-password" className="text-[12px] text-[#6366f1] leading-[20px] text-center" style={{ fontFamily: "Inter, sans-serif" }}>
                    Reset it here.
                  </Link>
                </div>
              </div>

              <button type="submit" className="w-full h-[36px] rounded-[6px] bg-[#6155f5] flex items-center justify-center gap-[8px] px-[16px] py-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.1)] hover:bg-[#5648e5] active:bg-[#4a3dd4] transition-colors cursor-pointer">
                <span className="text-[14px] font-medium text-white leading-[20px]" style={{ fontFamily: "Inter, sans-serif" }}>
                  Login
                </span>
              </button>
            </form>

            <div className="flex flex-col items-center w-full">
              <p className="text-[12px] text-[#404040] leading-[20px] text-center" style={{ fontFamily: "Inter, sans-serif" }}>
                By logging in, I agree to the{" "}
                <Link href="/terms" className="text-[12px] font-bold text-[#6366f1] leading-[20px]">Terms of service</Link>
                {" "}and{" "}
                <Link href="/privacy" className="text-[12px] font-bold text-[#6366f1] leading-[20px]">Privacy policy.</Link>
                {" "}I also agree to
              </p>
              <p className="text-[12px] text-[#404040] leading-[20px] text-center" style={{ fontFamily: "Inter, sans-serif" }}>
                receive emails and communication relating to Yettey services and offers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex relative lg:w-[56%] min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[#6155f5]" />
        <img
          src={`${import.meta.env.BASE_URL}assets/login/login-bg.jpg`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: "130px" }}>
          <div className="w-[616px] relative pl-[24px]">
            <span className="absolute left-[-20px] top-[-48px] text-[160px] font-medium text-white/30 leading-[160px] select-none" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
              &ldquo;
            </span>
            <h2 className="text-[42px] font-bold text-white leading-[43px] tracking-[0.4px] mb-[36px] relative" style={{ fontFamily: "Inter, -apple-system, sans-serif" }}>
              Turn your content into<br />reusable assets
            </h2>
            <ul className="list-disc pl-[24px] space-y-[4px] relative">
              <li className="text-white">
                <span className="text-[30px] font-bold text-white leading-[36px] tracking-[1.2px]" style={{ fontFamily: "Inter, sans-serif" }}>Upload once.</span>
              </li>
              <li className="text-white">
                <span className="text-[30px] font-bold text-white leading-[36px] tracking-[1.2px]" style={{ fontFamily: "Inter, sans-serif" }}>Find anything instantly.</span>
              </li>
              <li className="text-white">
                <span className="text-[30px] font-bold text-white leading-[36px] tracking-[1.2px]" style={{ fontFamily: "Inter, sans-serif" }}>Reuse it everywhere.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
