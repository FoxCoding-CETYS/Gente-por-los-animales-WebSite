"use client";

import { AllianceCard } from "@/components/ui/alliance-card";
import { t, cn } from "@/lib/typography";
import { colorClasses } from "@/lib/colors";

type Alliance = { name: string; description: string };

type AlliancesSectionProps = {
  title?: string;
  items: Alliance[];
};

export function AlliancesSection({
  title = "ALIANZAS ESTRATÉGICAS",
  items,
}: AlliancesSectionProps) {
  return (
    <section className={cn(colorClasses.background.secondary, "w-full")}>
      <div className="flex flex-col justify-center items-center w-full md:w-10/12 mx-auto">
        <h1
          className={cn(
            "font-geist text-black font-bold mt-10 text-center",
            t.display,
          )}
        >
          {title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 gap-5 lg:gap-15 justify-center">
          {items.map((a, i) => (
            <AllianceCard key={i} name={a.name} description={a.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
