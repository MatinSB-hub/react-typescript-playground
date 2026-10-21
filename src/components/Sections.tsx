import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  title?: string;
};

function Sections({ children, title = "default value" }: SectionProps) {
  return (
    <>
      <div>{title}</div>
      <div>{children}</div>
    </>
  );
}

export default Sections;
