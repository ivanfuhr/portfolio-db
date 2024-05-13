import { classnameMerge } from "@/lib/classname-merge";
import Link from "next/link";

type ButtonProps = {
  link: string;
  children: React.ReactNode;
  className?: string;
};

export function Button({ link, children, className }: ButtonProps) {
  return (
    <Link
      href={link}
      className={classnameMerge(
        "w-full rounded-md bg-darkBlue-default py-3 text-center font-supermolot font-bold text-white hover:font-normal",
        className,
      )}
    >
      {children}
    </Link>
  );
}
