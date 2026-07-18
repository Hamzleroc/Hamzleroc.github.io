export default function AmbientGlow({ variant = "hero" }: { variant?: "hero" | "dark" | "subtle" }) {
  if (variant === "dark") {
    return (
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-drift absolute -top-32 -left-20 w-[32rem] h-[32rem] rounded-full bg-volt/20 blur-[110px]" />
        <div className="blob-drift-slow absolute -bottom-40 -right-24 w-[36rem] h-[36rem] rounded-full bg-solar/10 blur-[130px]" />
      </div>
    );
  }

  if (variant === "subtle") {
    return (
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-drift-slow absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-volt/6 blur-[100px]" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="blob-drift absolute -top-24 right-[-10%] w-[34rem] h-[34rem] rounded-full bg-volt/14 blur-[120px]" />
      <div className="blob-drift-slow absolute bottom-[-15%] left-[-8%] w-[30rem] h-[30rem] rounded-full bg-solar/16 blur-[110px]" />
      <div className="blob-drift-slow absolute top-[10%] left-[20%] w-64 h-64 rounded-full bg-eco/10 blur-[90px]" />
    </div>
  );
}
