import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  title?: string;
};

function Sections({
  children,
  title = "default value",
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <>
      <div>{title}</div>
      <div>{children}</div>
    </>
  );
}

export default Sections;
