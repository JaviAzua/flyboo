"use client";
import { IconType } from "react-icons";

type Props = {
  onClick: (value: string) => void;
  selected?: boolean;
  label: string;
  icon: IconType;
};

function CategoryInput({ onClick, selected, label, icon: Icon }: Props) {
  return (
    <div
      onClick={() => onClick(label)}
      className={`rounded-xl select-none flex  gap-3 p-4 cursor-pointer border-2 hover:border-black transition ${
        selected
          ? "border-black bg-mainGreen/30"
          : "border-neutral-200 bg-slate-100"
      }`}
    >
      <Icon size={30} />
      <span className="font-semibold">{label}</span>
    </div>
  );
}

export default CategoryInput;
