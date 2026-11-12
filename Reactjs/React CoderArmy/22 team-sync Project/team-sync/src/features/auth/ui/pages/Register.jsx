import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Lock, Eye, EyeOff, Sparkles, Network } from "lucide-react";

/* ---------- password strength ---------- */
const STRENGTH_LABELS = ["", "Weak password", "Fair password", "Good password", "Strong password"];

function getStrength(pw = "") {
  if (!pw) return 0;
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return Math.max(score, 1);
}

/* ---------- decorative left-panel art (swap for an <img> if you have one) ---------- */
function NeuralArt() {
  const lines = useMemo(() => {
    // deterministic pseudo-random so SSR/refresh stays stable
    let seed = 7;
    const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    return Array.from({ length: 90 }, () => {
      const angle = rnd() * Math.PI * 2;
      const len = 120 + rnd() * 330;
      const bend = (rnd() - 0.5) * 80;
      return { angle, len, bend, w: 0.4 + rnd() * 1.4, o: 0.25 + rnd() * 0.6 };
    });
  }, []);

  return (
    <svg
      viewBox="-320 -320 640 640"
      className="absolute inset-0 h-full w-full object-cover"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="core" cx="0" cy="0" r="1">
          <stop offset="0%" stopColor="#3b4a8c" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#1b2350" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0f0e18" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="strand" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6f8fd8" />
          <stop offset="100%" stopColor="#b57ad6" />
        </linearGradient>
      </defs>
      <circle r="300" fill="url(#core)" />
      {lines.map((l, i) => {
        const x = Math.cos(l.angle) * l.len;
        const y = Math.sin(l.angle) * l.len;
        const cx = Math.cos(l.angle) * l.len * 0.5 + l.bend;
        const cy = Math.sin(l.angle) * l.len * 0.5 - l.bend;
        return (
          <g key={i}>
            <path
              d={`M0 0 Q ${cx} ${cy} ${x} ${y}`}
              stroke="url(#strand)"
              strokeWidth={l.w}
              strokeOpacity={l.o}
              fill="none"
            />
            <circle cx={x} cy={y} r={l.w + 0.8} fill="#d29ae6" fillOpacity={l.o} />
          </g>
        );
      })}
    </svg>
  );
}

/* ---------- small building blocks ---------- */
function Field({ label, icon: Icon, error, right, children, htmlFor }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-3 block text-[13px] font-semibold tracking-wide text-zinc-200">
        {label}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-6 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-zinc-500" />
        {children}
        {right}
      </div>
      {error && (
        <p role="alert" className="mt-2 text-sm text-zinc-400">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "h-[72px] w-full rounded-lg border bg-[#1e1c22] pl-20 pr-6 text-lg text-zinc-100 " +
  "placeholder:text-zinc-500 outline-none transition focus:border-[#5a5663]";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.3-1.6 3.9-5.5 3.9a6 6 0 1 1 0-12c1.9 0 3.1.8 3.8 1.5l2.6-2.5A9.8 9.8 0 0 0 12 2a10 10 0 1 0 0 20c5.8 0 9.6-4 9.6-9.8 0-.7-.1-1.2-.2-2H12z" />
    </svg>
  );
}

/* ---------- page ---------- */
export default function SignUp() {
  const [showPw, setShowPw] = useState(false);
  const [submitted, setSubmitted] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    defaultValues: { fullName: "", email: "", password: "", terms: false },
  });

  const password = watch("password");
  const strength = getStrength(password);

  const onSubmit = async (data) => {
    // replace with your API call
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(data);
    console.log("Sign up payload:", data);
  };

  return (
    <div className="min-h-screen bg-[#131118] font-sans text-zinc-100" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
      <div className="flex min-h-[calc(100vh-80px)] flex-col lg:flex-row">
        {/* ---------- LEFT: brand panel ---------- */}
        <aside className="relative hidden overflow-hidden border-r border-white/10 bg-[#0f1226] lg:block lg:w-2/5">
          <NeuralArt />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131118] via-[#131118]/60 to-transparent" />

          <div className="absolute left-[30px] top-6 text-[26px] font-semibold tracking-tight">Synthetix AI</div>

          <div className="absolute bottom-[60px] left-[60px] right-[60px] max-w-[480px]">
            <div className="mb-4 flex items-center gap-3 text-violet-300">
              <Sparkles className="h-6 w-6" />
              <span className="text-[13px] font-semibold uppercase tracking-[0.2em]">Next-gen intelligence</span>
            </div>
            <h2 className="text-[40px] font-bold leading-[1.15] tracking-tight text-zinc-100">
              Accelerate your team&apos;s intelligence.
            </h2>
            <p className="mt-6 text-xl leading-[30px] text-zinc-300">
              Connect your enterprise data to our specialized AI models and unlock unparalleled strategic insights in
              seconds.
            </p>
            <div className="mt-14 flex gap-10">
              <div>
                <div className="text-2xl font-semibold text-zinc-400">99.9%</div>
                <div className="text-sm text-zinc-500">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-zinc-400">ISO</div>
                <div className="text-sm text-zinc-500">27001 Certified</div>
              </div>
            </div>
          </div>
        </aside>

        {/* ---------- RIGHT: form ---------- */}
        <main className="flex flex-1 items-center justify-center px-6 py-16">
          <div className="w-full max-w-[600px]">
            <h1 className="text-[40px] font-bold leading-tight tracking-tight">Create your account</h1>
            <p className="mt-3 text-lg text-zinc-300">Experience the future of collaborative data intelligence.</p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-12 space-y-8">
              {/* Full name */}
              <Field label="Full Name" icon={User} htmlFor="fullName" error={errors.fullName?.message}>
                <input
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  aria-invalid={!!errors.fullName}
                  className={`${inputClass} border-[#3a383f]`}
                  {...register("fullName", {
                    required: "Full name is required",
                    minLength: { value: 2, message: "Name must be at least 2 characters" },
                  })}
                />
              </Field>

              {/* Email */}
              <Field label="Email Address" icon={Mail} htmlFor="email" error={errors.email?.message}>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@company.com"
                  aria-invalid={!!errors.email}
                  className={`${inputClass} border-[#3a383f]`}
                  {...register("email", {
                    required: "Email address is required",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" },
                  })}
                />
              </Field>

              {/* Password + strength meter */}
              <div>
                <Field
                  label="Password"
                  icon={Lock}
                  htmlFor="password"
                  error={errors.password?.message}
                  right={
                    <button
                      type="button"
                      onClick={() => setShowPw((s) => !s)}
                      aria-label={showPw ? "Hide password" : "Show password"}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 transition hover:text-zinc-300"
                    >
                      {showPw ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  }
                >
                  <input
                    id="password"
                    type={showPw ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="••••••••"
                    aria-invalid={!!errors.password}
                    className={`${inputClass} pr-14 border-[#3a383f]`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 8, message: "Password must be at least 8 characters" },
                    })}
                  />
                </Field>

                {password && (
                  <div className="mt-3">
                    <div className="grid grid-cols-4 gap-1.5" aria-hidden="true">
                      {[1, 2, 3, 4].map((i) => (
                        <span
                          key={i}
                          className={`h-1 rounded-full transition-colors ${i <= strength ? "bg-violet-300" : "bg-white/10"}`}
                        />
                      ))}
                    </div>
                    <p className="mt-2 text-sm text-violet-300">{STRENGTH_LABELS[strength]}</p>
                  </div>
                )}
              </div>

              {/* Terms */}
              <div>
                <label className="flex cursor-pointer items-start gap-5 text-[15px] text-zinc-300">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-6 w-6 shrink-0 cursor-pointer appearance-none rounded-md border border-[#3a383f] bg-[#1e1c22] outline-none transition
                               checked:border-violet-300 checked:bg-violet-300 checked:bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%232a0f5c%22 stroke-width=%223.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M5 12l5 5 9-10%22/></svg>')]
                              "
                    {...register("terms", { required: "You must accept the terms to continue" })}
                  />
                  <span className="pt-0.5">
                    I agree to the{" "}
                    <a href="/terms" className="text-violet-300 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-violet-300 hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
                {errors.terms && (
                  <p role="alert" className="mt-2 text-sm text-zinc-400">
                    {errors.terms.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-[70px] w-full rounded-lg bg-gradient-to-r from-[#6b4fa8] to-[#c9b3ff] text-lg font-semibold text-[#2a0f5c]
                           transition hover:brightness-110 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Creating account…" : "Create Account"}
              </button>

              {submitted && (
                <p role="status" className="text-center text-sm text-emerald-400">
                  Account created for {submitted.email}.
                </p>
              )}
            </form>

            {/* Divider */}
            <div className="my-10 flex items-center gap-6">
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-[13px] font-medium uppercase tracking-wider text-zinc-500">Or continue with</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            {/* Social */}
            <div className="grid grid-cols-2 gap-5">
              <button
                type="button"
                className="flex h-[72px] items-center justify-center gap-3 rounded-lg border border-[#3a383f] text-lg text-zinc-200 transition hover:bg-white/5"
              >
                <GoogleIcon /> Google
              </button>
              <button
                type="button"
                className="flex h-[72px] items-center justify-center gap-3 rounded-lg border border-[#3a383f] text-lg text-zinc-200 transition hover:bg-white/5"
              >
                <Network className="h-5 w-5" /> SSO
              </button>
            </div>

            <p className="mt-14 text-center text-lg text-zinc-300">
              Already have an account?{" "}
              <a href="/login" className="font-semibold text-violet-300 hover:underline">
                Log In
              </a>
            </p>
          </div>
        </main>
      </div>

      {/* ---------- Footer ---------- */}
      <footer className="flex h-20 flex-col items-center justify-between gap-3 border-t border-white/10 px-8 py-4 text-[15px] text-zinc-300 md:flex-row md:py-0">
        <span className="text-[26px] font-semibold tracking-tight">Synthetix AI</span>
        <nav className="flex gap-8">
          {["Privacy Policy", "Terms of Service", "Security", "System Status"].map((l) => (
            <a key={l} href="#" className="transition hover:text-white">
              {l}
            </a>
          ))}
        </nav>
        <span>© 2024 Synthetix AI. Enterprise Intelligence Platforms.</span>
      </footer>
    </div>
  );
}
