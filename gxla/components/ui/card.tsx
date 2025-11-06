import * as React from "react";
import { cn } from "@/lib/utils";  
import { t } from "@/lib/typography";     

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

type TitleSize = "display" | "subtitle" | "bodyHero" | "body" | "bodySm" | "sponsorName";
type DescSize  = "bodyHero" | "body" | "bodySm";

const sizeClass = (size: TitleSize | DescSize) =>
  ({
    display: t.display,
    subtitle: t.subtitle,
    bodyHero: t.bodyHero,
    body: t.body,
    bodySm: t.bodySm,
    sponsorName: t.sponsorName,
  } as const)[size];

interface CardTitleProps extends React.ComponentProps<"div"> {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div";
  size?: TitleSize;
}

function CardTitle({
  className,
  as = "h3",
  size = "subtitle",
  ...props
}: CardTitleProps) {
  const Comp = as;
  return (
    <Comp
      data-slot="card-title"
      className={cn("leading-none font-semibold", sizeClass(size), className)}
      {...(props as any)}
    />
  );
}

interface CardDescriptionProps extends React.ComponentProps<"div"> {
  as?: "p" | "div" | "span";
  size?: DescSize;
}

function CardDescription({
  className,
  as = "p",
  size = "body",
  ...props
}: CardDescriptionProps) {
  const Comp = as;
  return (
    <Comp
      data-slot="card-description"
      className={cn("text-muted-foreground", sizeClass(size), className)}
      {...(props as any)}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-content" className={cn("px-6", className)} {...props} />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
