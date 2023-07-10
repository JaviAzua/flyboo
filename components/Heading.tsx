"use client";

type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

function Heading({ title, subtitle, center }: Props) {
  return (
    <div className={`${center ? "text-center" : "text-start"}`}>
      <h3 className="text-2xl font-bold">{title}</h3>
      <h4 className="font-light text-neutral-500 mt-2">{subtitle}</h4>
    </div>
  );
}

export default Heading;
