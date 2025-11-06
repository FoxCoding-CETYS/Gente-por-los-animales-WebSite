export const t = {
  display: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
  subtitle: "text-2xl sm:text-3xl lg:text-4xl",
  body: "text-base sm:text-lg lg:text-xl",
  bodyHero: "text-base sm:text-lg lg:text-2xl",
  bodySm: "text-sm sm:text-base lg:text-lg",
  sponsorName: "text-xl sm:text-2xl lg:text-3xl",
};

export const cn = (...args: Array<string | false | null | undefined>) =>
  args.filter(Boolean).join(" ");
