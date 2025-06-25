import CTA from "./cta";
import Phone from "./phone";

export default function Hero() {
  return (
    <section className="flex flex-col xl:flex-row gap-12 items-center">
      <div className="max-w-3xl mx-auto h-max ">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-up">
          Why wait until the{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            6th
          </span>{" "}
          to get your money?
        </h1>

        <p className="text-lg md:text-xl mb-8 animate-fade-up">
          Get early access to your Social Security benefits. Safe, simple, and
          on WhatsApp.
        </p>
        <CTA />

        <p className="mt-6 text-sm text-muted-foreground animate-fade-up">
          Trusted by thousands of retirees and beneficiaries across the US.
        </p>
      </div>

      <Phone />
    </section>
  );
}
