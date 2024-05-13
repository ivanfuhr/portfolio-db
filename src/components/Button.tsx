import { classnameMerge } from "@/lib/classname-merge";
import Link from "next/link";

type ButtonProps = {
  link: string;
  children: React.ReactNode;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export function Button({
  link,
  children,
  className,
  target = "_self",
}: ButtonProps) {
  return (
    <Link
      href={link}
      target={target}
      className={classnameMerge(
        "w-full rounded-md bg-darkBlue-default py-3 text-center font-supermolot font-bold text-white hover:font-normal",
        className,
      )}
    >
      {children}
    </Link>
  );
}
