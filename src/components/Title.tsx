import { classnameMerge } from "@/lib/classname-merge";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export function Title({ children, className, type = "h2" }: TitleProps) {
  const HeadingTag = type;

  return (
    <HeadingTag
      className={classnameMerge(
        "font-supermolot text-2xl font-bold lg:text-4xl",
        className,
      )}
    >
      {children}
    </HeadingTag>
  );
}
