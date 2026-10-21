type HeadingProps = {
  title?: string;
};

function Heading({ title }: HeadingProps) {
  return <div className="px-5 py-2 boruder-2 rounded-xl">{title}</div>;
}

export default Heading;
