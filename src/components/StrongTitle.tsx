type StrongTitleProps = {
  children: React.ReactNode;
};

export function StrongTitle({ children }: StrongTitleProps) {
  return (
    <strong className="mt-1 block font-sans text-5xl lg:text-7xl">
      {children}
    </strong>
  );
}
