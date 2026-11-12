import { useState } from "react";
import { Network, Cloud, SquareTerminal, LogIn } from "lucide-react";

/* faint decorative tile in the bottom-right corner */
function SwirlTile() {
  return (
    <div className="pointer-events-none absolute bottom-[150px] right-[175px] hidden h-[290px] w-[290px] overflow-hidden rounded-2xl bg-[#17151c] opacity-80 xl:block">
      <svg viewBox="0 0 290 290" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="sw" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6b5a8c" />
            <stop offset="100%" stopColor="#2c2a38" />
          </linearGradient>
        </defs>
        {Array.from({ length: 28 }).map((_, i) => (
          <ellipse
            key={i}
            cx="145"
            cy="145"
            rx={30 + i * 2.6}
            ry={14 + i * 1.5}
            transform={`rotate(${-25 + i * 2.2} 145 145)`}
            fill="none"
            stroke="url(#sw)"
            strokeWidth="0.6"
            strokeOpacity="0.45"
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#131218]" />
    </div>
  );
}


/* kill browser-native invalid/focus/autofill outlines (Firefox red glow, Chrome autofill, spellcheck squiggle) */
const NO_RED_CSS = `
  input, input:invalid, input:required, input:focus, input:focus-visible,
  input:-moz-ui-invalid, input:user-invalid {
    box-shadow: none !important;
    outline: none !important;
    text-decoration: none !important;
  }
  input:-webkit-autofill {
    -webkit-text-fill-color: #f4f4f5;
    -webkit-box-shadow: 0 0 0 1000px #0f0e14 inset !important;
    caret-color: #f4f4f5;
  }
`;

// inline styles so no global CSS / browser default can add lines around the inputs
const inputStyle = {
  border: "1px solid #2c2a31",
  background: "#0f0e14",
  boxShadow: "none",
  outline: "none",
  WebkitAppearance: "none",
  appearance: "none",
};
const inputClass =
  "h-12 w-full rounded-lg px-5 text-[17px] text-zinc-100 placeholder:text-zinc-600";

const socialClass =
  "flex h-12 items-center justify-center gap-3 rounded-lg border border-[#33313a] bg-[#2a292f] " +
  "text-sm font-semibold uppercase tracking-wide text-zinc-200 transition hover:bg-[#323137]";

export default function Login() {
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    defaultValues: { email: "", password: "", remember: false },
  });

  const onSubmit = async (data) => {
    // replace with your API call
    await new Promise((r) => setTimeout(r, 800));
    console.log("Login payload:", data);
    setDone(true);
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#131218] text-zinc-100"
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{NO_RED_CSS}</style>

      {/* soft radial background glows, same as the design */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 14%, rgba(62,58,120,0.28) 0, rgba(62,58,120,0.10) 18%, transparent 34%)," +
            "radial-gradient(circle at 5% 82%, rgba(62,58,120,0.28) 0, rgba(62,58,120,0.10) 14%, transparent 28%)",
        }}
      />

      <SwirlTile />

      <div className="relative flex flex-col items-center px-4 pb-16 pt-16 sm:pt-[150px]">
        {/* ---------- card ---------- */}
        <div className="w-full max-w-[500px] rounded-xl border border-white/10 bg-[#1e1d22] px-9 pb-10 pt-9 shadow-2xl shadow-black/40">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-[54px] w-[54px] items-center justify-center rounded-xl bg-[#6b4fa8]">
              <Network className="h-7 w-7 text-violet-200" strokeWidth={1.6} />
            </div>
            <h1 className="mt-5 text-[28px] font-semibold tracking-tight">Synthetix AI</h1>
            <p className="mt-2 text-[17px] text-zinc-300">Sign in to your workspace</p>
          </div>

          {/* social */}
          <div className="mt-9 grid grid-cols-2 gap-[18px]">
            <button type="button" className={socialClass}>
              <Cloud className="h-6 w-6 text-zinc-300" strokeWidth={1.5} /> Google
            </button>
            <button type="button" className={socialClass}>
              <SquareTerminal className="h-6 w-6 text-zinc-300" strokeWidth={1.5} /> GitHub
            </button>
          </div>

          {/* divider */}
          <div className="my-9 flex items-center gap-5">
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-sm text-zinc-300">or continue with email</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* email */}
            <label htmlFor="email" className="mb-2.5 block px-1 text-[13px] font-semibold uppercase tracking-wider text-zinc-300">
              Email address
            </label>
            <input
              id="email"
              type="email"
              spellCheck={false}
              autoComplete="email"
              placeholder="name@company.com"
              className={inputClass}
              style={inputStyle}
              {...register("email", {
                required: "Email address is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" },
              })}
            />
            {errors.email && (
              <p role="alert" className="mt-2 px-1 text-sm text-zinc-400">
                {errors.email.message}
              </p>
            )}

            {/* password */}
            <div className="mb-2.5 mt-7 flex items-center justify-between px-1">
              <label htmlFor="password" className="text-[13px] font-semibold uppercase tracking-wider text-zinc-300">
                Password
              </label>
              <a href="/forgot-password" className="text-sm text-violet-300 hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              spellCheck={false}
              autoComplete="current-password"
              placeholder="••••••••"
              className={inputClass}
              style={inputStyle}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Password must be at least 8 characters" },
              })}
            />
            {errors.password && (
              <p role="alert" className="mt-2 px-1 text-sm text-zinc-400">
                {errors.password.message}
              </p>
            )}

            {/* remember */}
            <label className="mt-6 flex cursor-pointer items-center gap-3 px-1 text-[15px] text-zinc-300">
              <input
                type="checkbox"
                className="h-[18px] w-[18px] cursor-pointer appearance-none rounded border border-[#2c2a31] bg-[#0f0e14] outline-none transition
                           checked:border-violet-300 checked:bg-violet-300 checked:bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%232a0f5c%22 stroke-width=%223.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M5 12l5 5 9-10%22/></svg>')]"
                {...register("remember")}
              />
              Stay signed in
            </label>

            {/* submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-7 flex h-[59px] w-full items-center justify-center gap-3 rounded-lg bg-[#6a4fa6] text-lg font-medium text-violet-200
                         transition hover:brightness-110 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Signing in…" : "Sign In"}
              {!isSubmitting && <LogIn className="h-5 w-5" strokeWidth={1.8} />}
            </button>

            {done && (
              <p role="status" className="mt-4 text-center text-sm text-zinc-400">
                Signed in successfully.
              </p>
            )}
          </form>

          <div className="mt-9 border-t border-white/10 pt-8 text-center text-[15px] text-zinc-300">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="font-semibold text-violet-300 hover:underline">
              Sign Up
            </a>
          </div>
        </div>

        {/* ---------- footer ---------- */}
        <p className="mt-9 text-center text-[15px] text-zinc-600">© 2024 Synthetix AI. Enterprise Intelligence Platforms.</p>
        <div className="mt-3 flex gap-5 text-[15px] text-zinc-600">
          <a href="/privacy" className="transition hover:text-zinc-400">
            Privacy Policy
          </a>
          <a href="/terms" className="transition hover:text-zinc-400">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}
